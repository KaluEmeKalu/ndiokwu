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
  'nch': 'ꔟ',
  'nd': 'ⴳ',
  'ng': '𑀔',
  'ngw': 'ꕼ',
  'nj': 'ꕨ',
  'nk': '𑄉',
  'nkw': '꘥',
  'ns': '𑀶',
  'nt': '꘧',
  'nw': 'ꖇ',
  'ny': '𑀤',
  'nz': 'ꗢ',
  'p': 'ꔵ',
  'r': '𑀵',
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
    if (!text) return '';
    
    // Create an array to store the result
    const result: string[] = [];
    
    // Convert to lowercase for processing
    const input = text.toLowerCase();
    
    // Track position in the input string
    let position = 0;
    
    while (position < input.length) {
      // Check for spaces first
      if (input[position] === ' ') {
        // Use triple spaces for better visibility
        result.push('   ');
        position += 1;
        continue;
      }
      
      // Check for digraphs next
      let foundDigraph = false;
      const digraphs = ['ngw', 'nkw', 'nch', 'ch', 'gb', 'gh', 'gw', 'kp', 'kw', 'nj', 'ns', 'nw', 'ny', 'mb', 'nd', 'ng', 'nk', 'nt', 'nz'];
      
      for (const digraph of digraphs) {
        if (input.substring(position, position + digraph.length).toLowerCase() === digraph) {
          // Found a digraph
          foundDigraph = true;
          
          // Check if there's a vowel after this digraph
          if (position + digraph.length < input.length && 
              'aeiouịọụ'.includes(input[position + digraph.length])) {
            // Digraph + vowel
            const vowel = input[position + digraph.length];
            result.push(consonantMap[digraph] + vowelDiacriticMap[vowel]);
            position += digraph.length + 1; // Move past digraph and vowel
          } else {
            // Standalone digraph (rare in Igbo, but possible)
            result.push(consonantMap[digraph]);
            position += digraph.length;
          }
          break;
        }
      }
      
      if (foundDigraph) continue;
      
      // If not a digraph, check for single consonant
      if ('bcdfghjklmnpqrstvwxyz'.includes(input[position])) {
        const consonant = input[position];
        
        // Check if there's a vowel after this consonant
        if (position + 1 < input.length && 
            'aeiouịọụ'.includes(input[position + 1])) {
          // Consonant + vowel
          const vowel = input[position + 1];
          result.push(consonantMap[consonant] + vowelDiacriticMap[vowel]);
          position += 2; // Move past consonant and vowel
        } else {
          // Standalone consonant
          result.push(consonantMap[consonant]);
          position += 1;
        }
      }
      // Check for vowel
      else if ('aeiouịọụ'.includes(input[position])) {
        // Standalone vowel
        result.push(vowelMap[input[position]]);
        position += 1;
      }
      // Unknown character or punctuation, preserve it
      else {
        result.push(input[position]);
        position += 1;
      }
    }
    
    return result.join('');
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
    { latin: "onye", ndiokwu: "𑀏𑀤̄" },
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