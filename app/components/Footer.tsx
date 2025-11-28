export default function Footer() {
  return (
    <>
      <footer className="bg-stone-50 p-5">
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
            <li className="text-xl">Shop</li>
            <li className="text-xl">About</li>
            <li className="text-xl">Login</li>
            <li className="text-xl">Contact</li>
          </ul>

          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl">Links</h1>
            <div className="w-10">
              <a href="https://github.com/Esina44">
                <img
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  alt=""
                  className="rounded-full"
                />
              </a>
            </div>
            <div className="w-10">
              <a href="https://www.instagram.com/esina_poon_/">
                <img
                  className="rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBzH8UEnwhZ3xdq-cC4D9_dK4nu_Cjk9p-Q&s"
                  alt=""
                />
              </a>
            </div>
            <div className="w-10">
              <a href="https://www.linkedin.com/in/esina-rantija-8876a3356/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
                  className="rounded-full"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div>
            <h1 className="font-black text-2xl">Join our beauty circle</h1>
            <p className="text-lg w-85">
              Stay glowing! Get the latest makeup tips, product launches, and
              exclusive offers delivered straight to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="Enter your email" className="" />
              <button className="border  w-[40%]">Subscribe</button>
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
