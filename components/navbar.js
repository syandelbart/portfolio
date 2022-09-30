function Navbar() {
  return (
    <nav className="fixed top-0 right-0 p-5 z-50 child:mx-2 child:lowercase child:after:absolute child:after:bg-black child:after hover:child:after:w-6/12 hover:child:after:text-green-500">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
    </nav>
  );
}

export default Navbar;