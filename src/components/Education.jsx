import { motion } from 'framer-motion'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Masters in Computer Science',
      institution: 'University of Paderborn',
      period: '2019 - 2023',
      location: 'Paderborn, DE',
      description: 'Advanced studies in computer science with focus on software engineering, algorithms, and distributed systems.',
    },
    {
      degree: 'PostGraduation Diploma in Software Development',
      institution: 'International Institute of Information Technology Bengaluru',
      period: '2017 - 2018',
      location: 'Bengaluru, IN',
      description: 'Comprehensive program covering modern software development practices, frameworks, and methodologies.',
    },
    {
      degree: 'Bachelors in Computer Application',
      institution: 'Surana college affiliate to Bangalore University',
      period: '2014 - 2017',
      location: 'Bengaluru, IN',
      description: 'Foundation in computer science and application development, covering core programming concepts and software engineering principles.',
    },
  ]

  return (
    <section id="education" className="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="education-container">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="education-icon">
              <HiAcademicCap />
            </div>
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <div className="education-meta">
                <span className="education-period">
                  <HiCalendar />
                  {edu.period}
                </span>
                <span className="education-location">
                  <HiLocationMarker />
                  {edu.location}
                </span>
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
