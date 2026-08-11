'use client';

import { useEffect, useRef } from 'react';
import {
  Code2, Database, Cloud, CreditCard, Shield,
  Server, GitBranch, Zap, Cpu, Brain
} from 'lucide-react';

const CATEGORIES = [
  { Icon: Zap,       title: 'Programming Languages', color: '#FACC15', skills: ['C++','JavaScript','TypeScript','Python'] },
  { Icon: Code2,     title: 'Backend Development',   color: '#F97316', skills: ['Node.js','Express.js','Nest.js','REST APIs','GraphQL','WebSocket','Socket.IO','Multer','Nodemailer','JWT','Bull (Job Queue)'] },
  { Icon: Server,    title: 'Backend Architecture',  color: '#818CF8', skills: ['Repository Pattern','API Versioning','Scalable Backend Design','Event-Driven Architecture (Basics)'] },
  { Icon: Shield,    title: 'Security',              color: '#F87171', skills: ['Rate Limiting','CORS & CSRF Protection','Secure Authentication Flows','Password Hashing (bcrypt)','Token Refresh Strategies','Environment Security (.env best practices)'] },
  { Icon: Database,  title: 'Databases',             color: '#9333EA', skills: ['MongoDB','MySQL','SQL Server','PostgreSQL','Sequelize ORM','Prisma ORM','Database Design','Query Optimization'] },
  { Icon: Cloud,     title: 'Cloud & DevOps',        color: '#60A5FA', skills: ['Docker','CI/CD (GitHub Actions)','Vercel','Redis Caching','Background Processing','Error Logging','File Upload Optimization','Email Delivery Systems'] },
  { Icon: CreditCard,title: 'Payments & Integrations',color:'#4ADE80', skills: ['Stripe','Paymob','Fawry','Secure Payment Flows','Webhooks','Third-Party APIs','Cloudinary'] },
  { Icon: Cpu,       title: 'Core Concepts',         color: '#22D3EE', skills: ['Algorithms','Data Structures','OOP','SOLID','Clean Architecture','Design Patterns','Refactoring','Authentication & Authorization (RBAC)','Unit Testing (Jest)','Problem Solving'] },
  { Icon: GitBranch, title: 'Tools & Workflow',      color: '#F472B6', skills: ['Git','GitHub','VS Code','Postman','Chrome DevTools','Jest','Swagger','Insomnia','Git Branching Strategies','Agile & Scrum'] },
  { Icon: Shield,    title: 'Cybersecurity',         color: '#FB923C', skills: ['Cybersecurity','Penetration Testing','Email Verification','Network Security'] },
  { Icon: Brain,     title: 'Generative AI & LLMs',  color: '#2DD4BF', skills: ['Enhancing UX with intelligent content','Retrieval-Augmented Generation (RAG)','High-performance data retrieval','Prompt Engineering'] },
];

export default function Skills() {
  const headRef  = useRef<HTMLDivElement>(null);
  const gridRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els: Element[] = [];
    if (headRef.current) els.push(headRef.current);
    if (gridRef.current) gridRef.current.querySelectorAll('.sk-card').forEach(e => els.push(e));

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const delay = parseInt(el.dataset.delay || '0');
          setTimeout(() => el.classList.add('sk-visible'), delay);
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
        @keyframes skOrbF  { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-18px)} }
        @keyframes skOrbF2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes skFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .sk-head {
          opacity:0; transform:translateY(24px);
          transition:opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
          text-align:center; margin-bottom:3.5rem;
        }
        .sk-head.sk-visible { opacity:1; transform:translateY(0); }

        .sk-card {
          opacity:0; transform:translateY(28px);
          background:rgba(139,92,246,.06);
          border:1px solid rgba(139,92,246,.2);
          border-radius:18px; padding:1.5rem;
          transition:opacity .6s cubic-bezier(.16,1,.3,1),
                      transform .6s cubic-bezier(.16,1,.3,1),
                      border-color .3s ease,
                      box-shadow .3s ease,
                      background .3s ease;
          cursor:default;
          position:relative; overflow:hidden;
        }
        .sk-card.sk-visible { opacity:1; transform:translateY(0); }
        .sk-card::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,var(--sk-c,#9333EA),transparent);
          transform:scaleX(0); transition:transform .45s ease;
        }
        .sk-card:hover {
          border-color:rgba(var(--sk-rgb,139,92,246),.35);
          background:rgba(var(--sk-rgb,139,92,246),.09);
          transform:translateY(-7px) scale(1.015);
          box-shadow:0 20px 50px rgba(0,0,0,.3), 0 0 0 1px rgba(var(--sk-rgb,139,92,246),.1);
        }
        .sk-card:hover::after { transform:scaleX(1); }
        .sk-card:hover .sk-icon-wrap {
          transform:scale(1.1) rotate(-5deg);
          box-shadow:0 0 20px var(--sk-c,#9333EA)55;
        }

        .sk-icon-wrap {
          width:44px; height:44px; border-radius:12px;
          background:rgba(var(--sk-rgb,139,92,246),.1);
          border:1px solid rgba(var(--sk-rgb,139,92,246),.25);
          display:flex; align-items:center; justify-content:center;
          margin-bottom:.875rem;
          transition:all .4s cubic-bezier(.34,1.56,.64,1);
        }

        .sk-tag {
          padding:.28rem .7rem; border-radius:20px; font-size:.72rem; font-weight:600;
          background:rgba(7,7,15,.6);
          border:1px solid rgba(var(--sk-rgb,139,92,246),.2);
          color:#9990AA;
          transition:all .25s ease;
          font-family:'Sora',sans-serif;
        }
        .sk-card:hover .sk-tag {
          border-color:rgba(var(--sk-rgb,139,92,246),.35);
          color:#C4BDB5;
        }
      `}</style>

      <section
        id="skills"
        style={{ background:'#07070F', padding:'5rem 1.5rem', position:'relative', overflow:'hidden', fontFamily:"'Sora',sans-serif" }}
      >
        <div style={{ position:'absolute', top:-70, left:'50%', width:480, height:300, background:'radial-gradient(ellipse,rgba(139,92,246,.1),transparent 65%)', borderRadius:'50%', pointerEvents:'none', animation:'skOrbF 9s ease-in-out infinite' }} />
        <div style={{ position:'absolute', bottom:-40, right:-50, width:260, height:260, background:'radial-gradient(circle,rgba(249,115,22,.07),transparent 70%)', borderRadius:'50%', pointerEvents:'none', animation:'skOrbF2 11s ease-in-out infinite' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(139,92,246,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,.035) 1px,transparent 1px)', backgroundSize:'52px 52px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:980, margin:'0 auto', position:'relative', zIndex:1 }}>
          <div ref={headRef} className="sk-head">
            <p style={{ fontSize:'.68rem', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#9333EA', marginBottom:'.75rem' }}>Skills</p>
            <h2 style={{ fontSize:'clamp(1.75rem,5vw,2.75rem)', fontWeight:800, color:'#EAE6DE', letterSpacing:'-1.5px', lineHeight:1.1, marginBottom:'.75rem' }}>
              My{' '}
              <span style={{ background:'linear-gradient(135deg,#9333EA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Skills</span>
            </h2>
            <p style={{ fontSize:'.9rem', color:'#6B6480' }}>Technologies I work with</p>
          </div>

          <div ref={gridRef} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))', gap:'1rem' }}>
            {CATEGORIES.map((cat, i) => {
              const rgb = hexToRgb(cat.color);
              return (
                <div
                  key={cat.title}
                  className="sk-card"
                  data-delay={String(i * 60)}
                  style={{ '--sk-c': cat.color, '--sk-rgb': rgb } as React.CSSProperties}
                >
                  <div className="sk-icon-wrap">
                    <cat.Icon size={22} style={{ color: cat.color }} />
                  </div>
                  <h3 style={{ fontSize:'.95rem', fontWeight:700, color:'#EAE6DE', marginBottom:'.875rem' }}>{cat.title}</h3>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem' }}>
                    {cat.skills.map(s => (
                      <span key={s} className="sk-tag">{s}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}






