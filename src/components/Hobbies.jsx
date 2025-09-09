import React from 'react';
import useInViewAnimation from '../hooks/useInViewAnimation';
import useHobbiesAnimation from '../hooks/useHobbiesAnimation';

const Hobbies = () => {
  const titleRef = useInViewAnimation('animate-fade-in-up duration-1000 ease-out');
  const hobbiesGridRef = useHobbiesAnimation({
    selector: '.hobby-card',
    rootMargin: '-100px 0px -100px 0px',
    threshold: 0.1,
    once: false
  });
  const balanceSectionRef = useInViewAnimation('animate-zoom-in-up duration-700 ease-out');
  
  const hobbies = [
    {
      emoji: '🧑‍💻',
      title: 'Watching Anime',
      description: 'Exploring amazing stories and art through anime. Enjoy everything from slice of life to epic adventures.',
      color: 'from-emerald-400 to-cyan-400'
    },
    {
      emoji: '🎮',
      title: 'Gaming',
      description: 'Enjoying strategy games and staying updated with the latest in gaming technology and VR.',
      color: 'from-purple-400 to-pink-400'
    },
    {
      emoji: '☕',
      title: 'Coffee Brewing',
      description: 'Perfecting the art of coffee brewing. From espresso to pour-over, exploring different beans and methods.',
      color: 'from-amber-400 to-orange-400'
    },
    {
      emoji: '📚',
      title: 'Reading',
      description: 'Always learning through tech books, sci-fi novels, and articles about emerging technologies.',
      color: 'from-blue-400 to-indigo-400'
    },
    {
      emoji: '🏃‍♂️',
      title: 'Running',
      description: 'Keeping fit and clearing my mind with regular runs. Also enjoy participating in local marathons.',
      color: 'from-green-400 to-teal-400'
    },
    {
      emoji: '🎵',
      title: 'Music Production',
      description: 'Creating electronic music in my spare time. Love experimenting with synthesizers and DAWs.',
      color: 'from-rose-400 to-red-400'
    },
    {
      emoji: '🌙',
      title: 'Night Walk Alone',
      description: 'Peaceful solo walks under the moonlight. Perfect time for reflection and clearing my mind.',
      color: 'from-lime-400 to-green-400'
    },
    {
      emoji: '✈️',
      title: 'Traveling',
      description: 'Exploring new cultures and places. Always excited to discover hidden gems and try local cuisines.',
      color: 'from-sky-400 to-cyan-400'
    }
  ];

  return (
    <section id="hobby" className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Beyond Code
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            What I love doing when I'm not coding
          </p>
        </div>

        <div ref={hobbiesGridRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-3 md:gap-4 lg:gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.title}
              className="hobby-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 md:p-4 lg:p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {hobby.emoji}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {hobby.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${hobby.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        <div ref={balanceSectionRef} className="mt-16 text-center opacity-0">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Life is about balance
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These hobbies keep me inspired, creative, and balanced. They often bring fresh perspectives to my development work and help me approach problems from different angles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;