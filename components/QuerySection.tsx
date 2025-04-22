"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button3D from "./Button3D";

const QuerySection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    "Find mid-cap pharma: zero FDA warnings + 15%+ export CAGR",
    "Auto sector outlook: EV transition & PLI scheme impact",
    "PSU banks NPA resolution progress and credit growth comparison",
    "Steel producers cost structure analysis amid volatile coking coal prices",
    "Cement sector margin trends amid infrastructure push and input cost pressures",
  ];
  const [isTyping, setIsTyping] = useState(true);
  const [activeSource, setActiveSource] = useState("all");
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
          setDisplayText("");

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
    alert(
      `Asking: "${displayText}" with Deep Think ${
        deepThinkEnabled ? "enabled" : "disabled"
      }`
    );
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
          <h2 className="text-3xl font-['Tiempos Headline'] font-[400] text-[#415d80] mb-4">
            Investment Research On Demand
          </h2>
          <p className="text-lg text-tertiary max-w-2xl mx-auto font-['system-ui']">
            Not just faster answers. Better ones. One question. Every dataset.
            Instant clarity.
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
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>

              {/* Query Input Field */}
              <div className="flex-grow flex items-center">
                <span className="text-gray-600 mr-1">
                  {displayText ||
                    "Ask about market patterns, correlations, or insights..."}
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>

              {/* Deep Think Toggle */}
              <div className="flex items-center space-x-2 mr-3">
                <span className="text-sm text-gray-600">Deep Think</span>
                <button
                  onClick={toggleDeepThink}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                    deepThinkEnabled ? "bg-[#415d80]" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      deepThinkEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Send Button */}
              <button
                onClick={handleSend}
                className="bg-[#415d80] hover:bg-[#385a75] text-white rounded-lg px-3 py-2 flex items-center justify-center shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
              >
                <svg
                  className="w-5 h-5 transform rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Source Buttons */}
          <div className="mt-10 max-w-5xl mx-auto px-4">
            {/* First row - 4 buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Button3D
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
                active={activeSource === "Financial Metrics"}
              >
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
                <span className="font-medium">Financial Metrics</span>
              </Button3D>

              <Button3D
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
                active={activeSource === "Annual Reports"}
              >
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span className="font-medium">Annual Reports</span>
              </Button3D>

              <Button3D
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
                active={activeSource === "Economic Indicators"}
              >
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
                <span className="font-medium">Economic Indicators</span>
              </Button3D>

              <Button3D
                variant="primary"
                size="sm"
                className="flex items-center space-x-2 btn-primary !ring-0 !ring-offset-0 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
                active={false}
              >
                <svg
                  className="w-5 h-5 text-white flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
                <span className="font-medium">Your Internal Files</span>
              </Button3D>
            </div>

            {/* Second row - remaining buttons */}
            <div className="flex flex-nowrap justify-center gap-4 w-full overflow-x-auto pb-1">
              <Button3D
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
                active={activeSource === "Market"}
              >
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
                <span className="font-medium">Research Reports</span>
              </Button3D>

              <Button3D
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
                active={activeSource === "Presentations"}
              >
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span className="font-medium">Investor Presentations</span>
              </Button3D>

              <Button3D
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <span className="font-medium">Commodities</span>
              </Button3D>

              <Button3D
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
                active={activeSource === "News"}
              >
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  ></path>
                </svg>
                <span className="font-medium">News & media</span>
              </Button3D>

              <Button3D
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 w-[200px] h-[40px] justify-start px-3 whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
                <span className="font-medium">more</span>
              </Button3D>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuerySection;
