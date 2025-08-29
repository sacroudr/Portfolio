import React, { useEffect, useRef } from "react";
import "../style/loadingPage.css";

const LoadingPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const letters = "アカサタナハマヤラワガザダバパABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    const fontSize = 20;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns)
    .fill(0)
    .map(() => Math.floor(Math.random() * height / fontSize)); // position verticale initiale aléatoire


   const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#8A2BE2"; // vert style hacker
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        
        // Position horizontale fixe
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        drops[i]++;
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
        }
    }
    };


    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="loading-page">
      <canvas ref={canvasRef} className="matrix-canvas" />
      {/* <div className="loading-text">
        Welcome to my Portfolio
      </div> */}
    </div>
  );
};

export default LoadingPage;
