import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { siteConfig } from '../data/site'
import { pageReveal } from '../lib/animations'

export function NotFoundPage() {
  return (
    <motion.div
      variants={pageReveal}
      initial="hidden"
      animate="visible"
      className="flex min-h-[70vh] items-center pt-28 pb-16"
    >
      <title>{`Page not found | ${siteConfig.fullName}`}</title>
      <meta
        name="description"
        content="The page you're looking for doesn't exist or has been moved."
      />

      <div className="section-container text-center">
        <p className="font-display text-8xl font-bold text-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="mt-8 inline-block">
          <Button variant="primary">
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
