import Link from "next/link";
import Nav from "../nav/nav";
import "./header.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <Link href={"/"}>
          <Image
            src={"/hemglass_logo.svg"}
            height={60}
            width={60}
            alt="Hemglass logo"
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
}
