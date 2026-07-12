'use client';

import { useEffect, useRef, useState } from 'react';

const FIRST_NAME = 'Omar ';
const LAST_NAME  = 'Elhelaly';
const LETTER_STAGGER = 280; // ms between each letter — spread across the whole loading time

export default function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress]       = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [done, setDone]               = useState(false);
  const [fadeOut, setFadeOut]         = useState(false);
  const [lettersOn, setLettersOn]     = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const orb2Ref      = useRef<HTMLDivElement>(null);
  const orb3Ref      = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);

  // Floating orb animation
  useEffect(() => {
    let t = 0;
    function animate() {
      t += 0.003;
      if (orb2Ref.current)
        orb2Ref.current.style.transform = `translateY(${Math.sin(t) * -16}px)`;
      if (orb3Ref.current)
        orb3Ref.current.style.transform = `translateY(${Math.sin(t + 2) * -14}px)`;
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Spawn particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const colors = [
      'rgba(147,51,234,',
      'rgba(249,115,22,',
      'rgba(139,92,246,',
    ];
    for (let i = 0; i < 28; i++) {
      const el   = document.createElement('div');
      const size = Math.random() * 4 + 1.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.4 + 0.15;
      el.style.cssText = `
        position:absolute;
        border-radius:50%;
        pointer-events:none;
        width:${size}px;
        height:${size}px;
        left:${Math.random() * 100}%;
        background:${color}${opacity});
        animation:particleFloat ${Math.random() * 12 + 8}s linear ${
          Math.random() * -15
        }s infinite;
      `;
      container.appendChild(el);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  // Kick off the letter assembly right away
  useEffect(() => {
    const t = setTimeout(() => setLettersOn(true), 250);
    return () => clearTimeout(t);
  }, []);

  // Progress bar steps
  useEffect(() => {
    const steps = [
      { p: 20,  t: 'Loading assets...' },
      { p: 45,  t: 'Building systems...' },
      { p: 70,  t: 'Compiling projects...' },
      { p: 90,  t: 'Almost ready...' },
      { p: 100, t: 'Ready!' },
    ];
    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;

    function next() {
      if (idx >= steps.length) {
        setTimeout(() => setDone(true), 400);
        return;
      }
      const step = steps[idx++];
      setProgress(step.p);
      setLoadingText(step.t);
      timer = setTimeout(next, idx === 1 ? 600 : Math.random() * 500 + 350);
    }

    timer = setTimeout(next, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Once loading is done, walk into the site on its own — no click needed
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish?.(), 900);
    }, 550);
    return () => clearTimeout(t);
  }, [done, onFinish]);

  const fullName = FIRST_NAME + LAST_NAME;
  const variants = [
    { x: -55, y: -42, r: -26 }, { x: 50, y: -50, r: 22 },
    { x: -45, y: 46, r: 16 },   { x: 55, y: 38, r: -20 },
    { x: -38, y: -52, r: 24 },  { x: 48, y: 44, r: -18 },
    { x: -60, y: 20, r: -14 },  { x: 58, y: -22, r: 18 },
  ];

  return (
    <>
      <style>{`
        @keyframes orbF1 {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(-18px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes particleFloat {
          0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-20px) rotate(720deg); opacity: 0; }
        }

        .splash-name-wrap {
          text-align: center;
        }
        .splash-loading-wrap {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s forwards;
        }
        .splash-letter {
          display: inline-block;
          opacity: 0;
          transition: transform .5s cubic-bezier(.34,1.56,.64,1), opacity .35s ease;
          white-space: pre;
        }
        .splash-letters-on .splash-letter {
          opacity: 1 !important;
          transform: translate(0,0) rotate(0deg) scale(1) !important;
        }
      `}</style>

      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#07070F',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          fontFamily: "'Sora', sans-serif",
          overflow: 'hidden',
          opacity: fadeOut ? 0 : 1,
          transform: fadeOut ? 'scale(1.05)' : 'scale(1)',
          transition: 'opacity .8s ease, transform .8s ease',
          pointerEvents: fadeOut ? 'none' : 'auto',
        }}
      >
        {/* Grid bg */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(139,92,246,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.04) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Orb 1 */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            left: '50%',
            width: 420,
            height: 280,
            background:
              'radial-gradient(ellipse, rgba(139,92,246,.18), transparent 65%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'orbF1 9s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        {/* Orb 2 */}
        <div
          ref={orb2Ref}
          style={{
            position: 'absolute',
            bottom: 40,
            right: -40,
            width: 240,
            height: 240,
            background:
              'radial-gradient(circle, rgba(249,115,22,.12), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
        {/* Orb 3 */}
        <div
          ref={orb3Ref}
          style={{
            position: 'absolute',
            bottom: 80,
            left: -20,
            width: 180,
            height: 180,
            background:
              'radial-gradient(circle, rgba(147,51,234,.1), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        {/* Particles */}
        <div
          ref={particlesRef}
          style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Name — assembles letter by letter */}
          <div className={`splash-name-wrap ${lettersOn ? 'splash-letters-on' : ''}`}>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 7vw, 3.8rem)',
                fontWeight: 800,
                color: '#EAE6DE',
                letterSpacing: '-2px',
                lineHeight: 1,
                marginBottom: 6,
                fontFamily: "'Sora', sans-serif",
              }}
            >
              {fullName.split('').map((ch, i) => {
                const isLast = i >= FIRST_NAME.length;
                const v = variants[i % variants.length];
                const style: React.CSSProperties = {
                  transform: `translate(${v.x}px, ${v.y}px) rotate(${v.r}deg) scale(.4)`,
                  transitionDelay: `${i * LETTER_STAGGER}ms`,
                };
                if (isLast) {
                  return (
                    <span
                      key={i}
                      className="splash-letter"
                      style={{
                        ...style,
                        background: 'linear-gradient(135deg, #9333EA, #F97316)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {ch}
                    </span>
                  );
                }
                return (
                  <span key={i} className="splash-letter" style={style}>
                    {ch}
                  </span>
                );
              })}
            </h1>
          </div>

          {/* Progress */}
          <div className="splash-loading-wrap" style={{ opacity: done ? 0 : undefined, transition: 'opacity .35s ease' }}>
            <div
              style={{
                width: 220,
                height: 3,
                background: 'rgba(255,255,255,.06)',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #9333EA, #F97316)',
                  borderRadius: 2,
                  transition: 'width .35s ease',
                }}
              />
            </div>
            <p
              style={{
                fontSize: '.68rem',
                fontWeight: 600,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'rgba(107,100,128,.8)',
              }}
            >
              {loadingText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}













