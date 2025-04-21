'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from './Button';

const ComparisonSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsContainerRef = useRef(null);
  const isInView = useInView(cardsContainerRef, { once: false, amount: 0.3 });

  // Comparison card data
  const comparisonCards = [
    {
      title: 'Analyze free cash flow conversion ratios across NSE healthcare services sector',
      withoutTitle: 'WITHOUT FIRMI',
      withoutSearch: 'Searching: "Healthcare companies India FCF conversion"',
      withoutResult: 'Results: 18 documents with partial financial data. Now manually extract FCF components, normalize for exceptional items, create comparable metrics...',
      withoutFeature: 'Manual cross-referencing required',
      withoutFooter: 'Traditional search finds documents.',
      withoutTag: 'Limited Results',
      withoutFooterLabel: 'SEARCH',
      withTitle: 'WITH FIRMI',
      withSearch: 'Searching: "Free cash flow conversion trend analysis NSE healthcare services normalized for one-time factors"',
      withResult: 'Instant results: "Apollo Hospitals shows 89% FCF conversion vs sector average 71%. Fortis Healthcare improved conversion by 15pp over 8 quarters through inventory management initiatives mentioned in Q3FY24 call."',
      withFeature: 'Complex patterns identified automatically',
      withFooter: 'Firmi finds insights.',
      withTag: 'Instant Analysis',
      withFooterLabel: 'INSIGHT'
    },
    {
      title: 'Document Search',
      withoutTitle: 'WITHOUT FIRMI',
      withoutSearch: 'Searching: "HDFC Bank NIM expansion Q3 FY25"',
      withoutResult: 'Results: 47 documents across 6 platforms. Now manually check each to find the actual numbers and management commentary...',
      withoutFeature: 'Manual cross-referencing required',
      withoutFooter: 'Traditional search finds documents.',
      withoutTag: 'Limited Results',
      withoutFooterLabel: 'SEARCH',
      withTitle: 'WITH FIRMI',
      withSearch: 'Searching: "Companies where NIM expanded >15bps QoQ but management cited pressure on yields"',
      withResult: 'Instant results: "4 banks including HDFC Bank (NIM +18bps to 4.32%) mentioned \'competitive pressure\' in Q3 FY25 calls despite margin expansion."',
      withFeature: 'Complex patterns identified automatically',
      withFooter: 'Firmi finds insights.',
      withTag: 'Instant Analysis',
      withFooterLabel: 'INSIGHT'
    },
    {
      title: 'Data Extraction',
      withoutTitle: 'WITHOUT FIRMI',
      withoutSearch: 'Extracting: "Debt/EBITDA ratios for S&P 500 companies"',
      withoutResult: 'Results: Downloaded 500+ financial statements. Need to create formulas, normalize data, and manually check calculations.',
      withoutFeature: 'Hours of spreadsheet work required',
      withoutFooter: 'Traditional extraction requires human labor.',
      withoutTag: 'Time-Consuming',
      withoutFooterLabel: 'EXTRACT',
      withTitle: 'WITH FIRMI',
      withSearch: 'Asking: "Which S&P 500 companies have increased Debt/EBITDA by >0.5x while maintaining dividend growth?"',
      withResult: 'Instant results: "17 companies including Microsoft, Apple, and Amazon increased leverage while growing dividends. Average Debt/EBITDA change: +0.7x."',
      withFeature: 'Calculations performed automatically across documents',
      withFooter: 'Firmi delivers numerical insights.',
      withTag: 'Real-time Analytics',
      withFooterLabel: 'ANALYZE'
    },
    {
      title: 'Document Processing',
      withoutTitle: 'WITHOUT FIRMI',
      withoutSearch: 'Processing: "Identify all clauses mentioning force majeure in contracts"',
      withoutResult: 'Results: Keyword search found 78 mentions across 42 documents. Need legal review to determine actual implications and variations.',
      withoutFeature: 'Legal expertise required for interpretation',
      withoutFooter: 'Traditional processing finds text matches.',
      withoutTag: 'Limited Context',
      withoutFooterLabel: 'PROCESS',
      withTitle: 'WITH FIRMI',
      withSearch: 'Asking: "Which contracts have force majeure clauses that could be triggered by supply chain disruptions?"',
      withResult: 'Instant results: "23 contracts have clauses specifically covering supply chain issues. 7 have high risk exposure based on geographic limitations and notification periods."',
      withFeature: 'Semantic understanding of contractual implications',
      withFooter: 'Firmi understands document context.',
      withTag: 'Risk Assessment',
      withFooterLabel: 'UNDERSTAND'
    },
    {
      title: 'Market Intelligence',
      withoutTitle: 'WITHOUT FIRMI',
      withoutSearch: 'Researching: "Competitor pricing changes in SaaS market Q1 2025"',
      withoutResult: 'Results: 28 press releases and 15 earnings calls mention pricing. Need to manually extract specific changes and compare across companies.',
      withoutFeature: 'Comparison tables must be built manually',
      withoutFooter: 'Traditional research gathers mentions.',
      withoutTag: 'Fragmented Data',
      withoutFooterLabel: 'RESEARCH',
      withTitle: 'WITH FIRMI',
      withSearch: 'Asking: "Which SaaS competitors increased enterprise pricing while adding AI features in Q1 2025?"',
      withResult: 'Instant results: "9 competitors including Salesforce, Adobe and ServiceNow raised enterprise pricing by avg. 12% while launching AI features. 3 maintained pricing despite new AI capabilities."',
      withFeature: 'Cross-company trend analysis automated',
      withFooter: 'Firmi identifies market patterns.',
      withTag: 'Strategic Insights',
      withFooterLabel: 'STRATEGIZE'
    },
    {
      title: 'Compliance Monitoring',
      withoutTitle: 'WITHOUT FIRMI',
      withoutSearch: 'Auditing: "GDPR compliance violations in customer communications"',
      withoutResult: 'Results: 150+ customer emails need review for data privacy language. Compliance team must check each against latest regulations.',
      withoutFeature: 'Time-intensive compliance reviews required',
      withoutFooter: 'Traditional auditing checks documents one by one.',
      withoutTag: 'Resource Intensive',
      withoutFooterLabel: 'AUDIT',
      withTitle: 'WITH FIRMI',
      withSearch: 'Asking: "Identify communications with non-compliant data retention policies under latest GDPR amendments"',
      withResult: 'Instant results: "27 communications found with outdated retention language. Auto-generated compliance report shows 3 high-risk templates needing immediate updates to align with Article 17 amendments."',
      withFeature: 'Regulatory updates continuously monitored',
      withFooter: 'Firmi ensures continuous compliance.',
      withTag: 'Risk Mitigation',
      withFooterLabel: 'PROTECT'
    }
  ];

  // Auto-change cards every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % comparisonCards.length);
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
          <h2 className="text-3xl font-semibold text-[#415d80]  mb-4">
            Firmi enables technical teams to handle complex documents.
          </h2>
        </motion.div>

        <div className="relative" ref={cardsContainerRef}>
          {/* Cards Container */}
          <motion.div 
            className="flex gap-8 justify-center items-stretch"
            animate={{ 
              x: isInView ? 0 : '100%',
              opacity: isInView ? 1 : 0
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Without Card */}
            <motion.div 
              className="comparison-card w-[42%] rounded-xl p-5 shadow-xl flex flex-col bg-[#2E3A4C]"
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
                <div className="bg-[#273447] rounded-md p-2.5 mb-3 text-sm text-[#D6DCE5]">
                  {comparisonCards[currentCardIndex].withoutSearch}
                </div>
                
                <div className="text-[#D6DCE5] text-sm mb-4 leading-relaxed">
                  {comparisonCards[currentCardIndex].withoutResult}
                </div>
                
                <div className="border-t border-[#444444] pt-3 text-[#A2A9B6] text-sm">
                  {comparisonCards[currentCardIndex].withoutFeature}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm mt-auto">
                <span className="text-[#A2A9B6]">{comparisonCards[currentCardIndex].withoutFooter}</span>
                <span className="bg-[#5B6573] px-3 py-1.5 rounded-md text-[#FFFFFF] text-xs font-medium">
                  {comparisonCards[currentCardIndex].withoutFooterLabel}
                </span>
              </div>
            </motion.div>
            
            {/* With Card */}
            <motion.div 
              className="comparison-card w-[42%] rounded-xl p-5 shadow-xl flex flex-col bg-[#415d80]"
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
                <div className="bg-[#5a7799] rounded-md p-2.5 mb-3 text-sm text-gray-100">
                  {comparisonCards[currentCardIndex].withSearch}
                </div>
                
                <div className="text-white text-sm mb-4 leading-relaxed">
                  {comparisonCards[currentCardIndex].withResult}
                </div>
                
                <div className="border-t border-[#5a7799]/50 pt-3 text-gray-100 text-sm">
                  {comparisonCards[currentCardIndex].withFeature}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm mt-auto">
                <span className="text-gray-100">{comparisonCards[currentCardIndex].withFooter}</span>
                <span className="bg-[#5a7799] px-3 py-1.5 rounded-md text-white text-xs font-medium">
                  {comparisonCards[currentCardIndex].withFooterLabel}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Dot Navigation */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {comparisonCards.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentCardIndex
                    ? 'bg-gradient-to-r from-[#2b4559] to-[#497293] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
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