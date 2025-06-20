import wallpapers from "@/app/data/wallpapers";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WallpaperDetail({ params }) {
  const wallpaper = wallpapers.find((item) => item.slug === params.slug);

  if (!wallpaper) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
      <h1 className="text-4xl font-bold mb-4">{wallpaper.name}</h1>
      <p className="mb-6 text-lg text-gray-300">{wallpaper.description}</p>

      <Image
        src={wallpaper.image}
        alt={wallpaper.name}
        width={1920}
        height={1080}
        className="w-full rounded-xl shadow-lg mb-6"
      />

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold mb-2">Download Options</h2>
        <div className="flex flex-wrap gap-4">
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
