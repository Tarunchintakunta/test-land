'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button3D from './Button3D';

const QuerySection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    'Find mid-cap pharma: zero FDA warnings + 15%+ export CAGR',
    'Auto sector outlook: EV transition & PLI scheme impact',
    'PSU banks NPA resolution progress and credit growth comparison',
    'Steel producers cost structure analysis amid volatile coking coal prices',
    'Cement sector margin trends amid infrastructure push and input cost pressures'
  ];
  const [isTyping, setIsTyping] = useState(true);
  const [activeSource, setActiveSource] = useState('all');
  const [deepThinkEnabled, setDeepThinkEnabled] = useState(true);

  // Typing animation effect with 3-second pause between questions
  useEffect(() => {
    if (isTyping) {
      const currentQuestion = questions[currentQuestionIndex];
      if (displayText.length < currentQuestion.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentQuestion.substring(0, displayText.length + 1));
        }, 30); // Speed of typing
        
        return () => clearTimeout(timeout);
      } else {
        // When finished typing, wait 3 seconds before moving to next question
        const pauseTimeout = setTimeout(() => {
          setIsTyping(false);
          setDisplayText('');
          
          // Move to the next question
          setCurrentQuestionIndex((prevIndex) => 
            prevIndex === questions.length - 1 ? 0 : prevIndex + 1
          );
          
          // Start typing the next question after a brief delay
          setTimeout(() => {
            setIsTyping(true);
          }, 100);
        }, 3000); // 3 second pause after completing a question
        
        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [displayText, isTyping, currentQuestionIndex, questions]);

  // Handle send button click
  const handleSend = () => {
    // Here you would implement the actual query functionality
    alert(`Asking: "${displayText}" with Deep Think ${deepThinkEnabled ? 'enabled' : 'disabled'}`);
  };

  // Handle source selection
  const handleSourceSelect = (source: string) => {
    setActiveSource(source);
  };

  // Toggle deep think
  const toggleDeepThink = () => {
    setDeepThinkEnabled(!deepThinkEnabled);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-[#415d80] mb-4">Intelligence On Demand</h2>
          <p className="text-lg text-tertiary max-w-2xl mx-auto">
          Not just faster answers. Better ones. One question. Every dataset. Instant clarity.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Query Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-4 py-3">
              {/* Search Icon */}
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              
              {/* Query Input Field */}
              <div className="flex-grow flex items-center">
                <span className="text-gray-600 mr-1">
                  {displayText || "Ask about market patterns, correlations, or insights..."}
                </span>
                {isTyping && (
                  <span className="typing-cursor ml-1 w-0.5 h-5 bg-[#415d80] animate-pulse"></span>
                )}
              </div>
                {/* Attachment Button */}
                <button 
                className="text-black hover:text-gray-700 mr-3"
                aria-label="Add attachment"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                </svg>
              </button>
              
              {/* Deep Think Toggle */}
              <div className="flex items-center space-x-2 mr-3">
                <span className="text-sm text-gray-600">Deep Think</span>
                <button 
                  onClick={toggleDeepThink}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${deepThinkEnabled ? 'bg-[#415d80]' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      deepThinkEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
            
              
              {/* Send Button */}
              <button 
                onClick={handleSend}
                className="bg-[#415d80] hover:bg-[#385a75] text-white rounded-lg px-3 py-2 flex items-center justify-center shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
              >
                <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Source Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2"
              active={activeSource === 'Financial Metrics'}
              onClick={() => handleSourceSelect('Financial Metrics')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span className="font-medium">Financial Metrics</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2"
              active={activeSource === 'Transcripts'}
              onClick={() => handleSourceSelect('Transcripts')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
              </svg>
              <span className="font-medium">Annual Reports</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2"
              active={activeSource === 'Web'}
              onClick={() => handleSourceSelect('Web')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <span className="font-medium">Economic Indicators</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2"
              active={activeSource === 'Internal'}
              onClick={() => handleSourceSelect('Internal')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
              <span className="font-medium">Internal Files</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2"
              active={activeSource === 'Market'}
              onClick={() => handleSourceSelect('Market')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>
              <span className="font-medium">Research Reports</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2"
              active={activeSource === 'Presentations'}
              onClick={() => handleSourceSelect('Presentations')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span className="font-medium">Investor Presentations</span>
            </Button3D>
            <Button3D 
              variant="secondary" 
              size="sm" 
              onClick={() => alert('More sources coming soon!')}
            >
              <span className="font-medium">Commodities</span>
            </Button3D>  
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2"
              active={activeSource === 'News'}
              onClick={() => handleSourceSelect('News')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              <span className="font-medium">News & media</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              onClick={() => alert('More sources coming soon!')}
            >
              <span className="font-medium">... more</span>
            </Button3D>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuerySection;