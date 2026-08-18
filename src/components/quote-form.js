"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitQuoteRequest } from "@/app/actions";

const initialState = { status: "idle", message: "" };

function FormLabel({ htmlFor, children, optional = false }) {
  return (
    <label className="mb-2 block text-sm font-bold text-ink" htmlFor={htmlFor}>
      {children} {optional ? <span className="font-normal text-slate">(optional)</span> : null}
    </label>
  );
}

export function QuoteForm({ idPrefix = "quote", defaultService = "" }) {
  const fieldId = (name) => `${idPrefix}-${name}`;
  const noteId = `${idPrefix}-form-note`;
  const statusId = `${idPrefix}-form-status`;
  const formRef = useRef(null);
  const [state, formAction, pending] = useActionState(submitQuoteRequest, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_20px_60px_rgba(12,49,61,0.08)] sm:p-9">
      <div className="flex flex-col gap-2 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow text-teal-dark">Free quote request</p>
          <h2 className="mt-2 font-display text-3xl text-ink">Project details</h2>
        </div>
        <p className="text-xs text-slate">Fields marked * are required</p>
      </div>

      <form ref={formRef} action={formAction} className="mt-7" aria-describedby={`${noteId} ${statusId}`}>
        <input name="source" type="hidden" value={idPrefix} />
        <div className="hidden" aria-hidden="true">
          <label htmlFor={fieldId("website")}>Website</label>
          <input id={fieldId("website")} name="website" type="text" autoComplete="off" tabIndex={-1} />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <FormLabel htmlFor={fieldId("name")}>Name *</FormLabel>
            <input className="form-field" id={fieldId("name")} name="name" type="text" autoComplete="name" placeholder="Your full name" required />
          </div>
          <div>
            <FormLabel htmlFor={fieldId("email")}>Email *</FormLabel>
            <input className="form-field" id={fieldId("email")} name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
          </div>
          <div>
            <FormLabel htmlFor={fieldId("phone")} optional>Phone</FormLabel>
            <input className="form-field" id={fieldId("phone")} name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
          </div>
          <div>
            <FormLabel htmlFor={fieldId("service")}>Service *</FormLabel>
            <select className="form-field" id={fieldId("service")} name="service" defaultValue={defaultService} required>
              <option value="" disabled>Select a service</option>
              <option value="digitizing">Embroidery digitizing</option>
              <option value="vector">Vector art</option>
              <option value="both">Both services</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <FormLabel htmlFor={fieldId("details")}>Project details *</FormLabel>
            <textarea className="form-field min-h-36 resize-y" id={fieldId("details")} name="details" placeholder="Tell us about the artwork, size, fabric or application, deadline, and file format you need." required />
          </div>
          <div className="sm:col-span-2">
            <FormLabel htmlFor={fieldId("artwork")} optional>Artwork file</FormLabel>
            <input className="form-field file:mr-4 file:rounded-full file:border-0 file:bg-canvas file:px-4 file:py-2 file:text-sm file:font-bold file:text-ink" id={fieldId("artwork")} name="artwork" type="file" accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.svg,.cdr,.psd,.tif,.tiff,.zip" />
            <p className="mt-2 text-xs leading-5 text-slate">Accepted: JPG, PNG, PDF, AI, EPS, SVG, CDR, PSD, TIFF, or ZIP. Maximum 3 MB.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <p className="text-xs leading-5 text-slate" id={noteId}>Your details and optional artwork will be emailed to the Trustitched studio for review.</p>
            <p
              className={`mt-2 text-sm font-bold ${state.status === "error" ? "text-red-700" : "text-teal-dark"}`}
              id={statusId}
              role={state.status === "error" ? "alert" : "status"}
            >
              {state.message}
            </p>
          </div>
          <button className="button button-ink shrink-0 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={pending}>
            {pending ? "Sending request…" : "Request free quote"} <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
