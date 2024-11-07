import { Ghost, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center py-10 md:px-20 justify-between max-w-6xl mx-auto text-black/60 dark:text-white/60">
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
