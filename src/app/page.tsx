
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Philosophy } from '@/components/sections/philosophy'
import { Services } from '@/components/sections/services'
import { Skills } from '@/components/sections/skills'
import { ExperienceTimeline } from '@/components/sections/experience-timeline'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { Chatbot } from '@/components/chatbot'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background font-body selection:bg-primary/20 selection:text-primary transition-colors duration-500 overflow-x-hidden scroll-smooth">
        <Navbar />
        <Hero />
        <Services />
        <Philosophy />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Contact />
        <Footer />
        <Chatbot />
        <Toaster />
      </main>
    </ThemeProvider>
  )
}
