import { Outlet } from 'react-router-dom'
import { BackgroundEffects } from './BackgroundEffects'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { PageLoader } from './PageLoader'
import { ScrollToTop } from './ScrollToTop'

export function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <PageLoader />
      <BackgroundEffects />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
