import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  const cards = [
    {
      title: "Foundation",
      description: "Flawless coverage with a natural, radiant finish.",
      image: "/assets/makeup.jpg",
      link: "/shop",
    },
    {
      title: "Lipstick",
      description: "Choose your Favourate lipsticks",
      image: "/assets/lipstick.png",
      link: "/shop",
    },
    {
      title: "Foundation",
      description: "Choose your shades",
      image: "/assets/sunscreen.jpg",
      link: "/shop",
    },
  ];
  return (
    <>
      <section className=" ">
        <div className="relative w-full h-[550px] rounded-xl mb-10">
          <Image
            src="/assets/coverpage3.png"
            alt="home image"
            fill
            className="rounded-lg"
          ></Image>
          <div className="absolute bottom-10 left-6 flex flex-col gap-4">
            <h1 className="text-3xl text-gray-600">
              Glow Like you are Celestial!
            </h1>
            <p></p>

            <Link href="/shop">
              <button className="border border-gray-500 px-20 py-4 text-gray-500 rounded-full uppercase text-sm cursor-pointer hover:bg-orange-50 transition">
                Find Your Glow
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 p-4 text-gray-600">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-2xl hover:scale-105 flex flex-col justify-center text-center transition-transform"
            >
              <Image
                src={card.image}
                alt="image"
                height={200}
                width={350}
                className="pl-15"
              ></Image>
              <div className="p-4 flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{card.title}</h1>
                <p className="text-lg">{card.description}</p>
                <span className="text-xl bg-gray-100 text-center p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                  Shop Now
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 grid grid-cols-2 p-6">
          <img src="assets/home.jpg" className="w-full h-[500px]" alt="" />
        </div>
      </section>
    </>
  );
}
