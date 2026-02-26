
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Philosophy } from '@/components/sections/philosophy'
import { Services } from '@/components/sections/services'
import { Skills } from '@/components/sections/skills'
import { ExperienceTimeline } from '@/components/sections/experience-timeline'
import { Projects } from '@/components/sections/projects'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background font-body selection:bg-primary/30 selection:text-primary transition-colors duration-500 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Philosophy />
        <Services />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
