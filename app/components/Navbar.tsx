import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-stone-500 text-white text-center p-2">
        <a href="" className="text-sm font-bold pr-12">
          Get the Glow You Deserve ✨ Shop Now!
        </a>
      </div>
      <nav className="flex justify-between p-7 shadow-2xl text-lg text-gray-600 uppercase md:text-lg ">
        <div className="flex gap-8">
          <Link href="/shop">shop</Link>

          <Link href="/about">About</Link>

          <Link href="/future">Future</Link>
        </div>
        <div className="font-bold text-2xl">
          <Link href="/home">Celestial Beauty</Link>
        </div>
        <div className="flex gap-8">
          <h1>Search</h1>
          <Link href="/Account">Account</Link>
          <Link href="/cart">Cart(0)</Link>
        </div>
      </nav>
    </>
  );
}
