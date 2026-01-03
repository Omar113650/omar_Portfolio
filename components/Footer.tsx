'use client'

import { Mail, Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-purple/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Omar Elhelaly</h3>
            <p className="text-gray-400">Backend Developer | Node.js & NestJS</p>
            <p className="text-gray-400">Mansoura, Egypt</p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="mailto:omarelhelaly520@gmail.com"
              className="p-3 bg-purple/10 border border-purple/30 rounded-lg hover:bg-orange/10 hover:border-orange transition-all"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://github.com/Omar113650"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple/10 border border-purple/30 rounded-lg hover:bg-orange/10 hover:border-orange transition-all"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple/30 text-center text-gray-400">
          <p>&copy; 2026 Omar Elhelaly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

