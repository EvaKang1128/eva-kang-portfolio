import { useEffect } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Entrepreneurship } from './components/sections/Entrepreneurship'
import { Hero } from './components/sections/Hero'
import { Internships } from './components/sections/Internships'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { BackToTop } from './components/ui/BackToTop'
import { assetPath } from './utils/assetPath'

function App() {
  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    const ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]')
    const twitterImage = document.querySelector<HTMLMetaElement>('meta[name="twitter:image"]')
    const imageUrl = new URL(assetPath('/images/og/og-cover.png'), window.location.origin).href
    if (ogImage) ogImage.content = imageUrl
    if (twitterImage) twitterImage.content = imageUrl
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-ink px-4 py-3 text-sm font-bold text-white transition focus:translate-y-0"
      >
        跳到主要内容
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Internships />
        <Entrepreneurship />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
