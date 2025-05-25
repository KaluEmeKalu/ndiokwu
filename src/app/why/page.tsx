"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaBrain, FaLanguage, FaChartLine } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import NdiokwuText from "@/components/NdiokwuText";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function WhyNdiokwu() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white py-20 md:py-24">
        {/* Decorative particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-3/4 -right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pb-16">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div 
                className="w-full md:w-3/5 text-left mb-8 md:mb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="inline-flex items-center mb-3 bg-purple-800/30 px-4 py-1.5 rounded-full text-purple-200 text-sm font-medium">
                  <span className="mr-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Research-backed argument
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                  <span className="inline-block">Why </span>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">Ndịokwu</span>
                    <span className="absolute -bottom-1.5 left-0 w-full h-3 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-indigo-500/40 transform -rotate-1 z-0 rounded-lg"></span>
                  </span>
                  <span className="inline-block"> Is</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-300">Superior</span>
                </h1>
                
                <p className="text-xl text-purple-100 max-w-xl mb-8 leading-relaxed">
                  Discover why Ndịokwu is cognitively aligned with how the brain naturally processes language, outperforming the Roman alphabet.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    href="#main-content" 
                    className="inline-flex items-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 font-medium text-lg shadow-lg hover:shadow-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Explore the Evidence
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="/learn" 
                    className="inline-flex items-center px-8 py-3.5 rounded-lg bg-white/10 border border-white/30 backdrop-blur-sm font-medium text-lg hover:bg-white/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Start Learning
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-2/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-600/30 animate-pulse-slow"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4 rounded-full border-2 border-purple-300/30 flex items-center justify-center">
                      <div className="absolute inset-0 border-t-2 border-l-2 border-white/20 rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-4 border-b-2 border-r-2 border-indigo-300/30 rounded-full animate-spin-reverse-slow"></div>
                      <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-2">
                            <NdiokwuText>Igbo</NdiokwuText>
                          </div>
                          <div className="text-xs uppercase tracking-widest text-indigo-300">NDIOKWU SCRIPT</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
              fill="#ffffff"
              fillOpacity=".95">
            </path>
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="main-content" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 font-sans"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Why the <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Ndịokwu</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-purple-200 dark:bg-purple-900/50 -z-10 transform -rotate-1"></span>
              </span> Script Is Superior
            </h2>
            
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              Discover the compelling evidence behind why our abugida script offers a better path to Igbo literacy.
            </p>
            
            <hr className="border-gray-300 dark:border-gray-700 my-16 max-w-sm mx-auto" />

            <div className="space-y-16 leading-relaxed text-lg">
              {/* Section 1 */}
              <motion.div 
                className="relative"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute -left-16 top-0 hidden md:block">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <FaBrain className="text-3xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="h-full w-1 bg-purple-200 dark:bg-purple-800/50 ml-10 mt-6"></div>
                </div>
                
                <div className="md:ml-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                    <span className="inline-block mr-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 md:hidden">
                      <FaBrain className="text-xl text-purple-600 dark:text-purple-400" />
                    </span>
                    <span>1. Cognitive Efficiency: <span className="text-purple-700 dark:text-purple-400">Chunking Matches the Brain's Preferences</span></span>
                  </h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 dark:border-purple-800/50">
                    <motion.ul 
                      className="list-none space-y-6 my-8"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span>The brain <strong className="text-purple-800 dark:text-purple-300">naturally processes language in "chunks"</strong>, especially at the syllable level, not at the letter or phoneme level.</span>
                      </motion.li>
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span>Igbo is a <strong className="text-purple-800 dark:text-purple-300">syllable-timed language</strong> with a highly regular <strong className="text-purple-800 dark:text-purple-300">CV (consonant-vowel)</strong> structure, making it perfectly suited for <strong className="text-purple-800 dark:text-purple-300">syllabic or syllable-based scripts</strong> like <em>Ndịokwu</em>.</span>
                      </motion.li>
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span>In contrast, the Roman alphabet requires breaking Igbo words into <strong className="text-purple-800 dark:text-purple-300">unfamiliar phonemes</strong>, increasing <strong className="text-purple-800 dark:text-purple-300">cognitive load</strong> and introducing <strong className="text-purple-800 dark:text-purple-300">orthographic inconsistencies</strong>.</span>
                      </motion.li>
                    </motion.ul>
                  </div>

                  <motion.blockquote 
                    className="my-10 p-6 border-l-4 border-purple-600 dark:border-purple-400 bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/40 dark:to-gray-800/80 rounded-r-lg shadow-md italic text-xl font-medium text-purple-900 dark:text-purple-200"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <em>Ndịokwu</em> aligns with how Igbo is spoken and how humans naturally perceive language, making literacy acquisition smoother.
                  </motion.blockquote>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div 
                className="relative"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute -left-16 top-0 hidden md:block">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <FaLightbulb className="text-3xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="h-full w-1 bg-purple-200 dark:bg-purple-800/50 ml-10 mt-6"></div>
                </div>
                
                <div className="md:ml-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                    <span className="inline-block mr-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 md:hidden">
                      <FaLightbulb className="text-xl text-purple-600 dark:text-purple-400" />
                    </span>
                    <span>2. Supports the <span className="text-purple-700 dark:text-purple-400">Syllable Hypothesis</span> in Literacy</span>
                  </h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 dark:border-purple-800/50">
                    <motion.ul 
                      className="list-none space-y-6 my-8"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span>The <strong className="text-purple-800 dark:text-purple-300">syllable hypothesis</strong> asserts that syllables—not phonemes—are the <strong className="text-purple-800 dark:text-purple-300">basic units of early literacy acquisition</strong>, especially in preliterate adults and young learners.</span>
                      </motion.li>
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span>Studies (e.g., Olson, Hildyard, Torrance, 1985) show that <strong className="text-purple-800 dark:text-purple-300">unlettered learners more easily associate symbols with syllables</strong> than with individual sounds.</span>
                      </motion.li>
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span>This is why <strong className="text-purple-800 dark:text-purple-300">syllabaries</strong> like Japanese Kana and Vai script have shown <strong className="text-purple-800 dark:text-purple-300">higher grassroots literacy success</strong> than alphabetic systems in non-literate populations.</span>
                      </motion.li>
                    </motion.ul>
                  </div>

                  <motion.blockquote 
                    className="my-10 p-6 border-l-4 border-purple-600 dark:border-purple-400 bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/40 dark:to-gray-800/80 rounded-r-lg shadow-md italic text-xl font-medium text-purple-900 dark:text-purple-200"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    By encoding whole syllables, <em>Ndịokwu</em> removes abstraction and accelerates functional literacy—especially at the grassroots level.
                  </motion.blockquote>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div 
                className="relative"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute -left-16 top-0 hidden md:block">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <FaLanguage className="text-3xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="h-full w-1 bg-purple-200 dark:bg-purple-800/50 ml-10 mt-6"></div>
                </div>
                
                <div className="md:ml-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                    <span className="inline-block mr-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 md:hidden">
                      <FaLanguage className="text-xl text-purple-600 dark:text-purple-400" />
                    </span>
                    <span>3. Reduces <span className="text-purple-700 dark:text-purple-400">Overhead of Roman Orthography</span></span>
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm mb-8">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">The Roman alphabet for Igbo imposes foreign constraints:</p>
                    
                    <div className="pl-4 border-l-4 border-purple-200 dark:border-purple-800/50">
                      <motion.ul 
                        className="list-none space-y-6 my-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.li className="flex items-start" variants={fadeIn}>
                          <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                            <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </span>
                          <span>Inconsistent vowel usage and tonal ambiguity that obscures meaning and pronunciation.</span>
                        </motion.li>
                        <motion.li className="flex items-start" variants={fadeIn}>
                          <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                            <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </span>
                          <span>Multi-letter digraphs (e.g., <em className="font-semibold">gb</em>, <em className="font-semibold">kp</em>, <em className="font-semibold">ch</em>) treated as single units in speech but broken apart in writing.</span>
                        </motion.li>
                      </motion.ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center my-12">
                    <div className="w-5/12 p-5 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                      <p className="text-red-800 dark:text-red-300 font-medium">Roman Alphabet</p>
                      <div className="border-2 border-red-200 dark:border-red-800/30 rounded px-3 py-2 mt-2 text-sm font-mono">
                      ngwọta
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                    
                    <div className="w-5/12 p-5 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                      <p className="text-green-800 dark:text-green-300 font-medium">Ndịokwu</p>
                      <div className="border-2 border-green-200 dark:border-green-800/30 rounded px-3 py-2 mt-2 text-sm font-mono">
                      ꕼ̤ꔧ  
                      </div>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-lg"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <em>Ndịokwu</em> treats each <strong className="text-purple-800 dark:text-purple-300">spoken syllable as one visual unit</strong>, preserving linguistic integrity and eliminating arbitrary spelling conventions.
                  </motion.p>

                  <motion.blockquote 
                    className="my-10 p-6 border-l-4 border-purple-600 dark:border-purple-400 bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/40 dark:to-gray-800/80 rounded-r-lg shadow-md italic text-xl font-medium text-purple-900 dark:text-purple-200"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    This makes reading and writing more <strong>intuitive</strong>, eliminating the need to memorize "spelling rules" borrowed from English or Latin.
                  </motion.blockquote>
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div 
                className="relative"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute -left-16 top-0 hidden md:block">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 01-4.89-2.51 3.5 3.5 0 014.49-4.49A3.5 3.5 0 0114.5 13.5 6 6 0 0110 16z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="md:ml-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                    <span className="inline-block mr-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 md:hidden">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 01-4.89-2.51 3.5 3.5 0 014.49-4.49A3.5 3.5 0 0114.5 13.5 6 6 0 0110 16z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                    <span>4. <span className="text-purple-700 dark:text-purple-400">Cultural Ownership</span> and Motivation</span>
                  </h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 dark:border-purple-800/50">
                    <motion.ul 
                      className="list-none space-y-6 my-8"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span>Like Vai in Liberia, <strong className="text-purple-800 dark:text-purple-300">scripts that reflect the language's spoken form</strong> foster greater <strong className="text-purple-800 dark:text-purple-300">ownership, motivation, and pride</strong> among learners.</span>
                      </motion.li>
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span><em>Ndịokwu</em> offers <strong className="text-purple-800 dark:text-purple-300">a script of our own</strong>, reinforcing identity and increasing <strong className="text-purple-800 dark:text-purple-300">intrinsic motivation to learn</strong>.</span>
                      </motion.li>
                      <motion.li className="flex items-start" variants={fadeIn}>
                        <span className="inline-block p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span>This cultural link enhances memory retention and <strong className="text-purple-800 dark:text-purple-300">deep engagement</strong>, which are key to lasting literacy.</span>
                      </motion.li>
                    </motion.ul>
                  </div>

                  <motion.blockquote 
                    className="my-10 p-6 border-l-4 border-purple-600 dark:border-purple-400 bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/40 dark:to-gray-800/80 rounded-r-lg shadow-md italic text-xl font-medium text-purple-900 dark:text-purple-200"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    Cognitive ease + cultural pride = stronger literacy outcomes.
                  </motion.blockquote>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white inline-block relative">
                <span className="relative z-10">Summary Comparison</span>
                <span className="absolute -bottom-3 left-0 w-full h-1 bg-purple-300 dark:bg-purple-500 transform -rotate-1 z-0"></span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                See how the two writing systems stack up against each other across key performance metrics.
              </p>
            </div>
            
            <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg">
                      <th className="py-6 px-8 text-left font-bold">Feature</th>
                      <th className="py-6 px-8 text-left font-bold">Roman Alphabet</th>
                      <th className="py-6 px-8 text-left font-bold"><em>Ndịokwu</em> Script</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-8 py-6 font-medium text-gray-900 dark:text-white">Symbol-Sound Mapping</td>
                      <td className="px-8 py-6 text-red-600 dark:text-red-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                          </svg>
                          Phoneme-based
                        </div>
                      </td>
                      <td className="px-8 py-6 text-green-600 dark:text-green-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          Syllable-based
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-8 py-6 font-medium text-gray-900 dark:text-white">Cognitive Load</td>
                      <td className="px-8 py-6 text-red-600 dark:text-red-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                          </svg>
                          High (abstract)
                        </div>
                      </td>
                      <td className="px-8 py-6 text-green-600 dark:text-green-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          Low (chunked)
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-8 py-6 font-medium text-gray-900 dark:text-white">Fit for Igbo Phonology</td>
                      <td className="px-8 py-6 text-red-600 dark:text-red-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                          </svg>
                          Poor (many digraphs, tone ambiguity)
                        </div>
                      </td>
                      <td className="px-8 py-6 text-green-600 dark:text-green-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          Excellent (direct CV representation)
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-8 py-6 font-medium text-gray-900 dark:text-white">Learning Curve</td>
                      <td className="px-8 py-6 text-red-600 dark:text-red-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                          </svg>
                          Steep
                        </div>
                      </td>
                      <td className="px-8 py-6 text-green-600 dark:text-green-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          Gentle
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-8 py-6 font-medium text-gray-900 dark:text-white">Cultural Relevance</td>
                      <td className="px-8 py-6 text-red-600 dark:text-red-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                          </svg>
                          Colonial import
                        </div>
                      </td>
                      <td className="px-8 py-6 text-green-600 dark:text-green-400">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          Indigenous, pride-based
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
              <p>Based on research by Olson, Hildyard, Torrance (1985) and modern literacy acquisition studies.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Claim Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <svg className="w-16 h-16 mx-auto text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900 dark:text-white">
                The Verdict Is Clear
              </h3>
            </div>
            
            <blockquote className="p-10 mx-auto relative bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-purple-900/40 dark:via-purple-800/20 dark:to-gray-900 rounded-2xl shadow-xl text-lg md:text-2xl font-medium text-gray-800 dark:text-white leading-relaxed text-center">
              <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-purple-400 dark:text-purple-600 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.995 2.707-4.995 5.919v10.39h-4.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-5.996 2.707-5.996 5.919v10.39h-4z" />
              </svg>
              
              <p>
                The <span className="text-purple-700 dark:text-purple-400 font-bold">Ndịokwu script</span>, grounded in the syllable hypothesis and chunking theory, is not just linguistically superior for Igbo—it is cognitively natural, culturally empowering, and pedagogically transformative.
              </p>
              
              <svg className="absolute bottom-0 right-0 transform translate-x-6 translate-y-6 h-16 w-16 text-purple-400 dark:text-purple-600 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.995 2.707-4.995 5.919v10.39h-4.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-5.996 2.707-5.996 5.919v10.39h-4z" />
              </svg>
            </blockquote>
            
            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 rounded-full bg-purple-300 dark:bg-purple-700"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl md:text-2xl mb-10 text-purple-100 max-w-2xl mx-auto">Join thousands of others who have discovered the natural efficiency of Ndịokwu</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href="/learn" 
                  className="block w-full bg-white text-purple-900 px-8 py-6 rounded-xl font-medium text-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                    Start Learning
                  </div>
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href="/converter" 
                  className="block w-full bg-transparent border-2 border-white text-white px-8 py-6 rounded-xl font-medium text-xl hover:bg-white/10 transition-colors shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
                    </svg>
                    Try Converter
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS classes for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        @keyframes spin-reverse-slow {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
} 