import React, { useEffect, useRef, useState } from 'react';
import {
  SiGo,
  SiPython,
  SiFlask,
  SiPostgresql,
  SiCplusplus,
  SiDelphi,
  SiReact,
  SiAstro,
  SiHugo,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiLinux,
  SiDocker,
  SiGithub,
} from 'react-icons/si';
import { GiPianist, GiPianoKeys, GiMusicalScore, GiGuitar, GiTrumpet, GiViolin } from 'react-icons/gi';
import { FaMicrophone } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
  years?: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  theme: 'blue' | 'amber';
}

// Skill data with icons from react-icons
const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    theme: 'blue',
    skills: [
      { name: 'Golang', icon: <SiGo className="w-5 h-5" />, years: 3 },
      { name: 'Python', icon: <SiPython className="w-5 h-5" />, years: 4 },
      { name: 'C++', icon: <SiCplusplus className="w-5 h-5" />, years: 3 },
      { name: 'Delphi', icon: <SiDelphi className="w-5 h-5" />, years: 3 },
      { name: 'SQL', icon: <SiPostgresql className="w-5 h-5" />, years: 4 },
      { name: 'SQLite', icon: <SiPostgresql className="w-5 h-5" />, years: 3 },
      { name: 'Flask', icon: <SiFlask className="w-5 h-5" />, years: 2 },
    ],
  },
  {
    title: 'Frontend',
    theme: 'blue',
    skills: [
      { name: 'React', icon: <SiReact className="w-5 h-5" />, years: 3 },
      { name: 'Astro', icon: <SiAstro className="w-5 h-5" />, years: 1 },
      { name: 'Hugo', icon: <SiHugo className="w-5 h-5" />, years: 3 },
      { name: 'Delphi', icon: <SiDelphi className="w-5 h-5" />, years: 3 },
      { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" />, years: 3 },
      { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5" />, years: 5 },
      { name: 'HTML', icon: <SiHtml5 className="w-5 h-5" />, years: 5 },
      { name: 'CSS', icon: <SiCss3 className="w-5 h-5" />, years: 5 },
    ],
  },
  {
    title: 'Other',
    theme: 'blue',
    skills: [
      { name: 'Git', icon: <SiGit className="w-5 h-5" />, years: 5 },
      { name: 'Linux', icon: <SiLinux className="w-5 h-5" />, years: 2 },
      { name: 'GitHub Actions', icon: <SiGithub className="w-5 h-5" />, years: 3 },
      { name: 'GitHub Copilot', icon: <SiGithub className="w-5 h-5" />, years: 1 },
      { name: 'Docker', icon: <SiDocker className="w-5 h-5" />, years: 1 },
    ],
  },
  {
    title: 'Musical Instruments',
    theme: 'amber',
    skills: [
      { name: 'Piano', icon: <GiPianist className="w-5 h-5" />, years: 18 },
      { name: 'Organ', icon: <GiPianoKeys className="w-5 h-5" />, years: 5 },
      { name: 'Singing', icon: <FaMicrophone className="w-5 h-5" />, years: 10 },
      { name: 'Guitar', icon: <GiGuitar className="w-5 h-5" />, years: 4 },
      { name: 'Trumpet', icon: <GiTrumpet className="w-5 h-5" />, years: 8 },
      { name: 'Violin', icon: <GiViolin className="w-5 h-5" />, years: 3 },
      { name: 'Euphonium', icon: <GiMusicalScore className="w-5 h-5" />, years: 2 },
    ],
  },
];

const themeStyles = {
  blue: {
    bg: 'bg-blue-900/20',
    border: 'border-blue-500/30',
    iconBg: 'bg-blue-500/20',
    iconText: 'text-blue-400',
    badge: 'bg-blue-500/30 text-blue-300',
    title: 'text-blue-400',
  },
  amber: {
    bg: 'bg-amber-900/20',
    border: 'border-amber-500/30',
    iconBg: 'bg-amber-500/20',
    iconText: 'text-amber-400',
    badge: 'bg-amber-500/30 text-amber-300',
    title: 'text-amber-400',
  },
};

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">
        Skills & Expertise
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => {
          const styles = themeStyles[category.theme];
          return (
            <div
              key={category.title}
              className={`${styles.bg} ${styles.border} border rounded-xl p-6 transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h4 className={`text-lg font-semibold ${styles.title} mb-4`}>
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 ${styles.iconBg} rounded-lg px-3 py-2 transition-all duration-300 hover:scale-105`}
                    style={{
                      transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                    }}
                  >
                    <span className={styles.iconText}>{skill.icon}</span>
                    <span className="text-gray-200 text-sm font-medium">
                      {skill.name}
                    </span>
                    {skill.years && (
                      <span
                        className={`${styles.badge} text-xs px-1.5 py-0.5 rounded-full`}
                      >
                        {skill.years}y
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
