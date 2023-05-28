import React from "react";
import Image, { StaticImageData } from "next/image";
import Animate from "../components/animate/Animate";
//
import trekcard from "../../assets/images/trekcard.png";
import demat from "../../assets/images/demat.png";
import affix from "../../assets/images/affixlink.png";
//
import immer from "../../assets/images/tech/immer.svg";
import js from "../../assets/images/tech/js.svg";
import react from "../../assets/images/tech/react.svg";
import redux from "../../assets/images/tech/redux.svg";
import sass from "../../assets/images/tech/sass.svg";
import tailwind from "../../assets/images/tech/tailwind.svg";

type Props = {};

const Portfolio = (props: Props) => {
  const projects: {
    title: string;
    link: string;
    image: StaticImageData;
    description: string;
    techStack: { title: string; image: StaticImageData; id: number }[];
    id: number;
  }[] = [
    {
      title: "trekcard",
      link: "https://trekcard.app",
      image: trekcard,
      description: "https://github.com/bijenShrestha980",
      techStack: [{ title: "React", image: trekcard, id: 1 }],
      id: 1,
    },
    {
      title: "demat",
      link: "https://demat.gurkhasfinance.com.np",
      image: demat,
      description: "https://www.linkedin.com/in/bijen-shrestha-a5282a178/",
      techStack: [{ title: "React", image: trekcard, id: 1 }],
      id: 2,
    },
    {
      title: "Affixlink",
      link: "https://admin.affixlink.app",
      image: affix,
      description: "https://www.instagram.com/0_0bijen/",
      techStack: [{ title: "React", image: trekcard, id: 1 }],
      id: 3,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      {projects.map((item, i) => (
        <Animate index={item.id}>
          <div className="flex flex-col xl:flex-row gap-10 xl:items-center">
            <a
              href=""
              target="_blank"
              className="w-full md:w-[450px] max-w-full h-[270px] overflow-hidden rounded-xl cursor-pointer bg-white"
            >
              <Image
                src={trekcard}
                width={750}
                height={1334}
                alt="Picture of the author"
                className="transition-[transform] hover:translate-y-[-77%] translate-y-0 duration-[10000ms] rounded-xl"
                priority={true}
              />
            </a>
            <div className="flex flex-col gap-6 max-w-[800px]">
              <h1 className="font-prima">Pole Colionnee</h1>
              <p className="italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore praesentium fugit, ullam provident fugiat, alias
                facere ex vel at illo pariatur sit sapiente accusantium magni
                possimus esse ratione ipsam architecto?
              </p>
              <h5 className="font-semibold">Stack :</h5>
              <ul>
                <li className="flex">
                  <label htmlFor="" className=""></label>
                </li>
              </ul>
            </div>
          </div>
        </Animate>
      ))}
    </div>
  );
};

export default Portfolio;
