import React from "react";
import Image from "next/image";
import Animate from "../components/animate/Animate";
import { projects } from "../assets/data/projects";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((item, i) => (
        <Animate key={i} index={item.id}>
          <div
            className={`flex flex-col xl:flex-row  gap-10 xl:items-center bg-white p-5 rounded-[8px] shadow-sm`}
            key={i}
          >
            <a
              href={item.link}
              target="_blank"
              className="w-full md:w-[450px] max-w-full h-[300px] overflow-hidden rounded-xl cursor-pointer bg-white"
            >
              <Image
                src={item.image}
                width={750}
                height={1334}
                alt="Picture of the author"
                className="transition-[transform] hover:translate-y-[-77%] translate-y-0 duration-[10000ms] rounded-xl"
                priority={true}
              />
            </a>
            <div className="flex flex-col gap-6 max-w-[800px]">
              <h1 className="font-prima capitalize">{item.title}</h1>
              <p className="italic">{item.description}</p>
              <div className="flex items-center gap-4">
                <h5 className="font-semibold">Stack :</h5>
                <ul className="flex gap-2">
                  {item.techStack.map((item1, j) => (
                    <li
                      key={j}
                      className="w-[35px] h-[35px] px-1 rounded-[50%] shadow-md overflow-hidden flex justify-center items-center bg-white"
                    >
                      <Image
                        src={item1.image}
                        width={60}
                        height={60}
                        alt="Picture of the author"
                        className="rounded-xl shadow-sm"
                        priority={true}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Animate>
      ))}
    </div>
  );
};

export default Portfolio;
