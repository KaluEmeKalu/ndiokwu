"use client";

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
// import { getGuideContent } from '@/lib/markdown';

// Consonant and vowel data
const consonants = [
  { sound: 'b', glyph: 'ꕫ' }, { sound: 'mb', glyph: '𑄘' },
  { sound: 'ch', glyph: '𑀳' }, { sound: 'n', glyph: 'ꖫ' },
  { sound: 'd', glyph: 'ꖙ' }, { sound: 'nd', glyph: 'ⴳ' },
  { sound: 'f', glyph: 'ꗦ' }, { sound: 'ng', glyph: '𑀔' },
  { sound: 'g', glyph: 'ꕪ' }, { sound: 'nj', glyph: 'ꖝ' },
  { sound: 'gb', glyph: 'ꘛ' }, { sound: 'nk', glyph: '𑄉' },
  { sound: 'gh', glyph: 'ꔎ' }, { sound: 'ns', glyph: '𑀶' },
  { sound: 'gw', glyph: 'ꖸ' }, { sound: 'nt', glyph: '꘧' },
  { sound: 'h', glyph: 'ꖹ' }, { sound: 'nw', glyph: 'ꖇ' },
  { sound: 'j', glyph: 'ꗏ' }, { sound: 'ny', glyph: '𑀤' },
  { sound: 'k', glyph: 'ꖑ' }, { sound: 'nz', glyph: 'ꗢ' },
  { sound: 'kp', glyph: '𑁟' }, { sound: 'p', glyph: 'ꔵ' },
  { sound: 'kw', glyph: 'ꗷ' }, { sound: 'r', glyph: 'ꕼ' },
  { sound: 'l', glyph: 'ꘗ' }, { sound: 's', glyph: '𑀚' },
  { sound: 'm', glyph: '𑀠' }, { sound: 't', glyph: 'ꔧ' },
  { sound: 'v', glyph: '꘣' }, { sound: 'w', glyph: '𑀲' },
  { sound: 'y', glyph: '𑀫' }, { sound: 'z', glyph: '𑀣' }
];

const vowels = [
  { vowel: 'a', mark: '—', unicode: '—', placement: 'No mark', example: '𑀠' },
  { vowel: 'e', mark: '̄', unicode: 'U+0304', placement: 'Macron above', example: '𑀠̄' },
  { vowel: 'i', mark: '̊', unicode: 'U+030A', placement: 'Ring above', example: '𑀠̊' },
  { vowel: 'ị', mark: '̈', unicode: 'U+0308', placement: 'Double dots above', example: '𑀠̈' },
  { vowel: 'o', mark: '̣', unicode: 'U+0323', placement: 'Dot below', example: '𑀠̣' },
  { vowel: 'ọ', mark: '̤', unicode: 'U+0324', placement: 'Two dots below', example: '𑀠̤' },
  { vowel: 'u', mark: '̱', unicode: 'U+0331', placement: 'Short line below', example: '𑀠̱' },
  { vowel: 'ụ', mark: '̳', unicode: 'U+0333', placement: 'Double line below', example: '𑀠̳' }
];

export default function LearnPage() {
  // This would come from the server component in a real app
  // For now, we'll use mock data that matches the structure
  const sections = [
    {
      title: "Introduction",
      content: `<p><strong>Ndịokwu</strong> is the most efficient writing system ever developed for the <strong>Igbo language</strong>. Designed for phonetic precision, simplicity, and speed, it compresses the entire syllabic inventory of Igbo into:</p>
      <ul>
        <li><strong>41 base consonants</strong></li>
        <li><strong>7 consistent vowel diacritics</strong></li>
        <li><strong>8 independent vowels</strong></li>
      </ul>
      <p>It is fully Unicode-compatible, with each consonant-vowel pairing forming a single, elegant glyph. Mastery can be achieved in <strong>under 30 minutes</strong>.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How to Use Ndịokwu</h2>
      
      <p><strong>Ndịokwu</strong> is an <strong>abugida writing system</strong> specifically designed for writing the Igbo language.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">What is an <em>abugida</em>?</h3>
      
      <p>An abugida is a writing system where <strong>each character represents a consonant sound with an inherent vowel</strong>. Unlike an alphabet where vowels and consonants are written as separate letters, an abugida starts with <strong>consonants as base characters</strong>, and <strong>vowels are shown with diacritics (marks)</strong> added to those base characters.</p>
      
      <hr class="my-6 border-gray-300 dark:border-gray-600" />
      
      <h3 class="text-xl font-bold mt-6 mb-3">Consonants as the Core of the Script</h3>
      
      <p>Ndịokwu uses <strong>41 consonant glyphs</strong> to represent all the consonant and digraph sounds in Igbo. These characters are the <strong>foundation</strong> of every syllable and word written in the system.</p>
      
      <hr class="my-6 border-gray-300 dark:border-gray-600" />
      
      <h3 class="text-xl font-bold mt-6 mb-3"> How Words Are Formed</h3>
      
      <ol class="list-decimal pl-5 space-y-4 my-4">
        <li>
          <p><strong>Start with a consonant</strong>:<br>
          Each character automatically includes the vowel <strong>a</strong> as its default ending.</p>
          <p class="ml-4">Example:</p>
          <ul class="list-disc ml-8">
            <li>𑀠 = <strong>ma</strong></li>
            <li>ꖙ = <strong>da</strong></li>
          </ul>
        </li>
        
        <li>
          <p><strong>Add a vowel diacritic</strong> to change the vowel ending:<br>
          Use one of the <strong>7 vowel diacritics</strong> to transform the <strong>default 'a'</strong> into another vowel:</p>
          
          <table class="w-full border-collapse my-4">
            <thead>
              <tr class="bg-purple-100 dark:bg-purple-900/30">
                <th class="border p-2">Vowel</th>
                <th class="border p-2">Diacritic</th>
                <th class="border p-2">Example</th>
                <th class="border p-2">Latin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2"><strong>a</strong></td>
                <td class="border p-2"><em>(none)</em></td>
                <td class="border p-2 text-xl">𑀠</td>
                <td class="border p-2">ma</td>
              </tr>
              <tr>
                <td class="border p-2"><strong>e</strong></td>
                <td class="border p-2">ˉ (macron)</td>
                <td class="border p-2 text-xl">𑀠̄</td>
                <td class="border p-2">me</td>
              </tr>
              <tr>
                <td class="border p-2"><strong>i</strong></td>
                <td class="border p-2">̊ (ring)</td>
                <td class="border p-2 text-xl">𑀠̊</td>
                <td class="border p-2">mi</td>
              </tr>
              <tr>
                <td class="border p-2"><strong>ị</strong></td>
                <td class="border p-2">̈ (umlaut)</td>
                <td class="border p-2 text-xl">𑀠̈</td>
                <td class="border p-2">mị</td>
              </tr>
              <tr>
                <td class="border p-2"><strong>o</strong></td>
                <td class="border p-2">̣ (dot)</td>
                <td class="border p-2 text-xl">𑀠̣</td>
                <td class="border p-2">mo</td>
              </tr>
              <tr>
                <td class="border p-2"><strong>ọ</strong></td>
                <td class="border p-2">̤ (dbl dot)</td>
                <td class="border p-2 text-xl">𑀠̤</td>
                <td class="border p-2">mọ</td>
              </tr>
              <tr>
                <td class="border p-2"><strong>u</strong></td>
                <td class="border p-2">̱ (line)</td>
                <td class="border p-2 text-xl">𑀠̱</td>
                <td class="border p-2">mu</td>
              </tr>
              <tr>
                <td class="border p-2"><strong>ụ</strong></td>
                <td class="border p-2">̳ (dbl line)</td>
                <td class="border p-2 text-xl">𑀠̳</td>
                <td class="border p-2">mụ</td>
              </tr>
            </tbody>
          </table>
        </li>
        
        <li>
          <p><strong>That's it!</strong> No need to write vowels separately—just attach the correct mark to the consonant to change its sound.</p>
        </li>
      </ol>
      
      <hr class="my-6 border-gray-300 dark:border-gray-600" />
      
      <h3 class="text-xl font-bold mt-6 mb-3">📌 Examples</h3>
      
      <table class="w-full border-collapse my-4">
        <thead>
          <tr class="bg-purple-100 dark:bg-purple-900/30">
            <th class="border p-2">Word</th>
            <th class="border p-2">Breakdown</th>
            <th class="border p-2">Script</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2"><em>mị</em></td>
            <td class="border p-2"><strong>m</strong> + diacritic for <strong>ị</strong></td>
            <td class="border p-2 text-xl">𑀠̈</td>
          </tr>
          <tr>
            <td class="border p-2"><em>du</em></td>
            <td class="border p-2"><strong>d</strong> + diacritic for <strong>u</strong></td>
            <td class="border p-2 text-xl">ꖙ̱</td>
          </tr>
          <tr>
            <td class="border p-2"><em>sụ</em></td>
            <td class="border p-2"><strong>s</strong> + diacritic for <strong>ụ</strong></td>
            <td class="border p-2 text-xl">𑀚̳</td>
          </tr>
        </tbody>
      </table>
      
      <p>This system makes it <strong>fast, compact, and highly phonetic</strong>, perfectly suited for the structure of Igbo. Once you know the consonants and diacritics, <strong>you can read and write any Igbo word</strong> using Ndịokwu!</p>`
    },
    {
      title: "Independent Vowels",
      content: `<p>When a vowel appears by itself or starts a word, use these standalone characters:</p>
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
            <td class="border p-2 text-xl">𑀟</td>
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
      title: "Consonant-Vowel Combinations",
      content: `
      <div class="overflow-x-auto">
        <table class="w-full border-collapse my-4 min-w-[800px]">
          <thead>
            <tr class="bg-purple-100 dark:bg-purple-900/30">
              <th class="border p-2">Consonant</th>
              <th class="border p-2">a (—)</th>
              <th class="border p-2">e (̄)</th>
              <th class="border p-2">i (̊)</th>
              <th class="border p-2">ị (̈)</th>
              <th class="border p-2">o (̣)</th>
              <th class="border p-2">ọ (̤)</th>
              <th class="border p-2">u (̱)</th>
              <th class="border p-2">ụ (̳)</th>
            </tr>
          </thead>
          <tbody>
            ${consonants.map(c => `
              <tr>
                <td class="border p-2 font-bold">${c.sound} (${c.glyph})</td>
                <td class="border p-2 text-xl">${c.glyph}</td>
                <td class="border p-2 text-xl">${c.glyph}̄</td>
                <td class="border p-2 text-xl">${c.glyph}̊</td>
                <td class="border p-2 text-xl">${c.glyph}̈</td>
                <td class="border p-2 text-xl">${c.glyph}̣</td>
                <td class="border p-2 text-xl">${c.glyph}̤</td>
                <td class="border p-2 text-xl">${c.glyph}̱</td>
                <td class="border p-2 text-xl">${c.glyph}̳</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`
    },
    {
      title: "Writing Rules",
      content: `<h3 class="text-xl font-bold mt-6 mb-3">Rule 1: CV Structure</h3>
      <p>All syllables are written as <strong>consonant (or digraph) + vowel diacritic</strong>.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Rule 2: Digraphs Are Native Consonants</h3>
      <p>Treat these digraphs as <strong>single letters</strong>:</p>
      <ul class="list-disc pl-5 my-3">
        <li><strong>ch, gb, gh, gw, kp, kw, nw, ny</strong></li>
      </ul>
      <p>They behave like any other base consonant:</p>
      <ul class="list-disc pl-5 my-3">
        <li><em>nwa</em> → ꖷ</li>
        <li><em>nye</em> → 𑀤̄</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Rule 3: Double Consonants</h3>
      <p>For <strong>repeated consonants</strong>, just <strong>double the base</strong>.<br>No diacritic is used.</p>
      <ul class="list-disc pl-5 my-3">
        <li><em>mma</em> → 𑀠𑀠</li>
        <li><em>nno</em> → ꖫꖫ̣</li>
        <li><em>nnyocha</em> → ꖫꖫ̄ꗏ̤𑀳̄</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Rule 4: Bare Consonants</h3>
      <p>In Igbo, <strong>most syllables end in a vowel</strong>, and consonants are normally followed by a vowel sound. But in rare cases — especially in <strong>loanwords</strong> or complex native clusters — a consonant may appear <strong>without a following vowel</strong>.</p>
      <h4 class="text-lg font-semibold mt-5 mb-2">When to Use a Bare Consonant</h4>
      <ul class="list-disc pl-5 my-3">
        <li>When a word <strong>starts with a consonant cluster</strong>, like <strong>"mgba"</strong>, where the <strong>m</strong> has <strong>no vowel</strong>.</li>
        <li>When a <strong>foreign word</strong> or <strong>abbreviation</strong> ends in a consonant.</li>
        <li>When <strong>syllabic structure</strong> or <strong>intonation</strong> requires an explicitly silent or standalone consonant.</li>
      </ul>
      <p>To show this in the <strong>Ndịokwu</strong>, we use the <strong>breve mark (◌̆)</strong> placed <strong>above the consonant</strong> to indicate it is <strong>bare</strong> (i.e., it stands alone without any vowel).</p>
      
      <h4 class="text-lg font-semibold mt-5 mb-2">Example: "mgbagwoju" (𑀠̆ ꘛꖸ̣ꕦ̱ )</h4>
      
      <table class="w-full border-collapse my-4">
        <thead>
          <tr class="bg-purple-100 dark:bg-purple-900/30">
            <th class="border p-2">Latin Igbo</th>
            <th class="border p-2">Script</th>
            <th class="border p-2">Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">m</td>
            <td class="border p-2 text-xl">𑀠̆</td>
            <td class="border p-2">Bare "m" (no vowel sound)</td>
          </tr>
          <tr>
            <td class="border p-2">gb</td>
            <td class="border p-2 text-xl">ꘛ</td>
            <td class="border p-2">"gb" with default vowel "a"</td>
          </tr>
          <tr>
            <td class="border p-2">a</td>
            <td class="border p-2 text-xl">—</td>
            <td class="border p-2">Already included in ꘛ</td>
          </tr>
          <tr>
            <td class="border p-2">gw + o</td>
            <td class="border p-2 text-xl">ꖸ̣</td>
            <td class="border p-2">"gw" + dot below = <em>gwo</em></td>
          </tr>
          <tr>
            <td class="border p-2">j + u</td>
            <td class="border p-2 text-xl">ꗏ̱</td>
            <td class="border p-2">"j" + short line below = <em>ju</em></td>
          </tr>
        </tbody>
      </table>
      
      

      
      <p>Other examples:</p>
      <ul class="list-disc pl-5 my-3">
        <li><em>film</em> → ꗦ̊ ꖝ̆ 𑀠̆</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Rule 5: Independent Vowels</h3>
      <p>Use standalone vowel characters when:</p>
      <ul class="list-disc pl-5 my-3">
        <li>A vowel starts a word</li>
        <li>The vowel is by itself</li>
      </ul>
      <p>Examples:</p>
      <ul class="list-disc pl-5 my-3">
        <li><em>ọ dị mma</em> → 𑀐 ꖙ̈ 𑀠𑀠</li>
        <li><em>a na m</em> → 𑀩 ꖫ 𑀠</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Rule 6: Tone Marks (Optional)</h3>
      <p>If explicit tone marking is needed, use:</p>
      <ul class="list-disc pl-5 my-3">
        <li>High tone: <strong>˄</strong> (place after vowel diacritic if one exists)</li>
        <li>Low tone: <strong>˅</strong> (place after vowel diacritic if one exists)</li>
        <li>Mid tone: no mark (default)</li>
      </ul>
      <p>Example: <em>hé</em> (high tone) → ꖹ̄˄</p>`
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