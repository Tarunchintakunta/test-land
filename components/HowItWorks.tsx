"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const HowItWorks = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1
            className="heading-lg text-[#415d80] mb-4 text-3xl font-['Tiempos Headline'] font-[400]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            All the data you need in one place
          </motion.h1>
          <motion.p
            className="body-text text-tertiary font-['system-ui']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Firmi sources hundreds of millions of public and private data files
            and ingests them into our proprietary enterprise.
          </motion.p>
        </div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-[#2b4559]/5 to-[#497293]/5 p-2 md:p-4">
            <video
              className="w-full h-full object-cover rounded-lg"
              src="/Firmi floww.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedMetadata={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                const video = e.target as HTMLVideoElement;
                video.playbackRate = 2;
                // Force highest quality rendering
                video.style.imageRendering = "high-quality";
                // Set video to highest resolution if available
                if (video.videoHeight >= 1080) {
                  console.log("High resolution video detected");
                }
              }}
              style={{
                filter:
                  "brightness(1.15) contrast(1.15) saturate(1.1) hue-rotate(-5deg)",
                transform: "scale(1.02)",
                imageRendering: "crisp-edges",
                WebkitFontSmoothing: "antialiased",
                backfaceVisibility: "hidden",
                objectFit: "cover",
              }}
            />
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Button className="btn-primary">Visit Playground</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
