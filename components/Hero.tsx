'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Github, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  /* ── particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * W(), y: Math.random() * H(),
      r: Math.random() * 2 + 0.3,
      dx: (Math.random() - 0.5) * 0.35, dy: (Math.random() - 0.5) * 0.35,
      o: Math.random() * 0.35 + 0.05,
      pulse: Math.random() * Math.PI * 2,
      purple: Math.random() > 0.5,
    }));

    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * W(), y: Math.random() * H(),
      r: Math.random() * 1.1 + 0.1,
      o: Math.random() * 0.6 + 0.1,
      ts: Math.random() * 0.02 + 0.006,
      tp: Math.random() * Math.PI * 2,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.35,
      orange: Math.random() > 0.75,
    }));

    const orbs = [
      { x: 0.15, y: 0.25, r: 140, color: '139,92,246', speed: 0.0009 },
      { x: 0.85, y: 0.7,  r: 120, color: '249,115,22', speed: 0.0013 },
      { x: 0.5,  y: 0.85, r: 80,  color: '139,92,246', speed: 0.001  },
    ];

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W(), H());

      orbs.forEach((orb, i) => {
        const cx = (orb.x + Math.sin(t * orb.speed + i) * 0.07) * W();
        const cy = (orb.y + Math.cos(t * orb.speed * 1.3 + i) * 0.05) * H();
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(orb.r, 1));
        g.addColorStop(0, `rgba(${orb.color},.07)`);
        g.addColorStop(1, `rgba(${orb.color},0)`);
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(orb.r, 1), 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].purple
              ? `rgba(139,92,246,${(1 - d / 110) * 0.1})`
              : `rgba(249,115,22,${(1 - d / 110) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      stars.forEach(s => {
        s.x += s.dx; s.y += s.dy;
        if (s.x < 0) s.x = W(); if (s.x > W()) s.x = 0;
        if (s.y < 0) s.y = H(); if (s.y > H()) s.y = 0;
        const tw = 0.5 + 0.5 * Math.sin(t * s.ts + s.tp);
        ctx.beginPath();
        ctx.arc(s.x, s.y, Math.max(0, s.r), 0, Math.PI * 2);
        ctx.fillStyle = s.orange
          ? `rgba(249,115,22,${s.o * tw})`
          : `rgba(255,255,255,${s.o * tw * 0.7})`;
        ctx.fill();
      });

      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        p.pulse += 0.03;
        if (p.x < 0) p.x = W(); if (p.x > W()) p.x = 0;
        if (p.y < 0) p.y = H(); if (p.y > H()) p.y = 0;
        const pr = Math.max(p.r + Math.sin(p.pulse) * 0.5, 0.1);
        const po = Math.max(p.o + Math.sin(p.pulse * 0.7) * 0.07, 0);
        ctx.beginPath();
        ctx.arc(p.x, p.y, pr, 0, Math.PI * 2);
        ctx.fillStyle = p.purple
          ? `rgba(139,92,246,${po})`
          : `rgba(249,115,22,${po * 0.8})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  /* ── entrance animations ── */
  useEffect(() => {
    const img = imgRef.current;
    const content = contentRef.current;
    if (img) setTimeout(() => img.classList.add('h-visible'), 100);
    if (content) setTimeout(() => content.classList.add('h-visible'), 300);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes hPulse {
          0%,100% { opacity:.25; transform:scale(1); }
          50%      { opacity:.45; transform:scale(1.08); }
        }
        @keyframes hOrb1 {
          0%,100% { transform:translate(0,0); }
          50%      { transform:translate(-18px,-22px); }
        }
        @keyframes hOrb2 {
          0%,100% { transform:translate(0,0); }
          50%      { transform:translate(16px,-16px); }
        }
        @keyframes ctaShimmer {
          0%   { background-position:200% center; }
          100% { background-position:-200% center; }
        }
        @keyframes ctaBreathe {
          0%,100% { box-shadow:0 0 0 0 rgba(249,115,22,0),0 8px 28px rgba(249,115,22,.3); }
          50%      { box-shadow:0 0 0 8px rgba(249,115,22,.08),0 16px 48px rgba(249,115,22,.45); }
        }
        @keyframes ringPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(249,115,22,0),0 0 30px rgba(249,115,22,.3); }
          50%      { box-shadow:0 0 0 10px rgba(249,115,22,.07),0 0 50px rgba(249,115,22,.5); }
        }

        .h-img-wrap {
          opacity:0; transform:scale(.88);
          transition:opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1);
        }
        .h-img-wrap.h-visible { opacity:1; transform:scale(1); }

        .h-content {
          opacity:0; transform:translateX(28px);
          transition:opacity .8s cubic-bezier(.16,1,.3,1) .2s, transform .8s cubic-bezier(.16,1,.3,1) .2s;
        }
        .h-content.h-visible { opacity:1; transform:translateX(0); }

        .h-contact-link {
          display:flex; align-items:center; gap:.75rem;
          font-size:.92rem; color:#9990AA; text-decoration:none;
          transition:color .25s ease;
          padding:.2rem 0;
        }
        .h-contact-link:hover { color:#F97316; }
        .h-contact-link:hover .h-link-icon { color:#F97316; }

        .h-link-icon { color:#F97316; flex-shrink:0; }

        .h-btn-primary {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.85rem 1.75rem; border-radius:12px;
          background:linear-gradient(135deg,#F97316,#EA580C);
          background-size:200% auto;
          color:#fff; font-weight:700; font-size:.9rem;
          font-family:'Sora',sans-serif;
          text-decoration:none; border:none; cursor:pointer;
          transition:all .3s cubic-bezier(.34,1.56,.64,1);
          animation:ctaBreathe 3s ease-in-out infinite;
        }
        .h-btn-primary:hover {
          animation:none;
          transform:translateY(-4px) scale(1.03);
          box-shadow:0 20px 50px rgba(249,115,22,.45);
        }

        .h-btn-secondary {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.85rem 1.75rem; border-radius:12px;
          background:transparent;
          color:#F97316; font-weight:700; font-size:.9rem;
          font-family:'Sora',sans-serif;
          text-decoration:none;
          border:2px solid rgba(249,115,22,.45);
          transition:all .3s ease;
        }
        .h-btn-secondary:hover {
          background:rgba(249,115,22,.08);
          border-color:#F97316;
          transform:translateY(-3px);
          box-shadow:0 12px 32px rgba(249,115,22,.2);
        }

        .h-avatar-ring {
          animation:ringPulse 3s ease-in-out infinite;
        }
      `,
        }}
      />

      <section
        id="home"
        style={{
          background: '#07070F',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
        />

        {/* Grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(139,92,246,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,.035) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Orbs */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 260, height: 260, background: 'radial-gradient(circle,rgba(139,92,246,.12),transparent 70%)', filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none', animation: 'hOrb1 13s ease-in-out infinite', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 220, height: 220, background: 'radial-gradient(circle,rgba(249,115,22,.1),transparent 70%)', filter: 'blur(35px)', borderRadius: '50%', pointerEvents: 'none', animation: 'hOrb2 11s ease-in-out infinite', zIndex: 0 }} />

        <div style={{ maxWidth: 900, width: '100%', position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3.5rem', justifyContent: 'center' }}>

          {/* ── Avatar ── */}
          <div ref={imgRef} className="h-img-wrap" style={{ flexShrink: 0 }}>
            <div style={{ position: 'relative', width: 240, height: 240 }}>
              {/* glow behind */}
              <div style={{ position: 'absolute', inset: -20, background: 'radial-gradient(circle,rgba(249,115,22,.25),transparent 70%)', borderRadius: '50%', animation: 'hPulse 3s ease-in-out infinite', pointerEvents: 'none' }} />
              {/* ring */}
              <div className="h-avatar-ring" style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', border: '3px solid #F97316', padding: 4, background: '#0D0D1C', boxSizing: 'border-box' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#111128', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {!imageError ? (
                    <Image
                      src="/omar-profile.jpg"
                      alt="Omar Elhelaly"
                      fill
                      style={{ objectFit: 'cover', borderRadius: '50%' }}
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <span style={{ fontFamily: "'Sora',sans-serif", fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg,#9333EA,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OE</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div ref={contentRef} className="h-content" style={{ flex: '1 1 320px', minWidth: 0 }}>

            {/* badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.3rem .9rem', borderRadius: 50, border: '1px solid rgba(139,92,246,.3)', background: 'rgba(139,92,246,.07)', fontSize: '.72rem', color: '#9333EA', marginBottom: '1rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#9333EA', display: 'inline-block', animation: 'hPulse 2s ease-in-out infinite' }} />
              Backend Developer · Node.js &amp; NestJS
            </div>

            <h1 style={{ fontSize: 'clamp(2rem,5.5vw,3.25rem)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '.5rem' }}>
              <span style={{ background: 'linear-gradient(135deg,#9333EA,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% auto', animation: 'ctaShimmer 5s linear infinite' }}>
                Omar Elhelaly
              </span>
            </h1>

            {/* location — مسافة أقل تحت الاسم */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#3A3550', fontSize: '.82rem', marginBottom: '1.25rem' }}>
              <MapPin size={14} style={{ color: '#F97316', flexShrink: 0 }} />
               Egypt
            </div>

            {/* Contact links — gap أقل بين العناصر */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.75rem' }}>
              <a href="tel:+201095496184" className="h-contact-link">
                <span className="h-link-icon" style={{ fontSize: '1rem' }}>📞</span>
                +20-109-549-6184
              </a>
              <a href="mailto:omarelhelaly520@gmail.com" className="h-contact-link">
                <Mail size={16} className="h-link-icon" />
                omarelhelaly520@gmail.com
              </a>
              <a href="https://linkedin.com/in/omar-elhelaly-601791332" target="_blank" rel="noopener noreferrer" className="h-contact-link">
                <span className="h-link-icon" style={{ fontSize: '1rem' }}>💼</span>
                linkedin.com/in/omar-elhelaly
              </a>
              <a href="https://github.com/Omar113650" target="_blank" rel="noopener noreferrer" className="h-contact-link">
                <Github size={16} className="h-link-icon" />
                github.com/Omar113650
              </a>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem' }}>
              <a href="https://wa.me/201095496184" target="_blank" rel="noopener noreferrer" className="h-btn-primary">
                Contact on WhatsApp
                <ArrowRight size={16} />
              </a>
              <Link href="#projects" className="h-btn-secondary">
                View My Work
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}