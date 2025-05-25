"use client";

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import NdiokwuText from '@/components/NdiokwuText';
// import { getGuideContent } from '@/lib/markdown';

// Consonant and vowel data
const consonants = [
  { sound: 'b', glyph: 'ꕫ' }, { sound: 'mb', glyph: '𑄘' },
  { sound: 'ch', glyph: '𑀳' }, { sound: 'n', glyph: 'ꖫ' },
  { sound: 'd', glyph: 'ꖙ' }, { sound: 'nd', glyph: 'ⴳ' },
  { sound: 'f', glyph: 'ꗦ' }, { sound: 'ng', glyph: '𑀔' },
  { sound: 'g', glyph: 'ꕪ' }, { sound: 'ngw', glyph: 'ꕼ' },
  { sound: 'gb', glyph: 'ꘛ' }, { sound: 'nj', glyph: 'ꕨ' },
  { sound: 'gh', glyph: 'ꗯ' }, { sound: 'nk', glyph: '𑄉' },
  { sound: 'gw', glyph: 'ꖸ' }, { sound: 'nkw', glyph: '꘥' },
  { sound: 'h', glyph: 'ꖹ' }, { sound: 'ns', glyph: '𑀶' },
  { sound: 'j', glyph: 'ꗏ' }, { sound: 'nt', glyph: '꘧' },
  { sound: 'k', glyph: 'ꖑ' }, { sound: 'nw', glyph: 'ꖇ' },
  { sound: 'kp', glyph: '𑁟' }, { sound: 'ny', glyph: '𑀤' },
  { sound: 'kw', glyph: 'ꗷ' }, { sound: 'nz', glyph: 'ꗢ' },
  { sound: 'l', glyph: 'ꘗ' }, { sound: 'p', glyph: 'ꔵ' },
  { sound: 'm', glyph: '𑀠' }, { sound: 'r', glyph: '𑀵' },
  { sound: 'nch', glyph: 'ꔟ' }, { sound: 's', glyph: '𑀚' },
  { sound: 'v', glyph: '꘣' }, { sound: 't', glyph: 'ꔧ' },
  { sound: 'w', glyph: '𑀲' }, { sound: 'y', glyph: '𑀫' },
  { sound: 'z', glyph: '𑀣' }
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
  const [activeSection, setActiveSection] = useState(0);
  const [activeExample, setActiveExample] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Learning examples with progressive complexity - FULL SENTENCES
  const learningExamples = [
    {
      latin: "Nwa ahụ sụrụ mmiri.",
      pronunciation: "n-wa a-hoo soo-roo m-mi-ri",
      english: "The child drank water.",
      syllables: [
        { latin: "Nwa", ndiokwu: "Nwa", breakdown: "nw digraph + a" },
        { latin: "a", ndiokwu: "a", breakdown: "independent vowel" },
        { latin: "hụ", ndiokwu: "hụ", breakdown: "h + ụ diacritic" },
        { latin: "sụ", ndiokwu: "sụ", breakdown: "s + ụ diacritic" },
        { latin: "rụ", ndiokwu: "rụ", breakdown: "r + ụ diacritic" },
        { latin: "mmi", ndiokwu: "mmmi", breakdown: "double m + i diacritic" },
        { latin: "ri", ndiokwu: "ri", breakdown: "r + i diacritic" }
      ],
      explanation: "Simple sentence showing digraphs, independent vowels, and double consonants",
      grammarNote: "Past tense verb 'sụrụ' + object 'mmiri'"
    },
    {
      latin: "ọ na-eje ahịa ụbọchị niile.",
      pronunciation: "oh na-e-je a-hee-a oo-bo-chee nii-le",
      english: "He/she goes to market every day.",
      syllables: [
        { latin: "ọ", ndiokwu: "ọ", breakdown: "independent vowel" },
        { latin: "na-", ndiokwu: "na-", breakdown: "auxiliary + hyphen" },
        { latin: "e", ndiokwu: "e", breakdown: "independent vowel" },
        { latin: "je", ndiokwu: "je", breakdown: "j + e diacritic" },
        { latin: "a", ndiokwu: "a", breakdown: "independent vowel" },
        { latin: "hị", ndiokwu: "hị", breakdown: "h + ị diacritic" },
        { latin: "a", ndiokwu: "a", breakdown: "independent vowel" },
        { latin: "ụ", ndiokwu: "ụ", breakdown: "independent vowel" },
        { latin: "bọ", ndiokwu: "bọ", breakdown: "b + ọ diacritic" },
        { latin: "chị", ndiokwu: "chị", breakdown: "ch digraph + ị diacritic" },
        { latin: "nii", ndiokwu: "nii", breakdown: "n + double i" },
        { latin: "le", ndiokwu: "le", breakdown: "l + e diacritic" }
      ],
      explanation: "Progressive aspect with continuous action marker 'na-'",
      grammarNote: "Continuous tense structure: pronoun + 'na-' + verb"
    },
    {
      latin: "Mama m na-esi nri n'ụlọ.",
      pronunciation: "ma-ma mm na-e-si n-ri n-oo-lo",
      english: "My mother is cooking food at home.",
      syllables: [
        { latin: "Ma", ndiokwu: "Ma", breakdown: "m + a" },
        { latin: "ma", ndiokwu: "ma", breakdown: "m + a" },
        { latin: "m", ndiokwu: "mm", breakdown: "standalone consonant" },
        { latin: "na-", ndiokwu: "na-", breakdown: "auxiliary + hyphen" },
        { latin: "e", ndiokwu: "e", breakdown: "independent vowel" },
        { latin: "si", ndiokwu: "si", breakdown: "s + i diacritic" },
        { latin: "nri", ndiokwu: "nnri", breakdown: "nr cluster + i" },
        { latin: "n'", ndiokwu: "nn'", breakdown: "contracted preposition" },
        { latin: "ụ", ndiokwu: "ụ", breakdown: "independent vowel" },
        { latin: "lọ", ndiokwu: "lọ", breakdown: "l + ọ diacritic" }
      ],
      explanation: "Complex sentence with possessive pronouns and contractions",
      grammarNote: "Possessive 'mama m' + continuous tense + prepositional contraction 'n'ụlọ'"
    },
    {
      latin: "Ndị ọkpọkọrọ na-akpọ akpọ n'osisi ahụ.",
      pronunciation: "n-dee ok-po-ko-ro na-ak-po ak-po n-o-si-si a-hoo",
      english: "The chickens are calling out in that tree.",
      syllables: [
        { latin: "Ndị", ndiokwu: "Ndị", breakdown: "nd digraph + ị diacritic" },
        { latin: "ọ", ndiokwu: "ọ", breakdown: "independent vowel" },
        { latin: "kpọ", ndiokwu: "kpọ", breakdown: "kp digraph + ọ diacritic" },
        { latin: "kọ", ndiokwu: "kọ", breakdown: "k + ọ diacritic" },
        { latin: "rọ", ndiokwu: "rọ", breakdown: "r + ọ diacritic" },
        { latin: "na-", ndiokwu: "na-", breakdown: "auxiliary + hyphen" },
        { latin: "a", ndiokwu: "a", breakdown: "independent vowel" },
        { latin: "kpọ", ndiokwu: "kpọ", breakdown: "kp digraph + ọ diacritic" },
        { latin: "a", ndiokwu: "a", breakdown: "independent vowel" },
        { latin: "kpọ", ndiokwu: "kpọ", breakdown: "kp digraph + ọ diacritic" },
        { latin: "n'", ndiokwu: "nn'", breakdown: "contracted preposition" },
        { latin: "o", ndiokwu: "o", breakdown: "independent vowel" },
        { latin: "si", ndiokwu: "si", breakdown: "s + i diacritic" },
        { latin: "si", ndiokwu: "si", breakdown: "s + i diacritic" },
        { latin: "a", ndiokwu: "a", breakdown: "independent vowel" },
        { latin: "hụ", ndiokwu: "hụ", breakdown: "h + ụ diacritic" }
      ],
      explanation: "Advanced sentence with complex digraphs, reduplication, and multiple clauses",
      grammarNote: "Plural marker 'ndị' + reduplication 'akpọ akpọ' for emphasis"
    }
  ];

  const LearningByExampleSection = () => (
    <div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center mb-4 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
          <svg className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Best Way to Learn</span>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Learn Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Real Sentences</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
          The fastest way to understand Ndiokwu is through meaningful examples. Watch how complete thoughts transform from Latin script to the elegant syllabic beauty of Ndiokwu.
        </p>
      </div>

      {/* Example Navigation with difficulty indicators */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {learningExamples.map((example, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveExample(index);
              setShowBreakdown(false);
            }}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md relative ${
              activeExample === index
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105'
                : 'bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-gray-200 dark:border-gray-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span>Sentence {index + 1}</span>
              <div className={`flex space-x-1 ${activeExample === index ? 'opacity-80' : 'opacity-60'}`}>
                {[...Array(index + 1)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${
                    activeExample === index ? 'bg-white' : 'bg-purple-400'
                  }`} />
                ))}
              </div>
            </div>
            <div className="text-xs mt-1 opacity-75">
              {index === 0 ? 'Beginner' : index === 1 ? 'Elementary' : index === 2 ? 'Intermediate' : 'Advanced'}
            </div>
          </button>
        ))}
      </div>

      {/* Main Example Display */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          key={activeExample}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/50 dark:from-gray-800 dark:via-purple-900/10 dark:to-indigo-900/10 rounded-3xl p-8 shadow-2xl border border-purple-100 dark:border-purple-800/30"
        >
          {/* Sentence Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center mb-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-700">
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                {learningExamples[activeExample].explanation}
              </span>
            </div>

            {/* Complete Sentence Display */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="text-5xl md:text-6xl font-light mb-4 leading-tight">
                  <NdiokwuText>{
                    activeExample === 0 ? "Nwa ahụ sụrụ mmmiri." :
                    activeExample === 1 ? "ọ na-eje ahịa ụbọchị niile." :
                    activeExample === 2 ? "Mama mm na-esi nnri nn'ụlọ." :
                    "Ndị ọkpọkọrọ na-akpọ akpọ nn'osisi ahụ."
                  }</NdiokwuText>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-4"></div>
                <div className="text-2xl font-medium text-purple-200">
                  {learningExamples[activeExample].latin}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Pronunciation</span>
                  </div>
                  <div className="text-lg text-gray-700 dark:text-gray-300 font-mono">
                    /{learningExamples[activeExample].pronunciation}/
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-semibold text-green-700 dark:text-green-300">English Translation</span>
                  </div>
                  <div className="text-lg text-gray-700 dark:text-gray-300">
                    "{learningExamples[activeExample].english}"
                  </div>
                </div>
              </div>

              {learningExamples[activeExample].grammarNote && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800/30">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-semibold text-amber-800 dark:text-amber-300">Grammar Structure</span>
                  </div>
                  <div className="text-amber-800 dark:text-amber-200">
                    {learningExamples[activeExample].grammarNote}
                  </div>
                </div>
              )}
            </div>

            {/* Breakdown Toggle */}
            <motion.button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-8"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {showBreakdown ? (
                <>
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                  </svg>
                  Hide Syllable Analysis
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  See How It Works
                </>
              )}
            </motion.button>
          </div>

          {/* Enhanced Syllable Breakdown */}
          <motion.div
            initial={false}
            animate={{ 
              height: showBreakdown ? 'auto' : 0,
              opacity: showBreakdown ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {showBreakdown && (
              <div className="space-y-8 mt-8">
                {/* Step 1: Word Separation */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                      Break Into Syllables
                    </h4>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {learningExamples[activeExample].syllables.map((syllable, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className="text-center"
                      >
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl px-6 py-4 mb-3 shadow-md border border-blue-200 dark:border-blue-700/50">
                          <div className="text-xl font-bold text-blue-800 dark:text-blue-200">
                            {syllable.latin}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          Syllable {index + 1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Step 2: Individual Conversions */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <h4 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                      Transform Each Syllable
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {learningExamples[activeExample].syllables.map((syllable, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-center space-x-6">
                          <div className="text-center bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-sm">
                            <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                              {syllable.latin}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Latin</div>
                          </div>
                          <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 text-purple-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                            <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">converts to</span>
                          </div>
                          <div className="text-center bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg px-4 py-3 shadow-sm border border-purple-200 dark:border-purple-700/50">
                            <div className="text-3xl">
                              <NdiokwuText>{syllable.ndiokwu}</NdiokwuText>
                            </div>
                            <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Ndiokwu</div>
                          </div>
                        </div>
                        <div className="text-right max-w-xs">
                          <div className="text-sm text-gray-600 dark:text-gray-300 font-medium bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm">
                            {syllable.breakdown}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Step 3: Complete Result */}
                <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 shadow-lg border border-green-200 dark:border-green-800/30">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <h4 className="text-2xl font-bold text-green-700 dark:text-green-300">
                      Beautiful Ndiokwu Result
                    </h4>
                  </div>
                  <div className="text-center space-y-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2, type: "spring" }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl"
                    >
                      <div className="text-6xl md:text-7xl font-light text-white leading-tight">
                        <NdiokwuText>{
                          activeExample === 0 ? "Nwa ahụ sụrụ mmmiri." :
                          activeExample === 1 ? "ọ na-eje ahịa ụbọchị niile." :
                          activeExample === 2 ? "Mama mm na-esi nnri nn'ụlọ." :
                          "Ndị ọkpọkọrọ na-akpọ akpọ nn'osisi ahụ."
                        }</NdiokwuText>
                      </div>
                    </motion.div>
                    <div className="text-xl text-green-700 dark:text-green-300 font-semibold bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                      {learningExamples[activeExample].explanation}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Navigation */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={() => {
              setActiveExample(Math.max(0, activeExample - 1));
              setShowBreakdown(false);
            }}
            disabled={activeExample === 0}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeExample === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600'
                : 'bg-white text-purple-700 hover:bg-purple-50 dark:bg-gray-800 dark:text-purple-300 dark:hover:bg-purple-900/20 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600'
            }`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Previous Sentence
          </button>

          <div className="text-center">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Progress</div>
            <div className="flex space-x-2">
              {learningExamples.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= activeExample ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setActiveExample(Math.min(learningExamples.length - 1, activeExample + 1));
              setShowBreakdown(false);
            }}
            disabled={activeExample === learningExamples.length - 1}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeExample === learningExamples.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600'
                : 'bg-white text-purple-700 hover:bg-purple-50 dark:bg-gray-800 dark:text-purple-300 dark:hover:bg-purple-900/20 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600'
            }`}
          >
            Next Sentence
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const IntroductionSection = () => (
    <div>
      <p><strong>Ndịokwu</strong> is the most efficient writing system ever developed for the <strong>Igbo language</strong>. Designed for phonetic precision, simplicity, and speed, it compresses the entire syllabic inventory of Igbo into:</p>
      <ul className="list-disc pl-5 space-y-1 my-4">
        <li><strong>41 base consonants</strong></li>
        <li><strong>7 consistent vowel diacritics</strong></li>
        <li><strong>8 independent vowels</strong></li>
      </ul>
      <p>It is fully Unicode-compatible, with each consonant-vowel pairing forming a single, elegant glyph. Mastery can be achieved in <strong>under 30 minutes</strong>.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">How to Use Ndịokwu</h2>
      
      <p><strong>Ndịokwu</strong> is an <strong>abugida writing system</strong> specifically designed for writing the Igbo language.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">What is an <em>abugida</em>?</h3>
      
      <p>An abugida is a writing system where <strong>each character represents a consonant sound with an inherent vowel</strong>. Unlike an alphabet where vowels and consonants are written as separate letters, an abugida starts with <strong>consonants as base characters</strong>, and <strong>vowels are shown with diacritics (marks)</strong> added to those base characters.</p>
      
      <hr className="my-6 border-gray-300 dark:border-gray-600" />
      
      <h3 className="text-xl font-bold mt-6 mb-3">Consonants as the Core of the Script</h3>
      
      <p>Ndịokwu uses <strong>41 consonant glyphs</strong> to represent all the consonant and digraph sounds in Igbo. These characters are the <strong>foundation</strong> of every syllable and word written in the system.</p>
      
      <hr className="my-6 border-gray-300 dark:border-gray-600" />
      
      <h3 className="text-xl font-bold mt-6 mb-3"> How Words Are Formed</h3>
      
      <ol className="list-decimal pl-5 space-y-4 my-4">
        <li>
          <p><strong>Start with a consonant</strong>:<br />
          Each character automatically includes the vowel <strong>a</strong> as its default ending.</p>
          <p className="ml-4">Example:</p>
          <ul className="list-disc ml-8">
            <li><NdiokwuText>ma</NdiokwuText> = <strong>ma</strong></li>
            <li><NdiokwuText>da</NdiokwuText> = <strong>da</strong></li>
          </ul>
        </li>
        
        <li>
          <p><strong>Add a vowel diacritic</strong> to change the vowel ending:<br />
          Use one of the <strong>7 vowel diacritics</strong> to transform the <strong>default 'a'</strong> into another vowel:</p>
          
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse">
            <thead>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <th className="border p-2">Vowel</th>
                  <th className="border p-2">Diacritic</th>
                  <th className="border p-2">Example</th>
                  <th className="border p-2">Latin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td className="border p-2"><strong>a</strong></td>
                  <td className="border p-2"><em>(none)</em></td>
                  <td className="border p-2 text-xl"><NdiokwuText>ma</NdiokwuText></td>
                  <td className="border p-2">ma</td>
              </tr>
              <tr>
                  <td className="border p-2"><strong>e</strong></td>
                  <td className="border p-2">ˉ (macron)</td>
                  <td className="border p-2 text-xl"><NdiokwuText>me</NdiokwuText></td>
                  <td className="border p-2">me</td>
              </tr>
              <tr>
                  <td className="border p-2"><strong>i</strong></td>
                  <td className="border p-2">̊ (ring)</td>
                  <td className="border p-2 text-xl"><NdiokwuText>mi</NdiokwuText></td>
                  <td className="border p-2">mi</td>
              </tr>
              <tr>
                  <td className="border p-2"><strong>ị</strong></td>
                  <td className="border p-2">̈ (umlaut)</td>
                  <td className="border p-2 text-xl"><NdiokwuText>mị</NdiokwuText></td>
                  <td className="border p-2">mị</td>
              </tr>
              <tr>
                  <td className="border p-2"><strong>o</strong></td>
                  <td className="border p-2">̣ (dot)</td>
                  <td className="border p-2 text-xl"><NdiokwuText>mo</NdiokwuText></td>
                  <td className="border p-2">mo</td>
              </tr>
              <tr>
                  <td className="border p-2"><strong>ọ</strong></td>
                  <td className="border p-2">̤ (dbl dot)</td>
                  <td className="border p-2 text-xl"><NdiokwuText>mọ</NdiokwuText></td>
                  <td className="border p-2">mọ</td>
              </tr>
              <tr>
                  <td className="border p-2"><strong>u</strong></td>
                  <td className="border p-2">̱ (line)</td>
                  <td className="border p-2 text-xl"><NdiokwuText>mu</NdiokwuText></td>
                  <td className="border p-2">mu</td>
              </tr>
              <tr>
                  <td className="border p-2"><strong>ụ</strong></td>
                  <td className="border p-2">̳ (dbl line)</td>
                  <td className="border p-2 text-xl"><NdiokwuText>mụ</NdiokwuText></td>
                  <td className="border p-2">mụ</td>
              </tr>
            </tbody>
          </table>
          </div>
        </li>
        
        <li>
          <p><strong>That's it!</strong> No need to write vowels separately—just attach the correct mark to the consonant to change its sound.</p>
        </li>
      </ol>
    </div>
  );

  const IndependentVowelsSection = () => (
    <div>
      <p>When a vowel appears by itself or starts a word, use these standalone characters:</p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse">
        <thead>
            <tr className="bg-purple-100 dark:bg-purple-900/30">
              <th className="border p-2">Vowel</th>
              <th className="border p-2">Glyph</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td className="border p-2">a</td>
              <td className="border p-2 text-xl"><NdiokwuText>a</NdiokwuText></td>
          </tr>
          <tr>
              <td className="border p-2">e</td>
              <td className="border p-2 text-xl"><NdiokwuText>e</NdiokwuText></td>
          </tr>
          <tr>
              <td className="border p-2">i</td>
              <td className="border p-2 text-xl"><NdiokwuText>i</NdiokwuText></td>
          </tr>
          <tr>
              <td className="border p-2">ị</td>
              <td className="border p-2 text-xl"><NdiokwuText>ị</NdiokwuText></td>
          </tr>
          <tr>
              <td className="border p-2">o</td>
              <td className="border p-2 text-xl"><NdiokwuText>o</NdiokwuText></td>
          </tr>
          <tr>
              <td className="border p-2">ọ</td>
              <td className="border p-2 text-xl"><NdiokwuText>ọ</NdiokwuText></td>
          </tr>
          <tr>
              <td className="border p-2">u</td>
              <td className="border p-2 text-xl"><NdiokwuText>u</NdiokwuText></td>
          </tr>
          <tr>
              <td className="border p-2">ụ</td>
              <td className="border p-2 text-xl"><NdiokwuText>ụ</NdiokwuText></td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  );

  const ConsonantVowelSection = () => (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse my-4 min-w-[800px]">
          <thead>
            <tr className="bg-purple-100 dark:bg-purple-900/30">
              <th className="border p-2">Consonant</th>
              <th className="border p-2">a (—)</th>
              <th className="border p-2">e (̄)</th>
              <th className="border p-2">i (̊)</th>
              <th className="border p-2">ị (̈)</th>
              <th className="border p-2">o (̣)</th>
              <th className="border p-2">ọ (̤)</th>
              <th className="border p-2">u (̱)</th>
              <th className="border p-2">ụ (̳)</th>
            </tr>
          </thead>
          <tbody>
            {consonants.map(c => (
              <tr key={c.sound}>
                <td className="border p-2 font-bold">{c.sound} (<NdiokwuText>{c.sound}a</NdiokwuText>)</td>
                <td className="border p-2 text-xl"><NdiokwuText>{c.sound}a</NdiokwuText></td>
                <td className="border p-2 text-xl"><NdiokwuText>{c.sound}e</NdiokwuText></td>
                <td className="border p-2 text-xl"><NdiokwuText>{c.sound}i</NdiokwuText></td>
                <td className="border p-2 text-xl"><NdiokwuText>{c.sound}ị</NdiokwuText></td>
                <td className="border p-2 text-xl"><NdiokwuText>{c.sound}o</NdiokwuText></td>
                <td className="border p-2 text-xl"><NdiokwuText>{c.sound}ọ</NdiokwuText></td>
                <td className="border p-2 text-xl"><NdiokwuText>{c.sound}u</NdiokwuText></td>
                <td className="border p-2 text-xl"><NdiokwuText>{c.sound}ụ</NdiokwuText></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const WritingRulesSection = () => (
    <div>
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800/30 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">The Foundation: Understanding Abugida</h3>
        <p className="text-lg mb-4">
          <strong>Ndiokwu is an abugida</strong> - a writing system where each character represents a consonant with an inherent vowel sound. 
          Think of it like this: every consonant "carries" the vowel "a" with it automatically.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Quick Test:</p>
          <p>When you see <NdiokwuText>ma</NdiokwuText>, you automatically read "ma" - the 'm' consonant plus its built-in 'a' sound.</p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
        Every Consonant Says "A" by Default
      </h3>
      <p className="text-lg mb-4">This is the <strong>golden rule</strong> of Ndiokwu. Every single consonant automatically includes the vowel sound "a".</p>
      
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="text-center bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <div className="text-3xl mb-2"><NdiokwuText>ba</NdiokwuText></div>
          <div className="font-bold">ba</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">b + (automatic "a")</div>
        </div>
        <div className="text-center bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <div className="text-3xl mb-2"><NdiokwuText>ka</NdiokwuText></div>
          <div className="font-bold">ka</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">k + (automatic "a")</div>
        </div>
        <div className="text-center bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <div className="text-3xl mb-2"><NdiokwuText>da</NdiokwuText></div>
          <div className="font-bold">da</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">d + (automatic "a")</div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
        <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
        Change the Vowel with Diacritics
      </h3>
      <p className="text-lg mb-4">Want a different vowel? Add a <strong>diacritic mark</strong> above or below the consonant to transform that default "a" into any other vowel.</p>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-6">
        <h4 className="font-bold mb-4 text-center">The 8 Vowel Sounds of Igbo</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-1"><NdiokwuText>ma</NdiokwuText></div>
            <div className="font-bold">ma</div>
            <div className="text-xs text-gray-500">no mark (default)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1"><NdiokwuText>me</NdiokwuText></div>
            <div className="font-bold">me</div>
            <div className="text-xs text-gray-500">macron above</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1"><NdiokwuText>mi</NdiokwuText></div>
            <div className="font-bold">mi</div>
            <div className="text-xs text-gray-500">ring above</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1"><NdiokwuText>mị</NdiokwuText></div>
            <div className="font-bold">mị</div>
            <div className="text-xs text-gray-500">dots above</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1"><NdiokwuText>mo</NdiokwuText></div>
            <div className="font-bold">mo</div>
            <div className="text-xs text-gray-500">dot below</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1"><NdiokwuText>mọ</NdiokwuText></div>
            <div className="font-bold">mọ</div>
            <div className="text-xs text-gray-500">dots below</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1"><NdiokwuText>mu</NdiokwuText></div>
            <div className="font-bold">mu</div>
            <div className="text-xs text-gray-500">line below</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1"><NdiokwuText>mụ</NdiokwuText></div>
            <div className="font-bold">mụ</div>
            <div className="text-xs text-gray-500">double line</div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
        Digraphs: Two Letters, One Sound
      </h3>
      <p className="text-lg mb-4">Some Igbo sounds require <strong>two letters together</strong> (called digraphs). Treat these as single consonants that also get the automatic "a".</p>
      
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
        <div className="font-bold mb-2">Common Igbo Digraphs:</div>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">ch</span>
          <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">gb</span>
          <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">gh</span>
          <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">gw</span>
          <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">kp</span>
          <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">kw</span>
          <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">nw</span>
          <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded">ny</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="text-2xl mb-2"><NdiokwuText>nwa</NdiokwuText></div>
          <div className="font-bold text-lg">nwa</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">"nw" digraph + automatic "a"</div>
          <div className="text-xs mt-1 text-green-600">Child</div>
        </div>
        <div className="text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="text-2xl mb-2"><NdiokwuText>gbe</NdiokwuText></div>
          <div className="font-bold text-lg">gbe</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">"gb" digraph + "e" diacritic</div>
          <div className="text-xs mt-1 text-green-600">To carry</div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
        <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
        Double Consonants: Use a Breve for the First One
      </h3>
      <p className="text-lg mb-4">When Igbo has a <strong>double consonant sound</strong> (like "mm" in "mma"), write the first consonant with a <strong> breve</strong> in Ndiokwu.</p>
      
      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6">
        <h4 className="font-bold mb-4">Why Three Times?</h4>
        <p className="mb-4">In Ndiokwu, every consonant normally carries a vowel. To show a <em>pure double consonant</em> without vowels between them, we need a special pattern:</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2"><NdiokwuText>mmma</NdiokwuText></div>
            <div className="font-bold">mma</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Good/Beautiful</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2"><NdiokwuText>nnna</NdiokwuText></div>
            <div className="font-bold">nna</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Father</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2"><NdiokwuText>nnne</NdiokwuText></div>
            <div className="font-bold">nne</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Mother</div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
        <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">5</span>
        Standalone Consonants: Use a Breve
      </h3>
      <p className="text-lg mb-4">Sometimes a consonant appears <strong>by itself</strong> without any vowel sound (like "m" in "mama m"). Write these consonants with a <strong>breve</strong>.</p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <div className="font-bold mb-2">Example: "mama m" (my mother)</div>
          <div className="text-center">
            <div className="text-2xl mb-2">
              <NdiokwuText>mama</NdiokwuText> <NdiokwuText>mm</NdiokwuText>
            </div>
            <div>mama m</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              The final "m" stands alone, so it's written as "mm"
            </div>
          </div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <div className="font-bold mb-2">Example: "mgbagwoju"</div>
          <div className="text-center">
            <div className="text-2xl mb-2"><NdiokwuText>mmgbagwoju</NdiokwuText></div>
            <div>mgbagwoju</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Initial "m" has no vowel, so it's written as "mm"
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">6</span>
        Independent Vowels: When Vowels Stand Alone
      </h3>
      <p className="text-lg mb-4">When a vowel starts a word or appears by itself, use the <strong>independent vowel characters</strong>.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
        {['a', 'e', 'i', 'ị', 'o', 'ọ', 'u', 'ụ'].map(vowel => (
          <div key={vowel} className="text-center bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
            <div className="text-2xl mb-1"><NdiokwuText>{vowel}</NdiokwuText></div>
            <div className="font-bold">{vowel}</div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg my-4">
        <div className="font-bold mb-2">Common Examples:</div>
        <ul className="space-y-2">
          <li><NdiokwuText>ọ dị mmma</NdiokwuText> → "ọ dị mma" (it is good)</li>
          <li><NdiokwuText>a na mm</NdiokwuText> → "a na m" (I am)</li>
          <li><NdiokwuText>ị na</NdiokwuText> → "ị na" (you are)</li>
      </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
        <span className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">7</span>
        Tone Marks (Advanced - Optional)
      </h3>
      <p className="text-lg mb-4">For advanced users who want to mark tones explicitly, use standard Latin Igbo tone marks:</p>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <ul className="space-y-2">
          <li><strong>High tone:</strong> ´ (acute accent) - place after the vowel</li>
          <li><strong>Low tone:</strong> ` (grave accent) - place after the vowel</li>
          <li><strong>Neutral tone:</strong> no mark (default)</li>
        </ul>
        <div className="mt-4 space-y-3">
          <div className="text-center">
            <div className="text-2xl"><NdiokwuText>ọgá</NdiokwuText></div>
            <div className="text-sm text-gray-600 dark:text-gray-400">ọgá (master/boss) - high tone on final vowel</div>
          </div>
          <div className="text-center">
            <div className="text-2xl"><NdiokwuText>àkwà</NdiokwuText></div>
            <div className="text-sm text-gray-600 dark:text-gray-400">àkwà (cloth) - low tone on first vowel</div>
          </div>
          <div className="text-center">
            <div className="text-2xl"><NdiokwuText>nwa</NdiokwuText></div>
            <div className="text-sm text-gray-600 dark:text-gray-400">nwa (child) - neutral tones</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl mt-8 border border-green-200 dark:border-green-800/30">
        <h4 className="text-xl font-bold mb-4 text-center">🎉 Congratulations!</h4>
        <p className="text-center text-lg">
          You now know all the essential rules for reading and writing Ndiokwu! 
          With these 7 rules, you can write any Igbo word using the most efficient 
          writing system ever created for the language.
        </p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "Writing Rules",
      component: <WritingRulesSection />
    },
    {
      title: "Learning by Example",
      component: <LearningByExampleSection />
    },
    {
      title: "Introduction",
      component: <IntroductionSection />
    },
    {
      title: "Independent Vowels",
      component: <IndependentVowelsSection />
    },
    {
      title: "Consonant-Vowel Combinations",
      component: <ConsonantVowelSection />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Learn Ndịokwu
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The most efficient writing system ever developed for the Igbo language
          </motion.p>
        </div>

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
            <div className="relative overflow-hidden">
              <div className="p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-400">
                  {sections[activeSection].title}
                </h2>
                
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none"
                >
                  {sections[activeSection].component}
                </div>
                
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
              </div>
            </motion.div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Consonant Reference</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {consonants.map((consonant, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl mb-1"><NdiokwuText>{consonant.glyph}</NdiokwuText></div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{consonant.sound}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Vowel Diacritics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {vowels.map((vowel, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center"
              >
                <div className="text-3xl mb-2"><NdiokwuText>{vowel.vowel}</NdiokwuText></div>
                <div className="text-lg font-medium">{vowel.vowel}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{vowel.mark}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{vowel.placement}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 