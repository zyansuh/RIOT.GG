import VideoBackground from "@/components/layout/BackGround";

export default function Home() {
  return (
    <div className="relative">
      <VideoBackground />
      <div className="h-screen flex flex-col items-center justify-center bg-cover bg-center">
        {/* 제목 */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-gold leading-[1.5] text-shadow-gold">
            <span className="block">
              LEAGUE <span className="text-3xl">OF</span>
            </span>
            <span className="block">LEGENDS</span>
          </h1>
        </div>

        {/* 무료로 플레이하기 버튼 */}
        <a 
          href="https://www.leagueoflegends.com/ko-kr/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 mb-10 w-60 px-6 py-3 bg-gold text-gray-800 font-bold border-[1px] border-white outline outline-[1px] outline-white outline-offset-4 hover:bg-gold-dark transition duration-300 text-center"
        >
          무료로 플레이하기
        </a>

        {/* 나란히 배치된 버튼들 */}
        <div className="flex gap-10 mt-10">
          <a 
            href="https://www.leagueoflegends.com/ko-kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 px-6 py-3 bg-gold text-gray-800 font-bold border-[1px] border-white outline outline-[1px] outline-white outline-offset-4 hover:bg-gold-dark transition duration-300 text-center"
          >
            League Of Legends
          </a>
          <a 
            href="https://lolchess.gg/?hl=ko"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 px-6 py-3 bg-gold text-gray-800 font-bold border-[1px] border-white outline outline-[1px] outline-white outline-offset-4 hover:bg-gold-dark transition duration-300 text-center"
          >
            LoLCHESS
          </a>
        </div>
      </div>
    </div>
  );
}
