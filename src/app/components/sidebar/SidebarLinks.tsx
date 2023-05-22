"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ContactIcon, FileTextIcon, HomeIcon, SmileIcon } from "../icons/icons";

const navlink: {
  title: string;
  link: string;
  id: number;
  icon: React.JSX.Element;
}[] = [
  { title: "home", link: "/", id: 1, icon: <HomeIcon /> },
  { title: "about", link: "/about", id: 2, icon: <SmileIcon /> },
  { title: "portfolio", link: "/portfolio", id: 3, icon: <FileTextIcon /> },
  { title: "contact", link: "/contact", id: 4, icon: <ContactIcon /> },
];

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="cursor-pointer flex flex-row md:flex-col gap-1">
      {navlink.map((item, i) => (
        <li key={i}>
          <Link
            href={item.link}
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
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
