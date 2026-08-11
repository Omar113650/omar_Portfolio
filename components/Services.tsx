'use client';

import { useEffect, useRef } from 'react';
import { Server, Layout, CreditCard, Zap, Cloud } from 'lucide-react';

const SERVICES = [
  { Icon: Server,     title: 'Backend API Development',        desc: 'High-performance APIs designed for scalability and security.',        color: '#F97316' },
  { Icon: Layout,     title: 'System Design & Architecture',   desc: 'From idea to production-ready backend systems.',                       color: '#9333EA' },
  { Icon: CreditCard, title: 'Payment Gateway Integration',    desc: 'Secure integration with Stripe, Paymob, and Fawry.',                   color: '#4ADE80' },
  { Icon: Zap,        title: 'Real-Time Applications',         desc: 'Chat systems, notifications, and live updates.',                       color: '#FACC15' },
  { Icon: Cloud,      title: 'SaaS Backend Solutions',         desc: 'Scalable backend foundations for SaaS products.',                      color: '#60A5FA' },
];

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els: Element[] = [];
    if (headRef.current) els.push(headRef.current);
    if (gridRef.current) gridRef.current.querySelectorAll('.sv-card').forEach(e => els.push(e));

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const delay = parseInt(el.dataset.delay || '0');
          setTimeout(() => el.classList.add('sv-visible'), delay);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes svOrbF  { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-20px)} }
        @keyframes svOrbF2 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-14px) rotate(4deg)} }
        @keyframes svIconFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }

        .sv-head {
          opacity:0; transform:translateY(24px);
          transition:opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
          text-align:center; margin-bottom:3.5rem;
        }
        .sv-head.sv-visible { opacity:1; transform:translateY(0); }

        .sv-card {
          opacity:0; transform:translateY(32px);
          background:linear-gradient(145deg,#0D0D1C,#111128);
          border:1px solid rgba(139,92,246,.2);
          border-radius:20px; padding:2rem 1.75rem;
          transition:opacity .65s cubic-bezier(.16,1,.3,1),
                      transform .65s cubic-bezier(.16,1,.3,1),
                      border-color .3s ease,
                      box-shadow .3s ease;
          cursor:default; position:relative; overflow:hidden;
        }
        .sv-card.sv-visible { opacity:1; transform:translateY(0); }

        .sv-card::before {
          content:''; position:absolute; inset:0;
          background:radial-gradient(circle at 20% 20%, rgba(var(--sv-rgb,249,115,22),.06), transparent 60%);
          opacity:0; transition:opacity .4s ease;
          pointer-events:none;
        }
        .sv-card::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,var(--sv-c,#F97316),transparent);
          transform:scaleX(0); transition:transform .45s ease;
        }
        .sv-card:hover {
          border-color:rgba(var(--sv-rgb,249,115,22),.35);
          transform:translateY(-9px) scale(1.02);
          box-shadow:0 24px 60px rgba(0,0,0,.35), 0 0 0 1px rgba(var(--sv-rgb,249,115,22),.08);
        }
        .sv-card:hover::before { opacity:1; }
        .sv-card:hover::after  { transform:scaleX(1); }
        .sv-card:hover .sv-icon-box {
          background:rgba(var(--sv-rgb,249,115,22),.15);
          border-color:rgba(var(--sv-rgb,249,115,22),.4);
          box-shadow:0 0 24px rgba(var(--sv-rgb,249,115,22),.25);
          animation:svIconFloat 2s ease-in-out infinite;
        }

        .sv-icon-box {
          width:52px; height:52px; border-radius:14px;
          background:rgba(var(--sv-rgb,249,115,22),.08);
          border:1px solid rgba(var(--sv-rgb,249,115,22),.2);
          display:flex; align-items:center; justify-content:center;
          margin-bottom:1.25rem;
          transition:all .4s cubic-bezier(.34,1.56,.64,1);
        }
      `}</style>

      <section
        id="services"
        style={{ background:'#07070F', padding:'5rem 1.5rem', position:'relative', overflow:'hidden', fontFamily:"'Sora',sans-serif" }}
      >
        <div style={{ position:'absolute', top:-70, left:'50%', width:480, height:300, background:'radial-gradient(ellipse,rgba(249,115,22,.08),transparent 65%)', borderRadius:'50%', pointerEvents:'none', animation:'svOrbF 9s ease-in-out infinite' }} />
        <div style={{ position:'absolute', bottom:-40, right:-50, width:260, height:260, background:'radial-gradient(circle,rgba(139,92,246,.08),transparent 70%)', borderRadius:'50%', pointerEvents:'none', animation:'svOrbF2 11s ease-in-out infinite' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(249,115,22,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,.025) 1px,transparent 1px)', backgroundSize:'52px 52px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:900, margin:'0 auto', position:'relative', zIndex:1 }}>
          <div ref={headRef} className="sv-head">
            <p style={{ fontSize:'.68rem', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#F97316', marginBottom:'.75rem' }}>Services</p>
            <h2 style={{ fontSize:'clamp(1.75rem,5vw,2.75rem)', fontWeight:800, color:'#EAE6DE', letterSpacing:'-1.5px', lineHeight:1.1, marginBottom:'.75rem' }}>
              What I{' '}
              <span style={{ background:'linear-gradient(135deg,#9333EA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Offer</span>
            </h2>
            <p style={{ fontSize:'.9rem', color:'#6B6480' }}>Services I provide</p>
          </div>

          <div ref={gridRef} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'1rem' }}>
            {SERVICES.map((s, i) => {
              const rgb = hexToRgb(s.color);
              return (
                <div
                  key={s.title}
                  className="sv-card"
                  data-delay={String(i * 80)}
                  style={{ '--sv-c': s.color, '--sv-rgb': rgb } as React.CSSProperties}
                >
                  <div className="sv-icon-box">
                    <s.Icon size={24} style={{ color: s.color }} />
                  </div>
                  <h3 style={{ fontSize:'1rem', fontWeight:700, color:'#EAE6DE', marginBottom:'.625rem' }}>{s.title}</h3>
                  <p style={{ fontSize:'.83rem', color:'#6B6480', lineHeight:1.75 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}



