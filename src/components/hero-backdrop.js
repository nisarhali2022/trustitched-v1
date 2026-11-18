import { HeroScene } from "@/components/hero-scene";
import { getCurrentTheme } from "@/themes";

// Background of every dark hero banner: the stitch pattern, plus the
// active theme's animated scene (sky, flyer, ornaments, ground).
// Put it as the first child of a `relative overflow-hidden` hero section.
export async function HeroBackdrop() {
  const { scene } = await getCurrentTheme();

  return (
    <div aria-hidden="true" className="hero-backdrop absolute inset-0 overflow-hidden" data-ground={scene?.ground ? "" : undefined}>
      {scene ? <div className="scene-sky absolute inset-0" /> : null}
      <div className="page-hero-pattern absolute inset-0" />
      {scene ? <HeroScene scene={scene} /> : null}
    </div>
  );
}
