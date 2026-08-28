"use server";

import { Buffer } from "node:buffer";

const CLOUDFLARE_EMAIL_ENDPOINT = "https://api.cloudflare.com/client/v4/accounts";
const MAX_ARTWORK_BYTES = 3 * 1024 * 1024;

const services = {
  digitizing: "Embroidery digitizing",
  vector: "Vector art",
  both: "Embroidery digitizing and vector art",
  unsure: "Service recommendation",
};

const sources = {
  home: "Homepage",
  contact: "Contact page",
  embroidery: "Embroidery Digitizing page",
  vector: "Vector Art page",
};

const artworkTypes = {
  ".ai": "application/postscript",
  ".cdr": "application/vnd.corel-draw",
  ".eps": "application/postscript",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".psd": "image/vnd.adobe.photoshop",
  ".svg": "image/svg+xml",
  ".tif": "image/tiff",
  ".tiff": "image/tiff",
  ".zip": "application/zip",
};

function textField(formData, name) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fileExtension(filename) {
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex >= 0 ? filename.slice(dotIndex).toLowerCase() : "";
}

function safeFilename(filename) {
  const cleaned = filename.replace(/[^a-zA-Z0-9._ ()-]/g, "_").slice(-120);
  return cleaned || "artwork";
}

function configuration() {
  const values = {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    apiToken: process.env.CLOUDFLARE_EMAIL_API_TOKEN,
    from: process.env.CONTACT_EMAIL_FROM,
    to: process.env.CONTACT_EMAIL_TO,
  };
  const missing = Object.entries(values)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  return { values, missing };
}

function validationError(message) {
  return { status: "error", message };
}

export async function submitQuoteRequest(_previousState, formData) {
  if (textField(formData, "website")) {
    return {
      status: "success",
      message: "Thank you. Your quote request has been received.",
    };
  }

  const name = textField(formData, "name");
  const email = textField(formData, "email").toLowerCase();
  const phone = textField(formData, "phone");
  const service = textField(formData, "service");
  const details = textField(formData, "details");
  const source = textField(formData, "source");
  const artwork = formData.get("artwork");
  const hasArtwork = artwork && typeof artwork !== "string" && artwork.size > 0;

  if (name.length < 2 || name.length > 120) {
    return validationError("Enter a valid name between 2 and 120 characters.");
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return validationError("Enter a valid email address.");
  }
  if (!phone) {
    return validationError("Enter a phone number.");
  }
  if (phone.length > 50) {
    return validationError("The phone number is too long.");
  }
  if (!services[service]) {
    return validationError("Select the service you need.");
  }
  if (details.length < 10 || details.length > 5000) {
    return validationError("Project details must be between 10 and 5,000 characters.");
  }

  let attachment;
  if (hasArtwork) {
    const extension = fileExtension(artwork.name);
    if (!artworkTypes[extension]) {
      return validationError("Choose a JPG, PNG, PDF, AI, EPS, SVG, CDR, PSD, TIFF, or ZIP file.");
    }
    if (artwork.size > MAX_ARTWORK_BYTES) {
      return validationError("Artwork files must be 3 MB or smaller.");
    }

    attachment = {
      content: Buffer.from(await artwork.arrayBuffer()).toString("base64"),
      disposition: "attachment",
      filename: safeFilename(artwork.name),
      type: artworkTypes[extension],
    };
  }

  const { values: emailConfig, missing } = configuration();
  if (missing.length > 0) {
    console.error("Quote form email configuration is incomplete.", { missing });
    return validationError("The quote service is temporarily unavailable. Please call or use WhatsApp instead.");
  }

  const serviceLabel = services[service];
  const sourceLabel = sources[source] ?? "Website";
  const subjectName = name.replace(/[\r\n]+/g, " ").slice(0, 80);
  const phoneText = phone;
  const text = [
    "New Trustitched quote request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phoneText}`,
    `Service: ${serviceLabel}`,
    `Submitted from: ${sourceLabel}`,
    `Artwork: ${attachment?.filename ?? "Not attached"}`,
    "",
    "Project details:",
    details,
  ].join("\n");
  const html = `
    <h1>New Trustitched quote request</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneText)}</p>
    <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
    <p><strong>Submitted from:</strong> ${escapeHtml(sourceLabel)}</p>
    <p><strong>Artwork:</strong> ${escapeHtml(attachment?.filename ?? "Not attached")}</p>
    <h2>Project details</h2>
    <p>${escapeHtml(details).replaceAll("\n", "<br>")}</p>
  `;

  const payload = {
    from: { address: emailConfig.from, name: "Trustitched Website" },
    to: emailConfig.to,
    reply_to: { address: email, name },
    subject: `New ${serviceLabel} quote request from ${subjectName}`,
    text,
    html,
    ...(attachment ? { attachments: [attachment] } : {}),
  };

  try {
    const response = await fetch(
      `${CLOUDFLARE_EMAIL_ENDPOINT}/${emailConfig.accountId}/email/sending/send`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${emailConfig.apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );
    const responseBody = await response.json().catch(() => null);

    if (!response.ok || responseBody?.success !== true) {
      console.error("Cloudflare Email Service rejected a quote request.", {
        status: response.status,
        errors: responseBody?.errors?.map(({ code, message }) => ({ code, message })),
      });
      const message = response.status === 429
        ? "The quote service is busy. Please wait a moment and try again."
        : "We could not send your request. Please try again or contact the studio by phone or WhatsApp.";
      return validationError(message);
    }

    return {
      status: "success",
      message: "Thank you. Your quote request was sent to the Trustitched studio.",
    };
  } catch (error) {
    console.error("Quote request delivery failed.", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return validationError("We could not send your request. Please try again or contact the studio by phone or WhatsApp.");
  }
}
