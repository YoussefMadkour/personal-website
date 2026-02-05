'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Sparkles, 
  Rocket,
  Star,
  CheckCircle2,
  Mail,
  MessageSquare,
  ArrowRight,
  Clock,
  Award,
  Phone
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Thank you for your message! I will get back to you soon.')
    } catch (error) {
      setIsSubmitting(false)
      alert('Sorry, there was an error sending your message. Please try again or email me directly at madkour.youssef@gmail.com')
      console.error('Form submission error:', error)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const portfolioItems = [
    {
      title: 'MB Logistics',
      description: 'End-to-end logistics & delivery solutions platform with real-time tracking and nationwide coverage across Egypt.',
      tags: ['Next.js', 'E-commerce', 'Logistics'],
      image: '/MB Logistics.png',
      url: 'https://mbg-logistics.com/',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Symphony Development',
      description: 'Luxury real estate development website showcasing premium residential projects with elegant design and immersive experience.',
      tags: ['Next.js', 'Real Estate', 'Luxury'],
      image: '/Symphony.png',
      url: 'https://symphony-development.com/',
      gradient: 'from-amber-500 to-yellow-600'
    },
    {
      title: 'Kelvinator Home',
      description: 'Modern e-commerce platform for home appliances with comprehensive product catalog, shopping cart, and seamless checkout experience.',
      tags: ['E-commerce', 'WooCommerce', 'Home Appliances'],
      image: '/Kelvinator.png',
      url: 'https://kelvinator-home.com/',
      gradient: 'from-green-500 to-lime-600'
    },
    {
      title: 'Jabclub',
      description: 'Fighting club website featuring class schedules, membership plans, trainer profiles, and event management for boxing and MMA enthusiasts.',
      tags: ['Next.js', 'Fitness', 'Booking'],
      image: '/Jabclub.png',
      url: 'https://jabclubegy.com/',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Jabclub Member App',
      description: 'Admin dashboard and member portal for managing class schedules, bookings, payments, and member accounts. Features real-time schedule updates and comprehensive class management.',
      tags: ['Next.js', 'Admin Dashboard', 'Member Portal'],
      image: '/app.jabclub.png',
      url: 'https://app.jabclubegy.com/',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Wave Way Marine',
      description: 'Marine supply solutions platform serving ports across Egypt with comprehensive logistics services and 24/7 operations.',
      tags: ['Next.js', 'Marine', 'Logistics'],
      image: '/waveway.png',
      url: 'https://wave-way.com/',
      gradient: 'from-blue-500 to-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-neutral-950" />
              </div>
              <div>
                <span className="text-xl font-bold text-amber-400">YM</span>
                <span className="text-sm text-neutral-500 ml-2 hidden sm:inline">Web Development</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-8"
            >
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
              >
                Portfolio
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 font-semibold"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700/50 mb-8"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-neutral-300">Elite Web Development & Digital Solutions</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Youssef Madkour
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-3xl mx-auto"
            >
              Transforming Ideas Into{' '}
              <span className="text-amber-400 font-semibold">Digital Excellence</span>
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto"
            >
              Crafting exceptional digital experiences that transform businesses. I build high-performance websites, e-commerce platforms, and custom web solutions that combine stunning design with cutting-edge technology to deliver measurable results and elevate your online presence.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 font-semibold text-lg px-8 py-6 h-auto"
              >
                View Packages
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                className="border-2 border-neutral-700 hover:border-amber-500 hover:text-amber-400 text-neutral-300 text-lg px-8 py-6 h-auto"
                style={{ borderColor: 'rgba(62, 61, 61, 1)' }}
              >
                View Portfolio
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            >
              {[
                { icon: Code2, label: 'Custom Code', value: '100%' },
                { icon: Smartphone, label: 'Responsive', value: '100%' },
                { icon: Zap, label: 'Fast Loading', value: '100%' },
                { icon: Award, label: 'Quality', value: '100%' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neutral-100">{stat.value}</div>
                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="text-amber-400">Deliver</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Elite web development services that transform your vision into powerful digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Custom Development',
                description: 'Bespoke websites built from scratch using modern technologies and best practices for optimal performance.',
                gradient: 'from-amber-500 to-orange-500'
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Flawless experience across all devices - from mobile phones to large desktop screens.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Rocket,
                title: 'Speed & SEO',
                description: 'Lightning-fast load times and optimized for search engines to maximize your online presence.',
                gradient: 'from-emerald-500 to-teal-500'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-neutral-100">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-neutral-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-amber-400">Package</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Select the perfect plan for your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-neutral-900/50 border-neutral-800 hover:border-neutral-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <Sparkles className="w-5 h-5 text-green-400" />
                    </div>
                    <Badge variant="outline" className="border-green-500/50 text-green-400">Basic</Badge>
                  </div>
                  <CardTitle className="text-2xl text-neutral-100">Basic Package</CardTitle>
                  <CardDescription className="text-base">
                    Best for: personal websites & small businesses
                  </CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-neutral-100">18,000</span>
                      <span className="text-xl text-neutral-400">EGP</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">1–3 pages</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Custom website design</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Mobile responsive</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Contact form</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Basic SEO setup</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-neutral-800">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: 1 week</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline"
                    className="w-full border-2 border-neutral-700 hover:border-green-500 hover:text-green-400 font-semibold py-6"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Standard Package - Most Popular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-semibold px-4 py-1.5 text-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </Badge>
              </div>
              <Card className="h-full bg-gradient-to-b from-amber-950/50 to-neutral-900/50 border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-xl shadow-amber-500/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <Rocket className="w-5 h-5 text-amber-400" />
                    </div>
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">Standard</Badge>
                  </div>
                  <CardTitle className="text-2xl text-neutral-100">Standard Package</CardTitle>
                  <CardDescription className="text-base">
                    Best for: growing businesses & startups
                  </CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-amber-400">25,000</span>
                      <span className="text-xl text-neutral-400">EGP</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">4–6 pages</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Custom UI/UX design</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Mobile & tablet optimization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">CMS (easy content editing)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">SEO basics</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">1–2 revision rounds</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-amber-500/20">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: 1 week</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 font-semibold py-6"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full bg-neutral-900/50 border-neutral-800 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Star className="w-5 h-5 text-purple-400" />
                    </div>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-400">Premium</Badge>
                  </div>
                  <CardTitle className="text-2xl text-neutral-100">Premium Package</CardTitle>
                  <CardDescription className="text-base">
                    Best for: brands that want a high-end, polished website
                  </CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-neutral-100">30,000</span>
                      <span className="text-xl text-neutral-400">EGP</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">7–10+ pages</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Advanced custom design & animations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Full CMS setup + guidance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Speed & advanced SEO optimization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Integrations (booking, payments, etc.)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">Priority support & revisions</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-neutral-800">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: 2 weeks</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline"
                    className="w-full border-2 border-neutral-700 hover:border-purple-500 hover:text-purple-400 font-semibold py-6"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-amber-400">Portfolio</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real projects, real results. Explore the digital solutions I've built for leading businesses across industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50 transition-all duration-300 group overflow-hidden"
                >
                  <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${item.gradient} ${item.url ? 'cursor-pointer' : ''}`}
                       onClick={() => item.url && window.open(item.url, '_blank')}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Code2 className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors" />
                        </div>
                      </>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl text-neutral-100 group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </CardTitle>
                      {item.url && (
                        <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-amber-400 transition-colors flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <CardDescription className="text-base text-neutral-600">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Array.isArray(item.tags) ? item.tags.map((tag, tagIdx) => (
                        <Badge 
                          key={tagIdx} 
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-300 border-neutral-700"
                        >
                          {tag}
                        </Badge>
                      )) : (
                        <Badge 
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-300 border-neutral-700"
                        >
                          {item.tags}
                        </Badge>
                      )}
                    </div>
                    {item.url && (
                      <div className="pt-2 border-t border-neutral-800">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-neutral-700 hover:border-amber-500 hover:text-amber-400 text-sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(item.url, '_blank')
                          }}
                        >
                          Visit Website
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-amber-400">Connect</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch today.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardHeader>
                <CardTitle className="text-2xl text-neutral-100">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 font-semibold py-6 h-auto"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <MessageSquare className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/20">
                      <Mail className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-neutral-500 mb-1">Email</div>
                      <a href="mailto:madkour.youssef@gmail.com" className="text-lg font-semibold text-neutral-100 hover:text-amber-400 transition-colors break-all">
                        madkour.youssef@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Card className="bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/20">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Phone</div>
                      <a href="tel:01148989893" className="text-lg font-semibold text-neutral-100 hover:text-amber-400 transition-colors">
                        01148989893
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/20">
                      <MessageSquare className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Response Time</div>
                      <div className="text-lg font-semibold text-neutral-100">Within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-neutral-950" />
              </div>
              <div>
                <span className="text-xl font-bold text-amber-400">Youssef Madkour</span>
                <p className="text-sm text-neutral-500">Elite Web Development & Digital Solutions</p>
              </div>
            </div>
            <p className="text-sm text-neutral-500 text-center md:text-right">
              © {new Date().getFullYear()} Youssef Madkour. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
