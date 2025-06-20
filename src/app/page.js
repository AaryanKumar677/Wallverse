"use client";
import { useRef, useState, useEffect } from "react";
import { Search } from "lucide-react";
import categories from './data/categories';
import wallpapers from "./data/wallpapers";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const scrollRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScrollCheck = () => {
    if (scrollRef.current) {
      const scrollLeftValue = scrollRef.current.scrollLeft;
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      setShowLeft(scrollLeftValue > 0);
      setShowRight(scrollLeftValue < maxScrollLeft);
    }
  };

  useEffect(() => {
    handleScrollCheck();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScrollCheck);
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScrollCheck);
      }
    };
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft < maxScrollLeft);
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
      setTimeout(handleScroll, 300);
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
      setTimeout(handleScroll, 300);
    }
  };

  return (
    <main className="min-h-screen bg-[--background] text-[--foreground] px-4 sm:px-6 pt-6 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-2 md:px-6">
        {/* Left side: Welcome + Wallverse */}
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] via-[#FF2D95] to-[#FF004D] bg-clip-text text-transparent"
          >
            Welcome to
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-[#FF00CC] via-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent mb-5"
          >
            Wallverse
          </motion.h2>
        </div>

        {/* Right side: Search bar */}
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
              className="w-full pl-12 pr-4 py-3 rounded-full
              bg-[#2a1d3a] text-white placeholder-white/80
              border border-[#4b3869] focus:outline-none 
              focus:ring-2 focus:ring-pink-500 
              transition-all duration-200"
            />
          </div>
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-white text-base sm:text-xl font-medium text-center leading-snug max-w-2xl mx-auto mb-10 px-4"
      >
        Level up your screen with Wallverse — a curated hub for bold, high-quality wallpapers that match your style and mood.
      </motion.p>

      {/* Category Section Start */}
      <section className="overflow-visible">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-extrabold text-white px-4 sm:px-6 mb-4"
        >
          Popular Categories
        </motion.h2>

        {/* Scrollable Cards */}
        <div className="relative px-4 sm:px-6 py-4 pt-6 overflow-visible">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-6 sm:gap-10 scroll-smooth overflow-visible"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="group w-[200px] sm:w-[260px] h-[300px] sm:h-[350px] my-5 bg-[#12052a] hover:bg-[#1e0f3f] rounded-2xl overflow-hidden cursor-pointer duration-100 shrink-0 hover:ring-2 hover:ring-pink-500 hover:ring-offset-2 hover:ring-offset-[#0b061c]"
              >
                <div className="h-[80%] sm:h-[85%] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#cc7a00] via-[#cc4c4c] to-[#cc6b85] py-2 rounded-b-2xl shadow-[0_0_10px_#cc4c4c]">
                  <p className="text-white text-center py-2 font-bold text-base sm:text-lg">
                    {category.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Buttons */}
          {showLeft && (
            <button
              onClick={handleScrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-[#ff5fbd] text-white px-3 py-2 rounded-full shadow-md hover:scale-105"
            >
              ←
            </button>
          )}
          {showRight && (
            <button
              onClick={handleScrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-[#ff5fbd] text-white px-3 py-2 rounded-full shadow-md hover:scale-105"
            >
              →
            </button>
          )}
        </div>
      </section>

      {/* Wallpapers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 px-4 sm:px-8 py-10">
        {wallpapers.map((wallpaper, index) => (
          <Link key={index} href={`/wallpaper/${wallpaper.slug}`}>
            <div className="group rounded-2xl shadow-lg overflow-hidden bg-[#181028] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full max-w-[550px] mx-auto">
              <motion.div
                layoutId={`wallpaper-image-${wallpaper.slug}`}
                className="relative w-full h-[180px] sm:h-[200px] overflow-hidden rounded-t-2xl"
              >
                <Image
                  src={wallpaper.image}
                  alt={wallpaper.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="pt-1 pb-2 px-4">
                <h2 className="text-white text-base sm:text-lg font-bold">{wallpaper.name}</h2>
                <p className="text-sm sm:text-base text-gray-400">{wallpaper.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}
