import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <div className="flex flex-col items-center gap-5 mt-30">
        <h1 className="text-[70px] text-black">📱 Pine Phone</h1>
        <p className="text-[30px] text-black">Шинэ утсаа эндээс сонго</p>
        <div className="px-5 py-2 bg-[#0e172a] w-[300px] h-[40px] rounded-lg flex justify-center items-center">
          <Link href="/phones" className="text-white text-[20px]">
            Утаснууд үзэх →
          </Link>
        </div>
      </div>
    </div>
  );
}
