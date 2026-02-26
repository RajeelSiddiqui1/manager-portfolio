
"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { Linkedin, Github, Twitter, Mail } from 'lucide-react'
import { Button } from './ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-6 border-t bg-card/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-headline font-bold text-xl block mb-2 tracking-tight">Prime Portfolio</span>
            <p className="text-muted-foreground text-sm">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
              <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
              <a href={portfolioData.personal.socials.github}><Github className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
              <a href={portfolioData.personal.socials.twitter}><Twitter className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
              <a href="mailto:contact@farhan.com"><Mail className="w-5 h-5" /></a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
