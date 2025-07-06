import React, { useEffect, useRef, useState } from "react";


export default function VantaFogBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // 等待 window.VANTA 可用後初始化
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(window.VANTA.FOG({
        el: vantaRef.current,
        // case1
        // mouseControls: true,
        // touchControls: true,
        // gyroControls: false,
        // minHeight: 200.00,
        // minWidth: 200.00,
        // highlightColor: 0xf7f6f1,
        // midtoneColor: 0xc85b4d,
        // lowlightColor: 0xfa20fa,
        // baseColor: 0x1b00ff,
        // blurFactor: 0.56,
        // speed: 0.70,
        // zoom: 0.60

        // case2
        // mouseControls: true,
        // touchControls: true,
        // gyroControls: false,
        // minHeight: 200.00,
        // minWidth: 200.00,
        // blurFactor: 0.90,
        // speed: 2.00,
        // zoom: 0.30

        // case3
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        blurFactor: 0.65,
        speed: 0.70,
        zoom: 0.90
      }));
    }
    // 清除效果，避免記憶體洩漏
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    // full page
    // <div
    //   ref={vantaRef}
    //   style={{
    //     position: "fixed",
    //     width: "100vw",
    //     height: "100vh",
    //     top: 0,
    //     left: 0,
    //     zIndex: -1,
    //   }}
    // />

    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        width: "100vw",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
        padding: 0,
        margin: 0,
        pointerEvents: "none",
        WebkitMaskImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 1) 55%,
          rgba(0, 0, 0, 0.9) 65%,
          rgba(0, 0, 0, 0.75) 72%,
          rgba(0, 0, 0, 0.6) 78%,
          rgba(0, 0, 0, 0.45) 83%,
          rgba(0, 0, 0, 0.3) 88%,
          rgba(0, 0, 0, 0.15) 93%,
          rgba(0, 0, 0, 0.05) 97%,
          rgba(0, 0, 0, 0) 100%
        )`,
        maskImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 1) 55%,
          rgba(0, 0, 0, 0.9) 65%,
          rgba(0, 0, 0, 0.75) 72%,
          rgba(0, 0, 0, 0.6) 78%,
          rgba(0, 0, 0, 0.45) 83%,
          rgba(0, 0, 0, 0.3) 88%,
          rgba(0, 0, 0, 0.15) 93%,
          rgba(0, 0, 0, 0.05) 97%,
          rgba(0, 0, 0, 0) 100%
        )`,
      }}
    />
  );
}