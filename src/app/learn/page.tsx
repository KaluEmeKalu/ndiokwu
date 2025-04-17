"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { getGuideContent } from '@/lib/markdown';

export default function LearnPage() {
  // This would come from the server component in a real app
  // For now, we'll use mock data that matches the structure
  const sections = [
    {
      title: "Introduction",
      content: `<p><strong>Ndịokwu</strong> is the most efficient writing system ever developed for the <strong>Igbo language</strong>. Designed for phonetic precision, simplicity, and speed, it compresses the entire syllabic inventory of Igbo into:</p>
      <ul>
        <li><strong>44 base consonants</strong></li>
        <li><strong>8 consistent vowel diacritics</strong></li>
        <li><strong>8 independent vowels</strong></li>
      </ul>
      <p>It is fully Unicode-compatible, with each consonant-vowel pairing forming a single, elegant glyph. Mastery can be achieved in <strong>under 30 minutes</strong>.</p>`
    },
    {
      title: "Vowel Diacritics",
      content: `<p>Each consonant defaults to the vowel <strong>"a"</strong> (no mark). To indicate other vowels, apply the corresponding diacritic:</p>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr class="bg-purple-100 dark:bg-purple-900/30">
            <th class="border p-2">Vowel</th>
            <th class="border p-2">Diacritic</th>
            <th class="border p-2">Unicode</th>
            <th class="border p-2">Placement</th>
            <th class="border p-2">Example (m)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">a</td>
            <td class="border p-2">—</td>
            <td class="border p-2">—</td>
            <td class="border p-2">No mark</td>
            <td class="border p-2 text-xl">𑀠</td>
          </tr>
          <tr>
            <td class="border p-2">e</td>
            <td class="border p-2">ʼ</td>
            <td class="border p-2">U+02BC</td>
            <td class="border p-2">Top-right tick</td>
            <td class="border p-2 text-xl">𑀠ʼ</td>
          </tr>
          <tr>
            <td class="border p-2">i</td>
            <td class="border p-2">̊</td>
            <td class="border p-2">U+030A</td>
            <td class="border p-2">Ring above</td>
            <td class="border p-2 text-xl">𑀠̊</td>
          </tr>
          <tr>
            <td class="border p-2">ị</td>
            <td class="border p-2">̈</td>
            <td class="border p-2">U+0308</td>
            <td class="border p-2">Double dots above</td>
            <td class="border p-2 text-xl">𑀠̈</td>
          </tr>
          <tr>
            <td class="border p-2">o</td>
            <td class="border p-2">̣</td>
            <td class="border p-2">U+0323</td>
            <td class="border p-2">Dot below</td>
            <td class="border p-2 text-xl">𑀠̣</td>
          </tr>
          <tr>
            <td class="border p-2">ọ</td>
            <td class="border p-2">̤</td>
            <td class="border p-2">U+0324</td>
            <td class="border p-2">Two dots below</td>
            <td class="border p-2 text-xl">𑀠̤</td>
          </tr>
          <tr>
            <td class="border p-2">u</td>
            <td class="border p-2">̱</td>
            <td class="border p-2">U+0331</td>
            <td class="border p-2">Short line below</td>
            <td class="border p-2 text-xl">𑀠̱</td>
          </tr>
          <tr>
            <td class="border p-2">ụ</td>
            <td class="border p-2">̳</td>
            <td class="border p-2">U+0333</td>
            <td class="border p-2">Double line below</td>
            <td class="border p-2 text-xl">𑀠̳</td>
          </tr>
          <tr>
            <td class="border p-2">∅ (bare consonant)</td>
            <td class="border p-2">̆</td>
            <td class="border p-2">U+0306</td>
            <td class="border p-2">Breve above center</td>
            <td class="border p-2 text-xl">𑀠̆</td>
          </tr>
        </tbody>
      </table>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Independent Vowels</h3>
      <p>When a vowel appears by itself or starts a word, use these standalone characters:</p>
      <table class="w-full border-collapse my-4">
        <thead>
          <tr class="bg-purple-100 dark:bg-purple-900/30">
            <th class="border p-2">Vowel</th>
            <th class="border p-2">Glyph</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">a</td>
            <td class="border p-2 text-xl">𑀩</td>
          </tr>
          <tr>
            <td class="border p-2">e</td>
            <td class="border p-2 text-xl">ꕺ</td>
          </tr>
          <tr>
            <td class="border p-2">i</td>
            <td class="border p-2 text-xl">ꕈ</td>
          </tr>
          <tr>
            <td class="border p-2">ị</td>
            <td class="border p-2 text-xl">ꔕ</td>
          </tr>
          <tr>
            <td class="border p-2">o</td>
            <td class="border p-2 text-xl">𑀏</td>
          </tr>
          <tr>
            <td class="border p-2">ọ</td>
            <td class="border p-2 text-xl">𑀐</td>
          </tr>
          <tr>
            <td class="border p-2">u</td>
            <td class="border p-2 text-xl">𑀑</td>
          </tr>
          <tr>
            <td class="border p-2">ụ</td>
            <td class="border p-2 text-xl">𑀒</td>
          </tr>
        </tbody>
      </table>`
    },
    {
      title: "Writing Rules",
      content: `<h3 class="text-xl font-bold mt-6 mb-3">Rule 1: True Digraphs Are Native Consonants</h3>
      <p>Treat these digraphs as <strong>single letters</strong>:</p>
      <ul class="list-disc pl-5 my-3">
        <li><strong>ch, gb, gh, gw, kp, kw, nw, ny</strong></li>
      </ul>
      <p>They behave like any other base consonant:</p>
      <ul class="list-disc pl-5 my-3">
        <li><em>nwa</em> → ꖷ</li>
        <li><em>nye</em> → ꕚʼ</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Rule 2: Double Consonants (Geminates)</h3>
      <p>For <strong>repeated consonants</strong>, just <strong>double the base</strong>.<br>No diacritic is used.</p>
      <ul class="list-disc pl-5 my-3">
        <li><em>mma</em> → ꖝꖝ</li>
        <li><em>nno</em> → ꖫꖫ̣</li>
        <li><em>nnyocha</em> → ꖫꖫʼꗏ̤𑀳ʼ</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Rule 3: Bare Consonants (Breve ◌̆)</h3>
      <p>In <strong>Igbo</strong>, <strong>bare consonants should generally not occur</strong>, since every syllable has a vowel, and consonant clusters are handled as <strong>native digraphs</strong> (e.g. <em>ndị</em> → ꗏ̈)</p>
      <p>However, the <strong>breve diacritic (◌̆)</strong> is reserved for <strong>non-Igbo words</strong>, transliterations, or <strong>foreign names</strong> where a true bare consonant must be shown:</p>
      <ul class="list-disc pl-5 my-3">
        <li><em>film</em> → ꗦ̊ ꖝ ꖝ̆</li>
        <li><em>Chris</em> → 𑀳̆ꕫʼ𑀲</li>
      </ul>
      <p>Use this only when strictly necessary.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Rule 4: Independent Vowels Stay Standalone</h3>
      <p>Use <strong>standalone vowel characters</strong> when:</p>
      <ul class="list-disc pl-5 my-3">
        <li>A vowel starts a word</li>
        <li>The vowel is by itself</li>
      </ul>
      <p>Examples:</p>
      <ul class="list-disc pl-5 my-3">
        <li><em>ọ dị mma</em> → 𑀐 ꖙ̈ ꖝꖝ</li>
        <li><em>a na m</em> → 𑀩 ꖫ ꖝ</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Rule 5: Tone Marks (Optional)</h3>
      <p>If explicit tone marking is needed, use:</p>
      <ul class="list-disc pl-5 my-3">
        <li>High tone: <strong>˄</strong> (place after vowel diacritic if one exists)</li>
        <li>Low tone: <strong>˅</strong> (place after vowel diacritic if one exists)</li>
        <li>Mid tone: no mark (default)</li>
      </ul>
      <p>Example: <em>hé</em> (high tone) → ꖹʼ˄</p>`
    },
    {
      title: "Glyph Groups",
      content: `<p>The Ndịokwu script organizes consonants into logical groups based on phonetic properties:</p>
      
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-purple-100 dark:bg-purple-900/30">
            <th class="border p-2">Group</th>
            <th class="border p-2">Assigned Sounds</th>
            <th class="border p-2">Glyphs</th>
            <th class="border p-2">Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2 font-semibold">Group A1</td>
            <td class="border p-2">gb, gh, gw</td>
            <td class="border p-2 text-xl">ꘛ, ꔎ, ꖸ</td>
            <td class="border p-2">Voiced labial–velars/fricatives; looped energy</td>
          </tr>
          <tr>
            <td class="border p-2 font-semibold">Group B1</td>
            <td class="border p-2">b, j, nt, nd</td>
            <td class="border p-2 text-xl">ꕫ, ꕦ, ꘧, ꗏ</td>
            <td class="border p-2">Voiced stops + affricates</td>
          </tr>
          <tr>
            <td class="border p-2 font-semibold">Group B2</td>
            <td class="border p-2">f, v</td>
            <td class="border p-2 text-xl">ꗦ, ꘣</td>
            <td class="border p-2">Voiceless/voiced fricatives</td>
          </tr>
          <tr>
            <td class="border p-2 font-semibold">Group D2</td>
            <td class="border p-2">ng, kp</td>
            <td class="border p-2 text-xl">𑀔, ꗯ</td>
            <td class="border p-2">Deep-back/nasal–labial clusters</td>
          </tr>
          <tr>
            <td class="border p-2 font-semibold">Group F</td>
            <td class="border p-2">mb, nk</td>
            <td class="border p-2 text-xl">𑄘, 𑄉</td>
            <td class="border p-2">Pre-nasalized clusters</td>
          </tr>
        </tbody>
      </table>
      
      <p>Understanding these phonetic groupings helps to recognize patterns in the Ndịokwu script and makes learning the system more intuitive.</p>`
    }
  ];

  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Learn Ndịokwu
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar navigation */}
            <motion.div 
              className="md:w-64 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sticky top-20">
                <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-400">Contents</h2>
                <nav>
                  <ul className="space-y-2">
                    {sections.map((section, index) => (
                      <li key={index}>
                        <button
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                            activeSection === index
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 font-medium'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setActiveSection(index)}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>

            {/* Main content */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-400">
                  {sections[activeSection].title}
                </h2>
                
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: sections[activeSection].content }}
                />
                
                <div className="mt-10 flex justify-between">
                  <button 
                    className={`px-4 py-2 rounded-md ${
                      activeSection > 0 
                        ? 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed'
                    }`}
                    onClick={() => activeSection > 0 && setActiveSection(activeSection - 1)}
                    disabled={activeSection === 0}
                  >
                    Previous
                  </button>
                  
                  <button 
                    className={`px-4 py-2 rounded-md ${
                      activeSection < sections.length - 1 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                        : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed'
                    }`}
                    onClick={() => activeSection < sections.length - 1 && setActiveSection(activeSection + 1)}
                    disabled={activeSection === sections.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 