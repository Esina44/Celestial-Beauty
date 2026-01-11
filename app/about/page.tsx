import { Beaker, Gem, Icon, Leaf } from "lucide-react";
import { title } from "process";

export default function About() {
  const features = [
    {
      title: "Consciously Clean",
      description:
        "We ban over 2,500 questionable ingredients. Our formulas are vegan, cruelty-free, and designed for sensitive skin.",
      icon: <Leaf className="h-10 w-10 text-gray-900" />,
    },
    {
      title: "Science-Backed",
      description:
        "It's not just magic; it's chemistry. We use clinically proven actives to ensure your makeup improves your skin over time.",
      icon: <Beaker className="h-10 w-10 text-gray-900" />,
    },
    {
      title: "Luxury Defined",
      description:
        "From weighted packaging to the soft-touch finish, every interaction with our brand is designed to feel exquisite.",
      icon: <Gem className="h-10 w-10 text-gray-900" />,
    },
  ];
  return (
    <section className=" text-gray-600">
      <div className="relative w-full h-[800px] overflow-hidden shadow-2xl">
        <img
          src="assets/about.png"
          alt="About Celestial Beauty"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="max-w-xl text-center text-white px-6">
            <h4 className="text-sm tracking-widest mb-4">OUR PHILOSOPHY</h4>

            <h1 className="text-6xl font-semibold  mb-6">
              Beyond the surface. <br />
              <span className="italic">Into the light</span>
            </h1>

            <p className="text-base text-white/90 leading-relaxed">
              We believe beauty is an expression of the soul. Our products are
              designed to enhance your natural radiance, not mask it.
            </p>
            <button className="border px-9 py-3 mt-3 hover:border-white hover:bg-white duration-300 hover:text-black rounded-2xl cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-10xl mx-auto px-6 py-24 bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Born from Stardust
            </h1>

            <p className="text-neutral-600 leading-relaxed space-y-6">
              <span className="block">
                Celestial Beauty began with a simple question: What if makeup
                felt like skincare and looked like magic?
              </span>

              <span className="block">
                Founded in 2023 by visionaries who grew tired of heavy, masking
                formulas, we set out to create a collection that breathes. We
                source rare botanicals and combine them with light-reflecting
                minerals to create textures that melt into the skin.
              </span>

              <span className="block">
                Every compact, every bottle, and every brush is crafted with the
                intention of bringing a touch of the ethereal into your daily
                ritual.
              </span>
            </p>
          </div>

          <div>
            <img
              src="/assets/content.png"
              alt="Celestial Beauty Story"
              className="w-full h-[600px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center mt-20">
        <h1 className="text-8xl md:text-5xl  mb-4">The Celestial Standard</h1>

        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Uncompromising quality for the modern muse.
        </p>

        <div className="grid md:grid-cols-3 gap-8 h-[250px] mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-15 bg-stone-200">
        <div className="relative">
          {" "}
          <img
            src="assets/shop-hero.jpg"
            className="w-full h-[550px] "
            alt=""
          />
        </div>

        <div className="max-w-xl h-20 flex flex-col items-center justify-center bg-stone-400">
          <h1 className="italic text-white text-3xl">
            Beauty is the light in the heart!
          </h1>
          <p className="text-white">-Esina Pun</p>
        </div>
      </div>
    </section>
  );
}
