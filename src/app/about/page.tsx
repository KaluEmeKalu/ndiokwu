"use client";

import { motion } from "framer-motion";
import NdiokwuText from '../../components/NdiokwuText';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Ndịokwu
            </h1>
        <div className="text-xl">


        </div>
            <p className="text-xl md:text-2xl">
              The story behind the most efficient writing system for the Igbo language
            </p>
          </motion.div>
        </div>
      </section>

      {/* Genesis Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">The Genesis of Ndịokwu</h2>
            <p className="text-lg md:text-xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">Bridging Mathematics, Language, and Heritage</p>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">by Kalu Eme Kalu</p>
            <hr className="border-gray-300 dark:border-gray-700 my-10 max-w-sm mx-auto" />

            <div className="space-y-7 leading-relaxed text-lg">
              <p>
                <span className="float-left text-5xl font-bold mr-2 mt-1 text-purple-700 dark:text-purple-400">W</span>hy does the average Nigerian child grow up fluent in English but illiterate in their mother tongue? Why do our indigenous languages, rich in tone, rhythm, and meaning, still rely on scripts designed for foreign tongues? These questions gnawed at me for years.
              </p>

              <p>As Nigeria strides deeper into the digital age, we face a paradox: our people are increasingly fluent in the languages of code and commerce but disconnected from the scripts of their ancestors. If language is power, then script is the infrastructure of that power. And right now, Igbo, like many African languages, lacks the infrastructure to thrive in modern, global systems.</p>

              <p>Before my time at Meta, I was wrestling with another kind of infrastructure problem: how to break into top-tier software engineering. To do that, I had to master discrete mathematics, a foundation of computer science that includes logic, set theory, graph theory, and combinatorics. Its precision and structure shaped the way I thought, not just about algorithms, but about language itself.</p>

              <p>Immersing myself in math rewired how I saw the world. I began to see symbols as more than notation. The summation symbol (∑), for example, condenses a loop, a process, a decision, all into one elegant mark. That realization unlocked my appreciation for functional programming, a coding paradigm rooted in mathematical purity and clarity. It also planted a seed.</p>

              {/* Pull Quote 1 */}
              <blockquote className="my-10 p-4 border-l-4 border-purple-600 dark:border-purple-400 bg-purple-50 dark:bg-gray-800 italic text-xl font-medium text-purple-900 dark:text-purple-200">
                "If math and code could speak so precisely through symbols... why couldn't our language?"
              </blockquote>

              <p>At the same time, I was studying Mandarin Chinese, a tonal language with just over 400 syllables but thousands of meanings, unlocked by tone and context. Its efficiency fascinated me, especially as a native Igbo speaker. Igbo too is tonal, rhythmic, and deeply expressive. But unlike Mandarin, Igbo lacks a widely adopted indigenous script.</p>

              <p>Nsibidi, our ancestral ideographic system, is beautiful but symbolic, not phonetic. In 2009, Lotanna Igwe-Odunze introduced Ńdébé, a modern attempt to bridge that gap. It was a noble innovation, but adoption lagged, perhaps due to complexity, lack of phonological regularity, or the steep learning curve.</p>

              <p>That search led me to Vai, an indigenous syllabary created in 1830s Liberia by Momolu Duwalu Bukele, who claimed the script came to him in a dream. Vai characters represent full syllables, and the script empowered the Vai people to write, record, and govern themselves in their own tongue.</p>

              <p>That was my turning point. I realized: what if Igbo had a script that balanced ease of learning, tonal precision, and cultural identity without relying on colonial orthographies?</p>

              <p>That's how Ndịokwu was born.</p>

              <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">What is Ndịokwu?</h3>

              <p>Ndịokwu is an Abugida: a writing system that combines the best of alphabets and syllabaries. Each character represents a consonant-vowel unit, and tone or vowel shifts are expressed through diacritics. This system offers:</p>

              <ul className="list-disc pl-8 space-y-2 my-6 text-base">
                <li><strong>Efficiency</strong>: A smaller, intuitive character set with high expressive power.</li>
                <li><strong>Clarity</strong>: Distinct, logical symbols designed for legibility and rapid acquisition.</li>
                <li><strong>Cultural Resonance</strong>: Visual motifs inspired by Igbo art, pattern, and geometry.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">Why It Matters</h3>

              <p>Language is more than words. It is memory. It is worldview. It is the engine of economic, cultural, and technological empowerment. If we cannot write our language fluently, we cannot think in it fluently. And if we cannot think in it, we are forever outsourcing our identity.</p>

              <p>Ndịokwu is my answer to that problem. It is not just a script, it is a blueprint for reclaiming ownership of our voice.</p>

              {/* Pull Quote 2 */}
               <blockquote className="my-10 p-6 border-t-2 border-b-2 border-purple-600 dark:border-purple-400 text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
                "As with great software, a writing system must be built with intention, scalability, and user empathy. I designed Ndịokwu for the next generation of Igbo learners: children, coders, creators, and citizens of the digital future."
              </blockquote>

              <p>May it serve as both bridge and beacon: connecting our past and illuminating our path forward.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Elements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Inspirations Behind Ndịokwu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-purple-800">∑</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Mathematics</h3>
                <p className="text-gray-600 text-center">The precision and elegance of mathematical notation influenced the design principles.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-purple-800">谷</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Mandarin</h3>
                <p className="text-gray-600 text-center">The tonal efficiency of Mandarin inspired the phonetic approach to Ndịokwu.</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-purple-800 dark:text-purple-300">ꔔ</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Vai Script</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  The Vai syllabary provided a practical model. Most Ndịokwu characters are directly from this script, devised by Momolu Duwalu Bukele in Liberia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 