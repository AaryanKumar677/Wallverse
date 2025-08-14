'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import FullScreenImage from '@/components/ui/FullScreenImage';
import { Button } from '@/components/ui/button';

export default function WallpaperModal({ wallpaper, onClose }) {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    if (!wallpaper) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                className="absolute inset-0 z-10 backdrop-blur-xl backdrop-saturate-150 bg-black/30"
                onClick={onClose}
            />

            <motion.div
                layoutId={`wallpaper-image-${wallpaper.slug}`}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative z-20 bg-[#1a1a2f] rounded-2xl shadow-2xl p-6 md:p-10 w-full max-w-[83rem] text-white"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-[110]"
                >
                    <X />
                </button>

                <div className="md:grid md:grid-cols-12 md:gap-14">
                    <div className="order-1 md:col-span-7 flex flex-col gap-6">
                        <h1 className="text-3xl md:text-4xl font-extrabold">{wallpaper.name}</h1>
                        <p className="text-gray-300 leading-relaxed">{wallpaper.description}</p>
                        <motion.div
                            layoutId={`wallpaper-image-${wallpaper.slug}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full aspect-[16/9] md:aspect-[2/1] -ml-2 md:-ml-8"
                        >
                            <FullScreenImage wallpaper={wallpaper} />
                        </motion.div>
                    </div>

                    <div className="order-2 mt-10 md:mt-0 md:col-span-5 flex flex-col gap-10">
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

                        <h2 className="text-xl md:text-2xl font-bold mt-2">Download Options</h2>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                            <Button className="w-full sm:w-auto px-6 py-3 text-sm md:text-base font-semibold">
                                <a href={wallpaper.fullhd} download target="_blank">
                                    Download Full HD
                                </a>
                            </Button>
                            <Button className="w-full sm:w-auto px-6 py-3 text-sm md:text-base font-semibold">
                                <a href={wallpaper['2k']} download target="_blank">
                                    Download 2K
                                </a>
                            </Button>
                            <Button className="w-full sm:w-auto px-6 py-3 text-sm md:text-base font-semibold">
                                <a href={wallpaper['4k']} download target="_blank">
                                    Download 4K
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
