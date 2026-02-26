
"use client"

import Image from 'next/image'
import { portfolioData } from '@/app/lib/portfolio-data'
import { ScrollReveal } from '../scroll-reveal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Layers } from 'lucide-react'

export function Projects() {
  return (
    <section id="work" className="py-32 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            <Layers className="w-4 h-4" />
            Product Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Technical Case Studies</h2>
          <p className="text-muted-foreground text-lg">Deep dives into complex full-stack solutions, AI integrations, and enterprise-grade systems.</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ScrollReveal key={index} className="group">
              <div className="bg-card rounded-[2rem] overflow-hidden border border-border/50 shadow-sm group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    data-ai-hint="project dashboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none px-3 py-1 font-bold shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <Badge key={tIdx} variant="secondary" className="text-[10px] uppercase font-black tracking-tighter py-0.5 px-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    {project.liveLink ? (
                      <Button className="w-full bg-primary group/btn rounded-xl h-12 font-bold" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          View Project <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full rounded-xl h-12 font-bold border-primary/20 text-muted-foreground cursor-not-allowed">
                        Internal Project
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
