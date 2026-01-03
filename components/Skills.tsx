'use client'

import { motion } from 'framer-motion'
import { 
  Code2, Database, Cloud, CreditCard, Shield, 
  Server, GitBranch, Zap, Cpu, Brain
} from 'lucide-react'

const skillCategories = [
  {
    icon: Zap,
    title: 'Programming Languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'Python'],
    color: 'text-yellow-400'
  },
  {
    icon: Code2,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs', 'GraphQL', 'WebSocket', 'Socket.IO', 'Multer', 'Nodemailer', 'JWT', 'Bull (Job Queue)'],
    color: 'text-orange'
  },
  {
    icon: Server,
    title: 'Backend Architecture',
    skills: [
      'Repository Pattern',
      'API Versioning',
      'Scalable Backend Design',
      'Event-Driven Architecture (Basics)'
    ],
    color: 'text-indigo-400'
  },
  {
    icon: Shield,
    title: 'Security',
    skills: [
      'Rate Limiting',
      'CORS & CSRF Protection',
      'Secure Authentication Flows',
      'Password Hashing (bcrypt)',
      'Token Refresh Strategies',
      'Environment Security (.env best practices)'
    ],
    color: 'text-red-400'
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQL Server', 'PostgreSQL', 'Sequelize ORM', 'Prisma ORM', 'Database Design', 'Query Optimization'],
    color: 'text-purple'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['Docker', 'CI/CD (GitHub Actions)', 'Vercel', 'Redis Caching', 'Background Processing', 'Error Logging', 'File Upload Optimization', 'Email Delivery Systems'],
    color: 'text-blue-400'
  },
  {
    icon: CreditCard,
    title: 'Payments & Integrations',
    skills: ['Stripe', 'Paymob', 'Fawry', 'Secure Payment Flows', 'Webhooks', 'Third-Party APIs', 'Cloudinary'],
    color: 'text-green-400'
  },
  {
    icon: Server,
    title: 'Core Concepts',
    skills: ['Algorithms', 'Data Structures', 'OOP', 'SOLID', 'Clean Architecture', 'Design Patterns', 'Refactoring', 'Authentication & Authorization (RBAC)', 'Unit Testing (Jest)', 'Problem Solving'],
    color: 'text-cyan-400'
  },
  {
    icon: GitBranch,
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Jest', 'Swagger', 'Insomnia', 'Git Branching Strategies', 'Agile & Scrum'],
    color: 'text-pink-400'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    skills: ['Cybersecurity', 'Penetration Testing', 'Email Verification', 'Network Security'],
    color: 'text-red-400'
  },
  {
    icon: Brain,
    title: 'Generative AI & LLMs',
    skills: [
      'Enhancing user experience with intelligent content',
      'Retrieval-Augmented Generation (RAG)',
      'High-performance data retrieval systems',
      'Prompt Engineering'
    ],
    color: 'text-teal-400'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-purple/10 border border-purple/30 rounded-xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-navy-dark border border-purple/30 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
