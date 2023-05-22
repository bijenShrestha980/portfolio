"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const navlink: { title: string; link: string; id: number }[] = [
  { title: "home", link: "/", id: 1 },
  { title: "about", link: "/about", id: 2 },
  { title: "contact", link: "/contact", id: 3 },
  // { title: "portfolio", link: "/portfolio", id: 4 },
];

const SidebarLinks = (props: Props) => {
  // const router = useRouter();
  // console.log(router);

  return (
    <ul className="cursor-pointer flex flex-row md:flex-col">
      {navlink.map((item, i) => (
        <li className="capitalize font-semibold pb-1" key={i}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
