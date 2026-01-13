import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sheet, Button, Link, Box, IconButton } from '@mui/joy'
import { HiMenu, HiX } from 'react-icons/hi'
import './Header.css'

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Sheet
        variant="solid"
        color="primary"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: isScrolled ? 'primary.500' : 'transparent',
          boxShadow: isScrolled ? 'md' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <motion.div
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ cursor: 'pointer' }}
          >
            <Box
              component="span"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--joy-palette-primary-500), var(--joy-palette-danger-500))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SM
            </Box>
          </motion.div>

          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                sx={{
                  color: activeSection === item.id ? 'primary.400' : 'neutral.400',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  position: 'relative',
                  '&:hover': {
                    color: 'primary.300',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: activeSection === item.id ? '100%' : 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--joy-palette-primary-500), var(--joy-palette-danger-500))',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          <IconButton
            variant="plain"
            color="neutral"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            sx={{ display: { xs: 'block', md: 'none' } }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </IconButton>
        </Box>

        <Sheet
          variant="solid"
          color="neutral"
          sx={{
            display: { xs: isMobileMenuOpen ? 'flex' : 'none', md: 'none' },
            position: 'fixed',
            top: 0,
            right: 0,
            width: '70%',
            height: '100vh',
            backgroundColor: 'neutral.900',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            boxShadow: 'lg',
            zIndex: 1001,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              sx={{
                color: activeSection === item.id ? 'primary.400' : 'neutral.300',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: 500,
                '&:hover': {
                  color: 'primary.300',
                },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Sheet>
      </Sheet>
    </motion.header>
  )
}

export default Header
