"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const path = usePathname();
  const [smallScreen, setSmallScreen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const linkClass = (href: string) =>
    `p-4 transition-colors duration-200 ${
      path === href && !smallScreen ? "underline-offset" : ""
    }`;

  useEffect(() => {
    const handleInteraction = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setSmallScreen(false);
      }
    };
    document.addEventListener("mousedown", handleInteraction);
    document.addEventListener("scroll", handleInteraction);
    return () => {
      document.removeEventListener("mousedown", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container mx-auto p-5 flex items-center justify-between">
        <Link
          href={"/"}
          className="p-4 text-xl lg:text-3xl transition-transform duration-200 hover:scale-105 bg-black/30 rounded-lg"
        >
          Home
        </Link>
        <button
          ref={buttonRef}
          className="md:hidden text-3xl bg-black/50 px-4 py-3 rounded-lg"
          onClick={() => setSmallScreen(!smallScreen)}
        >
          ☰
        </button>
        <div
          ref={dropdownRef}
          className={`flex-col md:flex md:flex-row bg-black/40 rounded-lg text-xl absolute md:static top-22 right-4 md:w-auto transition-all duration-300 ${
            smallScreen ? "flex bg-black/80" : "hidden"
          }`}
        >
          <Link href={"/experience"} className={linkClass("/experience")}>
            Experience
          </Link>
          <Link href={"/education"} className={linkClass("/education")}>
            Education
          </Link>
          <Link href={"/contact"} className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
