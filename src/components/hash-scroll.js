"use client";

import { useEffect } from "react";

// When a page is opened with a #section in the URL (for example after the
// "See prices" link to /pricing#vector-art), scroll to that section again
// once everything has loaded, because images and styles can shift the layout
// after the browser's first jump.
export function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) document.getElementById(id)?.scrollIntoView({ block: "start" });
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(scrollToHash, 50);
      return () => clearTimeout(timer);
    }

    window.addEventListener("load", scrollToHash, { once: true });
    return () => window.removeEventListener("load", scrollToHash);
  }, []);

  return null;
}
