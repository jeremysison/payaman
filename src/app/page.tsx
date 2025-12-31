"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code, Globe, Rocket, Shield, Sparkles, Zap } from "lucide-react";

export default function Home() {
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
      description: "Custom websites built with modern technologies and best practices"
    },
    {
      icon: Code,
      title: "Code Optimization",
      description: "Performance tuning and clean, maintainable code architecture"
    },
    {
      icon: Rocket,
      title: "SEO & Analytics",
      description: "Boost your visibility and track your success with data-driven insights"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Keep your site secure and up-to-date with ongoing support"
    }
  ];

  const features = [
    "Responsive Design",
    "Fast Performance",
    "SEO Optimized",
    "Mobile First",
    "Modern Stack",
    "24/7 Support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
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
              <Sparkles className="h-4 w-4" />
              Transform Your Digital Presence
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Website Consulting
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                That Delivers Results
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-10 max-w-2xl text-xl text-slate-600 dark:text-slate-300"
            >
              We help businesses create stunning, high-performance websites that drive growth,
              engage customers, and achieve your digital goals.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/50"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:border-blue-500 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-400"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-10 top-20 hidden h-20 w-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 blur-xl lg:block"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 hidden h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20 blur-xl lg:block"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Comprehensive solutions to elevate your online presence
            </p>
          </motion.div>

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
                  className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl dark:bg-slate-800"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                Why Choose Us?
              </h2>
              <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
                We combine technical expertise with creative vision to deliver websites that not only
                look great but perform exceptionally.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Lightning Fast</h3>
                      <p className="text-blue-100">Optimized for speed and performance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Modern Design</h3>
                      <p className="text-blue-100">Beautiful, user-friendly interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Scalable Solutions</h3>
                      <p className="text-blue-100">Grow with your business needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
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
              Let's discuss how we can transform your digital presence
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
