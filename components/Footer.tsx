'use client';

import { Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <style>{`
        @keyframes fOrbF {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(-14px); }
        }

        .f-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(139,92,246,.07);
          border: 1px solid rgba(139,92,246,.25);
          color: #6B6480;
          text-decoration: none;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
        }
        .f-icon-btn:hover {
          background: rgba(249,115,22,.1);
          border-color: rgba(249,115,22,.45);
          color: #F97316;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 8px 24px rgba(249,115,22,.2);
        }
      `}</style>

      <footer
        style={{
          background: '#07070F',
          borderTop: '1px solid rgba(139,92,246,.2)',
          padding: '3.5rem 1.5rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {/* subtle top orb */}
        <div style={{ position: 'absolute', top: -60, left: '50%', width: 400, height: 200, background: 'radial-gradient(ellipse, rgba(139,92,246,.06), transparent 70%)', borderRadius: '50%', pointerEvents: 'none', animation: 'fOrbF 10s ease-in-out infinite' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Main row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>

            {/* Identity */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#EAE6DE', marginBottom: '.35rem', letterSpacing: '-.5px' }}>
                Omar{' '}
                <span style={{ background: 'linear-gradient(135deg, #9333EA, #F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Elhelaly
                </span>
              </h3>
              <p style={{ fontSize: '.82rem', color: '#6B6480', marginBottom: '.2rem' }}>
                Backend Developer · Node.js &amp; NestJS
              </p>
              <p style={{ fontSize: '.82rem', color: '#3A3550' }}>
                Mansoura, Egypt
              </p>
            </div>

            {/* Icons */}
            <div style={{ display: 'flex', gap: '.625rem' }}>
              <a href="mailto:omarelhelaly520@gmail.com" className="f-icon-btn" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/Omar113650" target="_blank" rel="noopener noreferrer" className="f-icon-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,.2), transparent)', marginBottom: '1.5rem' }} />

          {/* Copyright */}
          <p style={{ textAlign: 'center', fontSize: '.75rem', color: '#2E2B40', letterSpacing: '.5px' }}>
            © 2026 Omar Elhelaly. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}




