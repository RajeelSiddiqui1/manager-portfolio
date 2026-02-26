
"use client"

import Image from 'next/image'
import { portfolioData } from '@/app/lib/portfolio-data'
import { ScrollReveal } from '../scroll-reveal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

export function Projects() {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4 tracking-tight">Case Studies</h2>
          <p className="text-muted-foreground">Deep dives into complex challenges, technical strategy, and successful outcomes.</p>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ScrollReveal key={index} className="group">
              <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint="project dashboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <Badge key={tIdx} variant="outline" className="text-xs uppercase tracking-wider">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <Button variant="default" className="w-full bg-primary group/btn rounded-xl">
                    View Case Study <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
