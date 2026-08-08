const socialProfiles = [
  {
    name: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/",
    color: "border-[#1877F2] bg-[#1877F2] text-white",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/",
    color: "border-transparent bg-[linear-gradient(135deg,#833AB4_0%,#FD1D1D_50%,#FCAF45_100%)] text-white",
  },
  {
    name: "Pinterest",
    icon: "pinterest",
    href: "https://www.pinterest.com/",
    color: "border-[#E60023] bg-[#E60023] text-white",
  },
];

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
    <div className={`flex items-center gap-2 ${className}`} role="group" aria-label="Social media profiles">
      {socialProfiles.map((profile) => {
        const label = `Open ${profile.name} homepage (temporary link)`;
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
