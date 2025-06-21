'use client';
import { motion } from 'framer-motion';
import wallpapers from "@/app/data/wallpapers";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import FullScreenImage from "@/components/ui/FullScreenImage";

export default function WallpaperDetail() {

  const params = useParams();
  const wallpaper = wallpapers.find((item) => item.slug === params.slug);
  if (!wallpaper) return notFound();

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 w-full px-0 py-10 text-white">
      {/* Left Side */}
      <div className="md:w-2/3 w-full md:pl-6">
        <h1 className="text-4xl font-bold mb-4 md:ml-6">{wallpaper.name}</h1>
        <p className="mb-6 text-lg text-gray-300 md:ml-6">{wallpaper.description}</p>

        <motion.div
          layoutId={`wallpaper-image-${wallpaper.slug}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FullScreenImage wallpaper={wallpaper} />
        </motion.div>

      </div>

      {/* Right Side */}
      <div className="md:w-1/3 w-full mt-10 md:mt-52 md:-translate-x-14">
        <h2 className="text-2xl font-semibold mb-4">Download Options</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button>
            <a href={wallpaper.fullhd} download target="_blank">Download Full HD</a>
          </Button>
          <Button>
            <a href={wallpaper["2k"]} download target="_blank">Download 2K</a>
          </Button>
          <Button>
            <a href={wallpaper["4k"]} download target="_blank">Download 4K</a>
          </Button>
        </div>
      </div>
    </div>
  );

}
