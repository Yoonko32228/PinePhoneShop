import Link from "next/link";

export default async function ShowPhone({ params }) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    return <div>not okay</div>;
  }

  const data = await response.json();

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-10 px-6">
      <div className="flex flex-col gap-5">
        <h1 className="text-black text-[30px]">📱 Утасны дэлгэрэнгүй</h1>

        <Link href="/" className="text-black">
          Нүүр хуудас руу орох
        </Link>
        <div className="flex flex-col justify-center items-center">
          <div className="m-6 w-fit bg-white px-5 py-10 rounded-xl flex justify-center items-center">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-[400px] h-[400px] object-contain"
            />

            <div className="flex flex-col gap-3">
              <p className="text-gray-400 text-xl">{data.brand}</p>

              <h1 className="text-black text-4xl font-bold">{data.title}</h1>

              <p className="text-black text-2xl">⭐️ {data.rating}</p>

              <p className="text-black text-2xl w-100">{data.description}</p>

              <p className="text-blue-600 text-xl">${data.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
