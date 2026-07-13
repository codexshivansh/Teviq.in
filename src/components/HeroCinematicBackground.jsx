import { useEffect, useRef, useState } from 'react';

// Real product film as the hero background — desktop/tablet only.
//
// The video reveals across the same horizontal span as the FAQ column
// caption in the stats row: fully hidden until FADE_START, fully visible
// by FADE_END (both as % of viewport width). The fade is painted as a
// solid-color overlay gradient (not a CSS mask on the video) because
// mask-image is luminance-based in WebKit by default, which silently
// washes out "black = opaque" gradients.
//
// Mobile (<md): no video element is even mounted — not just hidden via
// CSS, genuinely not rendered — so there's no trace of it on screen and
// no wasted download. The source is also a 4:3 clip; forcing it into a
// tall portrait viewport over-crops badly, which is the other reason to
// keep mobile on the plain dark backdrop instead.
const FADE_START = 36;
const FADE_END = 45;
const DESKTOP_QUERY = '(min-width: 768px)';

function HeroCinematicBackground() {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const update = () => setShowVideo(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!showVideo) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    // Calling play() the instant the component mounts can silently no-op
    // in Safari if the element hasn't reached a safe readyState yet —
    // retry once the browser actually signals it's ready to play.
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
    };
  }, [showVideo]);

  const overlayGradient = `linear-gradient(to right, #0A0A0A 0%, #0A0A0A ${FADE_START}%, transparent ${FADE_END}%, transparent 100%)`;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
      {showVideo && (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            style={{ objectPosition: 'right center' }}
            src="/hero-bg.mp4"
            poster="/hero-bg-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="pointer-events-none absolute inset-0" style={{ background: overlayGradient }} />
        </div>
      )}

      {/* Vignette so the video blends into the navbar and the section below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
    </div>
  );
}

export default HeroCinematicBackground;
