import { useEffect, useRef } from 'react';

function HeroCinematicBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Autoplay can be silently blocked until user interaction on some
    // browsers/policies — the black backdrop still looks intentional if so.
    video.play().catch(() => {});
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-y-0 right-0 aspect-[4/3] h-full max-w-[82%] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'right center',
          }}
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #0A0A0A 0%, #0A0A0A 15%, rgba(10,10,10,.72) 21%, rgba(10,10,10,.26) 28%, rgba(10,10,10,0) 36%)',
          }}
        />
      </div>
    </div>
  );
}

export default HeroCinematicBackground;
