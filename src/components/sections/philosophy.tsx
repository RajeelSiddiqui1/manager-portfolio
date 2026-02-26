
"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { Quote } from 'lucide-react'
import { ScrollReveal } from '../scroll-reveal'

export function Philosophy() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-headline font-bold leading-tight italic text-foreground mb-12">
            "{portfolioData.personal.philosophy}"
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-primary font-headline font-semibold tracking-widest uppercase text-sm">My Philosophy</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
