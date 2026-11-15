import { siteConfig } from "@/lib/site";

const { whatsappHref } = siteConfig;

// A profile without an href is hidden until its real URL is added.
const socialProfiles = [
  {
    name: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/profile.php?id=61593277766069",
    color: "border-[#1877F2] bg-[#1877F2] text-white",
    label: "Visit Trustitched on Facebook",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/trustitched/reels/?hl=en",
    color: "border-transparent bg-[linear-gradient(135deg,#833AB4_0%,#FD1D1D_50%,#FCAF45_100%)] text-white",
    label: "Visit Trustitched on Instagram",
  },
  {
    name: "Pinterest",
    icon: "pinterest",
    href: null, // TODO: add the Trustitched Pinterest profile URL
    color: "border-[#E60023] bg-[#E60023] text-white",
    label: "Visit Trustitched on Pinterest",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    href: whatsappHref,
    color: "border-[#25D366] bg-[#25D366] text-white",
    label: "Chat with Trustitched on WhatsApp",
  },
];

export function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.94L2.05 22l5.18-1.52A9.92 9.92 0 1 0 12.04 2Zm0 17.86a7.83 7.83 0 0 1-4-1.1l-.29-.17-3.07.9.91-2.99-.19-.31a7.82 7.82 0 1 1 6.64 3.67Zm4.29-5.87c-.24-.12-1.39-.69-1.6-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.71-.63-1.18-1.4-1.32-1.64-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" fill="currentColor" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === "facebook") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
        <path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.9V10H6.3v3h3.1v8h4.2Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
        <rect height="17" rx="4.5" stroke="currentColor" strokeWidth="2" width="17" x="3.5" y="3.5" />
        <circle cx="12" cy="12" r="3.75" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.4" cy="6.7" fill="currentColor" r="1" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return <WhatsAppIcon />;
  }

  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M9.6 18.5 12 8.8m-1.5 5.8c.8.8 1.8 1.2 2.9 1.2 2.8 0 4.9-2.5 4.9-5.7 0-2.9-2.4-5-5.5-5-3.8 0-6.2 2.7-6.2 5.6 0 1.4.5 2.7 1.6 3.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

const variants = {
  header: {
    item: "h-8 w-8",
    focus: "focus-visible:outline-teal-dark",
  },
  footer: {
    item: "h-9 w-9",
    focus: "focus-visible:outline-teal-light",
  },
};

export function SocialLinks({ className = "", variant = "header" }) {
  const styles = variants[variant] ?? variants.header;

  return (
    <div className={`flex items-center gap-2 ${className}`} role="group" aria-label="Social media and messaging links">
      {socialProfiles.filter((profile) => profile.href).map((profile) => {
        const { label } = profile;
        return (
          <a
            aria-label={label}
            className={`inline-flex shrink-0 items-center justify-center rounded-full border shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.item} ${styles.focus} ${profile.color}`}
            href={profile.href}
            key={profile.name}
            rel="noopener noreferrer"
            target="_blank"
            title={label}
          >
            <SocialIcon name={profile.icon} />
          </a>
        );
      })}
    </div>
  );
}

export function FloatingWhatsAppLink() {
  const label = "Chat with Trustitched on WhatsApp";

  return (
    <a
      aria-label={label}
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/90 bg-[#25D366] text-white shadow-[0_10px_30px_rgba(12,49,61,0.35)] transition duration-200 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-dark sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      href={whatsappHref}
      rel="noopener noreferrer"
      target="_blank"
      title={label}
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
