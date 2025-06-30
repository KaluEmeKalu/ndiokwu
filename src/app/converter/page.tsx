"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import NdiokwuText from '@/components/NdiokwuText';

export default function ConverterPage() {
  const [inputText, setInputText] = useState('');
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const examples = [
    { latin: "onye", ndiokwu: "onye" },
    { latin: "ndịokwu", ndiokwu: "ndịokwu" },
    { latin: "igbo", ndiokwu: "igbo" },
    { latin: "akwụkwọ", ndiokwu: "akwụkwọ" }
  ];

  const handleCopy = async (text: string, setCopied: (v: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleChange = (value: string) => {
    setInputText(value);
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
          Ndịokwu Converter
        </motion.h1>
        
        <p className="text-center text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Convert between Latin Igbo script and Ndịokwu writing system
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Textarea 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-purple-800 text-white py-3 px-6 flex justify-between items-center">
                  <h2 className="text-lg font-bold">Latin Igbo</h2>
                  <button
                    className={`text-sm px-3 py-1 rounded ${
                      copied1
                        ? 'bg-green-500 text-white'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    onClick={() => handleCopy(inputText, setCopied1)}
                  >
                    {copied1 ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="p-6">
                  <textarea
                    className="w-full h-56 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Type here..."
                    value={inputText}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>

            {/* Textarea 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-indigo-800 text-white py-3 px-6 flex justify-between items-center">
                  <h2 className="text-lg font-bold">Ndịokwu</h2>
                  <button
                    className={`text-sm px-3 py-1 rounded ${
                      copied2
                        ? 'bg-green-500 text-white'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    onClick={() => handleCopy(inputText, setCopied2)}
                  >
                    {copied2 ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="p-6">
                  <NdiokwuText>
                  <textarea
                    className="w-full h-56 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Type here..."
                    value={inputText}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  </NdiokwuText>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Example Conversions */}
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
                  <p className="text-xl font-bold"><NdiokwuText>{example.ndiokwu}</NdiokwuText></p>
                  
                  <button
                    className="w-full mt-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                    onClick={() => handleChange(example.latin)}
                  >
                    Use Example
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
