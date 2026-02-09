"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 p-4 shadow bg-white text-gray-900">
      <Link href="/" className="font-bold text-lg mr-6">Anushree</Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
