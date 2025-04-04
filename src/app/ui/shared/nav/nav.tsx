"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.scss";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <ul className="nav-items">
        <li>
          <Link
            href={"/produkter"}
            className={`nav-items__item ${
              pathname === "/produkter" ? "active" : ""
            }`}
          >
            Produkter
          </Link>
        </li>
      </ul>
    </nav>
  );
}
