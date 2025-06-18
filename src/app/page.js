'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const wallpapers = [
  {
    title: 'Zenitsu Agatsuma',
    slug: 'zenitsu-agatsuma',
    src: '/wallpapers/Zenitsu_HD.jpg',
    description: 'Zenitsu is a Thunder Breathing swordsman from Demon Slayer with lightning speed and an electrifying presence.'
  },  {
    title: 'Jiraya Sensai',
    slug: 'jiraya-sensai',
    src: '/wallpapers/Jiraya_HD.png',
    description: 'Jiraya, the Toad Sage, is a legendary shinobi from Naruto known for his wisdom, humor, and powerful jutsus.'
  }
];

const categories = [
  'Anime',
  'Nature',
  'Minimal',
  'Abstract',
  'Technology',
  'Space',
  'Gaming'
];

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0d0b1e] via-[#12082a] to-[#1a0933] p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-center mb-4 drop-shadow-xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
          Welcome to
        </span>{' '}
        <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-7xl sm:text-8xl">
          Wallverse
        </span>
      </motion.h1>

      <motion.p
        className="text-center text-[19px] sm:text-[15px] text-slate-400 max-w-xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Discover, download, and indulge in a universe of stunning anime, nature, minimal, and premium wallpapers.
        Each wallpaper is handpicked to elevate your screen experience.
      </motion.p>

      <section className="mb-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-400 mb-6 text-left -ml-34">Popular Categories</h2>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-10">
            {categories.slice(0, 4).map((category) => (
              <motion.div
                key={category}
                className="bg-gradient-to-br from-purple-700 to-pink-500 px-10 py-4 rounded-md text-center font-semibold text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-md text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {category}
              </motion.div>
            ))}
          </div>

          <div className="flex gap-6">
            {categories.slice(4).map((category, index) => (
              <motion.div
                key={category}
                className="bg-gradient-to-br from-purple-700 to-pink-500 px-8 py-3 rounded-md text-center font-semibold text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-md text-base"
                whileHover={{ scale: 1.1 }}
              >
                {category}
              </motion.div>
            ))}
            <motion.div
              className="bg-white/10 border border-pink-600 px-2 py-2 rounded-md text-sm font-semibold text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer text-center ml-2"
              whileHover={{ scale: 1.1 }}
            >
              More
            </motion.div>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {wallpapers.map((wallpaper, index) => (
          <motion.div
            key={wallpaper.slug}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0c29] rounded-2xl shadow-xl overflow-hidden border border-purple-900 group hover:shadow-fuchsia-500/50 hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <Link href={`/wallpaper/${wallpaper.slug}`}>
              <div className="cursor-pointer">
                <img
                  src={wallpaper.src}
                  alt={wallpaper.title}
                  className="w-full h-56 object-cover group-hover:brightness-110 group-hover:scale-105 transition duration-300"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white drop-shadow-md mb-2">
                    {wallpaper.title}
                  </h2>
                  <p className="text-sm text-slate-300 group-hover:text-slate-100 transition-all duration-300">
                    {wallpaper.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}
