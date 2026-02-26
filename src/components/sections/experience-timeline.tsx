"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { ScrollReveal } from '../scroll-reveal'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Professional Experience Section */}
        <div className="mb-24">
          <ScrollReveal className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 text-primary rounded-2xl">
              <Briefcase className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Professional Career</h2>
              <p className="text-muted-foreground mt-1">A timeline of strategic leadership and impact.</p>
            </div>
          </ScrollReveal>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <ScrollReveal key={index}>
                <Card className="group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl border-border/50">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-lg font-semibold text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-bold text-primary whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education Section - Fixed and Enhanced Visibility */}
        <div>
          <ScrollReveal className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 text-primary rounded-2xl">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Academic Foundation</h2>
              <p className="text-muted-foreground mt-1">Foundational knowledge in technology and leadership.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.education.map((edu, index) => (
              <ScrollReveal key={index}>
                <Card className="h-full bg-accent/5 hover:bg-accent/10 transition-colors border-dashed border-2">
                  <CardContent className="p-8">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">{edu.period}</span>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground font-semibold mb-4">{edu.institution}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}