import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50">
        <div className="bg-stone-500 text-white text-center p-2 text-sm font-bold relative z-50">
          <a href="" className="text-sm font-bold pr-12">
            Get the Glow You Deserve ✨ Shop Now!
          </a>
        </div>

        <nav className="flex justify-between items-center px-8 py-8 shadow-md bg-white text-gray-600 uppercase relative z-50">
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
