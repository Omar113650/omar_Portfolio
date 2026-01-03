'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowRight, Send } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Powerful Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have an idea or need a backend system that actually works in production?
            Let's talk and turn your concept into a scalable solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-purple/10 border border-purple/30 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="https://wa.me/201095496184"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-gold transition-all duration-300 glow-effect"
            >
              <Send className="w-5 h-5" />
              Contact on WhatsApp
            </a>
            <a
              href="mailto:omarelhelaly520@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-orange text-orange rounded-lg font-semibold text-lg hover:bg-orange/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:omarelhelaly520@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-orange transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>omarelhelaly520@gmail.com</span>
            </a>
            <a
              href="https://github.com/Omar113650"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-orange transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>github.com/Omar113650</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

