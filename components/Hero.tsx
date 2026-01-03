'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => {
          const x = Math.random() * 100
          const y = Math.random() * 100
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange rounded-full opacity-20"
              initial={{ x: `${x}%`, y: `${y}%` }}
              animate={{
                x: `${x + Math.random() * 14 - 7}%`,
                y: `${y + Math.random() * 14 - 7}%`,
              }}
              transition={{
                duration: Math.random() * 10 + 12,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          )
        })}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-24 left-24 w-64 h-64 bg-purple rounded-full blur-3xl opacity-20 animate-float" />
      <div
        className="absolute bottom-24 right-24 w-64 h-64 bg-orange rounded-full blur-3xl opacity-20 animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-28 lg:gap-36">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-60 h-60 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-orange rounded-full blur-3xl opacity-30 animate-pulse" />

              <div className="relative w-full h-full rounded-full border-4 border-orange p-2 bg-purple-dark">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-purple-dark">
                  {!imageError ? (
                    <Image
                      src="/omar-profile.jpg"
                      alt="Omar Elhelaly"
                      fill
                      className="object-cover"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full rounded-full text-5xl md:text-6xl font-bold text-orange">
                      OE
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>




          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Omar Elhelaly</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-4">
              Backend Developer
            </h2>

            {/* ⬇️ قللنا المسافة هنا */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mb-4">
              <MapPin className="w-4 h-4 text-orange" />
              <span>Mansoura, Egypt</span>
            </div>

            {/* Contact */}
            <div className="space-y-4 mb-12 text-base md:text-lg">
              <a
                href="tel:+201095496184"
                className="flex items-center justify-center md:justify-start gap-3 text-white hover:text-orange transition"
              >
                <span>📞</span>
                <span>+20-109-549-6184</span>
              </a>

              <a
                href="mailto:omarelhelaly520@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 text-white hover:text-orange transition"
              >
                <Mail className="w-5 h-5 text-orange" />
                <span>omarelhelaly520@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/omar-elhelaly-601791332"
                target="_blank"
                className="flex items-center justify-center md:justify-start gap-3 text-white hover:text-orange transition"
              >
                <span>💼</span>
                <span>linkedin.com/in/omar-elhelaly</span>
              </a>

              <a
                href="https://github.com/Omar113650"
                target="_blank"
                className="flex items-center justify-center md:justify-start gap-3 text-white hover:text-orange transition"
              >
                <Github className="w-5 h-5 text-orange" />
                <span>github.com/Omar113650</span>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a
                href="https://wa.me/201095496184"
                target="_blank"
                className="px-8 py-3 bg-orange text-white rounded-lg font-medium hover:bg-orange-gold transition flex items-center gap-2"
              >
                Contact on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="#projects"
                className="px-8 py-3 border border-orange text-orange rounded-lg font-medium hover:bg-orange/10 transition flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
