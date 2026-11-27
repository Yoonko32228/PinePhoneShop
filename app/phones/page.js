import Link from "next/link";

export default async function Phones() {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );

  if (!response.ok) {
    return <div>not okay</div>;
  }

  const data = await response.json();

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-10 px-6">
      <div className="flex flex-col gap-5">
        <h1 className="text-black text-[30px]">📱 Утаснууд</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.products.map((phone) => (
            <Link
              href={`/phones/${phone.id}`}
              key={phone.id}
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <img
                src={phone.thumbnail}
                alt={phone.title}
                className="w-full h-48 object-contain"
              />

              <h2 className="text-lg font-bold text-black mt-3">
                {phone.title}
              </h2>

              <p className="text-blue-600 font-bold text-xl mt-3">
                ${phone.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
