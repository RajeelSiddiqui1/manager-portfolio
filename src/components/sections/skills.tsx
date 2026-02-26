"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { ScrollReveal } from '../scroll-reveal'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  return (
    <section className="py-32 bg-card/40 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">The Executive Toolkit</h3>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">A multi-disciplinary approach to engineering leadership and business growth.</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-16">
          {portfolioData.skills.map((skillGroup, index) => (
            <ScrollReveal key={index} className="flex flex-col">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-1.5 w-8 bg-primary rounded-full" />
                <h3 className="text-lg font-black text-foreground uppercase tracking-widest">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <Badge 
                    key={sIdx} 
                    variant="secondary" 
                    className="px-5 py-2.5 rounded-xl text-sm font-bold bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border/50 hover:scale-105 cursor-default shadow-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}