import { Link } from "@tanstack/react-router";

export default function Navbar() {
  const routes = [
    { href: "/", name: "Home" },
    { href: "/games", name: "Games" },
    { href: "/faq", name: "FAQ" },
    { href: "/changelog", name: "Changelog" },
    { href: "/about", name: "About" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-10 flex w-screen justify-center py-5 text-white">
        <div className="hidden flex-row gap-x-7 rounded-lg bg-black/20 px-16 py-3 text-xl backdrop-blur-md md:flex">
          {routes.map((route) => (
            <Link
              className="transition-all duration-300 hover:text-white/60"
              to={route.href}
              key={route.href}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
