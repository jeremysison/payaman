"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Globe,
  Rocket,
  Shield,
  Search,
  Smartphone,
  Database,
  Palette,
  BarChart3,
  Lock,
  Zap,
  Users,
  Target,
  CheckCircle2
} from "lucide-react";

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices",
      features: [
        "Responsive & Mobile-First Design",
        "Modern Frameworks (React, Next.js, Vue)",
        "Custom Functionality & Integrations",
        "Performance Optimization",
        "Cross-Browser Compatibility",
        "Clean, Maintainable Code"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Code Optimization",
      description: "Performance tuning and clean, maintainable code architecture",
      features: [
        "Code Review & Refactoring",
        "Performance Audits",
        "Load Time Optimization",
        "Database Query Optimization",
        "Caching Strategies",
        "Best Practices Implementation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "SEO & Analytics",
      description: "Boost your visibility and track your success with data-driven insights",
      features: [
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Google Analytics Setup",
        "Keyword Research & Strategy",
        "Content Optimization",
        "Link Building Strategies"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Keep your site secure and up-to-date with ongoing support",
      features: [
        "Security Audits & Hardening",
        "SSL Certificate Management",
        "Regular Updates & Patches",
        "Backup & Recovery Solutions",
        "Monitoring & Alerts",
        "24/7 Support & Maintenance"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android Development",
        "React Native Applications",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "App Performance Tuning"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and API development",
      features: [
        "RESTful & GraphQL APIs",
        "Database Design & Optimization",
        "Server Architecture",
        "Cloud Infrastructure",
        "Microservices Development",
        "Third-Party Integrations"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design that converts",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "User Experience Optimization",
        "Design Systems",
        "Accessibility Compliance"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: BarChart3,
      title: "Digital Strategy",
      description: "Data-driven strategies to grow your online presence",
      features: [
        "Market Research & Analysis",
        "Competitive Analysis",
        "Growth Strategy Planning",
        "Conversion Rate Optimization",
        "A/B Testing & Experiments",
        "ROI Tracking & Reporting"
      ],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and requirements",
      icon: Target
    },
    {
      number: "02",
      title: "Design & Development",
      description: "We create and build your solution with attention to detail",
      icon: Code
    },
    {
      number: "03",
      title: "Testing & Optimization",
      description: "Rigorous testing ensures quality and performance",
      icon: Zap
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We launch your project and provide ongoing support",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              <Rocket className="h-4 w-4" />
              Comprehensive Solutions
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-10 max-w-2xl text-xl text-slate-600 dark:text-slate-300"
            >
              From web development to digital strategy, we offer end-to-end solutions
              to help your business thrive online.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl dark:bg-slate-800"
                >
                  <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${service.color} p-3 text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Detailed Service Offerings
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Explore our comprehensive range of services in detail
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid gap-8 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800 lg:grid-cols-2 lg:items-center"
                >
                  <div>
                    <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${service.color} p-4 text-white`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`rounded-xl bg-gradient-to-br ${service.color} p-12 text-center text-white`}>
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                      <Icon className="h-10 w-10" />
                    </div>
                    <p className="text-lg opacity-90">
                      Get started with {service.title.toLowerCase()} today
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Our Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              A proven methodology to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
                    <div className="mb-4 text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {step.number}
                    </div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                      <ArrowRight className="h-6 w-6 text-slate-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-12 text-center shadow-2xl"
          >
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Let's discuss how we can help transform your digital presence
            </p>
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-4 py-12 dark:border-slate-800 dark:bg-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Website Consulting Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

