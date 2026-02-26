
"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { ScrollReveal } from '../scroll-reveal'
import * as Icons from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function Services() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4 tracking-tight">Core Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Specialized strategic services designed to bridge the gap between complex engineering and business objectives.</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon]
            return (
              <ScrollReveal key={index}>
                <Card className="h-full group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </div>
                    <CardTitle className="text-2xl font-headline font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
