"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ConsonantVowelTable from '@/components/ConsonantVowelTable';
import NdiokwuText from '@/components/NdiokwuText';

export default function AlphabetPage() {
  const [selectedConsonant, setSelectedConsonant] = useState<string | null>(null);
  const [selectedVowel, setSelectedVowel] = useState<string | null>(null);

  const vowels = [
    { symbol: 'a', diacritic: '—', example: '𑀚' },
    { symbol: 'e', diacritic: '̄', example: '𑀚̄' },
    { symbol: 'i', diacritic: '̊', example: '𑀚̊' },
    { symbol: 'ị', diacritic: '̈', example: '𑀚̈' },
    { symbol: 'o', diacritic: '̣', example: '𑀚̣' },
    { symbol: 'ọ', diacritic: '̤', example: '𑀚̤' },
    { symbol: 'u', diacritic: '̱', example: '𑀚̱' },
    { symbol: 'ụ', diacritic: '̳', example: '𑀚̳' }
  ];

  const independentVowels = [
    { symbol: 'a', character: '𑀩' },
    { symbol: 'e', character: '𑀟' },
    { symbol: 'i', character: 'ꕈ' },
    { symbol: 'ị', character: 'ꔕ' },
    { symbol: 'o', character: '𑀏' },
    { symbol: 'ọ', character: '𑀐' },
    { symbol: 'u', character: '𑀑' },
    { symbol: 'ụ', character: '𑀒' }
  ];

  // Sample of consonants (not complete)
  const consonants = [
    { symbol: 'b', base: 'ꕫ' },
    { symbol: 'ch', base: '𑀳' },
    { symbol: 'd', base: 'ꖙ' },
    { symbol: 'f', base: 'ꗦ' },
    { symbol: 'g', base: 'ꕪ' },
    { symbol: 'gb', base: 'ꘛ' },
    { symbol: 'gh', base: 'ꗯ' },
    { symbol: 'gw', base: 'ꖸ' },
    { symbol: 'h', base: 'ꖹ' },
    { symbol: 'j', base: 'ꗏ' },
    { symbol: 'k', base: 'ꖑ' },
    { symbol: 'kp', base: '𑁟' },
    { symbol: 'kw', base: 'ꗷ' },
    { symbol: 'l', base: 'ꘗ' },
    { symbol: 'm', base: '𑀠' },
    { symbol: 'mb', base: '𑄘' },
    { symbol: 'n', base: 'ꖫ' },
    { symbol: 'nch', base: 'ꔟ' },
    { symbol: 'nd', base: 'ⴳ' },
    { symbol: 'ng', base: '𑀔' },
    { symbol: 'ngw', base: 'ꕼ' },
    { symbol: 'nj', base: 'ꕨ' },
    { symbol: 'nk', base: '𑄉' },
    { symbol: 'nkw', base: '꘥' },
    { symbol: 'ns', base: '𑀶' },
    { symbol: 'nt', base: '꘧' },
    { symbol: 'nw', base: 'ꖇ' },
    { symbol: 'ny', base: '𑀤' },
    { symbol: 'nz', base: 'ꗢ' },
    { symbol: 'p', base: 'ꔵ' },
    { symbol: 'r', base: '𑀵' },
    { symbol: 's', base: '𑀚' },
    { symbol: 't', base: 'ꔧ' },
    { symbol: 'v', base: '꘣' },
    { symbol: 'w', base: '𑀲' },
    { symbol: 'y', base: '𑀫' },
    { symbol: 'z', base: '𑀣' },
  ];

  // Function to get combined character with diacritic
  const getCombinedCharacter = (consonant: string, vowel: string) => {
    const consonantObj = consonants.find(c => c.symbol === consonant);
    const vowelObj = vowels.find(v => v.symbol === vowel);
    
    if (!consonantObj || !vowelObj) return '';
    
    if (vowelObj.symbol === 'a') {
      return consonantObj.base; // Base form already has 'a'
    }
    
    return consonantObj.base + vowelObj.diacritic; // Combine with diacritic
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ndịokwu Alphabet
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Interactive character builder */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-purple-800 text-white py-4 px-6">
              <h2 className="text-2xl font-bold">Character Builder</h2>
              <p className="text-purple-200">Combine consonants and vowels to create Ndịokwu characters</p>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Select a Consonant</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {consonants.map((consonant) => (
                    <button
                      key={consonant.symbol}
                      className={`p-2 border rounded-md text-center ${
                        selectedConsonant === consonant.symbol
                          ? 'bg-purple-100 border-purple-500 dark:bg-purple-900/30 dark:border-purple-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setSelectedConsonant(consonant.symbol)}
                    >
                      <span className="block text-sm">{consonant.symbol}</span>
                      <span className="block text-lg mt-1"><NdiokwuText>{consonant.base}</NdiokwuText></span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Select a Vowel</h3>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {vowels.map((vowel) => (
                    <button
                      key={vowel.symbol}
                      className={`p-2 border rounded-md text-center ${
                        selectedVowel === vowel.symbol
                          ? 'bg-purple-100 border-purple-500 dark:bg-purple-900/30 dark:border-purple-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setSelectedVowel(vowel.symbol)}
                    >
                      <span className="block text-sm">{vowel.symbol}</span>
                      <span className="block text-sm mt-1">{vowel.diacritic}</span>
                      <span className="block text-sm mt-1"><NdiokwuText>{vowel.example}</NdiokwuText></span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-xl font-semibold mb-2">Result</h3>
                {selectedConsonant && selectedVowel ? (
                  <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <p className="text-5xl mb-4 font-bold">
                      <NdiokwuText>{getCombinedCharacter(selectedConsonant, selectedVowel)}</NdiokwuText>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Consonant <strong>{selectedConsonant}</strong> + Vowel <strong>{selectedVowel}</strong>
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 italic">
                    Select a consonant and vowel to see the combined character
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Independent vowels and common examples */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Independent Vowels */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-indigo-800 text-white py-4 px-6">
                <h2 className="text-2xl font-bold">Independent Vowels</h2>
                <p className="text-indigo-200">Used when a vowel starts a word or stands alone</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4">
                  {independentVowels.map((vowel) => (
                    <div key={vowel.symbol} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <span className="block text-3xl mb-2"><NdiokwuText>{vowel.character}</NdiokwuText></span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{vowel.symbol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Common Examples */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-emerald-800 text-white py-4 px-6">
                <h2 className="text-2xl font-bold">Common Examples</h2>
                <p className="text-emerald-200">Frequently used words and phrases in Ndịokwu</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl mb-2">ọ dị mma</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">ọ dị mma</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium">Good/Well</div>
                      <div className="text-sm text-gray-500">Common response</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl mb-2">ndịokwu</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">ndịokwu</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium">Ndiokwu Script</div>
                      <div className="text-sm text-gray-500">Writing system name</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl mb-2">igbo</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">igbo</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium">Igbo</div>
                      <div className="text-sm text-gray-500">Language name</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl mb-2">nnọọ</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">nnọọ</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium">Welcome</div>
                      <div className="text-sm text-gray-500">Greeting</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl mb-2">ụlọ</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">ụlọ</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium">House</div>
                      <div className="text-sm text-gray-500">Common noun</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl mb-2">mmadụ</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">mmadụ</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium">Person</div>
                      <div className="text-sm text-gray-500">Common noun</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Consonant-Vowel Table */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Complete Reference</h2>
          <ConsonantVowelTable className="max-w-6xl mx-auto" />
        </motion.div>
      </div>
    </div>
  );
} 