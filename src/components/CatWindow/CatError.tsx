import { useEffect, useState } from "react";

export default function CatError() {
  const [frame, setFrame] = useState(0);
  const images = ["./cat1.png", "./cat2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => (prev === 0 ? 1 : 0));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <img
        src={images[frame]}
        alt="cat 404"
        style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            bottom: 0,
            right: 0
        }}
        />

    </>
  );
}
