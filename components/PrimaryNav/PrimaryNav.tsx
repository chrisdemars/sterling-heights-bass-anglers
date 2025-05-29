import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Contact", href: "/contact" }
];

export default function PrimaryNav() {

  return (
    <nav>
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-white hover:text-fishing-lime transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}