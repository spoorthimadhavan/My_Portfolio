import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  // Initialize EmailJS with your Public Key
  // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    if (publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(publicKey)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Replace these with your actual EmailJS credentials
      // Get these from: https://dashboard.emailjs.com/admin
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // Check if credentials are configured
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        // Fallback: Open email client with pre-filled message
        const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )
        const mailtoLink = `mailto:spoorthy.madhavan@gmail.com?subject=${subject}&body=${body}`
        
        // Open email client
        window.location.href = mailtoLink
        
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
        setIsSubmitting(false)
        return
      }

      // Send notification email to you
      const notificationParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'spoorthy.madhavan@gmail.com', // Your email address
      }

      await emailjs.send(serviceId, templateId, notificationParams, publicKey)
      
      // Send auto-reply to the sender
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID
      if (autoReplyTemplateId && autoReplyTemplateId !== 'your_autoreply_template_id_here') {
        const autoReplyParams = {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'Spoorthi Satish Madhavan',
        }
        
        try {
          await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey)
        } catch (autoReplyError) {
          console.log('Auto-reply failed (notification still sent):', autoReplyError)
          // Don't fail the whole form if auto-reply fails
        }
      }
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      
      // Fallback: Open email client if EmailJS fails
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      const mailtoLink = `mailto:spoorthy.madhavan@gmail.com?subject=${subject}&body=${body}`
      
      // Show message that email client will open
      setSubmitStatus('success')
      setTimeout(() => {
        window.location.href = mailtoLink
      }, 500)
      
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <HiMail />,
      label: 'Email',
      value: 'spoorthy.madhavan@gmail.com',
      link: 'mailto:spoorthy.madhavan@gmail.com',
    },
    {
      icon: <HiPhone />,
      label: 'Phone',
      value: '+49 151 71832620',
      link: 'tel:+4915171832620',
    },
    {
      icon: <HiLocationMarker />,
      label: 'Location',
      value: 'Essen, Germany',
      link: null,
    },
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/spoorthimadhavan', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/spoorthi-madhavan/', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
      </motion.p>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="contact-info-title">Let's Connect</h3>
          <p className="contact-info-description">
            Feel free to reach out through any of these channels. I typically respond within 24 hours.
          </p>

          <div className="contact-info-list">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="contact-info-icon">{info.icon}</div>
                <div className="contact-info-content">
                  <span className="contact-info-label">{info.label}</span>
                  {info.link ? (
                    <a href={info.link} className="contact-info-value">
                      {info.value}
                    </a>
                  ) : (
                    <span className="contact-info-value">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="contact-social">
            <h4 className="contact-social-title">Follow Me</h4>
            <div className="contact-social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {submitStatus === 'success' && (
            <div className="form-message form-message-success">
              ✅ {import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' 
                ? "Message sent successfully! I'll get back to you soon."
                : "Opening your email client... Please send the message from there."}
            </div>
          )}

          <motion.button
            type="submit"
            className="btn btn-primary form-submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            {!isSubmitting && <HiPaperAirplane />}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
