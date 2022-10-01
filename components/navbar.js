import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 p-5 z-50 child:mx-2 child:lowercase child:after:absolute child:after:bg-black child:after hover:child:after:w-6/12 hover:child:after:text-green-500">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
    </nav>
  );
}

export default Navbar;