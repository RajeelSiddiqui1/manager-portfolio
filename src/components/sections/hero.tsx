
"use client"

import Image from 'next/image'
import { portfolioData } from '@/app/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react'
import { ScrollReveal } from '../scroll-reveal'

export function Hero() {
  const { personal } = portfolioData

  return (
    <section id="about" className="pt-44 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl opacity-50" />
      
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <ScrollReveal className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Strategic Leadership
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tighter leading-[1.1]">
              Strategic <br />
              <span className="text-primary italic">Execution.</span>
            </h1>
            
            <p className="text-muted-foreground text-xl lg:text-2xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light">
              {personal.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
              <Button size="lg" className="rounded-full px-10 h-14 text-base font-semibold gap-3 shadow-xl shadow-primary/20 group" asChild>
                <a href="#work">
                  View Case Studies <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-primary/10 hover:text-primary" asChild>
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6" /></a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-primary/10 hover:text-primary" asChild>
                  <a href={`mailto:${personal.socials.email}`}><Mail className="w-6 h-6" /></a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="relative group">
            <div className="w-72 h-72 lg:w-[480px] lg:h-[480px] relative">
              <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute inset-0 bg-card rounded-[2.5rem] border-2 border-primary/20 overflow-hidden shadow-2xl">
                <Image
                  src={personal.image}
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="corporate headshot"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-border/50 max-w-[200px]">
              <p className="text-primary font-bold text-4xl mb-1">10+</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest leading-tight">Years of Executive Delivery Excellence</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
