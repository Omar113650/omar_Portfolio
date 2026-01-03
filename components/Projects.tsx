'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Component to handle image with fallback
function ProjectImage({ src, fallback, alt }: { src: string; fallback?: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <Image
      src={hasError && fallback ? fallback : imgSrc}
      alt={alt}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
      onError={() => {
        if (!hasError && fallback) {
          setHasError(true)
          setImgSrc(fallback)
        }
      }}
    />
  )
}

const projects = [
  {
    id: 1,
    name: 'EventTix Platform',
    title: 'Event Discovery & Booking',
    description: 'A modern event discovery and ticket booking platform with modular NestJS architecture. Ticketing made easy with real-time booking and payment processing.',
    features: ['NestJS Architecture', 'Ticket Booking', 'Payment Processing', 'Event Management', 'Real-time Updates'],
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'Payment Integration', 'WebSocket'],
    github: 'https://github.com/Omar113650/EventTix-Platform',
    image: '/projects/eventtix.jpg',
    fallbackImage: '/z.png',
    align: 'left'
  },
  {
    id: 2,
    name: 'E-Commerce Website',
    title: 'Full-Stack E-Commerce Platform',
    description: 'Engineered backend for e-commerce platform managing products, brands, offers, and orders. Implemented cart, wishlist, and order flow with secure payment integration. Enhanced performance through caching and optimized database queries. Deployed full system to production environment using CI/CD pipelines.',
    features: ['Shopping Cart', 'Wishlist', 'Payment Integration', 'Product Management', 'Order Processing', 'Admin Dashboard', 'Caching', 'CI/CD'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Payment Gateway', 'REST APIs', 'Redis', 'Docker'],
    github: 'https://github.com/Omar113650/ECommarce-website',
    demo: 'https://basket-ecommerce-iota.vercel.app/',
    image: '/x.png',
    align: 'right'
  },
  {
    id: 3,
    name: 'Elhelaly Plus',
    title: 'E-Learning Platform',
    description: 'A full-featured e-learning platform with admin and instructor dashboards. Implemented JWT-based authentication, RBAC, email verification, Stripe and Paymob integration, Redis caching, and Bull job queues. Deployed on cloud with CI/CD workflows.',
    features: ['Admin Dashboard', 'Instructor Dashboard', 'JWT Auth', 'RBAC', 'Email Verification', 'Payment Integration', 'Redis Caching', 'CI/CD'],
    tech: ['TypeScript', 'Node.js', 'SQL Server', 'Redis', 'GraphQL', 'Stripe', 'Paymob', 'Bull Queue'],
    github: 'https://github.com/Omar113650/Elhelaly--Plus-Online-Courses-Platform',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    align: 'left'
  },
  {
    id: 4,
    name: 'Appointment System',
    title: 'Healthcare Booking',
    description: 'A comprehensive healthcare booking system with automated scheduling algorithm that reduced patient waiting time by 20%. Features modular backend architecture for managing doctors, appointments, pharmacy, and lab tests.',
    features: ['Appointment Scheduling', 'Automated Algorithm', 'Filtering', 'Secure Auth', 'SOLID Principles', 'RBAC'],
    tech: ['Node.js', 'Express.js', 'Prisma', 'MySQL', 'JWT', 'Jest', 'Docker'],
    github: 'https://github.com/Omar113650/Appointment-System',
    image: '/n.png',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    align: 'right'
  },
  {
    id: 5,
    name: 'Noon Platform',
    title: 'Marketplace Backend',
    description: 'A marketplace platform backend inspired by Noon, featuring product management, orders, and scalable architecture for e-commerce operations.',
    features: ['Marketplace Architecture', 'Product Management', 'Order System', 'Scalable Design'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Omar113650/Noon-platfrom',
    image: '/o.png',
    align: 'left'
  },
  {
    id: 6,
    name: 'Bazooka Backend',
    title: 'Food Ordering System',
    description: 'A complete food-ordering backend inspired by real business workflows.',
    features: ['Orders Management', 'Payment Integrations', 'Webhooks', 'Admin Dashboard'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Payment Gateway'],
    github: 'https://github.com/Omar113650/Bazooka',
    image: '/s.png',
    align: 'right'
  },
  {
    id: 7,
    name: 'WhatsApp Chat System',
    title: 'Real-Time Chat Application',
    description: 'A WhatsApp-like real-time chat system with instant messaging, typing indicators, read receipts, and voice message support. Built with WebSocket-based architecture for enhanced UX.',
    features: ['Real-time Messaging', 'Typing Indicators', 'Read Receipts', 'Voice Messages', 'Online/Offline Status', 'Notifications'],
    tech: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'WebSocket'],
    github: 'https://github.com/Omar113650/WhatsApp',
    image: '/m.png',
    fallbackImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    align: 'left'
  },
  {
    id: 8,
    name: 'Dashboard',
    title: 'Admin Dashboard System',
    description: 'A comprehensive admin dashboard with statistics, data visualization, and management tools. Built with clean architecture and modern UI.',
    features: ['Admin Panel', 'Statistics & Analytics', 'Data Visualization', 'User Management'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Omar113650/Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    align: 'right'
  },
  {
    id: 9,
    name: 'Blog API',
    title: 'RESTful Blog Backend',
    description: 'A complete RESTful API for blog management system with authentication, CRUD operations, and content management features.',
    features: ['REST APIs', 'Authentication', 'CRUD Operations', 'Content Management', 'Validation'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    github: 'https://github.com/Omar113650/Blog-Api',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    align: 'left'
  },
  {
    id: 10,
    name: 'Hospital Management System',
    title: 'Healthcare Management Platform',
    description: 'A comprehensive hospital management system with modular backend architecture for managing doctors, patients, appointments, pharmacy, and lab tests. Features role-based access control and secure authentication.',
    features: ['Doctor Management', 'Patient Management', 'Appointment System', 'Pharmacy Module', 'Lab Tests', 'RBAC', 'Secure Auth'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    github: 'https://github.com/Omar113650/Hospital-management-system',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    align: 'right'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Real-world backend systems built with Node.js</p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${project.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              {/* Image - External Style */}
              <div className="flex-1 relative group">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden glow-effect">
                  <ProjectImage 
                    src={project.image} 
                    fallback={project.fallbackImage || project.image}
                    alt={project.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange rounded-full blur-3xl opacity-30" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-orange" />
                  <span className="text-sm text-gray-400">Built with Node.js</span>
                </div>
                
                <h3 className="text-3xl font-bold">
                  {project.name}
                  <span className="text-gradient"> - {project.title}</span>
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-purple/20 border border-purple/40 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-navy-dark border border-purple/30 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-lg font-semibold hover:bg-orange-gold transition-all duration-300 glow-effect"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-purple text-white rounded-lg font-semibold hover:bg-purple/80 transition-all duration-300 glow-effect"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                  {!project.demo && (
                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-orange text-orange rounded-lg font-semibold hover:bg-orange/10 transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                      Architecture Overview
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

