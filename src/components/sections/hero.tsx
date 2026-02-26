"use client"

import Image from 'next/image'
import { portfolioData } from '@/app/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '../scroll-reveal'

export function Hero() {
  const { personal } = portfolioData

  return (
    <section id="about" className="pt-40 pb-32 px-6 relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          
          <ScrollReveal className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Executive Delivery Partner
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95] text-foreground">
              Driving <span className="text-primary">Global</span><br />
              Digital Scale.
            </h1>
            
            <p className="text-muted-foreground text-xl lg:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 font-medium opacity-90">
              {personal.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button size="lg" className="rounded-xl px-10 h-16 text-lg font-bold gap-3 shadow-2xl shadow-primary/30 transition-all hover:scale-105 group" asChild>
                <a href="#work">
                  Explore Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="lg" className="rounded-xl h-16 px-6 font-bold gap-2" asChild>
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl w-16 h-16 border border-transparent hover:border-primary/20" asChild>
                  <a href={`mailto:falifarhan1531@gmail.com`}><Mail className="w-6 h-6" /></a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="relative lg:w-[45%] flex justify-center">
            <div className="relative group">
              {/* Decorative backgrounds */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-3 group-hover:rotate-1 transition-transform duration-500" />
              
              <div className="relative w-72 h-72 lg:w-[480px] lg:h-[560px] rounded-[2.5rem] overflow-hidden border-4 border-background shadow-2xl bg-card">
                <Image
                  src={personal.image}
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-10 -right-6 md:-right-12 glass-card p-6 md:p-8 rounded-3xl shadow-2xl max-w-[240px] border-primary/20">
                <p className="text-primary font-black text-5xl mb-1">$12M+</p>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest leading-tight">Managed Portfolio Budget in 2023</p>
              </div>

              <div className="absolute top-10 -left-10 glass-card p-5 rounded-2xl shadow-xl border-primary/20 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">Delivery Success</p>
                    <p className="text-xl font-black">98.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}