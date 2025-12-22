import React from 'react';
import { motion } from 'framer-motion';
import NdiokwuText from '@/components/NdiokwuText';

type ConsonantVowelTableProps = {
  className?: string;
};

export default function ConsonantVowelTable({ className = '' }: ConsonantVowelTableProps) {
  // Data structure for the vowels
  const vowels = [
    { symbol: 'a', label: 'a', description: 'base' },
    { symbol: 'e', label: 'e', description: 'line above' },
    { symbol: 'i', label: 'i', description: 'ring above' },
    { symbol: 'ị', label: 'ị', description: 'diaeresis' },
    { symbol: 'o', label: 'o', description: 'dot below' },
    { symbol: 'ọ', label: 'ọ', description: 'double dot below' },
    { symbol: 'u', label: 'u', description: 'line below' },
    { symbol: 'ụ', label: 'ụ', description: 'double line below' },
  ];

  // Complete mapping of consonant-vowel combinations
  const consonantVowelMap: { [key: string]: { [key: string]: string } } = {
    'b': { 'a': 'ꕫ', 'e': 'ꕫ̄', 'i': 'ꕫ̊', 'ị': 'ꕫ̈', 'o': 'ꕫ̣', 'ọ': 'ꕫ̤', 'u': 'ꕫ̱', 'ụ': 'ꕫ̳' },
    'ch': { 'a': '𑀳', 'e': '𑀳̄', 'i': '𑀳̊', 'ị': '𑀳̈', 'o': '𑀳̣', 'ọ': '𑀳̤', 'u': '𑀳̱', 'ụ': '𑀳̳' },
    'd': { 'a': 'ꖙ', 'e': 'ꖙ̄', 'i': 'ꖙ̊', 'ị': 'ꖙ̈', 'o': 'ꖙ̣', 'ọ': 'ꖙ̤', 'u': 'ꖙ̱', 'ụ': 'ꖙ̳' },
    'f': { 'a': 'ꗦ', 'e': 'ꗦ̄', 'i': 'ꗦ̊', 'ị': 'ꗦ̈', 'o': 'ꗦ̣', 'ọ': 'ꗦ̤', 'u': 'ꗦ̱', 'ụ': 'ꗦ̳' },
    'g': { 'a': 'ꕪ', 'e': 'ꕪ̄', 'i': 'ꕪ̊', 'ị': 'ꕪ̈', 'o': 'ꕪ̣', 'ọ': 'ꕪ̤', 'u': 'ꕪ̱', 'ụ': 'ꕪ̳' },
    'gb': { 'a': 'ꘛ', 'e': 'ꘛ̄', 'i': 'ꘛ̊', 'ị': 'ꘛ̈', 'o': 'ꘛ̣', 'ọ': 'ꘛ̤', 'u': 'ꘛ̱', 'ụ': 'ꘛ̳' },
    'gh': { 'a': 'ꗯ', 'e': 'ꗯ̄', 'i': 'ꗯ̊', 'ị': 'ꗯ̈', 'o': 'ꗯ̣', 'ọ': 'ꗯ̤', 'u': 'ꗯ̱', 'ụ': 'ꗯ̳' },
    'gw': { 'a': 'ꖸ', 'e': 'ꖸ̄', 'i': 'ꖸ̊', 'ị': 'ꖸ̈', 'o': 'ꖸ̣', 'ọ': 'ꖸ̤', 'u': 'ꖸ̱', 'ụ': 'ꖸ̳' },
    'h': { 'a': 'ꖹ', 'e': 'ꖹ̄', 'i': 'ꖹ̊', 'ị': 'ꖹ̈', 'o': 'ꖹ̣', 'ọ': 'ꖹ̤', 'u': 'ꖹ̱', 'ụ': 'ꖹ̳' },
    'j': { 'a': 'ꗏ', 'e': 'ꗏ̄', 'i': 'ꗏ̊', 'ị': 'ꗏ̈', 'o': 'ꗏ̣', 'ọ': 'ꗏ̤', 'u': 'ꗏ̱', 'ụ': 'ꗏ̳' },
    'k': { 'a': 'ꖑ', 'e': 'ꖑ̄', 'i': 'ꖑ̊', 'ị': 'ꖑ̈', 'o': 'ꖑ̣', 'ọ': 'ꖑ̤', 'u': 'ꖑ̱', 'ụ': 'ꖑ̳' },
    'kp': { 'a': '𑁟', 'e': '𑁟̄', 'i': '𑁟̊', 'ị': '𑁟̈', 'o': '𑁟̣', 'ọ': '𑁟̤', 'u': '𑁟̱', 'ụ': '𑁟̳' },
    'kw': { 'a': '꘣', 'e': '꘣̄', 'i': '꘣̊', 'ị': '꘣̈', 'o': '꘣̣', 'ọ': '꘣̤', 'u': '꘣̱', 'ụ': '꘣̳' },
    'l': { 'a': 'ꘗ', 'e': 'ꘗ̄', 'i': 'ꘗ̊', 'ị': 'ꘗ̈', 'o': 'ꘗ̣', 'ọ': 'ꘗ̤', 'u': 'ꘗ̱', 'ụ': 'ꘗ̳' },
    'm': { 'a': '𑀠', 'e': '𑀠̄', 'i': '𑀠̊', 'ị': '𑀠̈', 'o': '𑀠̣', 'ọ': '𑀠̤', 'u': '𑀠̱', 'ụ': '𑀠̳' },
    'mb': { 'a': '𑄘', 'e': '𑄘̄', 'i': '𑄘̊', 'ị': '𑄘̈', 'o': '𑄘̣', 'ọ': '𑄘̤', 'u': '𑄘̱', 'ụ': '𑄘̳' },
    'n': { 'a': 'ꖫ', 'e': 'ꖫ̄', 'i': 'ꖫ̊', 'ị': 'ꖫ̈', 'o': 'ꖫ̣', 'ọ': 'ꖫ̤', 'u': 'ꖫ̱', 'ụ': 'ꖫ̳' },
    'nch': { 'a': 'ꔟ', 'e': 'ꔟ̄', 'i': 'ꔟ̊', 'ị': 'ꔟ̈', 'o': 'ꔟ̣', 'ọ': 'ꔟ̤', 'u': 'ꔟ̱', 'ụ': 'ꔟ̳' },
    'nd': { 'a': 'ⴳ', 'e': 'ⴳ̄', 'i': 'ⴳ̊', 'ị': 'ⴳ̈', 'o': 'ⴳ̣', 'ọ': 'ⴳ̤', 'u': 'ⴳ̱', 'ụ': 'ⴳ̳' },
    'ng': { 'a': '𑀔', 'e': '𑀔̄', 'i': '𑀔̊', 'ị': '𑀔̈', 'o': '𑀔̣', 'ọ': '𑀔̤', 'u': '𑀔̱', 'ụ': '𑀔̳' },
    'ngw': { 'a': 'ꕼ', 'e': 'ꕼ̄', 'i': 'ꕼ̊', 'ị': 'ꕼ̈', 'o': 'ꕼ̣', 'ọ': 'ꕼ̤', 'u': 'ꕼ̱', 'ụ': 'ꕼ̳' },
    'nj': { 'a': 'ꕨ', 'e': 'ꕨ̄', 'i': 'ꕨ̊', 'ị': 'ꕨ̈', 'o': 'ꕨ̣', 'ọ': 'ꕨ̤', 'u': 'ꕨ̱', 'ụ': 'ꕨ̳' },
    'nk': { 'a': '𑄉', 'e': '𑄉̄', 'i': '𑄉̊', 'ị': '𑄉̈', 'o': '𑄉̣', 'ọ': '𑄉̤', 'u': '𑄉̱', 'ụ': '𑄉̳' },
    'nkw': { 'a': '꘥', 'e': '꘥̄', 'i': '꘥̊', 'ị': '꘥̈', 'o': '꘥̣', 'ọ': '꘥̤', 'u': '꘥̱', 'ụ': '꘥̳' },
    'ns': { 'a': '𑀶', 'e': '𑀶̄', 'i': '𑀶̊', 'ị': '𑀶̈', 'o': '𑀶̣', 'ọ': '𑀶̤', 'u': '𑀶̱', 'ụ': '𑀶̳' },
    'nt': { 'a': '꘧', 'e': '꘧̄', 'i': '꘧̊', 'ị': '꘧̈', 'o': '꘧̣', 'ọ': '꘧̤', 'u': '꘧̱', 'ụ': '꘧̳' },
    'nw': { 'a': 'ꖇ', 'e': 'ꖇ̄', 'i': 'ꖇ̊', 'ị': 'ꖇ̈', 'o': 'ꖇ̣', 'ọ': 'ꖇ̤', 'u': 'ꖇ̱', 'ụ': 'ꖇ̳' },
    'ny': { 'a': '𑀤', 'e': '𑀤̄', 'i': '𑀤̊', 'ị': '𑀤̈', 'o': '𑀤̣', 'ọ': '𑀤̤', 'u': '𑀤̱', 'ụ': '𑀤̳' },
    'nz': { 'a': 'ꗢ', 'e': 'ꗢ̄', 'i': 'ꗢ̊', 'ị': 'ꗢ̈', 'o': 'ꗢ̣', 'ọ': 'ꗢ̤', 'u': 'ꗢ̱', 'ụ': 'ꗢ̳' },
    'p': { 'a': 'ꔵ', 'e': 'ꔵ̄', 'i': 'ꔵ̊', 'ị': 'ꔵ̈', 'o': 'ꔵ̣', 'ọ': 'ꔵ̤', 'u': 'ꔵ̱', 'ụ': 'ꔵ̳' },
    'r': { 'a': '𑀵', 'e': '𑀵̄', 'i': '𑀵̊', 'ị': '𑀵̈', 'o': '𑀵̣', 'ọ': '𑀵̤', 'u': '𑀵̱', 'ụ': '𑀵̳' },
    's': { 'a': '𑀚', 'e': '𑀚̄', 'i': '𑀚̊', 'ị': '𑀚̈', 'o': '𑀚̣', 'ọ': '𑀚̤', 'u': '𑀚̱', 'ụ': '𑀚̳' },
    't': { 'a': 'ꔧ', 'e': 'ꔧ̄', 'i': 'ꔧ̊', 'ị': 'ꔧ̈', 'o': 'ꔧ̣', 'ọ': 'ꔧ̤', 'u': 'ꔧ̱', 'ụ': 'ꔧ̳' },
    'v': { 'a': 'ꗷ', 'e': 'ꗷ̄', 'i': 'ꗷ̊', 'ị': 'ꗷ̈', 'o': 'ꗷ̣', 'ọ': 'ꗷ̤', 'u': 'ꗷ̱', 'ụ': 'ꗷ̳' },
    'w': { 'a': '𑀲', 'e': '𑀲̄', 'i': '𑀲̊', 'ị': '𑀲̈', 'o': '𑀲̣', 'ọ': '𑀲̤', 'u': '𑀲̱', 'ụ': '𑀲̳' },
    'y': { 'a': '𑀫', 'e': '𑀫̄', 'i': '𑀫̊', 'ị': '𑀫̈', 'o': '𑀫̣', 'ọ': '𑀫̤', 'u': '𑀫̱', 'ụ': '𑀫̳' },
    'z': { 'a': '𑀣', 'e': '𑀣̄', 'i': '𑀣̊', 'ị': '𑀣̈', 'o': '𑀣̣', 'ọ': '𑀣̤', 'u': '𑀣̱', 'ụ': '𑀣̳' },
  };

  // Get consonants from the map
  const consonants = Object.keys(consonantVowelMap).map(symbol => ({
    symbol,
    base: consonantVowelMap[symbol]['a'] // Base form (with 'a')
  }));

  // Function to get the character combination
  const getCharacter = (consonantSymbol: string, vowelSymbol: string) => {
    return consonantVowelMap[consonantSymbol]?.[vowelSymbol] || '';
  };

  return (
    <motion.div 
      className={`bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white py-8 px-8">
        <motion.h2 
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NdiokwuText>Ndịokwu</NdiokwuText> Complete Reference Table
        </motion.h2>
        <motion.p 
          className="text-indigo-100 text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          All consonant-vowel combinations in the Ndịokwu writing system
        </motion.p>
      </div>
      
      {/* Vowel Legend */}
      <div className="px-8 py-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Vowel Diacritics Guide</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {vowels.map((vowel, index) => (
            <motion.div 
              key={vowel.symbol}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-3 text-center border border-purple-100 dark:border-purple-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              <div className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-1">
                {vowel.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {vowel.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 sticky top-0 z-20">
            <div className="grid grid-cols-9 gap-0">
              {/* Corner cell */}
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 p-4 border-r border-b border-gray-300 dark:border-gray-600">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                  Consonant
                </div>
              </div>
              
              {/* Vowel headers */}
              {vowels.map((vowel, index) => (
                <motion.div 
                  key={vowel.symbol}
                  className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 p-4 border-r border-b border-gray-300 dark:border-gray-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-1">
                      {vowel.label}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {vowel.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white dark:bg-gray-800">
            {consonants.map((consonant, rowIndex) => (
              <motion.div 
                key={consonant.symbol}
                className="grid grid-cols-9 gap-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + rowIndex * 0.02 }}
              >
                {/* Consonant label */}
                <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-4 border-r border-b border-gray-200 dark:border-gray-600 sticky left-0 z-10">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {consonant.symbol}
                    </div>
                    <div className="text-2xl">
                      <NdiokwuText>{consonant.base}</NdiokwuText>
                    </div>
                  </div>
                </div>

                {/* Character cells */}
                {vowels.map((vowel, colIndex) => (
                  <motion.div 
                    key={`${consonant.symbol}-${vowel.symbol}`}
                    className="p-4 border-r border-b border-gray-200 dark:border-gray-600 group"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                        <NdiokwuText>{consonant.symbol}{vowel.symbol}</NdiokwuText>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 opacity-100 transition-opacity duration-200">
                        {consonant.symbol}{vowel.symbol}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 px-8 py-6">
        <motion.p 
          className="text-sm text-gray-600 dark:text-gray-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          This comprehensive table shows all 296 possible consonant-vowel combinations in the <NdiokwuText>Ndịokwu</NdiokwuText> writing system.
          <br />
          Hover over any character to see its phonetic transcription.
        </motion.p>
      </div>
    </motion.div>
  );
} 