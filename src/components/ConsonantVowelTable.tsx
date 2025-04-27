import React from 'react';
import { motion } from 'framer-motion';

type ConsonantVowelTableProps = {
  className?: string;
};

export default function ConsonantVowelTable({ className = '' }: ConsonantVowelTableProps) {
  // Data structure for the vowels
  const vowels = [
    { symbol: 'a', diacritic: '—', label: 'a (—)' },
    { symbol: 'e', diacritic: '̄', label: 'e (̄)' },
    { symbol: 'i', diacritic: '̊', label: 'i (̊)' },
    { symbol: 'ị', diacritic: '̈', label: 'ị (̈)' },
    { symbol: 'o', diacritic: '̣', label: 'o (̣)' },
    { symbol: 'ọ', diacritic: '̤', label: 'ọ (̤)' },
    { symbol: 'u', diacritic: '̱', label: 'u (̱)' },
    { symbol: 'ụ', diacritic: '̳', label: 'ụ (̳)' },
  ];

  // Data structure for the consonants
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
    { symbol: 'j', base: 'ꕦ' },
    { symbol: 'k', base: 'ꖑ' },
    { symbol: 'kp', base: '꘤' },
    { symbol: 'kw', base: 'ꗷ' },
    { symbol: 'l', base: 'ꘗ' },
    { symbol: 'm', base: '𑀠' },
    { symbol: 'mb', base: '𑄘' },
    { symbol: 'n', base: 'ꖫ' },
    { symbol: 'nd', base: 'ꗏ' },
    { symbol: 'ng', base: '𑀔' },
    { symbol: 'nk', base: '𑄉' },
    { symbol: 'nt', base: '꘧' },
    { symbol: 'nw', base: 'ꖇ' },
    { symbol: 'ny', base: '꘥' },
    { symbol: 'nz', base: 'ꗢ' },
    { symbol: 'p', base: 'ꔵ' },
    { symbol: 'r', base: 'ꕼ' },
    { symbol: 's', base: '𑀚' },
    { symbol: 't', base: 'ꔧ' },
    { symbol: 'v', base: '꘣' },
    { symbol: 'w', base: '𑀲' },
    { symbol: 'y', base: '𑀫' },
    { symbol: 'z', base: '𑀣' },
  ];

  // Function to get combined character with diacritic
  const getCombinedCharacter = (consonantBase: string, vowelDiacritic: string) => {
    if (vowelDiacritic === '—') {
      return consonantBase; // Base form already has 'a'
    }
    return consonantBase + vowelDiacritic; // Combine with diacritic
  };

  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-x-auto ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-indigo-800 text-white py-4 px-6">
        <h2 className="text-2xl font-bold">Ndịokwu Consonant-Vowel Table</h2>
        <p className="text-indigo-200">Complete table of all consonant-vowel combinations</p>
      </div>
      
      <div className="p-4">
        <table className="w-full border-collapse my-4 min-w-max">
          <thead>
            <tr className="bg-indigo-100 dark:bg-indigo-900/30">
              <th className="border p-2 sticky left-0 bg-indigo-100 dark:bg-indigo-900/30 z-10">Consonant</th>
              {vowels.map((vowel) => (
                <th key={vowel.symbol} className="border p-2">
                  {vowel.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {consonants.map((consonant) => (
              <tr key={consonant.symbol}>
                <td className="border p-2 font-semibold sticky left-0 bg-white dark:bg-gray-800 z-10">
                  {consonant.symbol} ({consonant.base})
                </td>
                {vowels.map((vowel) => (
                  <td key={vowel.symbol} className="border p-2 text-center text-2xl">
                    {getCombinedCharacter(consonant.base, vowel.diacritic)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          This table covers all consonant-vowel combinations based on the fully finalized Ndịokwu Igbo Abugida.
        </p>
      </div>
    </motion.div>
  );
} 