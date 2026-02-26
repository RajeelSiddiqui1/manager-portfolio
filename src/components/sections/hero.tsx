
"use client"

import Image from 'next/image'
import { portfolioData } from '@/app/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Linkedin, Github, Twitter } from 'lucide-react'
import { ScrollReveal } from '../scroll-reveal'

export function Hero() {
  const { personal } = portfolioData

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <ScrollReveal className="flex-1 text-center lg:text-left">
            <h2 className="text-primary font-headline font-semibold text-lg mb-4 tracking-wider uppercase">
              {personal.title}
            </h2>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold mb-6 tracking-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{personal.name}</span>
            </h1>
            <p className="text-muted-foreground text-xl lg:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {personal.bio}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button size="lg" className="rounded-full px-8 gap-2 bg-primary group">
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href={personal.socials.github}><Github className="w-5 h-5" /></a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href={personal.socials.twitter}><Twitter className="w-5 h-5" /></a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="relative">
            <div className="w-64 h-64 lg:w-96 lg:h-96 relative rounded-full overflow-hidden border-8 border-card shadow-2xl ring-4 ring-primary/20">
              <Image
                src={personal.image}
                alt={personal.name}
                fill
                className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
                data-ai-hint="professional profile"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card p-6 rounded-2xl shadow-xl border animate-bounce">
              <span className="text-primary font-bold text-3xl">8+</span>
              <p className="text-xs text-muted-foreground uppercase font-semibold">Years Exp.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
