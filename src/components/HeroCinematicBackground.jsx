import { useEffect, useRef } from 'react';

// Real product film as the hero background.
//
// Desktop/tablet (md+): full autoplaying video, right-anchored. The left
// copy area stays clear, then the video reveals across the same span as the
// FAQ column caption in the stats row: fully hidden at the caption start and
// fully visible by its end. The fade is painted as a solid-color overlay
// gradient (not a CSS mask on the video) because mask-image is luminance-based
// in WebKit by default, which silently washes out "black = opaque" gradients.
//
// Mobile (<md): the source is a 4:3 clip. Forcing it to fill a tall,
// narrow portrait viewport via object-fit:cover blows the crop up into an
// unusable close-up (confirmed on-device). Rather than ship that, mobile
// shows a static poster frame instead of the live loop — same visual,
// no autoplay/data cost, no crop explosion.
const FADE_START = 36; // % of viewport width, fully hidden before this
const FADE_END = 45; // % of viewport width, fully visible from this point on

function HeroCinematicBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Setting the DOM property directly (not just the JSX/HTML attribute)
    // is what makes Safari reliably treat this as a muted, autoplay-safe
    // video — relying on the attribute alone is what caused the "black box
    // with a play button" fallback seen on iOS Safari.
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const overlayGradient = `linear-gradient(to right, #0A0A0A 0%, #0A0A0A ${FADE_START}%, transparent ${FADE_END}%, transparent 100%)`;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
      {/* Mobile: static poster only, positioned the same way the video would be */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat md:hidden"
        style={{ backgroundImage: 'url(/hero-bg-poster.jpg)', backgroundPosition: 'right center' }}
      />
      <div className="pointer-events-none absolute inset-0 md:hidden" style={{ background: overlayGradient }} />

      {/* Desktop/tablet: live video */}
      <video
        ref={videoRef}
        className="absolute inset-0 hidden h-full w-full object-contain md:block"
        style={{ objectPosition: 'right center' }}
        src="/hero-bg.mp4"
        poster="/hero-bg-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="pointer-events-none absolute inset-0 hidden md:block" style={{ background: overlayGradient }} />

      {/* Vignette so the video/poster blends into the navbar and the section below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
    </div>
  );
}

export default HeroCinematicBackground;
