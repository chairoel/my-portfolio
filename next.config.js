/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <— penting untuk static export (Next 13/14)
  images: {
    // kalau nanti pakai <Image/>, ini perlu supaya bisa diexport statis
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
