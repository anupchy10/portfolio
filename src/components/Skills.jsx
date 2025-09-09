import React, { useState, useEffect, useRef } from 'react';
import useInViewAnimation from '../hooks/useInViewAnimation';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  const titleRef = useInViewAnimation('animate-fade-in-up duration-1000 ease-out');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'Tailwind CSS', level: 90, icon: '💨' },
        { name: 'Next.js', level: 85, icon: '▲' },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚂' },
        { name: 'REST APIs', level: 92, icon: '🔗' },
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'Firebase', level: 80, icon: '🔥' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90, icon: '📝' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 overflow-x-hidden" ref={skillsRef}>
      <div className="max-w-7xl mx-auto w-full">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full overflow-hidden"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4 w-full overflow-hidden">
                {category.skills.map((skill, skillIndex) => {
                  // Determine animation direction based on category
                  const animationDirection = (category.title === 'Frontend' || category.title === 'Database') 
                    ? 'fade-right' 
                    : 'fade-left';
                  const delay = skillIndex * 200;
                  
                  return (
                    <div 
                      key={skill.name} 
                      className="space-y-2 w-full"
                      data-aos={animationDirection}
                      data-aos-delay={delay}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="mr-2">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;