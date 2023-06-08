"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlink } from "@/app/assets/data/navlink";

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="list flex cursor-pointer flex-row gap-1 focus-visible:bg-none focus-visible:outline-none md:flex-col">
      {navlink.map((item, i) => (
        <Link
          href={item.link}
          as={item.link}
          key={i}
          className="custom-transition group flex w-fit select-none flex-col pb-1 hover:scale-105"
        >
          <span className="mb-1 select-none px-2 md:hidden">{item.icon}</span>
          <p
            className={`hidden select-none capitalize md:inline-block ${
              pathname === item.link ? "font-bold" : "font-semibold"
            }`}
          >
            {item.title}
          </p>
          <span className="custom-transition h-[2px] w-0 rounded-lg bg-brand_primary group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
