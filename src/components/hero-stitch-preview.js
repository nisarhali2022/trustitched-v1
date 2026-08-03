"use client";

import { useState } from "react";

export function HeroStitchPreview() {
  const [position, setPosition] = useState(50);

  return (
    <div className="hero-preview-card">
      <div className="hero-preview-heading">
        <p className="flex items-center gap-2 font-extrabold text-[#f2c329]">
          <span aria-hidden="true">☷</span>
          Interactive Stitch Preview
        </p>
        <p className="text-[#8fb1d5]">Drag slider to inspect stitch paths</p>
      </div>

      <div
        className="hero-compare-stage"
        style={{ "--compare-position": `${position}%` }}
      >
        <div className="hero-compare-raw" aria-hidden="true">
          <span className="hero-preview-label hero-preview-label-raw">RAW PNG / LOGO</span>
          <div className="raw-logo-orbit">
            <span className="raw-logo-core">PNG</span>
          </div>
          <div className="raw-logo-caption">
            <strong>RAW LOGO</strong>
            <span>72 DPI BLUR</span>
          </div>
          <p className="hero-preview-note hero-preview-note-left">Original Artwork (Non-Stitchable)</p>
        </div>

        <div className="hero-compare-stitched" aria-hidden="true">
          <span className="hero-preview-label hero-preview-label-stitched">✓ DIGITIZED STITCH FILE</span>
          <div className="stitched-logo-mark">
            <span className="stitched-logo-inner">TS</span>
            <strong>STITCHED</strong>
            <small>28,450 stitches</small>
          </div>
          <p className="hero-preview-note hero-preview-note-right">Dense Satin + Tatami Fill</p>
        </div>

        <div className="hero-compare-divider" aria-hidden="true">
          <span>↔</span>
        </div>
        <input
          className="hero-compare-range"
          type="range"
          min="5"
          max="95"
          step="1"
          value={position}
          aria-label="Adjust the before and after stitch preview"
          aria-valuetext={`${position}% digitized stitch file visible`}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>

      <p className="hero-preview-footnote">
        <span aria-hidden="true">★</span> 100% manual stitch pathing ensures zero thread breaks on commercial multi-head machines.
      </p>
    </div>
  );
}
