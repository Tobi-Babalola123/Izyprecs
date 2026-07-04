import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { TrustedBy } from '@/components/sections/trusted-by'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Process } from '@/components/sections/process'
import { SafetyQuality } from '@/components/sections/safety-quality'
import { Testimonials } from '@/components/sections/testimonials'
import { Statistics } from '@/components/sections/statistics'
import { LatestNews } from '@/components/sections/latest-news'
import { CTA } from '@/components/sections/cta'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <WhyChooseUs />
        <FeaturedProjects />
        <Process />
        <SafetyQuality />
        <Testimonials />
        <Statistics />
        <LatestNews />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
