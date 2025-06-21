'use client';

import Image from "next/image";
import { useRef } from "react";
import { BsFullscreen } from "react-icons/bs";


export default function FullScreenImage({ wallpaper }) {
  const imageRef = useRef(null);

  const handleFullScreen = () => {
    if (imageRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        imageRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="max-w-[700px] w-full ml-3 md:ml-8">
        <Image
            ref={imageRef}
            src={wallpaper.image}
            alt={wallpaper.name}
            width={1000}
            height={600}
            className="w-full rounded-xl shadow-lg mb-5"
        />

        <button
            onClick={handleFullScreen}
            className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition flex items-center gap-2 text-sm font-medium"
        >
            <BsFullscreen size={16} />
            View in Fullscreen
        </button>
    </div>

  );
}
