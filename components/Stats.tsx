'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FolderOpen, Layers, Cloud, Github, Plug } from 'lucide-react'

const stats = [
  { icon: FolderOpen, value: 18, suffix: '+', label: 'Completed Projects', color: 'text-orange' },
  { icon: Layers, value: 6, suffix: '+', label: 'Large-Scale Platforms', color: 'text-purple' },
  { icon: Cloud, value: 3, suffix: '+', label: 'SaaS Systems', color: 'text-blue-400' },
  { icon: Github, value: 155, suffix: '+', label: 'GitHub Contributions', color: 'text-green-400' },
  { icon: Plug, value: 10, suffix: '+', label: 'External Integrations', color: 'text-yellow-400' },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By The <span className="text-gradient">Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple/10 border border-purple/30 rounded-full">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

