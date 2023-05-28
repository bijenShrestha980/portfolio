import Image from "next/image";

import pp from "../assets/images/sqirrel.jpg";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "./components/icons/Icons";
import Animate from "./components/animate/Animate";

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
        <GithubIcon className="bg-brand_primary text-white rounded-md p-1 hover:scale-105 hover:shadow-md custom-transition" />
      ),
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/bijen-shrestha-a5282a178/",
      id: 2,
      icon: (
        <LinkedinIcon className="bg-brand_primary text-white rounded-md p-1 hover:scale-105 hover:shadow-md custom-transition" />
      ),
    },
    {
      title: "instagram",
      link: "https://www.instagram.com/0_0bijen/",
      id: 3,
      icon: (
        <InstagramIcon className="bg-brand_primary text-white rounded-md p-1 hover:scale-105 hover:shadow-md custom-transition" />
      ),
    },
  ];

  return (
    <Animate>
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center px-10">
        <Image
          src={pp}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-[8px] w-auto h-auto"
          priority={true}
        />
        <div className="flex flex-col gap-6 max-w-[800px]">
          <h1 className="font-prima">Pole Colionnee</h1>
          <p className="italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            praesentium fugit, ullam provident fugiat, alias facere ex vel at
            illo pariatur sit sapiente accusantium magni possimus esse ratione
            ipsam architecto?
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
