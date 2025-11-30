export default function Footer() {
  return (
    <>
      <footer className="bg-stone-50 p-5 text-stone-600">
        <div className=" p-3 flex gap-5  justify-between">
          <div className="">
            <h1 className="font-bold text-2xl">Celestial Beauty</h1>
            <p className="text-lg w-70 ">
              Glow, shine, and express yourself. discover our curated collection
              of makeup and skin care essentials for every look!
            </p>
          </div>

          <ul className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Navigation</h1>
            <li className="text-xl u-animate-underline">Shop</li>
            <li className="text-xl">About</li>
            <li className="text-xl">Features</li>
            <li className="text-xl">Search</li>
            <li className="text-xl">Account</li>
            <li className="text-xl">Cart</li>
          </ul>

          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl">Links</h1>
            <div className="w-10">
              <a
                href="https://github.com/Esina44"
                className="flex items-center text-xl"
              >
                <img
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  alt=""
                  className="rounded-full"
                />
                <h1>Github</h1>
              </a>
            </div>
            <div className="w-10">
              <a
                className="flex items-center text-xl"
                href="https://www.instagram.com/esina_poon_/"
              >
                <img
                  className="rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBzH8UEnwhZ3xdq-cC4D9_dK4nu_Cjk9p-Q&s"
                  alt=""
                />
                <h1>Instagram</h1>
              </a>
            </div>
            <div className="w-10">
              <a
                className="flex items-center text-xl gap-1"
                href="https://www.linkedin.com/in/esina-rantija-8876a3356/"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
                  className="rounded-full text-xs"
                  alt=""
                />
                <h1>Facebook</h1>
              </a>
            </div>
          </div>

          <div>
            <h1 className="font-black text-2xl">Join our beauty circle</h1>
            <p className="text-lg w-85">
              Stay glowing! Get the latest makeup tips, product launches, and
              exclusive offers delivered straight to your inbox.
            </p>
            <div className="flex flex-col gap-3 mt-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-stone-300 h-10 rounded-xl p-2"
              />
              <button className="mt-1 hover:bg-stone-800 hover:text-white border rounded-xl h-10 w-[40%] cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <hr />
        <div className="p-10 flex justify-between">
          <div className="flex gap-2 items-center text-center justify-center">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#sitemap">Sitemap</a>
          </div>
          <div className="text-center">
            © 2025 Esina Rantija. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
