"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

/* ── image with fallback ── */
function ProjectImage({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback?: string;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  return (
    <Image
      src={hasError && fallback ? fallback : imgSrc}
      alt={alt}
      fill
      unoptimized
      style={{ objectFit: "cover", transition: "transform .5s ease" }}
      className="prj-img"
      onError={() => {
        if (!hasError && fallback) {
          setHasError(true);
          setImgSrc(fallback);
        }
      }}
    />
  );
}

const PROJECTS = [
  {
    id: 0,
    name: "EG Brand",
    title: "AI-Powered Branding Platform for the Arab Market",
    desc: "The first AI-powered branding platform engineered specifically for the Arab market. Translates natural language business ideas into ready-to-launch brand ecosystems in under a minute—generating logos, visual identities, landing pages, social media graphics, brochures, ad scripts, SWOT analysis, and email sequences.",
    features: [
      "AI Brand Engine",
      "Arabic NLP & Culture Tuning",
      "Logo & Visual Identity",
      "Landing Page Generator",
      "Social Media Kit",
      "SWOT & Market Analysis",
      "Ad Scripts & Email Sequences",
      "Brand Voice & Messaging",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "Next.js",
      "OpenAI API",
      "LangChain",
      "Redis",
      "PostgreSQL",
      "TailwindCSS",
      "Docker",
    ],
    github: "https://github.com/Omar113650/Arab-Brand",
    demo: "https://arab-brand.vercel.app/",
    image: "/EG2.png",
    fallback:"https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&h=600&fit=crop",
    align: "left",
  },
  {
    id: 1,
    name: "Sayarati",
    title: "Automotive Services & Vehicle Management Platform",
    desc: "A production-grade automotive service and vehicle rental backend ecosystem. Built with modular NestJS architecture and Prisma ORM, it features complete fleet management, automated rental booking, service maintenance scheduling, customer management, and role-based access control.",
    features: [
      "NestJS Architecture",
      "Prisma ORM & PostgreSQL",
      "Vehicle Fleet Management",
      "Car Rental Booking Engine",
      "Maintenance & Service Scheduler",
      "Role-Based Access Control (RBAC)",
      "JWT Authentication",
      "RESTful API Suite",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "REST APIs",
      "Docker",
    ],
    github: "https://github.com/Omar113650/Sayarati",
    image: "/SY.jpg",
    fallback:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    align: "right",
  },
  {
    id: 2,
    name: "Swite-Ride",
    title: "Real-Time Ride-Hailing Platform",
    desc: 'A scalable, production-ready ride-hailing backend with a unique bidding-based allocation system. Instead of the traditional "request → accept" model, drivers compete by submitting real-time bids (price + ETA), and riders choose the best offer. Built with NestJS, Socket.IO, Redis, and PostgreSQL.',
    features: [
      "Real-Time Bidding System",
      "Live GPS Tracking",
      "Ride State Machine",
      "High Concurrency",
      "RBAC (Rider & Driver)",
      "JWT Auth",
      "Redis Caching",
      "ACID Transactions",
      "Docker",
      "Cloudinary",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.IO",
      "Redis",
      "Docker",
      "Cloudinary",
    ],
    github: "https://github.com/Omar113650/swift-ride",
    image: "/SW.png",
    align: "left",
  },
  {
    id: 2,
    name: "EventTix Platform",
    title: "Event Discovery & Booking",
    desc: "A modern event discovery and ticket booking platform with modular NestJS architecture. Ticketing made easy with real-time booking and payment processing.",
    features: [
      "NestJS Architecture",
      "Ticket Booking",
      "Payment Processing",
      "Event Management",
      "Real-time Updates",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Payment Integration",
      "WebSocket",
    ],
    github: "https://github.com/Omar113650/EventTix-Platform",
    image: "/projects/eventtix.jpg",
    fallback: "/z.png",
    align: "right",
  },
  {
    id: 3,
    name: "E-Commerce Website",
    title: "Full-Stack E-Commerce Platform",
    desc: "Engineered backend for e-commerce platform managing products, brands, offers, and orders. Implemented cart, wishlist, and order flow with secure payment integration. Enhanced performance through caching and optimized database queries. Deployed full system to production environment using CI/CD pipelines.",
    features: [
      "Shopping Cart",
      "Wishlist",
      "Payment Integration",
      "Product Management",
      "Order Processing",
      "Admin Dashboard",
      "Caching",
      "CI/CD",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Payment Gateway",
      "REST APIs",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/Omar113650/ECommarce-website",
    demo: "https://basket-ecommerce-iota.vercel.app/",
    image: "/x.png",
    align: "left",
  },
  {
    id: 4,
    name: "Elhelaly Plus",
    title: "E-Learning Platform",
    desc: "A full-featured e-learning platform with admin and instructor dashboards. Implemented JWT-based authentication, RBAC, email verification, Stripe and Paymob integration, Redis caching, and Bull job queues. Deployed on cloud with CI/CD workflows.",
    features: [
      "Admin Dashboard",
      "Instructor Dashboard",
      "JWT Auth",
      "RBAC",
      "Email Verification",
      "Payment Integration",
      "Redis Caching",
      "CI/CD",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "SQL Server",
      "Redis",
      "GraphQL",
      "Stripe",
      "Paymob",
      "Bull Queue",
    ],
    github:
      "https://github.com/Omar113650/Elhelaly--Plus-Online-Courses-Platform",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    align: "right",
  },
  {
    id: 5,
    name: "Appointment System",
    title: "Healthcare Booking",
    desc: "A comprehensive healthcare booking system with automated scheduling algorithm that reduced patient waiting time by 20%. Features modular backend architecture for managing doctors, appointments, pharmacy, and lab tests.",
    features: [
      "Appointment Scheduling",
      "Automated Algorithm",
      "Filtering",
      "Secure Auth",
      "SOLID Principles",
      "RBAC",
    ],
    tech: ["Node.js", "Express.js", "Prisma", "MySQL", "JWT", "Jest", "Docker"],
    github: "https://github.com/Omar113650/Appointment-System",
    image: "/n.png",
    fallback:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    align: "left",
  },
  {
    id: 6,
    name: "Noon Platform",
    title: "Marketplace Backend",
    desc: "A marketplace platform backend inspired by Noon, featuring product management, orders, and scalable architecture for e-commerce operations.",
    features: [
      "Marketplace Architecture",
      "Product Management",
      "Order System",
      "Scalable Design",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Omar113650/Noon-platfrom",
    image: "/o.png",
    align: "right",
  },
  {
    id: 7,
    name: "Bazooka Backend",
    title: "Food Ordering System",
    desc: "A complete food-ordering backend inspired by real business workflows.",
    features: [
      "Orders Management",
      "Payment Integrations",
      "Webhooks",
      "Admin Dashboard",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Payment Gateway"],
    github: "https://github.com/Omar113650/Bazooka",
    image: "/s.png",
    align: "left",
  },
  {
    id: 8,
    name: "WhatsApp Chat System",
    title: "Real-Time Chat Application",
    desc: "A WhatsApp-like real-time chat system with instant messaging, typing indicators, read receipts, and voice message support. Built with WebSocket-based architecture for enhanced UX.",
    features: [
      "Real-time Messaging",
      "Typing Indicators",
      "Read Receipts",
      "Voice Messages",
      "Online/Offline Status",
      "Notifications",
    ],
    tech: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "WebSocket"],
    github: "https://github.com/Omar113650/WhatsApp",
    image: "/m.png",
    fallback:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    align: "right",
  },
  {
    id: 9,
    name: "Dashboard",
    title: "Admin Dashboard System",
    desc: "A comprehensive admin dashboard with statistics, data visualization, and management tools. Built with clean architecture and modern UI.",
    features: [
      "Admin Panel",
      "Statistics & Analytics",
      "Data Visualization",
      "User Management",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Omar113650/Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    align: "left",
  },
  {
    id: 10,
    name: "Blog API",
    title: "RESTful Blog Backend",
    desc: "A complete RESTful API for blog management system with authentication, CRUD operations, and content management features.",
    features: [
      "REST APIs",
      "Authentication",
      "CRUD Operations",
      "Content Management",
      "Validation",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/Omar113650/Blog-Api",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    align: "right",
  },
  {
    id: 11,
    name: "Hospital Management System",
    title: "Healthcare Management Platform",
    desc: "A comprehensive hospital management system with modular backend architecture for managing doctors, patients, appointments, pharmacy, and lab tests. Features role-based access control and secure authentication.",
    features: [
      "Doctor Management",
      "Patient Management",
      "Appointment System",
      "Pharmacy Module",
      "Lab Tests",
      "RBAC",
      "Secure Auth",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/Omar113650/Hospital-management-system",
    image: "/hs.png",
    align: "left",
  },
];

export default function Projects() {
  const headRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els: Element[] = [];
    if (headRef.current) els.push(headRef.current);
    if (itemsRef.current)
      itemsRef.current
        .querySelectorAll(".prj-item")
        .forEach((e) => els.push(e));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            setTimeout(
              () => el.classList.add("prj-visible"),
              parseInt(el.dataset.delay || "0"),
            );
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.08 },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes prjOrbF  { 0%,100%{transform:translateX(-50%) translateY(0)}  50%{transform:translateX(-50%) translateY(-20px)} }
        @keyframes prjOrbF2 { 0%,100%{transform:translateY(0) rotate(0deg)}       50%{transform:translateY(-14px) rotate(4deg)} }
        @keyframes prjImgZoom { from{transform:scale(1)} to{transform:scale(1.07)} }
        @keyframes ctaBreathe {
          0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,0),0 4px 16px rgba(249,115,22,.25)}
          50%    {box-shadow:0 0 0 6px rgba(249,115,22,.07),0 8px 28px rgba(249,115,22,.4)}
        }

        .prj-head {
          opacity:0; transform:translateY(24px);
          transition:opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
          text-align:center; margin-bottom:4rem;
        }
        .prj-head.prj-visible { opacity:1; transform:translateY(0); }

        .prj-item {
          opacity:0; transform:translateY(40px);
          transition:opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1);
          display:flex; flex-wrap:wrap; gap:2.5rem; align-items:center;
          padding-bottom:4rem;
          border-bottom:1px solid rgba(139,92,246,.1);
        }
        .prj-item:last-child { border-bottom:none; padding-bottom:0; }
        .prj-item.prj-visible { opacity:1; transform:translateY(0); }

        .prj-img-wrap {
          flex:1 1 300px; min-width:0;
          position:relative; border-radius:20px; overflow:hidden;
          height:280px;
          border:1px solid rgba(139,92,246,.2);
          transition:border-color .35s ease, box-shadow .35s ease;
        }
        .prj-img-wrap:hover { border-color:rgba(249,115,22,.35); box-shadow:0 20px 50px rgba(0,0,0,.4), 0 0 0 1px rgba(249,115,22,.1); }
        .prj-img-wrap:hover .prj-img { transform:scale(1.07); }

        .prj-img { transition:transform .55s ease !important; }

        .prj-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(7,7,15,.75) 0%, transparent 55%);
          pointer-events:none;
        }
        .prj-img-glow {
          position:absolute; bottom:-20px; right:-20px;
          width:100px; height:100px;
          background:radial-gradient(circle,rgba(249,115,22,.3),transparent 70%);
          border-radius:50%; pointer-events:none;
        }

        .prj-content { flex:1 1 300px; min-width:0; }

        .prj-label {
          display:inline-flex; align-items:center; gap:.45rem;
          font-size:.72rem; font-weight:700; color:#6B6480;
          margin-bottom:.875rem; letter-spacing:.5px;
        }

        .prj-title {
          font-family:'Sora',sans-serif;
          font-size:clamp(1.25rem,3vw,1.65rem);
          font-weight:800; color:#EAE6DE;
          letter-spacing:-.5px; line-height:1.2;
          margin-bottom:.25rem;
        }
        .prj-subtitle {
          font-size:.85rem; font-weight:600;
          background:linear-gradient(135deg,#9333EA,#F97316);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          margin-bottom:1rem;
        }
        .prj-desc {
          font-size:.85rem; color:#6B6480; line-height:1.85; margin-bottom:1.25rem;
        }

        .prj-features { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:.875rem; }
        .prj-feat {
          padding:.28rem .72rem; border-radius:20px; font-size:.7rem; font-weight:600;
          background:rgba(139,92,246,.1); border:1px solid rgba(139,92,246,.25); color:#A78BFA;
          font-family:'Sora',sans-serif;
          transition:all .25s ease;
        }
        .prj-item:hover .prj-feat { border-color:rgba(139,92,246,.4); }

        .prj-techs { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:1.5rem; }
        .prj-tech {
          padding:.28rem .72rem; border-radius:20px; font-size:.7rem; font-weight:600;
          background:rgba(7,7,15,.6); border:1px solid rgba(255,255,255,.08); color:#9990AA;
          font-family:'Sora',sans-serif;
        }

        .prj-btn-primary {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.65rem 1.4rem; border-radius:10px;
          background:linear-gradient(135deg,#F97316,#EA580C);
          color:#fff; font-size:.82rem; font-weight:700;
          font-family:'Sora',sans-serif; text-decoration:none;
          transition:all .3s cubic-bezier(.34,1.56,.64,1);
          animation:ctaBreathe 3s ease-in-out infinite;
        }
        .prj-btn-primary:hover {
          animation:none;
          transform:translateY(-3px) scale(1.04);
          box-shadow:0 14px 36px rgba(249,115,22,.4);
        }

        .prj-btn-secondary {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.65rem 1.4rem; border-radius:10px;
          background:rgba(139,92,246,.12); border:1px solid rgba(139,92,246,.35);
          color:#A78BFA; font-size:.82rem; font-weight:700;
          font-family:'Sora',sans-serif; text-decoration:none;
          transition:all .3s ease;
        }
        .prj-btn-secondary:hover {
          background:rgba(139,92,246,.2); border-color:rgba(139,92,246,.6);
          transform:translateY(-2px);
          box-shadow:0 10px 28px rgba(139,92,246,.25);
        }

        .prj-btn-outline {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.65rem 1.4rem; border-radius:10px;
          background:transparent; border:1.5px solid rgba(249,115,22,.4);
          color:#F97316; font-size:.82rem; font-weight:700;
          font-family:'Sora',sans-serif; cursor:pointer;
          transition:all .3s ease;
        }
        .prj-btn-outline:hover {
          background:rgba(249,115,22,.07);
          border-color:#F97316;
          transform:translateY(-2px);
        }
      `}</style>

      <section
        id="projects"
        style={{
          background: "#07070F",
          padding: "5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Sora',sans-serif",
        }}
      >
        {/* orbs */}
        <div
          style={{
            position: "absolute",
            top: -70,
            left: "50%",
            width: 480,
            height: 300,
            background:
              "radial-gradient(ellipse,rgba(249,115,22,.07),transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "prjOrbF 9s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            right: -50,
            width: 260,
            height: 260,
            background:
              "radial-gradient(circle,rgba(139,92,246,.07),transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "prjOrbF2 11s ease-in-out infinite",
          }}
        />
        {/* grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139,92,246,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,.03) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 940,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* heading */}
          <div ref={headRef} className="prj-head">
            <p
              style={{
                fontSize: ".68rem",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#F97316",
                marginBottom: ".75rem",
              }}
            >
              Projects
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem,5vw,2.75rem)",
                fontWeight: 800,
                color: "#EAE6DE",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                marginBottom: ".75rem",
              }}
            >
              Featured{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#9333EA,#F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Projects
              </span>
            </h2>
            <p style={{ fontSize: ".9rem", color: "#6B6480" }}>
              Real-world backend systems built with Node.js
            </p>
          </div>

          {/* list */}
          <div
            ref={itemsRef}
            style={{ display: "flex", flexDirection: "column", gap: "4rem" }}
          >
            {PROJECTS.map((p, i) => (
              <div
                key={p.id}
                className="prj-item"
                data-delay={String(i * 50)}
                style={
                  {
                    flexDirection: p.align === "right" ? "row-reverse" : "row",
                  } as React.CSSProperties
                }
              >
                {/* image */}
                <div className="prj-img-wrap">
                  <ProjectImage
                    src={p.image}
                    fallback={(p as any).fallback}
                    alt={p.name}
                  />
                  <div className="prj-img-overlay" />
                  <div className="prj-img-glow" />
                </div>

                {/* content */}
                <div className="prj-content">
                  <div className="prj-label">
                    <Code2 size={14} style={{ color: "#F97316" }} />
                    Built with Node.js
                  </div>
                  <h3 className="prj-title">{p.name}</h3>
                  <p className="prj-subtitle">{p.title}</p>
                  <p className="prj-desc">{p.desc}</p>

                  <div className="prj-features">
                    {p.features.map((f) => (
                      <span key={f} className="prj-feat">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="prj-techs">
                    {p.tech.map((t) => (
                      <span key={t} className="prj-tech">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}
                  >
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="prj-btn-primary"
                    >
                      <Github size={16} /> View Code
                    </a>
                    {(p as any).demo ? (
                      <a
                        href={(p as any).demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prj-btn-secondary"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    ) : (
                      <button className="prj-btn-outline">
                        <ExternalLink size={16} /> Architecture Overview
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
