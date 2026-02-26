
"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { ScrollReveal } from '../scroll-reveal'
import { Briefcase, GraduationCap } from 'lucide-react'

export function ExperienceTimeline() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Experience */}
          <div>
            <ScrollReveal className="flex items-center gap-3 mb-12">
              <div className="p-3 bg-primary rounded-xl text-primary-foreground shadow-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-headline font-bold tracking-tight">Professional Path</h2>
            </ScrollReveal>
            
            <div className="space-y-12 relative border-l-2 border-primary/20 pl-8 ml-6">
              {portfolioData.experience.map((exp, index) => (
                <ScrollReveal key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg" />
                  <span className="text-primary font-bold text-sm mb-1 block uppercase tracking-wide">{exp.period}</span>
                  <h3 className="text-xl font-headline font-bold mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground font-semibold mb-3">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <ScrollReveal className="flex items-center gap-3 mb-12">
              <div className="p-3 bg-accent rounded-xl text-accent-foreground shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-headline font-bold tracking-tight">Education</h2>
            </ScrollReveal>
            
            <div className="space-y-12 relative border-l-2 border-accent/20 pl-8 ml-6">
              {portfolioData.education.map((edu, index) => (
                <ScrollReveal key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-background shadow-lg" />
                  <span className="text-accent font-bold text-sm mb-1 block uppercase tracking-wide">{edu.period}</span>
                  <h3 className="text-xl font-headline font-bold mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground font-semibold mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
