import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik'
import { motion } from 'framer-motion'
import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import * as Yup from 'yup'
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

/** Must match the Netlify form name (and the static form in index.html). */
const NETLIFY_FORM_NAME = 'PortfolioContactForm'

interface ContactFormValues {
  name: string
  email: string
  phone: string
  message: string
  'bot-field': string
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  'bot-field': '',
}

function encodeFormBody(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

const MAX_LENGTHS = {
  name: 50,
  email: 100,
  phone: 20,
  message: 500,
} as const

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(MAX_LENGTHS.name, `Name must be at most ${MAX_LENGTHS.name} characters`)
    .required('Please enter your name'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .max(MAX_LENGTHS.email, `Email must be at most ${MAX_LENGTHS.email} characters`)
    .required('Please enter your email'),
  phone: Yup.string()
    .trim()
    .test(
      'phone-optional',
      'Please enter a valid phone number (7–15 digits, optional +)',
      (value) => {
        if (!value) return true
        const digits = value.replace(/\D/g, '')
        return digits.length >= 7 && digits.length <= 15
      },
    ),
  message: Yup.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(MAX_LENGTHS.message, `Message must be at most ${MAX_LENGTHS.message} characters`)
    .required('Please enter a message'),
})

const inputClasses =
  'w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormValues>,
  ) => {
    setSubmitError(null)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormBody({
          'form-name': NETLIFY_FORM_NAME,
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          'bot-field': values['bot-field'],
        }),
      })

      if (!response.ok) {
        throw new Error(`Form submission failed (${response.status})`)
      }

      setIsSubmitted(true)
      resetForm()
    } catch {
      setSubmitError('Something went wrong. Please try again or email me directly.')
    } finally {
      setSubmitting(false)
    }
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

                {submitError && (
                  <div
                    className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {submitError}
                  </div>
                )}

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, values }) => (
                    <Form
                      className="space-y-5"
                      name={NETLIFY_FORM_NAME}
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      noValidate
                    >
                      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
                      <p className="hidden" aria-hidden="true">
                        <label>
                          Don’t fill this out:
                          <Field name="bot-field" tabIndex={-1} autoComplete="off" />
                        </label>
                      </p>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                            Your Name
                          </label>
                          <Field
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            maxLength={MAX_LENGTHS.name}
                            className={inputClasses}
                            placeholder="John Doe"
                          />
                          <ErrorMessage name="name" component="p" className="mt-1.5 text-xs text-red-500" />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                            Your Email
                          </label>
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            maxLength={MAX_LENGTHS.email}
                            className={inputClasses}
                            placeholder="john@example.com"
                          />
                          <ErrorMessage name="email" component="p" className="mt-1.5 text-xs text-red-500" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                          Your Phone{' '}
                          <span className="font-normal text-muted">(optional)</span>
                        </label>
                        <Field
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          maxLength={MAX_LENGTHS.phone}
                          className={inputClasses}
                          placeholder="+91 98765 43210"
                        />
                        <ErrorMessage name="phone" component="p" className="mt-1.5 text-xs text-red-500" />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                          Message
                        </label>
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          rows={4}
                          maxLength={MAX_LENGTHS.message}
                          className={cn(inputClasses, 'resize-none')}
                          placeholder="Tell me about your project..."
                        />
                        <div className="mt-1.5 flex items-center justify-between gap-2">
                          <ErrorMessage name="message" component="p" className="text-xs text-red-500" />
                          <span className="ml-auto shrink-0 text-xs text-muted">
                            {values.message.length}/{MAX_LENGTHS.message}
                          </span>
                        </div>
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="min-w-40">
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
                    </Form>
                  )}
                </Formik>
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
