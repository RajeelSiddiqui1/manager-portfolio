
"use client"

import React, { useState } from 'react'
import { ScrollReveal } from '../scroll-reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, ArrowRight, Loader2 } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/send-email'
import { toast } from '@/hooks/use-toast'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    const result = await sendContactEmail(data);

    if (result.success) {
      toast({
        title: "Message Sent Successfully!",
        description: "Farhan will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please try again later or email directly.",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-10 lg:p-24 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/5 blur-[80px] rounded-full -ml-20 -mb-20" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <ScrollReveal>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-6 opacity-80">Contact</h2>
              <h3 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">Ready to lead your next big initiative?</h3>
              <p className="text-xl opacity-80 mb-12 font-light leading-relaxed">
                Whether you're looking for an interim lead or a permanent strategic partner, let's discuss how I can help your team deliver excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-white">alifarhan1531@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-white">Schedule a Strategic Briefing</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="bg-white/10 backdrop-blur-xl p-8 lg:p-12 rounded-[2rem] border border-white/20">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-80">Full Name</label>
                  <Input name="name" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:ring-white/30" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-80">Corporate Email</label>
                  <Input name="email" type="email" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:ring-white/30" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-80">Message</label>
                  <Textarea name="message" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px] rounded-xl focus:ring-white/30" placeholder="Tell me about your project..." />
                </div>
                <Button 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-white text-primary hover:bg-white/90 rounded-xl font-bold text-lg gap-3 group"
                >
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
