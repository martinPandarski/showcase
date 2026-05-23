import { useEffect, useRef } from "react";

const Background: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mx", `${x}%`);
        spotlightRef.current.style.setProperty("--my", `${y}%`);
      }
      const dx = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const dy = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      const shapes = shapesRef.current?.querySelectorAll<SVGElement>("svg");
      shapes?.forEach((s, i) => {
        const depth = (i + 1) * 14;
        s.style.translate = `${dx * depth}px ${dy * depth}px`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={shapesRef}
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      >
        {/* Blobs */}
        <div
          className="absolute rounded-full mix-blend-multiply will-change-transform"
          style={{
            width: "70vw",
            height: "70vw",
            top: "-20vw",
            left: "-15vw",
            opacity: 0.45,
            filter: "blur(110px)",
            background:
              "radial-gradient(circle, var(--color-flame) 0%, transparent 60%)",
            animation: "drift1 24s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute rounded-full mix-blend-multiply will-change-transform"
          style={{
            width: "55vw",
            height: "55vw",
            top: "30vh",
            right: "-20vw",
            opacity: 0.35,
            filter: "blur(110px)",
            background:
              "radial-gradient(circle, var(--color-flame-soft) 0%, transparent 65%)",
            animation: "drift2 30s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute rounded-full mix-blend-multiply will-change-transform"
          style={{
            width: "60vw",
            height: "60vw",
            bottom: "-25vw",
            left: "25vw",
            opacity: 0.18,
            filter: "blur(110px)",
            background:
              "radial-gradient(circle, var(--color-ink) 0%, transparent 70%)",
            animation: "drift3 34s ease-in-out infinite alternate",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,10,11,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,11,.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 70%)",
          }}
        />

        {/* Floating shapes */}
        <svg
          className="absolute shape-float-1"
          style={{ top: "22%", left: "6%" }}
          width="56" height="56" viewBox="0 0 56 56"
        >
          <polygon points="28,4 52,48 4,48" fill="none" stroke="#0A0A0B" strokeWidth="1" />
        </svg>
        <svg
          className="absolute shape-float-2"
          style={{ top: "62%", right: "8%" }}
          width="72" height="72" viewBox="0 0 72 72"
        >
          <circle cx="36" cy="36" r="32" fill="none" stroke="#FF3D00" strokeWidth="1.2" />
        </svg>
        <svg
          className="absolute shape-float-1"
          style={{ top: "38%", right: "22%" }}
          width="36" height="36" viewBox="0 0 36 36"
        >
          <rect x="4" y="4" width="28" height="28" fill="none" stroke="#0A0A0B" strokeWidth="1" transform="rotate(45 18 18)" />
        </svg>
        <svg
          className="absolute shape-float-2"
          style={{ bottom: "20%", left: "20%" }}
          width="48" height="48" viewBox="0 0 48 48"
        >
          <path d="M24 4 L44 24 L24 44 L4 24 Z" fill="none" stroke="#FF3D00" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(255,61,0,.10), transparent 55%)",
          transition: "background .15s ease",
        }}
      />
    </>
  );
};

export default Background;
