import { Suspense } from "react";
import Image from "next/image";

import pp from "./assets/images/pp.jpg";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "./components/icons/Icons";
import Animate from "./components/animate/Animate";
import Loading from "./loading";

export default function Home() {
  const links: {
    title: string;
    link: string;
    id: number;
    icon: React.JSX.Element;
  }[] = [
    {
      title: "github",
      link: "https://github.com/bijenShrestha980",
      id: 1,
      icon: (
        <GithubIcon className="custom-transition rounded-md bg-brand_primary p-1 text-white hover:scale-105 hover:shadow-md" />
      ),
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/bijen-shrestha-a5282a178/",
      id: 2,
      icon: (
        <LinkedinIcon className="custom-transition rounded-md bg-brand_primary p-1 text-white hover:scale-105 hover:shadow-md" />
      ),
    },
    {
      title: "gmail",
      link: "mailto:s.bijen93@gmail.com",
      id: 3,
      icon: (
        <MailIcon className="custom-transition rounded-md bg-brand_primary p-1 text-white hover:scale-105 hover:shadow-md" />
      ),
    },
    {
      title: "instagram",
      link: "https://www.instagram.com/0_0bijen/",
      id: 4,
      icon: (
        <InstagramIcon className="custom-transition rounded-md bg-brand_primary p-1 text-white hover:scale-105 hover:shadow-md" />
      ),
    },
  ];

  return (
    <Animate>
      <div className="flex flex-col gap-10 px-10 lg:flex-row lg:items-center">
        <Suspense
          fallback={
            <div className="h-[256px] w-[256px]">
              <Loading className="h-[256px] w-[256px]" />
            </div>
          }
        >
          <Image
            src={pp}
            width={200}
            height={200}
            alt="Picture of the author"
            className="h-auto w-auto rounded-[8px]"
            priority={true}
          />
        </Suspense>
        <div className="flex max-w-[800px] flex-col gap-6">
          <h1 className="font-prima">Bijen Shrestha</h1>
          <p className="italic">
           As a highly skilled frontend developer specializing in React.js and React Native, I excel in creating dynamic, responsive, and user-friendly web and mobile applications. My expertise lies in leveraging modern JavaScript frameworks to build scalable and maintainable applications that provide exceptional user experiences across various platforms. With a keen eye for design and a strong foundation in performance optimization, I am dedicated to crafting elegant solutions that meet the diverse needs of users. I am passionate about staying up-to-date with the latest industry trends and technologies, continuously striving to improve my skills and deliver high-quality, innovative products.
          </p>
          <ul className="flex gap-2">
            {links.map((item, i) => (
              <li key={i}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Animate>
  );
}
