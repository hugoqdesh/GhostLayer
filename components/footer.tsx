import { Ghost, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t py-10">
      <div className="flex flex-col gap-10 items-center">
        <Link href="/" className="flex flex-col items-center gap-3">
          <Ghost size={36} />
          <p className="text-sm">GhostLayer</p>
        </Link>

        <nav className="text-sm font-bold flex flex-row gap-6">
          <Link
            href="/"
            className="hover:bg-black/5 dark:hover:bg-white/10 p-2 rounded-md transition duration-200"
          >
            Donate
          </Link>
        </nav>
      </div>

      <div className="py-10" />
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center border-t px-10 py-10 justify-between max-w-6xl mx-auto text-black/60 dark:text-white/60">
        <p className="text-xs md:text-sm">
          Copyright © 2024 GhostLayer. All rights reserved.
        </p>

        <Link
          href="/"
          className="hover:text-black dark:hover:text-white transition duration-200"
        >
          <Github size={22} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
