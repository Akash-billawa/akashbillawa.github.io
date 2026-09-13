"use client";

export default function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Large green orb top-left */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          top: "-10%",
          left: "-5%",
          animation: "orb-float-1 20s ease-in-out infinite",
        }}
      />
      {/* Smaller orb bottom-right */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          bottom: "-5%",
          right: "-5%",
          animation: "orb-float-2 25s ease-in-out infinite",
        }}
      />
    </div>
  );
}
