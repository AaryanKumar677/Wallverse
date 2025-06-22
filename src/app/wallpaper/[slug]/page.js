'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import wallpapers from "@/app/data/wallpapers";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import FullScreenImage from "@/components/ui/FullScreenImage";

export default function WallpaperDetail() {
  const [searchQuery, setSearchQuery] = useState('');

  const params = useParams();
  const wallpaper = wallpapers.find((item) => item.slug === params.slug);
  if (!wallpaper) return notFound();

  return (
    <div className="min-h-screen bg-[#0f0c1d] px-6 py-10 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full">

        {/* Left Side */}
        <div className="md:w-2/3 w-full md:pl-1">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[200px] md:w-[300px] mb-5"
          >
            <img
              src="/assets/logo3.png"
              alt="Wallverse Logo"
              className="w-full h-auto md:ml-5"
            />
          </motion.h1>

          <h1 className="text-[32px] font-semibold mb-1 md:ml-10">{wallpaper.name}</h1>
          <p className="mb-7 text-[17px] text-gray-300 md:ml-10">{wallpaper.description}</p>

          <motion.div
            layoutId={`wallpaper-image-${wallpaper.slug}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:ml-4 max-w-[650px] w-full mx-auto"
          >
            <FullScreenImage wallpaper={wallpaper} />
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 w-full mt-24 md:mt-[10px] md:-translate-x-14">

          {/* ✅ Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-md mb-56"
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

          {/* Download Buttons */}
          <h2 className="text-2xl font-bold mb-4 ml-16">Download Options</h2>
          <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4 -ml-16">
            <Button className="text-base px-5 py-3 whitespace-nowrap">
              <a href={wallpaper.fullhd} download target="_blank">Download Full HD</a>
            </Button>
            <Button className="text-base px-5 py-3 whitespace-nowrap">
              <a href={wallpaper["2k"]} download target="_blank">Download 2K</a>
            </Button>
            <Button className="text-base px-5 py-3 whitespace-nowrap">
              <a href={wallpaper["4k"]} download target="_blank">Download 4K</a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );

}
