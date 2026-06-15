"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Trophy, Star, Code, Award, Users, Activity } from "lucide-react";

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Problem Solving",
      description: "Solved 60+ problems on LeetCode and 200+ problems on CodeChef",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Competitive Programming",
      description: "Achieved 1★ rating on CodeChef and HackerRank",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "100 Days of Code",
      description: "Earned the 100 Days of Code badge on CodeChef",
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      title: "Hackathons",
      description: "Participated in NexHack Hackathon",
      icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
  ];

  const extracurriculars = [
    {
      title: "Enigma Programming Club",
      role: "Member (2023–Present)",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      details: [
        "Organized coding contests and technical events",
        "Participated in competitive programming and DSA discussions",
      ],
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const bulletVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 } 
    },
  };

  return (
    <motion.section
      id="achievements"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full py-12 px-4 bg-transparent text-foreground mb-6 max-w-4xl mx-auto"
    >
      <motion.h2 
        variants={itemVariants}
        className="text-3xl sm:text-3xl font-serif text-primary mb-10 tracking-tight"
      >
        Achievements & Activities
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Achievements Column */}
        <div className="space-y-6">
          <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" /> Achievements
          </motion.h3>
          
          <div className="space-y-4">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  y: -3,
                  borderColor: "rgba(var(--primary-rgb), 0.3)",
                }}
                className="relative rounded-lg p-4 backdrop-blur-md bg-white/[0.02] border border-white/10 transition-all duration-300 flex items-start gap-4 group shadow-md"
              >
                <div className="flex-shrink-0 mt-1 p-2 rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra-Curricular Column */}
        <div className="space-y-6">
          <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" /> Extra-Curricular
          </motion.h3>
          
          <div className="space-y-6">
            {extracurriculars.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  y: -3,
                  borderColor: "rgba(var(--primary-rgb), 0.3)",
                }}
                className="relative rounded-lg p-5 backdrop-blur-md bg-white/[0.02] border border-white/10 transition-all duration-300 group shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <h4 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                      <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap w-fit">
                        {item.role}
                      </span>
                    </div>
                    
                    {item.details && (
                      <motion.ul 
                        variants={listVariants}
                        className="mt-4 space-y-2 text-sm text-muted-foreground"
                      >
                        {item.details.map((point, i) => (
                          <motion.li 
                            key={i} 
                            variants={bulletVariants}
                            className="flex gap-2.5 items-start"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                            <span className="leading-relaxed">{point}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
