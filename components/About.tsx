'use client';

import { motion } from 'framer-motion';
import { User, Code, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center gap-6"
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Who <span className="text-gradient">I Am</span>
          </h2>
        </motion.div>

        {/* العناصر التلاتة بمسافة أكبر من الصورة */}
        <div className="grid md:grid-cols-3 gap-12 mt-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-purple/10 border border-purple/30 rounded-xl p-6 card-hover space-y-4"
          >
            <User className="w-12 h-12 text-orange mb-2" />
            <h3 className="text-xl font-semibold">Backend Developer</h3>
            <p className="text-gray-300">
              Third-year Computer Science student at Mansoura University,
              specializing in building real-world backend systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple/10 border border-purple/30 rounded-xl p-6 card-hover space-y-4"
          >
            <Code className="w-12 h-12 text-orange mb-2" />
            <h3 className="text-xl font-semibold">System Architecture</h3>
            <p className="text-gray-300">
              Focus on scalability, security, and clean architecture with
              hands-on experience in SaaS platforms and payment integrations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-purple/10 border border-purple/30 rounded-xl p-6 card-hover space-y-4"
          >
            <Target className="w-12 h-12 text-orange mb-2" />
            <h3 className="text-xl font-semibold">Production Ready</h3>
            <p className="text-gray-300">
              Building systems that grow and perform under pressure, not just
              CRUD applications.
            </p>
          </motion.div>
        </div>

        {/* الصورة + النص */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-navy-dark/50 border border-purple/30 rounded-xl p-8 flex flex-col md:flex-row items-center gap-12"
        >
          {/* النصوص */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-orange">Summary</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Motivated Computer Science student with strong backend development
              skills, experienced in building secure, scalable, and maintainable
              systems. Skilled in quick teamwork. Passionate about automation,
              workflow optimization, and delivering high-quality software from
              concept to deployment.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              I'm <span className="text-orange font-semibold">Omar Elhelaly</span>,
              a backend developer and third-year Computer Science student at
              Mansoura University. I specialize in building real-world backend
              systems — not just CRUD applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              My work focuses on scalability, security, and clean architecture,
              with hands-on experience in SaaS platforms, booking systems,
              payment integrations, real-time applications, and admin
              dashboards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}