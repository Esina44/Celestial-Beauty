import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="px-4 sticky top-0">
        <div className="bg-stone-500 text-stone-600 text-white text-center p-2 mb-2 rounded-t-sm">
          <a href="" className="text-sm font-bold pr-12">
            Get the Glow You Deserve ✨ Shop Now!
          </a>
        </div>
        <nav className="flex justify-between p-7 shadow-2xl text-lg text-gray-600 uppercase md:text-lg sticky top-0 z-50 rounded-sm">
          <div className="flex gap-8">
            <Link className="hover:underline" href="/shop">
              shop
            </Link>

            <Link href="/about">About</Link>

            <Link href="/future">Future</Link>
          </div>
          <div className="font-bold text-2xl">
            <Link href="/homesection">Celestial Beauty</Link>
          </div>
          <div className="flex gap-8">
            <h1>Search</h1>
            <Link href="/account">Account</Link>
            <Link href="/cart">Cart(0)</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
