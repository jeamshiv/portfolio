import { motion } from 'framer-motion'
import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { siteConfig } from '../../data/site'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: siteConfig.location,
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
] as const

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1200))

    setIsSubmitting(false)
    setIsSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" aria-label="Contact form" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact Me"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Contact form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-6 sm:p-8" hover={false}>
                <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
                  Say Something
                </p>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400"
                    role="status"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                      Your Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      maxLength={10}
                      className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="9876543210"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="min-w-[160px]">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact info — same card pattern as Experience */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} variants={fadeInUp}>
                <Card className="p-5 sm:p-6" hover={false}>
                  {href ? (
                    <a
                      href={href}
                      className="group/link flex items-center gap-4"
                    >
                      <ContactInfoContent Icon={Icon} label={label} value={value} linked />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <ContactInfoContent Icon={Icon} label={label} value={value} />
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactInfoContent({
  Icon,
  label,
  value,
  linked = false,
}: {
  Icon: typeof MapPin
  label: string
  value: string
  linked?: boolean
}) {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
          'bg-accent-muted text-accent transition-colors duration-300',
          linked && 'group-hover/link:text-[#f05d7b]',
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {label}
        </span>
        <p
          className={cn(
            'mt-1 font-display text-base font-semibold text-foreground',
            linked && 'transition-colors duration-300 group-hover/link:text-accent',
          )}
        >
          {value}
        </p>
      </div>
    </>
  )
}
