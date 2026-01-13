import { motion } from 'framer-motion'
import { HiCalendar, HiLocationMarker, HiCode, HiCog, HiChartBar } from 'react-icons/hi'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'dSPACE GmbH',
      role: 'Software Developer',
      period: 'May 2024 - Present',
      location: 'Paderborn, Germany',
      icon: <HiCode />,
      responsibilities: [
        'Develop full-stack solutions using C# (.NET) and React TypeScript for large-scale applications',
        'Implement automated CI/CD workflows with GitHub Actions and Docker',
        'Design RESTful APIs and integrate third-party services for automation and data synchronization',
        'Apply test-driven and continuous testing practices to ensure code quality and system reliability',
        'Prototype and validate user interfaces in Figma to enhance usability and performance',
      ],
    },
    {
      company: 'Heimat Digital',
      role: 'Fullstack Developer',
      period: 'Apr 2023 - Sep 2023',
      location: 'Salzkotten, Germany',
      icon: <HiCog />,
      responsibilities: [
        'Built and maintained web modules for scalable content delivery systems',
        'Configured load balancers and monitoring tools to reduce downtime by 15%',
        'Automated deployment processes for faster integration across environments',
        'Wrote end-to-end tests to support continuous integration and maintain performance stability',
      ],
    },
    {
      company: 'Oniq GmbH',
      role: 'Frontend Developer (Part-time)',
      period: 'Nov 2022 - Jan 2023',
      location: 'Köln, Germany',
      icon: <HiChartBar />,
      responsibilities: [
        'Developed UI components using React and TypeScript, improving rendering performance by 20%',
        'Implemented automated testing with Jest and Cypress',
        'Participated in Agile sprints focusing on user-centric design and iterative optimization',
      ],
    },
    {
      company: 'Digimenz',
      role: 'Fullstack Developer (Part-time)',
      period: 'Mar 2021 - Feb 2022',
      location: 'Paderborn, DE',
      icon: <HiCode />,
      responsibilities: [
        'Designed REST APIs and integrated backend logic to support real-time data visualization',
        'Implemented unit and integration tests using React Testing Libraries',
        'Automated build and deployment processes for faster testing and delivery',
      ],
    },
    {
      company: 'DICE Research Group',
      role: 'Frontend Developer (Part-time)',
      period: 'Jul 2020 - May 2021',
      location: 'Paderborn, DE',
      icon: <HiChartBar />,
      responsibilities: [
        'Developed the chatbot UI from concept to deployment',
        'Supported AI research with automation scripts and data analysis',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="experience-icon">{exp.icon}</div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="experience-period">
                  <HiCalendar />
                  {exp.period}
                </span>
                <span className="experience-location">
                  <HiLocationMarker />
                  {exp.location}
                </span>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
