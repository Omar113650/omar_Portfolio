'use client';

import { useEffect, useRef, useState } from 'react';
import { FolderOpen, Layers, Cloud, Github, Plug } from 'lucide-react';

const STATS = [
  { Icon: FolderOpen, value: 10,  suffix: '+', label: 'Completed Projects',    color: '#F97316' },
  { Icon: Layers,     value: 3,   suffix: '+', label: 'Large-Scale Platforms', color: '#9333EA' },
  { Icon: Cloud,      value: 3,   suffix: '+', label: 'SaaS Systems',          color: '#60A5FA' },
  { Icon: Github,     value: 48,  suffix: '+', label: 'GitHub Contributions',  color: '#4ADE80' },
  { Icon: Plug,       value: 10,  suffix: '+', label: 'External Integrations', color: '#FACC15' },
];

function useCounter(target: number, started: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const steps = 60;
    const inc   = target / steps;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatCard({ Icon, value, suffix, label, color, started, delay }: {
  Icon: React.ElementType; value: number; suffix: string;
  label: string; color: string; started: boolean; delay: number;
}) {
  const count = useCounter(value, started);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add('st-visible'), delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={cardRef} className="st-card" style={{ '--c': color } as React.CSSProperties}>
      <div className="st-icon-wrap">
        <Icon size={26} style={{ color }} />
      </div>
      <div className="st-value" style={{ color }}>{count}{suffix}</div>
      <p className="st-label">{label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headRef     = useRef<HTMLDivElement>(null);
  const [started,   setStarted]   = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('st-visible'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes stOrbF {
          0%,100% { transform:translateX(-50%) translateY(0); }
          50%      { transform:translateX(-50%) translateY(-18px); }
        }
        @keyframes stPop {
          from { opacity:0; transform:scale(.8) translateY(16px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes stFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes glowRing {
          0%,100% { box-shadow:0 0 0 0 var(--c,#F97316)00, 0 0 14px var(--c,#F97316)33; }
          50%      { box-shadow:0 0 0 5px var(--c,#F97316)10, 0 0 28px var(--c,#F97316)44; }
        }

        .st-head {
          opacity:0; transform:translateY(24px);
          transition:opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
          text-align:center; margin-bottom:4rem;
        }
        .st-head.st-visible { opacity:1; transform:translateY(0); }

        .st-card {
          opacity:0; transform:scale(.85) translateY(16px);
          text-align:center; padding:1.75rem 1rem;
          background:rgba(139,92,246,.06);
          border:1px solid rgba(139,92,246,.2);
          border-radius:18px;
          transition:all .4s cubic-bezier(.34,1.2,.64,1), border-color .3s ease, box-shadow .3s ease;
        }
        .st-card.st-visible { animation:stPop .55s cubic-bezier(.34,1.56,.64,1) both; opacity:1; transform:none; }
        .st-card:hover {
          border-color:rgba(var(--c, 249,115,22),.35);
          transform:translateY(-8px) scale(1.03);
          box-shadow:0 20px 50px rgba(0,0,0,.3), 0 0 0 1px rgba(var(--c,249,115,22),.1);
        }
        .st-card:hover .st-icon-wrap { transform:scale(1.12) rotate(-6deg); }

        .st-icon-wrap {
          width:56px; height:56px; border-radius:14px; margin:0 auto 1.25rem;
          background:rgba(139,92,246,.08); border:1px solid rgba(139,92,246,.2);
          display:flex; align-items:center; justify-content:center;
          transition:all .4s cubic-bezier(.34,1.56,.64,1);
          animation:glowRing 3s ease-in-out infinite;
        }

        .st-value {
          font-family:'Sora',sans-serif;
          font-size:clamp(2rem,4vw,2.75rem);
          font-weight:800; line-height:1; margin-bottom:.6rem;
        }

        .st-label {
          font-size:.78rem; color:#6B6480; line-height:1.5;
          font-family:'Sora',sans-serif;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="stats"
        style={{
          background: '#07070F',
          padding: '5rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Sora',sans-serif",
        }}
      >
        {/* orb */}
        <div style={{ position:'absolute', top:-60, left:'50%', width:420, height:260, background:'radial-gradient(ellipse,rgba(139,92,246,.09),transparent 65%)', borderRadius:'50%', pointerEvents:'none', animation:'stOrbF 9s ease-in-out infinite' }} />
        {/* grid */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(249,115,22,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,.03) 1px,transparent 1px)', backgroundSize:'52px 52px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', pointerEvents:'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div ref={headRef} className="st-head">
            <p style={{ fontSize:'.68rem', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#9333EA', marginBottom:'.75rem' }}>
              Stats
            </p>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(1.75rem,5vw,2.75rem)', fontWeight:800, color:'#EAE6DE', letterSpacing:'-1.5px', lineHeight:1.1 }}>
              By The{' '}
              <span style={{ background:'linear-gradient(135deg,#9333EA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                Numbers
              </span>
            </h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'1rem' }}>
            {STATS.map((s, i) => (
              <StatCard
                key={s.label}
                Icon={s.Icon}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                color={s.color}
                started={started}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



