import { Outlet } from 'react-router-dom'
import { BackgroundEffects } from './BackgroundEffects'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { PageLoader } from './PageLoader'

export function SiteLayout() {
  return (
    <>
      <PageLoader />
      <BackgroundEffects />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
