import Link from "next/link";
import Nav from "../nav/nav";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <Link href={"/"}>Hemglass</Link>
      </div>
      <Nav />
    </header>
  );
}
