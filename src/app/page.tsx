"use client";

// import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NdiokwuText from "@/components/NdiokwuText";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <NdiokwuText>Ndịokwu</NdiokwuText> <span className="block mt-2">Ndịokwu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              The most efficient writing system ever developed for the Igbo language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/learn" 
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Start Learning
              </Link>
              <Link 
                href="/why" 
                className="bg-purple-800 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-purple-900 transition-colors inline-block text-center"
              >
                Why It's Superior
              </Link>
              <Link 
                href="/converter" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white/10 transition-colors inline-block text-center"
              >
                Try Converter
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 float-animation">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl md:text-9xl">
                ꗏ̈
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Ndịokwu?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the benefits of the most efficient writing system for Igbo
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="feature-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
              variants={item}
            >
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-purple-800 dark:text-purple-400">𑀚</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Phonetically Precise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                44 base consonants and 8 consistent vowel diacritics capture every sound in Igbo with precision.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
              variants={item}
            >
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-purple-800 dark:text-purple-400">ꕈ</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quick to Learn</h3>
              <p className="text-gray-600 dark:text-gray-300">
                With its logical structure and consistent rules, mastery can be achieved in under 30 minutes.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
              variants={item}
            >
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-purple-800 dark:text-purple-400">ꖷ</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Unicode Compatible</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fully digital-ready with complete Unicode support, making it perfect for modern communication.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Start learning Ndịokwu today and master the most efficient writing system for Igbo language.
            </p>
            <Link 
              href="/learn" 
              className="bg-purple-800 hover:bg-purple-900 text-white px-10 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
            >
              Start Learning Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sample Text Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">See Ndịokwu in Action</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sample Text:</h3>
              <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-xl mb-2">Ndịokwu:</p>
                <p className="text-2xl mb-6"><NdiokwuText>Ọ bụrụ na ị na-ịgụ ihe a, ọ pụtara na ị bụ onye Afurịka</NdiokwuText></p>
                
                <p className="text-xl mb-2">Igbo Latin:</p>
                <p className="text-lg mb-6">Ọ bụrụ na ị na-ịgụ ihe a, ọ pụtara na ị bụ onye Afurịka.</p>
                
                <p className="text-xl mb-2">English:</p>
                <p className="text-lg">If you are reading this, it means you are an African.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
