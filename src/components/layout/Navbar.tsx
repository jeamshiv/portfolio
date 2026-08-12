import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks, siteConfig } from '../../data/site'
import { useActiveSection, useScrollProgress } from '../../hooks/useActiveSection'
import { cn, scrollToSection } from '../../lib/utils'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'

const sectionIds = navLinks.map((link) => link.href)
const EMPTY_SECTIONS: string[] = []

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const activeSection = useActiveSection(isHome ? sectionIds : EMPTY_SECTIONS)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    // Scroll locally when the section exists on this page (e.g. project detail
    // contact form); only navigate home when it doesn't.
    if (document.getElementById(href)) {
      scrollToSection(href)
      return
    }
    navigate(`/#${href}`)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          className="h-0.5 origin-left bg-linear-to-r from-accent to-accent-light"
          style={{ scaleX: scrollProgress }}
        />

        <nav
          aria-label="Main navigation"
          className={cn(
            'transition-all duration-300',
            isScrolled ? 'glass border-b py-3 shadow-sm' : 'border-b border-transparent py-5',
          )}
        >
          <div className="section-container flex items-center justify-between">
            <Link to="/">
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="font-display text-xl font-bold tracking-tight"
              >
                <span className="text-gradient">{siteConfig.name}</span>
              </motion.span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      activeSection === link.href
                        ? 'text-accent'
                        : 'text-muted hover:text-foreground',
                    )}
                  >
                    {link.label}
                    {activeSection === link.href && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 -z-10 rounded-full bg-accent-muted"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <Button
                variant="primary"
                className="px-5 py-2.5 text-sm"
                onClick={() => handleNavClick('contact')}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileOpen((prev) => !prev)}
                aria-expanded={isMobileOpen}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground"
              >
                {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm glass border-l p-6 pt-24 lg:hidden"
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(link.href)}
                        className={cn(
                          'w-full rounded-xl px-4 py-3 text-left text-lg font-medium transition-colors',
                          activeSection === link.href
                            ? 'bg-accent-muted text-accent'
                            : 'text-muted hover:bg-surface-elevated hover:text-foreground',
                        )}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => handleNavClick('contact')}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
