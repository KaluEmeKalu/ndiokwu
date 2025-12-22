"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type QuizQuestion = {
  id: number;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
};

type PracticeMode = 'quiz' | 'flashcards';

export default function PracticePage() {
  const [mode, setMode] = useState<PracticeMode>('quiz');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  
  // Flashcard state
  const [currentCard, setCurrentCard] = useState(0);
  const [showCardAnswer, setShowCardAnswer] = useState(false);

  // Quiz questions
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What vowel sound does a consonant without any diacritic represent?",
      options: [
        { text: "e", isCorrect: false },
        { text: "i", isCorrect: false },
        { text: "a", isCorrect: true },
        { text: "o", isCorrect: false }
      ],
      explanation: "In Ndịokwu, a consonant with no diacritic represents the vowel 'a'."
    },
    {
      id: 2,
      question: "Which diacritic is used for the vowel 'e'?",
      options: [
        { text: "̊ (ring above)", isCorrect: false },
        { text: "ʼ (apostrophe)", isCorrect: true },
        { text: "̣ (dot below)", isCorrect: false },
        { text: "̱ (line below)", isCorrect: false }
      ],
      explanation: "The vowel 'e' is represented by the diacritic ʼ (apostrophe/tick) at the top right."
    },
    {
      id: 3,
      question: "How would you write 'mma' in Ndịokwu?",
      options: [
        { text: "ꖝ̱", isCorrect: false },
        { text: "ꖝ̱ꖝ̱", isCorrect: false },
        { text: "ꖝꖝ", isCorrect: true },
        { text: "ꖝ̱𑀟", isCorrect: false }
      ],
      explanation: "For repeated consonants (geminates), you simply double the base consonant. No diacritic is needed since the vowel is 'a'."
    },
    {
      id: 4,
      question: "What does the symbol '𑀐' represent?",
      options: [
        { text: "The consonant 'k' with vowel 'a'", isCorrect: false },
        { text: "The independent vowel 'ọ'", isCorrect: true },
        { text: "The consonant 'p' with vowel 'ị'", isCorrect: false },
        { text: "The consonant 'g' with vowel 'o'", isCorrect: false }
      ],
      explanation: "𑀐 is the independent vowel 'ọ', used when a vowel starts a word or stands alone."
    },
    {
      id: 5,
      question: "How do you represent a consonant with no vowel in Ndịokwu?",
      options: [
        { text: "Add the breve diacritic (̆)", isCorrect: true },
        { text: "Double the consonant", isCorrect: false },
        { text: "It's not possible", isCorrect: false },
        { text: "Add a special silent marker", isCorrect: false }
      ],
      explanation: "To represent a bare consonant with no vowel, add the breve diacritic (̆) above the consonant."
    }
  ];

  // Flashcards
  const flashcards = [
    {
      front: "𑀚",
      back: "na"
    },
    {
      front: "𑀚ʼ",
      back: "ne"
    },
    {
      front: "𑀚̊",
      back: "ni"
    },
    {
      front: "𑀚̈",
      back: "nị"
    },
    {
      front: "𑀚̣",
      back: "no"
    },
    {
      front: "𑀚̤",
      back: "nọ"
    },
    {
      front: "𑀚̱",
      back: "nu"
    },
    {
      front: "𑀚̳",
      back: "nụ"
    },
    {
      front: "𑀐 𑀭̈ ꖝꖝ",
      back: "ọ dị mma"
    },
    {
      front: "ⴳ̈ 𑀏 ꘣̱",
      back: "ndịokwu"
    }
  ];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    
    if (questions[currentQuestion].options[optionIndex].isCorrect) {
      setScore(score + 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setQuizComplete(false);
  };

  const nextFlashcard = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setShowCardAnswer(false);
    } else {
      // Cycle back to the first card
      setCurrentCard(0);
      setShowCardAnswer(false);
    }
  };

  const prevFlashcard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setShowCardAnswer(false);
    } else {
      // Cycle to the last card
      setCurrentCard(flashcards.length - 1);
      setShowCardAnswer(false);
    }
  };

  const flipCard = () => {
    setShowCardAnswer(!showCardAnswer);
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
          Practice Ndịokwu
        </motion.h1>

        {/* Mode Selection */}
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="flex">
              <button
                className={`flex-1 py-3 text-center font-medium transition-colors ${
                  mode === 'quiz'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setMode('quiz')}
              >
                Quiz
              </button>
              <button
                className={`flex-1 py-3 text-center font-medium transition-colors ${
                  mode === 'flashcards'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setMode('flashcards')}
              >
                Flashcards
              </button>
            </div>
          </div>
        </div>

        {/* Quiz Mode */}
        {mode === 'quiz' && !quizComplete && (
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-purple-800 text-white py-4 px-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Question {currentQuestion + 1} of {questions.length}</h2>
                  <span className="text-lg">Score: {score}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h3>
                
                <div className="space-y-3 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedOption === index && option.isCorrect
                          ? 'bg-green-100 dark:bg-green-900/30 border border-green-500'
                          : selectedOption === index
                          ? 'bg-red-100 dark:bg-red-900/30 border border-red-500'
                          : selectedOption !== null
                          ? 'bg-gray-100 dark:bg-gray-700 opacity-70'
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      onClick={() => !showAnswer && handleOptionSelect(index)}
                      disabled={showAnswer}
                    >
                      {option.text}
                      
                      {selectedOption === index && option.isCorrect && (
                        <span className="ml-2 text-green-600 dark:text-green-400">✓</span>
                      )}
                      {selectedOption === index && !option.isCorrect && (
                        <span className="ml-2 text-red-600 dark:text-red-400">✗</span>
                      )}
                    </button>
                  ))}
                </div>
                
                {showAnswer && (
                  <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="font-medium text-blue-800 dark:text-blue-300">Explanation:</p>
                    <p className="text-gray-700 dark:text-gray-300">{questions[currentQuestion].explanation}</p>
                  </div>
                )}
                
                {showAnswer && (
                  <button 
                    className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                    onClick={goToNextQuestion}
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Quiz Results */}
        {mode === 'quiz' && quizComplete && (
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden text-center">
              <div className="bg-purple-800 text-white py-6 px-6">
                <h2 className="text-2xl font-bold">Quiz Complete!</h2>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <p className="text-xl mb-2">Your Score:</p>
                  <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">{score} / {questions.length}</p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                    ({Math.round((score / questions.length) * 100)}%)
                  </p>
                </div>
                
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  {score === questions.length 
                    ? "Perfect! You've mastered the Ndịokwu basics!"
                    : score >= questions.length * 0.7
                    ? "Great job! You're well on your way to mastering Ndịokwu!"
                    : "Good effort! Keep practicing to improve your Ndịokwu skills."}
                </p>
                
                <button 
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                  onClick={resetQuiz}
                >
                  Try Again
                </button>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Flashcard Mode */}
        {mode === 'flashcards' && (
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-indigo-800 text-white py-4 px-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Flashcards</h2>
                  <span className="text-lg">{currentCard + 1} / {flashcards.length}</span>
                </div>
              </div>
              
              <div 
                className="h-64 flex items-center justify-center p-6 cursor-pointer"
                onClick={flipCard}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl"
                  initial={false}
                  animate={{ 
                    rotateY: showCardAnswer ? 180 : 0,
                    opacity: 1
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ 
                    perspective: '1000px',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {!showCardAnswer ? (
                    <p className="text-5xl font-bold">{flashcards[currentCard].front}</p>
                  ) : (
                    <p className="text-3xl font-semibold" style={{ transform: 'rotateY(180deg)' }}>
                      {flashcards[currentCard].back}
                    </p>
                  )}
                </motion.div>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800 flex justify-between">
                <button 
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                  onClick={prevFlashcard}
                >
                  Previous
                </button>
                
                <button 
                  className="px-5 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors"
                  onClick={flipCard}
                >
                  Flip
                </button>
                
                <button 
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                  onClick={nextFlashcard}
                >
                  Next
                </button>
              </div>
            </div>
            
            <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
              Tip: Click or tap on the card to flip it.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
} 