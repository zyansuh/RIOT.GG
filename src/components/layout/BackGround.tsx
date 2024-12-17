"use client";

export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
     
      <video
        className="w-full h-full object-cover"
        src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-white/20 dark:bg-black/50"></div>
    </div>
  );
}
