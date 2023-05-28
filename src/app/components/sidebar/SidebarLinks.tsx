"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlink } from "@/app/assets/data/navlink";

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="cursor-pointer flex flex-row md:flex-col gap-1 focus-visible:outline-none">
      {navlink.map((item, i) => (
        <li key={i} className="focus-visible:outline-none">
          <Link
            href={item.link}
            className="pb-1 w-fit custom-transition hover:scale-105 flex flex-col group select-none focus-visible:outline-none"
          >
            <span className="md:hidden px-2 mb-1 select-none focus-visible:outline-none">
              {item.icon}
            </span>
            <p
              className={`capitalize hidden md:inline-block select-none focus-visible:outline-none ${
                pathname === item.link ? "font-bold" : "font-semibold"
              }`}
            >
              {item.title}
            </p>
            <span className="custom-transition h-[2px] w-0 group-hover:w-full bg-brand_primary rounded-lg focus-visible:outline-none"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
