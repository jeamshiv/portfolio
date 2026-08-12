import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteConfig } from '../../data/site'
import { fadeInUp } from '../../lib/animations'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

interface BlogPost {
  title: string
  link: string
  thumbnail: string
  published: string
  excerpt: string
}

declare global {
  interface Window {
    latestPost?: (json: BloggerFeed) => void
  }
}

interface BloggerLink {
  rel?: string
  href?: string
}

interface BloggerFeed {
  feed: {
    entry: Array<{
      title: { $t: string }
      link: BloggerLink[]
      media$thumbnail?: { url: string }
      published: { $t: string }
      content: { $t: string }
    }>
  }
}

const FEED_TIMEOUT_MS = 8000

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return '—'
  }
}

function getAlternateLink(links: BloggerLink[] | undefined): string {
  if (!links?.length) return siteConfig.social.blog
  const alternate = links.find((link) => link.rel === 'alternate' && link.href)
  return alternate?.href ?? links[0]?.href ?? siteConfig.social.blog
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [visibleCount, setVisibleCount] = useState(6)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let settled = false

    const finish = (parsed: BlogPost[] = []) => {
      if (settled) return
      settled = true
      setPosts(parsed)
      setIsLoading(false)
    }

    window.latestPost = (json: BloggerFeed) => {
      const entries = json?.feed?.entry ?? []
      const parsed: BlogPost[] = entries.map((entry) => ({
        title: entry.title.$t,
        link: getAlternateLink(entry.link),
        thumbnail: entry.media$thumbnail?.url?.replace('s72-c', 's400') ?? '',
        published: entry.published.$t,
        excerpt: entry.content.$t.replace(/(<([^>]+)>)/gi, '').slice(0, 120) + '…',
      }))
      finish(parsed)
    }

    const script = document.createElement('script')
    script.src =
      'https://jeamshiv.blogspot.com/feeds/posts/default?alt=json-in-script&callback=latestPost'
    script.async = true
    script.onerror = () => finish([])
    document.body.appendChild(script)

    const timeoutId = window.setTimeout(() => finish([]), FEED_TIMEOUT_MS)

    return () => {
      settled = true
      window.clearTimeout(timeoutId)
      script.remove()
      delete window.latestPost
    }
  }, [])

  return (
    <section id="blog" aria-label="Blog posts" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="Latest Blog"
          title="My Blog"
          description="Thoughts on development, design, and building products that matter."
        />

        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="glass h-72 animate-pulse rounded-2xl bg-surface-elevated"
              />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-muted">No blog posts found.</p>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, visibleCount).map((post) => (
                <motion.article
                  key={post.link}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-xl hover:shadow-accent/5"
                    >
                      <div className="aspect-video overflow-hidden bg-surface-elevated">
                        {post.thumbnail ? (
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : null}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-2 flex items-center gap-2 text-xs text-muted">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(post.published)}
                        </div>
                        <h3 className="line-clamp-2 font-display text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                          {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
                          {post.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                          Read More
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </motion.div>
                  </a>
                </motion.article>
              ))}
            </div>

            {visibleCount < posts.length && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-10 text-center"
              >
                <Button variant="secondary" onClick={() => setVisibleCount(posts.length)}>
                  Load More Posts
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
