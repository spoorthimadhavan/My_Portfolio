import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java'],
      color: 'var(--primary)',
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Node.js', '.NET', 'Angular', 'Spring Boot', 'Django', 'Flask'],
      color: 'var(--secondary)',
    },
    {
      title: 'Testing',
      skills: ['Jest', 'Cypress', 'NUnit', 'Mocha', 'Sinon', 'Chai', 'React Testing Library'],
      color: 'var(--accent)',
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'AWS', 'Terraform', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
      color: 'var(--primary)',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      color: 'var(--secondary)',
    },
    {
      title: 'Tools & Methods',
      skills: ['Agile', 'Scrum', 'TDD', 'Figma', 'REST APIs', 'Integration Testing', 'Data Pipelines', 'Version Control'],
      color: 'var(--accent)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skill-category"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="category-title" style={{ color: category.color }}>
              {category.title}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
