import React, { Suspense } from "react";
import Image from "next/image";
import Animate from "../components/animate/Animate";
import { projects } from "../assets/data/projects";
import Loading from "../loading";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {projects.map((item, i) => (
        <Animate key={i} index={item.id}>
          <div
            className={`flex flex-col gap-10 rounded-[8px] bg-white p-5 shadow-sm xl:flex-row xl:items-center`}
          >
            <a
              href={item.link}
              target="_blank"
              className="h-[300px] w-full max-w-full flex-none cursor-pointer overflow-hidden rounded-xl bg-white shadow-md md:w-[450px]"
            >
              <Suspense
                fallback={
                  <div className="h-[605px] w-[450px]">
                    <Loading className="h-[605px] w-[450px]" />
                  </div>
                }
              >
                <Image
                  src={item.image}
                  width={750}
                  height={1334}
                  alt="Picture of the author"
                  className="translate-y-0 rounded-xl transition-[transform] duration-[10000ms] hover:translate-y-[-77%]"
                  priority={true}
                />
              </Suspense>
            </a>
            <div className="flex max-w-[800px] flex-col gap-6">
              <h1 className="font-prima capitalize">{item.title}</h1>
              <p className="italic">{item.description}</p>
              <div className="flex items-center gap-4">
                <h5 className="font-semibold">Stack :</h5>
                <ul className="flex gap-2">
                  {item.techStack.map((item1, j) => (
                    <li
                      key={j}
                      className="custom-transition flex h-[35px] w-[35px] cursor-pointer flex-wrap items-center justify-center overflow-hidden rounded-[50%] bg-white px-1 shadow-md hover:translate-y-[-5px]"
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
