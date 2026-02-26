import { useEffect, useState } from "react";

const PIXEL_SIZE = 6;
const LIFETIME = 400;

const pixelPalette = [
    "#fff",
    "#F8FF2A",
    "#00ffff",
    "#ff6794",
]

export default function PixelTrail() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    createdAt: number;
  }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const snappedX = Math.floor(e.clientX / PIXEL_SIZE) * PIXEL_SIZE;
      const snappedY = Math.floor(e.clientY / PIXEL_SIZE) * PIXEL_SIZE;

      const newParticle = {
        id: Date.now() + Math.random(),
        x: snappedX,
        y: snappedY,
        createdAt: Date.now(),
      };

      setParticles((prev) => [...prev, newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      const now = Date.now();
      setParticles((prev) =>
        prev.filter((p) => now - p.createdAt < LIFETIME)
      );
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {particles.map((p) => {
        const age = Date.now() - p.createdAt;
        // const opacity = 1 - age / LIFETIME;

        return (
          <div
            key={p.id}
            style={{
                position: "fixed",
                left: p.x,
                //   top: p.y,
                top: p.y - age * 0.025,
                width: PIXEL_SIZE,
                height: PIXEL_SIZE,
                //   backgroundColor: `rgba(15, 23, 43, ${opacity})`,
                backgroundColor: pixelPalette[Math.floor(Math.random() * pixelPalette.length)],
                pointerEvents: "none",
                imageRendering: "pixelated",
                zIndex: 9999,
            }}
          />
        );
      })}
    </>
  );
}