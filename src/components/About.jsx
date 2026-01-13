import { motion } from 'framer-motion'
import { HiCode, HiLightBulb, HiTrendingUp } from 'react-icons/hi'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const highlights = [
    {
      icon: <HiCode />,
      title: 'Fullstack Expertise',
      description: 'Proficient in both frontend and backend development, creating end-to-end solutions with modern JavaScript frameworks.',
    },
    {
      icon: <HiLightBulb />,
      title: 'Test-Driven Development',
      description: 'Strong focus on TDD practices, ensuring code quality, reliability, and maintainability through comprehensive testing.',
    },
    {
      icon: <HiTrendingUp />,
      title: 'Scalable Solutions',
      description: 'Experience building large-scale applications with focus on performance, scalability, and best practices.',
    },
  ]

  return (
    <section id="about" className="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="about-content" variants={itemVariants}>
          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I am a passionate <strong>Fullstack Developer</strong> with expertise in various JavaScript frameworks, 
            dedicated to building robust, scalable applications. My approach centers around{' '}
            <strong>test-driven development</strong>, ensuring code quality and system reliability from the ground up.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            With experience across the full development stack—from React and TypeScript on the frontend to Node.js, 
            .NET, and Python on the backend—I bring a comprehensive understanding of modern web development. 
            I am particularly passionate about creating solutions that are not just functional, but maintainable, 
            testable, and scalable.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Currently working at <strong>dSPACE GmbH</strong>, I am contributing to large-scale applications while 
            continuously learning and applying best practices in software engineering.
          </motion.p>
        </motion.div>

        <motion.div className="about-highlights" variants={itemVariants}>
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="highlight-icon">{highlight.icon}</div>
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
