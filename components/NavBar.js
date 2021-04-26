import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        {/* <h1>Atheneum Logo</h1> */}
        {/* Lazy loding */}
        <Image src="/vercel.svg" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/books">Book Listing</Link>
    </nav>
  );
};

export default NavBar;
