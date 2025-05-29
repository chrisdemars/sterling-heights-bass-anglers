import Logo from "../Logo/Logo"
import PrimaryNav from "../PrimaryNav/PrimaryNav";

export default function Header() {
  return (
    <header className="bg-fishing-black text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <PrimaryNav />
        </div>
      </div>
    </header>
  );
}