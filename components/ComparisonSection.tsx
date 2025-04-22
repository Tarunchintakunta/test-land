"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Button from "./Button";

const ComparisonSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsContainerRef = useRef(null);
  const isInView = useInView(cardsContainerRef, { once: false, amount: 0.3 });

  // Comparison card data
  const comparisonCards = [
    {
      title: "Pharmaceutical Analysis",
      withoutTitle: "WITHOUT FIRMI",
      withoutSearch:
        'Searching: "Pharma companies ANDA approvals and FDA inspections"',
      withoutResult:
        "Analyst downloads annual reports and quarterly statements from 12 NSE-listed pharma companies, manually tracking ANDA approvals, US FDA inspection outcomes, and R&D pipelines. Spends 15+ hours creating comparison tables and struggles to connect regulatory events with stock price movements.",
      withoutFeature: "Manual data extraction and analysis required",
      withoutFooter: "Traditional research takes days.",
      withoutTag: "Time-Consuming",
      // withoutFooterLabel: "RESEARCH",
      withTitle: "WITH FIRMI",
      withSearch:
        'Analyzing: "Which NSE pharma companies have received USFDA approvals for complex generics while maintaining clean inspection records in the past year?"',
      withResult:
        'Firmi instantly processes regulatory filings and earnings data to report "Sun Pharma and Dr. Reddy\'s received 7 and 5 complex generics approvals respectively, with no Form 483 observations at key manufacturing facilities, driving 15% average US revenue growth."',
      withFeature:
        "Instant correlation of regulatory events with financial impact",
      withFooter: "Firmi delivers actionable insights.",
      withTag: "Instant Analysis",
      // withFooterLabel: "INSIGHT",
    },
    {
      title: "Banking Sector Analysis",
      withoutTitle: "WITHOUT FIRMI",
      withoutSearch: 'Searching: "Bank NPA trends and CASA ratios"',
      withoutResult:
        "Banking analyst downloads quarterly reports from all NSE-listed banks, manually extracting NPA trends, CASA ratios, and credit growth into spreadsheets. Spends 10+ hours normalizing data and building visualizations, struggling to correlate management commentary with changing asset quality trends.",
      withoutFeature: "Manual data compilation and normalization required",
      withoutFooter: "Traditional analysis takes hours.",
      withoutTag: "Resource Intensive",
      // withoutFooterLabel: "ANALYZE",
      withTitle: "WITH FIRMI",
      withSearch:
        'Analyzing: "Which NSE-listed private banks have reduced GNPA ratios while increasing retail loan book by >20% YoY?"',
      withResult:
        "Firmi instantly analyzes all bank disclosures and identifies \"HDFC Bank, ICICI Bank and Kotak Bank have achieved dual improvements, with management specifically attributing success to 'upgraded underwriting algorithms' and 'expanded digital lending channels' mentioned in earnings calls.\"",
      withFeature:
        "Automated correlation of financial metrics with management commentary",
      withFooter: "Firmi connects the dots instantly.",
      withTag: "Strategic Insights",
      // withFooterLabel: "STRATEGIZE",
    },
    {
      title: "Real Estate Analysis",
      withoutTitle: "WITHOUT FIRMI",
      withoutSearch:
        'Searching: "Real estate booking values and collection data"',
      withoutResult:
        "Real estate analyst reviews quarterly investor presentations from 8 NSE-listed developers, manually extracting booking values, collection data, and project completion timelines. Spends 12 hours organizing data to understand which companies are outperforming in sales velocity but struggles to connect performance with specific project types.",
      withoutFeature: "Manual data compilation and analysis required",
      withoutFooter: "Traditional research takes days.",
      withoutTag: "Time-Consuming",
      // withoutFooterLabel: "RESEARCH",
      withTitle: "WITH FIRMI",
      withSearch:
        'Analyzing: "Which NSE real estate companies have increased sales bookings >25% YoY while maintaining average collection efficiency above 90% in Q3?"',
      withResult:
        'Firmi instantly processes all disclosures and reports "Godrej Properties and Prestige Estates outperformed peers with 32% and 28% booking growth respectively, with strongest performance in mid-luxury segment projects in Bangalore and Mumbai as mentioned in analyst calls."',
      withFeature: "Instant correlation of sales metrics with project types",
      withFooter: "Firmi identifies market leaders.",
      withTag: "Market Intelligence",
      // withFooterLabel: "INTELLIGENCE",
    },
    {
      title: "Automotive Sector Analysis",
      withoutTitle: "WITHOUT FIRMI",
      withoutSearch: 'Searching: "Auto companies sales data and margin trends"',
      withoutResult:
        "Auto sector analyst manually compiles monthly sales data, export figures, and margin trends from 10 NSE-listed automotive companies. Spends 2 days creating spreadsheets to track market share evolution and struggles to incorporate commentary on raw material costs from earnings calls.",
      withoutFeature: "Manual data compilation and analysis required",
      withoutFooter: "Traditional research takes days.",
      withoutTag: "Time-Consuming",
      // withoutFooterLabel: "RESEARCH",
      withTitle: "WITH FIRMI",
      withSearch:
        'Analyzing: "Which NSE auto companies have gained domestic market share while improving EBITDA margins despite rising input costs in the last 2 quarters?"',
      withResult:
        "Firmi instantly processes all disclosures and identifies \"Maruti Suzuki and Tata Motors increased market share by 1.8% and 2.1% respectively while expanding margins, with management highlighting 'improved product mix' and 'operating leverage' as key factors offsetting higher aluminum and steel costs.\"",
      withFeature: "Instant correlation of market share with margin drivers",
      withFooter: "Firmi reveals competitive advantages.",
      withTag: "Competitive Analysis",
      // withFooterLabel: "ANALYZE",
    },
  ];

  // Auto-change cards every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCardIndex(
        (prevIndex) => (prevIndex + 1) % comparisonCards.length
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto px-[5%]">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-['Tiempos Headline'] font-[400] text-[#415d80] mb-4">
            Firmi enables technical teams to handle complex documents.
          </h2>
        </motion.div>

        <div className="relative" ref={cardsContainerRef}>
          {/* Cards Container */}
          <motion.div
            className="flex gap-8 justify-center items-stretch"
            animate={{
              x: isInView ? 0 : "100%",
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Without Card */}
            {comparisonCards[currentCardIndex] && (
              <motion.div
                className="comparison-card w-[48%] min-h-[380px] rounded-xl p-5 shadow-xl flex flex-col bg-[#2E3A4C]"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="bg-[#5B6573] text-[#FFFFFF] px-4 py-1.5 rounded-full text-sm font-medium">
                      {comparisonCards[currentCardIndex].withoutTitle}
                    </span>
                  </div>
                  <span className="bg-[#A3646E] text-[#FFFFFF] px-3 py-1 rounded-full text-sm font-medium">
                    {comparisonCards[currentCardIndex].withoutTag}
                  </span>
                </div>

                <div className="bg-[#273447] rounded-lg p-4 mb-4 flex-grow">
                  <div className="bg-[#1a2231] rounded-md p-2.5 mb-3 text-sm text-[#D6DCE5] border border-[#374357] shadow-inner">
                    <span className="text-[#B8D1F3] font-semibold tracking-wide mr-2 uppercase text-xs">
                      Searching:
                    </span>
                    {comparisonCards[currentCardIndex].withoutSearch.replace(
                      "Searching: ",
                      ""
                    )}
                  </div>

                  <div className="text-[#D6DCE5] text-sm mb-4 leading-relaxed min-h-[140px]">
                    {comparisonCards[currentCardIndex].withoutResult}
                  </div>

                  <div className="border-t border-[#444444] pt-3 text-[#A2A9B6] text-sm">
                    {comparisonCards[currentCardIndex].withoutFeature}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm mt-auto">
                  <span className="text-[#A2A9B6]">
                    {comparisonCards[currentCardIndex].withoutFooter}
                  </span>
                </div>
              </motion.div>
            )}

            {/* With Card */}
            {comparisonCards[currentCardIndex] && (
              <motion.div
                className="comparison-card w-[48%] min-h-[380px] rounded-xl p-5 shadow-xl flex flex-col bg-[#415d80]"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="bg-[#4e6b8e]/60 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      {comparisonCards[currentCardIndex].withTitle}
                    </span>
                  </div>
                  <span className="bg-[#5a7799] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {comparisonCards[currentCardIndex].withTag}
                  </span>
                </div>

                <div className="bg-[#4e6b8e] rounded-lg p-4 mb-4 flex-grow">
                  <div className="bg-[#334863] rounded-md p-2.5 mb-3 text-sm text-gray-100 border border-[#6888aa] shadow-inner">
                    <span className="text-[#E2ECF8] font-semibold tracking-wide mr-2 uppercase text-xs">
                      Analyzing:
                    </span>
                    {comparisonCards[currentCardIndex].withSearch.replace(
                      "Analyzing: ",
                      ""
                    )}
                  </div>

                  <div className="text-white text-sm mb-4 leading-relaxed min-h-[140px]">
                    {comparisonCards[currentCardIndex].withResult}
                  </div>

                  <div className="border-t border-[#5a7799]/50 pt-3 text-gray-100 text-sm">
                    {comparisonCards[currentCardIndex].withFeature}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm mt-auto">
                  <span className="text-gray-100">
                    {comparisonCards[currentCardIndex].withFooter}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Dot Navigation */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {comparisonCards.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentCardIndex
                    ? "bg-gradient-to-r from-[#2b4559] to-[#497293] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentCardIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
