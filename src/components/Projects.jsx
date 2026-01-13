import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  // Projects showcasing fullstack development skills
  const projects = [
    {
      title: 'Task Management API with TDD',
      description: 'A RESTful API built with Node.js and Express, following Test-Driven Development practices. Features include JWT authentication, CRUD operations, and comprehensive test coverage using Jest and Supertest. Includes CI/CD pipeline with GitHub Actions.',
      technologies: ['Node.js', 'Express', 'Jest', 'MongoDB', 'JWT', 'GitHub Actions'],
      github: 'https://github.com/yourusername/task-api-tdd',
      demo: 'https://task-api-demo.vercel.app',
      image: '✅',
      status: 'Ready to build',
    },
    {
      title: 'React TypeScript Dashboard',
      description: 'A modern admin dashboard built with React and TypeScript, featuring real-time data visualization, responsive design, and state management. Includes unit tests with React Testing Library and E2E tests with Cypress.',
      technologies: ['React', 'TypeScript', 'Cypress', 'React Testing Library', 'Chart.js'],
      github: 'https://github.com/yourusername/react-dashboard',
      demo: 'https://react-dashboard-demo.vercel.app',
      image: '📊',
      status: 'Ready to build',
    },
    {
      title: 'Full-Stack Blog Platform',
      description: 'A complete blogging platform with user authentication, rich text editor, and comment system. Built with React frontend and .NET backend, following clean architecture principles. Includes automated testing and Docker containerization.',
      technologies: ['.NET', 'C#', 'React', 'Docker', 'MySQL', 'NUnit'],
      github: 'https://github.com/yourusername/blog-platform',
      demo: 'https://blog-platform-demo.vercel.app',
      image: '✍️',
      status: 'Ready to build',
    },
  ]

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <motion.p
        className="projects-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A selection of projects showcasing my skills and experience
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <span className="project-emoji">{project.image}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.status && (
                  <span className="project-status">{project.status}</span>
                )}
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  onClick={(e) => {
                    if (project.github === '#') {
                      e.preventDefault()
                      alert('Project coming soon! Check PROJECT_IDEAS.md for building instructions.')
                    }
                  }}
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Demo"
                  onClick={(e) => {
                    if (project.demo === '#') {
                      e.preventDefault()
                      alert('Demo coming soon! Build the project first.')
                    }
                  }}
                >
                  <HiExternalLink />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="projects-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>Want to see more of my work?</p>
        <motion.a
          href="#contact"
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Projects
