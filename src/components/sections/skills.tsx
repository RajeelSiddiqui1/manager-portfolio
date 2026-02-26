
"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { ScrollReveal } from '../scroll-reveal'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  return (
    <section className="py-24 bg-card/50 backdrop-blur-sm border-y">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4 tracking-tight">Professional Skillset</h2>
          <p className="text-muted-foreground">A multi-disciplinary toolkit cultivated through years of technical and strategic leadership.</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-12">
          {portfolioData.skills.map((skillGroup, index) => (
            <ScrollReveal key={index} className="space-y-6">
              <h3 className="text-lg font-headline font-bold text-primary uppercase tracking-wider">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <Badge 
                    key={sIdx} 
                    variant="secondary" 
                    className="px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
