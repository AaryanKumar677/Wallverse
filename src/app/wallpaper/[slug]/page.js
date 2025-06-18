'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const wallpapers = [
  {
    title: 'Zenitsu Agatsuma',
    slug: 'zenitsu-agatsuma',
    src: '/wallpapers/Zenitsu_HD.jpg',
    premium: false,
    isAnime: true,
    description: 'Zenitsu from Demon Slayer in action mode.',
    resolutions: {
      hd: '/wallpapers/Zenitsu_HD.jpg',
      fullhd: '/wallpapers/Zenitsu_FHD.jpg',
      twoK: '/wallpapers/Zenitsu_2K.jpg',
      fourK: '/wallpapers/Zenitsu_4K.jpg'
    }
  },
  {
    title: 'Jiraya Sensai',
    slug: 'jiraya-sensai',
    src: '/wallpapers/JirayaBoy_HD.png',
    premium: true,
    isAnime: true,
    description: 'Legendary Sannin Jiraiya from Naruto.',
    resolutions: {
      hd: '/wallpapers/JirayaBoy_HD.png',
      fullhd: '/wallpapers/JirayaBoy_FHD.png',
      twoK: '/wallpapers/JirayaBoy_2K.png',
      fourK: '/wallpapers/JirayaBoy_4K.png'
    }
  }
];

export default function WallpaperDetailPage() {
  const { slug } = useParams();
  const [wallpaper, setWallpaper] = useState(null);

  useEffect(() => {
    const found = wallpapers.find((w) => w.slug === slug);
    setWallpaper(found);
  }, [slug]);

  if (!wallpaper) {
    return <div className="text-white p-10">Loading wallpaper...</div>;
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#1a002f] via-[#2e004f] to-[#250024] text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-purple-400 underline text-sm hover:text-purple-300">← Back to Home</Link>

      <div className="max-w-4xl mx-auto mt-10">
        <img
          src={wallpaper.src}
          alt={wallpaper.title}
          className="w-full rounded-2xl shadow-2xl mb-6"
        />
        <h1 className="text-4xl font-extrabold mb-2 text-purple-300 drop-shadow">{wallpaper.title}</h1>
        <p className="text-gray-300 mb-6">{wallpaper.description}</p>

        <h2 className="text-xl font-semibold mb-4 text-purple-200">Download Options:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <a
            href={wallpaper.resolutions.hd}
            download
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded shadow-lg text-center"
          >
            HD
          </a>
          <a
            href={wallpaper.resolutions.fullhd}
            download
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded shadow-lg text-center"
          >
            Full HD
          </a>
          <a
            href={wallpaper.resolutions.twoK}
            download
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded shadow-lg text-center"
          >
            2K
          </a>
          <a
            href={wallpaper.resolutions.fourK}
            download
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded shadow-lg text-center"
          >
            4K
          </a>
        </div>
      </div>
    </motion.div>
  );
}
