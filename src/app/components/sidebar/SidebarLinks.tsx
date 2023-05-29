"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlink } from "@/app/assets/data/navlink";

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="cursor-pointer flex flex-row md:flex-col gap-1 focus-visible:outline-none focus-visible:bg-none list">
      {navlink.map((item, i) => (
        <Link
          href={item.link}
          as={item.link}
          key={i}
          className="pb-1 w-fit custom-transition hover:scale-105 flex flex-col group select-none"
        >
          <span className="md:hidden px-2 mb-1 select-none">{item.icon}</span>
          <p
            className={`capitalize hidden md:inline-block select-none ${
              pathname === item.link ? "font-bold" : "font-semibold"
            }`}
          >
            {item.title}
          </p>
          <span className="custom-transition h-[2px] w-0 group-hover:w-full bg-brand_primary rounded-lg"></span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
