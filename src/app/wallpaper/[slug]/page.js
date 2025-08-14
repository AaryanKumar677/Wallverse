'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import wallpapers from '@/app/data/wallpapers';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import FullScreenImage from '@/components/ui/FullScreenImage';

export default function WallpaperDetail() {
  /* ── data ─────────────────────────────────────────────── */
  const [searchQuery, setSearchQuery] = useState('');
  const params = useParams();
  const wallpaper = wallpapers.find((w) => w.slug === params.slug);
  if (!wallpaper) return notFound();

  /* ── layout ───────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-[#0f0c1d] px-4 py-10 text-white">
      {/* Canva-style floating card */}
      <div className="bg-[#1a1a2f] rounded-2xl shadow-2xl p-6 md:p-10 w-full max-w-[83rem] mx-auto">
        {/* Desktop: 2-col grid ‖ Mobile: stacked */}
        <div className="md:grid md:grid-cols-12 md:gap-14">

          {/* ───────── LEFT COLUMN ───────── */}
          <div className="order-1 md:col-span-7 flex flex-col gap-6">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold">
              {wallpaper.name}
            </h1>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {wallpaper.description}
            </p>

            {/* Image + fullscreen (inside your custom component) */}
            <motion.div
              layoutId={`wallpaper-image-${wallpaper.slug}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[640px] -ml-2 md:-ml-8"
            >
              <FullScreenImage wallpaper={wallpaper} />
            </motion.div>
          </div>

          {/* ───────── RIGHT COLUMN ───────── */}
          <div className="order-2 mt-10 md:mt-0 md:col-span-5 flex flex-col gap-10">
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your any type of wallpaper you want"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-[#4b3869] bg-[#2a1d3a] px-12 py-2 text-sm md:text-base placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </motion.div>

            {/* 🟣 Add this heading below the search bar */}
            <h2 className="text-xl md:text-2xl font-bold mt-40 text-white md:ml-28">
              Download Options
            </h2>

            {/* Download Buttons */}
            <div className="flex flex-col md:flex-row md:flex-nowrap md:gap-4 md:mt-4 md:top-[-6px] md:ml-[-40px]">
              <Button className="w-full sm:w-auto px-5 py-2 text-sm md:text-base font-semibold">
                <a href={wallpaper.fullhd} download target="_blank">Download Full HD</a>
              </Button>
              <Button className="w-full sm:w-auto px-6 py-2 text-sm md:text-base font-semibold">
                <a href={wallpaper["2k"]} download target="_blank">Download 2K</a>
              </Button>
              <Button className="w-full sm:w-auto px-6 py-2 text-sm md:text-base font-semibold">
                <a href={wallpaper["4k"]} download target="_blank">Download 4K</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
