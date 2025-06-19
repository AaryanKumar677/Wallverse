"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Image data from public folder
const wallpapers = [
  {
    id: 1,
    title: "Zenitsu Agatsuma",
    description: "Thunder Breathing swordsman from Demon Slayer.",
    slug: "zenitsu-agatsuma",
    image: "/wallpapers/Zenitsu_HD.jpg",
  },
  {
    id: 2,
    title: "Jiraya the Legend",
    description: "The Legendary Sannin and mentor of Naruto.",
    slug: "jiraya-the-legend",
    image: "/wallpapers/Jiraya_HD.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[--background] text-[--foreground] px-6 py-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent"
      >
        Welcome to Wallverse
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-3 text-gray-300 text-lg"
      >
        Discover high-quality anime wallpapers — pick your favorite.
      </motion.p>

      {/* Category Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {["Anime", "Nature", "Abstract", "Minimal", "Technology", "Gaming"].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.08 }}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-medium shadow-glow"
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Wallpapers Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {wallpapers.map((wallpaper) => (
          <Link key={wallpaper.id} href={`/wallpaper/${wallpaper.slug}`}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-md bg-[#18122B] hover:shadow-lg transition-all cursor-pointer"
            >
              <img
                src={wallpaper.image}
                alt={wallpaper.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">{wallpaper.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{wallpaper.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}
