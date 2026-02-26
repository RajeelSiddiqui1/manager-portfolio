
"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { ScrollReveal } from '../scroll-reveal'
import { ShieldCheck, Users, BarChart3 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const iconMap = {
  ShieldCheck: ShieldCheck,
  Users: Users,
  BarChart3: BarChart3,
}

export function Services() {
  return (
    <section id="focus" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Strategic Focus</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Executive Competencies</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">Specialized in bridging technical engineering with corporate business strategy to deliver high-stakes digital initiatives.</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.services.map((service, index) => {
            const IconComponent = (iconMap as any)[service.icon]
            return (
              <ScrollReveal key={index}>
                <Card className="h-full group hover:border-primary transition-all duration-500 bg-background/50 border-border/40 hover:shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                  <CardHeader className="pt-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {IconComponent && <IconComponent className="w-7 h-7" />}
                    </div>
                    <CardTitle className="text-2xl font-bold mb-3">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-base">
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
