'use client';
import { motion } from 'framer-motion';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="w-full md:w-[700px]"
    >
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search your any type of wallpaper you want"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full bg-[#2a1d3a] text-white placeholder-white/80 border border-[#4b3869] focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
        />
      </div>
    </motion.div>
  );
}

// 🧠 Important: Don't forget to import this icon
import { Search } from 'lucide-react';
