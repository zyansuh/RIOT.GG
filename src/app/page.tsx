export default function Home() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/lol1.jpg')" }}
    >
      {/* 중앙 정렬된 콘텐츠 */}
      <div className="text-center">
        {/* 메인 타이틀 */}
        <h1 className="text-5xl font-bold text-gray-800">LEAGUE OF LEGENDS</h1>
        {/* 플레이 버튼 */}
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-800 font-bold rounded hover:bg-yellow-500">
          무료로 플레이하기
        </button>
      </div>
    </div>
  );
}