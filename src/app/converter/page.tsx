"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Translation mappings
const vowelMap: Record<string, string> = {
  'a': '𑀩',
  'e': '𑀟',
  'i': 'ꕈ',
  'ị': 'ꔕ',
  'o': '𑀏',
  'ọ': '𑀐',
  'u': '𑀑',
  'ụ': '𑀒'
};

const consonantMap: Record<string, string> = {
  'b': 'ꕫ',
  'ch': '𑀳',
  'd': 'ꖙ',
  'f': 'ꗦ',
  'g': 'ꕪ',
  'gb': 'ꘛ',
  'gh': 'ꔎ',
  'gw': 'ꖸ',
  'h': 'ꖹ',
  'j': 'ꗏ',
  'k': 'ꖑ',
  'kp': '𑁟',
  'kw': 'ꗷ',
  'l': 'ꘗ',
  'm': '𑀠',
  'mb': '𑄘',
  'n': 'ꖫ',
  'nd': 'ⴳ',
  'ng': '𑀔',
  'nj': 'ꖝ',
  'nk': '𑄉',
  'ns': '𑀶',
  'nt': '꘧',
  'nw': 'ꖇ',
  'ny': '𑀤',
  'nz': 'ꗢ',
  'p': 'ꔵ',
  'r': 'ꕼ',
  's': '𑀚',
  't': 'ꔧ',
  'v': '꘣',
  'w': '𑀲',
  'y': '𑀫',
  'z': '𑀣'
};

const vowelDiacriticMap: Record<string, string> = {
  'a': '',
  'e': '̄',
  'i': '̊',
  'ị': '̈',
  'o': '̣',
  'ọ': '̤',
  'u': '̱',
  'ụ': '̳'
};

export default function ConverterPage() {
  const [inputText, setInputText] = useState('ndịokwu');
  const [outputText, setOutputText] = useState('');
  const [conversionDirection, setConversionDirection] = useState<'latin-to-ndiokwu' | 'ndiokwu-to-latin'>('latin-to-ndiokwu');
  const [isConverting, setIsConverting] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const outputRef = useRef<HTMLDivElement>(null);

  // Basic Latin to Ndịokwu conversion logic
  const convertLatinToNdiokwu = (text: string): string => {
    // This is a simplified implementation.
    // A full implementation would handle all the rules, tone marks, etc.
    
    if (!text) return '';
    
    // Special cases for common words that need specific translations
    const specialCases: Record<string, string> = {
      'ndịokwu': 'ⴳ̈ 𑀏 ꗷ̱',
      // Add more special cases as needed
    };
    
    // Check if the input is a special case
    if (specialCases[text.toLowerCase()]) {
      return specialCases[text.toLowerCase()];
    }
    
    // First, handle digraphs to prevent partial matches
    const digraphRegex = /(ch|gb|gh|gw|kp|kw|nj|ns|nw|ny|mb|nd|ng|nk|nt|nz)/gi;
    let processed = text.replace(digraphRegex, match => `__${match}__`);
    
    // Process consonant + vowel combinations
    for (const consonant in consonantMap) {
      const consonantPattern = new RegExp(`__${consonant}__|${consonant}`, 'gi');
      
      processed = processed.replace(consonantPattern, match => {
        // Check if it's a special marked digraph
        const isDigraph = match.startsWith('__');
        const actualConsonant = isDigraph ? match.replace(/__/g, '') : match;
        return `<${actualConsonant.toLowerCase()}>`;
      });
    }
    
    // Process vowels and add diacritics
    const syllableRegex = /<([a-zịọụ]+)>([aeiouịọụ])?/gi;
    processed = processed.replace(syllableRegex, (match, consonant, vowel) => {
      if (!vowel) {
        // Standalone consonant (rare in Igbo)
        return consonantMap[consonant.toLowerCase()] + '̆';
      }
      
      // Consonant + vowel
      const baseChar = consonantMap[consonant.toLowerCase()];
      const diacritic = vowelDiacriticMap[vowel.toLowerCase()];
      return baseChar + diacritic;
    });
    
    // Handle standalone vowels
    for (const vowel in vowelMap) {
      const vowelPattern = new RegExp(`(?<![a-zịọụ<>])${vowel}(?![a-zịọụ<>])`, 'gi');
      processed = processed.replace(vowelPattern, () => vowelMap[vowel.toLowerCase()]);
    }
    
    // Clean up any remaining markers
    processed = processed.replace(/<|>/g, '');
    
    return processed;
  };

  // Converter function for Ndịokwu to Latin
  const convertNdiokwuToLatin = (_: string): string => {
    // This is a placeholder. A real implementation would need
    // complex parsing of Ndịokwu characters and diacritics.
    return "Ndịokwu to Latin conversion feature coming soon! 🚧";
  };

  const handleConvert = () => {
    setIsConverting(true);
    
    // Simulate processing delay for UX
    setTimeout(() => {
      if (conversionDirection === 'latin-to-ndiokwu') {
        setOutputText(convertLatinToNdiokwu(inputText));
      } else {
        setOutputText(convertNdiokwuToLatin(inputText));
      }
      setIsConverting(false);
    }, 500);
  };

  // Auto-convert on initial load
  useEffect(() => {
    handleConvert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = async () => {
    if (outputRef.current) {
      try {
        await navigator.clipboard.writeText(outputText);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy text:', err);
      }
    }
  };

  // Example conversions
  const examples = [
    { latin: "onye", ndiokwu: "𑀏 ꘥ʼ" },
    { latin: "ndịokwu", ndiokwu: "ⴳ̈ 𑀏 ꗷ̱" },
    { latin: "igbo", ndiokwu: "ꕈꘛ̣" },
    { latin: "akwụkwọ", ndiokwu: "𑀩꘤̳꘤̤" }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ndịokwu Converter
        </motion.h1>
        
        <p className="text-center text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Convert between Latin Igbo script and Ndịokwu writing system
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Conversion Direction Switch */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="flex">
                <button
                  className={`flex-1 py-3 text-center font-medium transition-colors ${
                    conversionDirection === 'latin-to-ndiokwu'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setConversionDirection('latin-to-ndiokwu')}
                >
                  Latin Igbo → Ndịokwu
                </button>
                <button
                  className={`flex-1 py-3 text-center font-medium transition-colors ${
                    conversionDirection === 'ndiokwu-to-latin'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setConversionDirection('ndiokwu-to-latin')}
                >
                  Ndịokwu → Latin Igbo
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Converter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-purple-800 text-white py-3 px-6">
                  <h2 className="text-lg font-bold">
                    {conversionDirection === 'latin-to-ndiokwu' ? 'Latin Igbo' : 'Ndịokwu'}
                  </h2>
                </div>
                <div className="p-6">
                  <textarea
                    className="w-full h-56 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={`Enter ${
                      conversionDirection === 'latin-to-ndiokwu' ? 'Latin Igbo' : 'Ndịokwu'
                    } text here...`}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  
                  <button
                    className="w-full mt-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
                    onClick={handleConvert}
                    disabled={isConverting || !inputText}
                  >
                    {isConverting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Converting...
                      </>
                    ) : (
                      'Convert'
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-indigo-800 text-white py-3 px-6 flex justify-between items-center">
                  <h2 className="text-lg font-bold">
                    {conversionDirection === 'latin-to-ndiokwu' ? 'Ndịokwu' : 'Latin Igbo'}
                  </h2>
                  
                  <button
                    className={`text-sm px-3 py-1 rounded ${
                      copySuccess
                        ? 'bg-green-500 text-white'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    onClick={handleCopy}
                    disabled={!outputText}
                  >
                    {copySuccess ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="p-6">
                  <div
                    ref={outputRef}
                    className="w-full h-56 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 overflow-y-auto text-lg"
                  >
                    {outputText || (
                      <span className="text-gray-400 dark:text-gray-500">
                        Converted text will appear here...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Examples */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Example Conversions</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {examples.map((example, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Latin:</p>
                  <p className="text-lg mb-2">{example.latin}</p>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Ndịokwu:</p>
                  <p className="text-xl font-bold">{example.ndiokwu}</p>
                  
                  <button
                    className="w-full mt-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                    onClick={() => {
                      setInputText(conversionDirection === 'latin-to-ndiokwu' ? example.latin : example.ndiokwu);
                      setConversionDirection('latin-to-ndiokwu');
                    }}
                  >
                    Use Example
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Note */}
          <motion.div
            className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-yellow-800 dark:text-yellow-300">
              <strong>Note:</strong> This converter provides a simplified conversion and may not handle all edge cases
              of the Ndịokwu writing system. For complex text, please reference the full conversion rules.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 