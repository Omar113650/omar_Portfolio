'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const NAV_ITEMS = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Skills',   href: '#skills'   },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [isOpen,        setIsOpen]        = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navRef       = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map(i => i.href.replace('#', ''));
      const offset   = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;
    const activeEl = navRef.current.querySelector<HTMLElement>('.n-link.n-active');
    if (!activeEl) { indicatorRef.current.style.opacity = '0'; return; }
    const navRect  = navRef.current.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    indicatorRef.current.style.opacity = '1';
    indicatorRef.current.style.left    = `${linkRect.left - navRect.left}px`;
    indicatorRef.current.style.width   = `${linkRect.width}px`;
  }, [activeSection]);

  return (
    <>
      <style>{`
        @keyframes menuSlide {
          from { opacity:0; transform:translateY(-10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes navGlow {
          0%,100% { box-shadow:0 0 0 0 rgba(249,115,22,0); }
          50%      { box-shadow:0 0 14px 2px rgba(249,115,22,.08); }
        }
        @keyframes ctaBreathe {
          0%,100% { box-shadow:0 0 0 0 rgba(249,115,22,0),0 4px 16px rgba(249,115,22,.25); }
          50%      { box-shadow:0 0 0 6px rgba(249,115,22,.07),0 8px 28px rgba(249,115,22,.4); }
        }
        @keyframes logoSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .n-nav {
          position:fixed; top:0; left:0; right:0; z-index:100;
          padding:0 1.5rem; height:68px;
          display:flex; align-items:center; justify-content:space-between;
          transition:all .4s cubic-bezier(.16,1,.3,1);
          font-family:'Sora',sans-serif;
        }
        .n-nav.scrolled {
          background:rgba(7,7,15,.94);
          border-bottom:1px solid rgba(249,115,22,.15);
          backdrop-filter:blur(22px);
          -webkit-backdrop-filter:blur(22px);
          animation:navGlow 5s ease-in-out infinite;
        }

        /* ── Logo ── */
        .n-logo {
          display:flex; align-items:center; gap:10px;
          text-decoration:none; flex-shrink:0;
          transition:transform .3s cubic-bezier(.34,1.56,.64,1);
        }
        .n-logo:hover { transform:scale(1.04); }

        .n-logo-icon {
          width:38px; height:38px; border-radius:50%;
          background:linear-gradient(135deg,#F97316,#EA580C);
          display:flex; align-items:center; justify-content:center;
          position:relative; flex-shrink:0;
          box-shadow:0 0 0 2px rgba(249,115,22,.25);
          transition:box-shadow .3s ease;
        }
        .n-logo:hover .n-logo-icon {
          box-shadow:0 0 20px rgba(249,115,22,.5), 0 0 0 3px rgba(249,115,22,.3);
        }

        /* الحلقة الدائرية المتحركة */
        .n-logo-ring {
          position:absolute; inset:-4px;
          border-radius:50%;
          border:1.5px solid transparent;
          border-top-color:rgba(249,115,22,.6);
          border-right-color:rgba(249,115,22,.2);
          animation:logoSpin 3s linear infinite;
        }

        .n-logo-text {
          font-size:1.05rem; font-weight:800;
          color:#EAE6DE; letter-spacing:-.3px;
          font-family:'Sora',sans-serif;
        }
        .n-logo-text span {
          background:linear-gradient(135deg,#F97316,#EA580C);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        }

        /* ── Desktop links ── */
        .n-links-wrap { position:relative; display:flex; align-items:center; gap:1.75rem; }

        .n-indicator {
          position:absolute; bottom:-2px; height:2px;
          background:linear-gradient(90deg,#9333EA,#F97316);
          border-radius:2px;
          transition:left .35s cubic-bezier(.34,1.2,.64,1), width .35s cubic-bezier(.34,1.2,.64,1), opacity .25s;
          pointer-events:none;
        }

        .n-link {
          position:relative; font-size:.83rem; font-weight:600;
          color:#6B6480; text-decoration:none;
          padding:.4rem 0; white-space:nowrap;
          transition:color .25s ease;
        }
        .n-link:hover  { color:#EAE6DE; }
        .n-link.n-active { color:#F97316; }

        .n-cta {
          display:inline-flex; align-items:center;
          padding:.48rem 1.1rem; border-radius:10px;
          background:linear-gradient(135deg,#F97316,#EA580C);
          color:#fff; font-size:.8rem; font-weight:700;
          text-decoration:none; border:none; cursor:pointer;
          transition:all .3s cubic-bezier(.34,1.56,.64,1);
          animation:ctaBreathe 3s ease-in-out infinite;
          white-space:nowrap; font-family:'Sora',sans-serif;
        }
        .n-cta:hover {
          animation:none;
          transform:translateY(-2px) scale(1.03);
          box-shadow:0 12px 32px rgba(249,115,22,.4);
        }

        .n-hamburger {
          display:none; flex-direction:column; align-items:center;
          justify-content:center; gap:5px;
          width:38px; height:38px; border-radius:9px;
          background:rgba(249,115,22,.07);
          border:1px solid rgba(249,115,22,.2);
          cursor:pointer;
        }
        .n-ham-line {
          display:block; width:16px; height:1.5px;
          background:#6B6480; border-radius:2px;
          transition:all .3s cubic-bezier(.34,1.56,.64,1);
        }

        /* ── Mobile menu ── */
        .n-mobile {
          position:fixed; top:68px; left:0; right:0; z-index:99;
          background:rgba(7,7,15,.97);
          backdrop-filter:blur(22px); -webkit-backdrop-filter:blur(22px);
          border-bottom:1px solid rgba(249,115,22,.15);
          animation:menuSlide .22s ease both;
        }
        .n-mobile-link {
          display:block; padding:.85rem 1.5rem;
          font-family:'Sora',sans-serif; font-size:.9rem; font-weight:600;
          color:#6B6480; text-decoration:none;
          border-bottom:1px solid rgba(255,255,255,.04);
          position:relative; transition:all .2s ease;
        }
        .n-mobile-link::before {
          content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
          background:linear-gradient(to bottom,#9333EA,#F97316);
          border-radius:0 2px 2px 0;
          transform:scaleY(0); transition:transform .25s ease;
        }
        .n-mobile-link:hover,
        .n-mobile-link.n-active { color:#F97316; background:rgba(249,115,22,.04); }
        .n-mobile-link:hover::before,
        .n-mobile-link.n-active::before { transform:scaleY(1); }

        @media (max-width:768px) {
          .n-links-wrap { display:none !important; }
          .n-hamburger  { display:flex !important; }
        }
      `}</style>

      <nav className={`n-nav${scrolled ? ' scrolled' : ''}`}>

        {/* ── Logo ── */}
        <Link href="#home" className="n-logo">
          <div className="n-logo-icon">
            <div className="n-logo-ring" />
            <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:'17px', color:'#fff', lineHeight:1 }}>E</span>
          </div>
          <span className="n-logo-text">
            Omar <span>Elhelaly</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div ref={navRef} className="n-links-wrap">
          <span ref={indicatorRef} className="n-indicator" />
          {NAV_ITEMS.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`n-link${activeSection === item.href.replace('#', '') ? ' n-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <a href="https://wa.me/201095496184" target="_blank" rel="noopener noreferrer" className="n-cta">
            WhatsApp
          </a>
        </div>

        {/* ── Hamburger ── */}
        <button className="n-hamburger" onClick={() => setIsOpen(v => !v)} aria-label="menu">
          <span className="n-ham-line" style={{ transform: isOpen ? 'rotate(45deg) translate(4px,4.5px)' : 'none' }} />
          <span className="n-ham-line" style={{ opacity: isOpen ? 0 : 1, width: isOpen ? 0 : 16 }} />
          <span className="n-ham-line" style={{ transform: isOpen ? 'rotate(-45deg) translate(4px,-4.5px)' : 'none' }} />
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {isOpen && (
        <div className="n-mobile">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`n-mobile-link${activeSection === item.href.replace('#', '') ? ' n-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div style={{ padding: '1rem 1.5rem' }}>
            <a
              href="https://wa.me/201095496184"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display:'block', textAlign:'center', padding:'.7rem', borderRadius:10, background:'linear-gradient(135deg,#F97316,#EA580C)', color:'#fff', fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:'.88rem', textDecoration:'none' }}
              onClick={() => setIsOpen(false)}
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}