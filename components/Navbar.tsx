'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Get all sections
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact']
      
      // Find the current section
      const scrollPosition = window.scrollY + 150 // Offset for navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="p-2 bg-orange rounded-lg group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Omar <span className="text-orange">Elhelaly</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors font-medium relative ${
                    isActive 
                      ? 'text-orange' 
                      : 'text-gray-300 hover:text-orange'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            <a
              href="https://wa.me/201095496184"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-orange text-white rounded-lg font-semibold hover:bg-orange-gold transition-all duration-300 glow-effect"
            >
              Contact on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-4"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors font-medium py-2 px-3 rounded-lg ${
                    isActive
                      ? 'text-orange bg-orange/10'
                      : 'text-gray-300 hover:text-orange hover:bg-orange/5'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            <a
              href="https://wa.me/201095496184"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 bg-orange text-white rounded-lg font-semibold hover:bg-orange-gold transition-all duration-300 text-center"
            >
              Contact on WhatsApp
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

