
"use client"

import { portfolioData } from '@/app/lib/portfolio-data'
import { Linkedin, Github, Twitter, Mail } from 'lucide-react'
import { Button } from './ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-6 border-t bg-card/50">
      <div className="container mx-auto">
      
          <div className="text-center mb-6">
            <span className="font-headline font-bold text-xl block mb-2 tracking-tight">Prime Portfolio</span>
            <p className="text-muted-foreground text-sm">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
          </div>
          
        
      </div>
    </footer>
  )
}
