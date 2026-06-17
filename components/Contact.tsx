'use client';

import { useEffect, useRef } from 'react';
import { Mail, Github, Send } from 'lucide-react';

export default function Contact() {
  const boxRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0');
            setTimeout(() => el.classList.add('c-visible'), delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (headRef.current) obs.observe(headRef.current);
    if (boxRef.current) obs.observe(boxRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes cOrbF {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(-22px); }
        }
        @keyframes cOrbF2 {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-16px) rotate(5deg); }
        }
        @keyframes ctaBreathe {
          0%,100% { box-shadow: 0 0 0 0 rgba(249,115,22,0), 0 8px 28px rgba(249,115,22,.3); }
          50%      { box-shadow: 0 0 0 8px rgba(249,115,22,.08), 0 16px 48px rgba(249,115,22,.45); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .c-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1);
        }
        .c-fade[data-delay="200"] {
          transition-delay: .2s;
        }
        .c-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .c-box {
          background: linear-gradient(145deg, #0D0D1C, #111128);
          border: 1px solid rgba(139,92,246,.25);
          border-radius: 20px;
          padding: 3rem 2.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color .35s ease, box-shadow .35s ease;
        }
        .c-box:hover {
          border-color: rgba(139,92,246,.45);
          box-shadow: 0 20px 60px rgba(0,0,0,.35);
        }

        .c-box-orb {
          position: absolute;
          top: -60px; left: 50%;
          width: 320px; height: 180px;
          background: radial-gradient(ellipse, rgba(249,115,22,.1), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: cOrbF 7s ease-in-out infinite;
        }
        .c-box-orb2 {
          position: absolute;
          bottom: -40px; right: -40px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(139,92,246,.08), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: cOrbF2 9s ease-in-out infinite;
        }

        .c-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .6rem;
          padding: .9rem 2rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #F97316, #EA580C);
          color: #fff;
          font-weight: 700;
          font-size: .95rem;
          font-family: 'Sora', sans-serif;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          animation: ctaBreathe 3s ease-in-out infinite;
        }
        .c-btn-primary:hover {
          animation: none;
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 20px 50px rgba(249,115,22,.45);
          opacity: .92;
        }

        .c-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .6rem;
          padding: .9rem 2rem;
          border-radius: 12px;
          background: transparent;
          color: #F97316;
          font-weight: 700;
          font-size: .95rem;
          font-family: 'Sora', sans-serif;
          text-decoration: none;
          border: 2px solid rgba(249,115,22,.5);
          cursor: pointer;
          transition: all .3s ease;
        }
        .c-btn-secondary:hover {
          background: rgba(249,115,22,.08);
          border-color: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(249,115,22,.2);
        }

        .c-link {
          display: inline-flex;
          align-items: center;
          gap: .45rem;
          font-size: .85rem;
          color: #6B6480;
          text-decoration: none;
          font-family: 'Sora', sans-serif;
          transition: color .25s ease;
          padding: .4rem .75rem;
          border-radius: 8px;
          border: 1px solid transparent;
        }
        .c-link:hover {
          color: #F97316;
          background: rgba(249,115,22,.06);
          border-color: rgba(249,115,22,.2);
        }

        .c-accent-line {
          width: 50px; height: 3px;
          background: linear-gradient(90deg, #9333EA, #F97316);
          border-radius: 2px;
          margin: 0 auto 1.5rem;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform .5s ease .4s;
        }
        .c-visible .c-accent-line {
          transform: scaleX(1);
        }
      `}</style>

      <section
        id="contact"
        style={{
          background: '#07070F',
          padding: '5rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {/* Section orbs */}
        <div style={{ position: 'absolute', top: -80, left: '50%', width: 500, height: 340, background: 'radial-gradient(ellipse, rgba(249,115,22,.07), transparent 65%)', borderRadius: '50%', pointerEvents: 'none', animation: 'cOrbF 9s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: 0, right: -60, width: 260, height: 260, background: 'radial-gradient(circle, rgba(139,92,246,.07), transparent 70%)', borderRadius: '50%', pointerEvents: 'none', animation: 'cOrbF2 11s ease-in-out infinite' }} />

        {/* Grid BG */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(249,115,22,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,.03) 1px, transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Heading */}
          <div
            ref={headRef}
            className="c-fade"
            data-delay="0"
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <div className="c-accent-line" />
            <p style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#9333EA', marginBottom: '.75rem' }}>
              Contact
            </p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800, color: '#EAE6DE', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Let&apos;s Build Something{' '}
              <span style={{ background: 'linear-gradient(135deg, #9333EA, #F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Powerful Together
              </span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B6480', lineHeight: 1.85, maxWidth: 520, margin: '0 auto' }}>
              Have an idea or need a backend system that actually works in production?
              Let&apos;s talk and turn your concept into a scalable solution.
            </p>
          </div>

          {/* Box */}
          <div
            ref={boxRef}
            className="c-fade c-box"
            data-delay="200"
          >
            <div className="c-box-orb" />
            <div className="c-box-orb2" />

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <a
                href="https://wa.me/201095496184"
                target="_blank"
                rel="noopener noreferrer"
                className="c-btn-primary"
              >
                <Send size={18} />
                Contact on WhatsApp
              </a>
              <a
                href="mailto:omarelhelaly520@gmail.com"
                className="c-btn-secondary"
              >
                <Mail size={18} />
                Send Email
              </a>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,.05)', margin: '0 0 1.5rem', position: 'relative', zIndex: 1 }} />

            {/* Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <a href="mailto:omarelhelaly520@gmail.com" className="c-link">
                <Mail size={16} />
                omarelhelaly520@gmail.com
              </a>
              <a
                href="https://github.com/Omar113650"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link"
              >
                <Github size={16} />
                github.com/Omar113650
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


