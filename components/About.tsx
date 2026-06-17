'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>('.card');
    const summary = summaryRef.current;

    const obs1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0');
            setTimeout(() => el.classList.add('visible'), delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const obs2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    cards?.forEach((c) => obs1.observe(c));
    if (summary) obs2.observe(summary);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes orbF {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(-20px); }
        }
        @keyframes orbF2 {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-16px); }
        }

        .about-card {
          background: rgba(139, 92, 246, 0.06);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 16px;
          padding: 1.5rem 1.25rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s ease,
                      box-shadow 0.4s ease;
          cursor: default;
        }
        .about-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .about-card:hover {
          border-color: rgba(249, 115, 22, 0.4);
          background: rgba(249, 115, 22, 0.06);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35),
                      0 0 0 1px rgba(249, 115, 22, 0.1);
        }
        .about-card:hover .card-icon {
          background: rgba(249, 115, 22, 0.15);
          border-color: rgba(249, 115, 22, 0.4);
          color: #F97316;
          transform: scale(1.1) rotate(-4deg);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(249, 115, 22, 0.08);
          border: 1px solid rgba(249, 115, 22, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #F97316;
          margin-bottom: 1rem;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .about-summary {
          background: linear-gradient(145deg, #0D0D1C, #111128);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 20px;
          padding: 2.25rem 2rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.35s,
                      transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.35s,
                      border-color 0.35s ease,
                      box-shadow 0.35s ease;
        }
        .about-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .about-summary:hover {
          border-color: rgba(139, 92, 246, 0.45);
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.3);
        }

        .accent-line {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #9333EA, #F97316);
          border-radius: 2px;
          margin-bottom: 1.5rem;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease 0.5s;
        }
        .about-summary.visible .accent-line {
          transform: scaleX(1);
        }
      `}</style>

      <section
        id="about"
        style={{
          background: '#07070F',
          padding: '5rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {/* Orb 1 */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: '50%',
            width: 500,
            height: 340,
            background:
              'radial-gradient(ellipse, rgba(139,92,246,.12), transparent 65%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: 'orbF 9s ease-in-out infinite',
          }}
        />
        {/* Orb 2 */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: -60,
            width: 280,
            height: 280,
            background:
              'radial-gradient(circle, rgba(249,115,22,.08), transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: 'orbF2 11s ease-in-out infinite',
          }}
        />
        {/* Grid BG */}
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

        <div
          style={{
            maxWidth: 860,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p
              style={{
                fontSize: '.68rem',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#9333EA',
                marginBottom: '.75rem',
              }}
            >
              About
            </p>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 800,
                color: '#EAE6DE',
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
              }}
            >
              Who{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #9333EA, #F97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                I Am
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={cardsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {[
              {
                delay: 0,
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                ),
                title: 'Backend Developer',
                desc: 'Third-year Computer Science student at Mansoura University, specializing in building real-world backend systems.',
              },
              {
                delay: 120,
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                ),
                title: 'System Architecture',
                desc: 'Focus on scalability, security, and clean architecture with hands-on experience in SaaS platforms and payment integrations.',
              },
              {
                delay: 240,
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/>
                  </svg>
                ),
                title: 'Production Ready',
                desc: 'Building systems that grow and perform under pressure, not just CRUD applications.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="about-card card"
                data-delay={String(card.delay)}
              >
                <div className="card-icon">{card.icon}</div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#EAE6DE',
                    marginBottom: '.5rem',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '.8rem',
                    color: '#6B6480',
                    lineHeight: 1.75,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div ref={summaryRef} className="about-summary">
            <div className="accent-line" />
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#F97316',
                marginBottom: '1.25rem',
              }}
            >
              Summary
            </h3>
            {[
              'Motivated Computer Science student with strong backend development skills, experienced in building secure, scalable, and maintainable systems. Skilled in quick teamwork. Passionate about automation, workflow optimization, and delivering high-quality software from concept to deployment.',
              null,
              'My work focuses on scalability, security, and clean architecture, with hands-on experience in SaaS platforms, booking systems, payment integrations, real-time applications, and admin dashboards.',
            ].map((text, i) =>
              i === 1 ? (
                <p
                  key={i}
                  style={{
                    fontSize: '.87rem',
                    color: '#9990AA',
                    lineHeight: 1.9,
                    marginBottom: '1rem',
                  }}
                >
                  I'm{' '}
                  <span style={{ color: '#F97316', fontWeight: 700 }}>
                    Omar Elhelaly
                  </span>
                  , a backend developer and third-year Computer Science student
                  at Mansoura University. I specialize in building real-world
                  backend systems — not just CRUD applications.
                </p>
              ) : (
                <p
                  key={i}
                  style={{
                    fontSize: '.87rem',
                    color: '#9990AA',
                    lineHeight: 1.9,
                    marginBottom: i < 2 ? '1rem' : 0,
                  }}
                >
                  {text}
                </p>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}