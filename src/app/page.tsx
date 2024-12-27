import VideoBackground from "@/components/layout/BackGround";

export default function Home() {
  return (
    <div className="relative">
      <VideoBackground />
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center"
        //style={{ backgroundImage: "url('/images/lol1.jpg')" }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gold leading-[1.5] text-shadow-gold">
            <span className="block">LEAGUE OF</span>
            <span className="block">LEGENDS</span>
          </h1>

          <button className="mt-6 px-6 py-3 bg-gold text-gray-800 font-bold rounded border-2 border-white hover:bg-gold-dark transition duration-300">
            무료로 플레이하기
          </button>
        </div>
      </div>
    </div>
  );
}
