import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

function Header() {
  return (
    <div className="nav-shell">
      <nav className="nav-pill">
        <Link href="/" className="logo">
          E
        </Link>
        <div className="nav-links">
          <Link href="/#home">Home</Link>
          <Link href="/#learning">Learning</Link>
          <Link href="/#work">Project</Link>
        </div>
        <ThemeSwitcher />
      </nav>
    </div>
  );
}

export default Header;
