"use client";

import { motion } from "framer-motion";

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
                <span className="float-left text-5xl font-bold mr-2 mt-1 text-purple-700 dark:text-purple-400">B</span>efore my tenure at Meta, I confronted a pivotal challenge: mastering discrete mathematics to navigate the demanding landscape of technical interviews. This discipline, foundational to computer science, encompasses areas like logic, set theory, graph theory, and combinatorics. Its principles are instrumental in algorithm design, data structures, and cryptography, making it indispensable for software engineers.
              </p>

              <p>Immersing myself in discrete mathematics reshaped my cognitive framework. I began to perceive mathematical notation not merely as symbols but as a concise language capable of conveying complex ideas with precision. For instance, the summation symbol (∑) succinctly represents iterative processes, embodying loops and conditions in a single character. This realization deepened my appreciation for functional programming, a paradigm that emphasizes pure functions, immutability, and declarative code—attributes that align closely with mathematical logic and reduce the likelihood of errors.</p>

              {/* Pull Quote 1 */}
              <blockquote className="my-10 p-4 border-l-4 border-purple-600 dark:border-purple-400 bg-purple-50 dark:bg-gray-800 italic text-xl font-medium text-purple-900 dark:text-purple-200">
                "Inspired by these insights, I set out to develop the Ndịokwu Igbo Abugida—a writing system tailored for the Igbo language."
              </blockquote>

              <p>Concurrently, I embarked on learning Mandarin Chinese, drawn by its structural elegance. Mandarin comprises approximately 409 distinct syllables, but when combined with its tonal system—four primary tones and a neutral tone—the language achieves a rich tapestry of meanings. This "sound-efficient, tone-rich" nature intrigued me, especially given my familiarity with Igbo, another tonal language. However, unlike Mandarin, Igbo lacked a comprehensive indigenous writing system.</p>

              <p>Historically, the Igbo people utilized Nsibidi, an ideographic script originating around 400 CE among the Ejagham people and later adopted by neighboring cultures, including the Igbo. Nsibidi conveyed concepts through symbols, often used in rituals and secret societies, but it wasn't a full-fledged writing system for daily communication. In 2009, Lotanna Igwe-Odunze introduced Ńdébé, a modern script inspired by traditional Igbo designs. While Ńdébé represents a significant step towards a functional Igbo writing system, its adoption has been limited, and its complexity posed challenges for learners.</p>

              <p>My exploration led me to the Vai syllabary, devised in the 1830s by Momolu Duwalu Bukele of Liberia. Remarkably, Bukele reported that the script was revealed to him in a dream. The Vai script is a syllabary, with each character representing a syllable, and it facilitated literacy among the Vai people, who used it for various purposes, including correspondence and record-keeping. The success of the Vai syllabary demonstrated the potential of indigenous scripts to empower communities linguistically and culturally.</p>

              <p>Inspired by these insights, I set out to develop the Ndịokwu Igbo Abugida—a writing system tailored for the Igbo language. An abugida strikes a balance between alphabets and syllabaries, where each character denotes a consonant-vowel combination, and diacritics modify the inherent vowel. This structure offers a compromise between the learning curve of alphabets and the reading efficiency of syllabaries.</p>

              <p>In crafting Ndịokwu, I prioritized:</p>

              <ul className="list-disc pl-8 space-y-2 my-6 text-base">
                <li><strong>Efficiency</strong>: Streamlining the learning process by reducing the number of characters without sacrificing expressiveness.</li>
                <li><strong>Clarity</strong>: Ensuring each symbol is distinct and intuitive, minimizing ambiguity.</li>
                <li><strong>Cultural Resonance</strong>: Drawing inspiration from traditional Igbo motifs to foster a sense of identity and continuity.</li>
              </ul>

              {/* Pull Quote 2 */}
               <blockquote className="my-10 p-6 border-t-2 border-b-2 border-purple-600 dark:border-purple-400 text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
                "Ndịokwu aspires to provide Igbo speakers with a script that is not only functional but also a source of pride—a tool that honors our heritage while embracing the future."
              </blockquote>

              <p>Much like software development, creating a writing system demands intentionality and user-centric design. Ndịokwu aspires to provide Igbo speakers with a script that is not only functional but also a source of pride—a tool that honors our heritage while embracing the future.</p>
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
                  The Vai syllabary provided a practical model. Most Ndịokwu characters are  directly from this script, devised by Momolu Duwalu Bukele in Liberia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 