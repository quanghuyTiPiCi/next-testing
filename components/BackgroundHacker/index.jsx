import React, { useEffect } from 'react';
const BackgroundHacker = ({ height }) => {
  useEffect(() => {
    const s = window.screen;
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    canvas.width = s.width;
    canvas.height = height || 500;
    let gradient = ctx.createLinearGradient(
      0,
      canvas.height,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, '#58DBC2');
    gradient.addColorStop(0.2, '#006495');
    gradient.addColorStop(0.4, '#20b486');
    gradient.addColorStop(0.6, '#001E2F');
    gradient.addColorStop(0.8, '#58DBC2');
    gradient.addColorStop(1, '#58DBC2');
    const p = Array(Math.floor(canvas.width / 10) + 1).fill(0);
    const fontsize = 12;
    const random = (items) => items[Math.floor(Math.random() * items.length)];
    const text =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
        ''
      );
    setInterval(() => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.font = fontsize + 'px Arial';
      p.map((v, i) => {
        ctx.fillText(random(text), i * 10, v);
        p[i] =
          v >= canvas.height || v > 20 + 10000 * Math.random()
            ? Math.random(200) * 20000
            : v + 10;
      });
    }, 1000 / 30);
  }, [height]);

  return <canvas id='matrix'></canvas>;
};

export default BackgroundHacker;
