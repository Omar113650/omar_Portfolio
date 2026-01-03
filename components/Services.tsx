'use client'

import { motion } from 'framer-motion'
import { 
  Server, Layout, CreditCard, Zap, 
  Cloud, Code2 
} from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'Backend API Development',
    description: 'High-performance APIs designed for scalability and security.',
  },
  {
    icon: Layout,
    title: 'System Design & Architecture',
    description: 'From idea to production-ready backend systems.',
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway Integration',
    description: 'Secure integration with Stripe, Paymob, and Fawry.',
  },
  {
    icon: Zap,
    title: 'Real-Time Applications',
    description: 'Chat systems, notifications, and live updates.',
  },
  {
    icon: Cloud,
    title: 'SaaS Backend Solutions',
    description: 'Scalable backend foundations for SaaS products.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg">Services I provide</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-purple/10 border border-purple/30 rounded-xl p-6 card-hover"
              >
                <div className="p-4 bg-orange/10 rounded-lg w-fit mb-4">
                  <Icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

