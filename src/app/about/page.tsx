import React, { Suspense } from "react";
import Image from "next/image";

import Animate from "../components/animate/Animate";
import pp from "../assets/images/p.jpg";
import { techStack } from "../assets/data/techStack";
import Loading from "../loading";

const About = () => {
  return (
    <Animate>
      <div className="flex flex-col gap-10 px-10">
        <Suspense
          fallback={
            <div className="w-[300] h-[400]">
              <Loading />
            </div>
          }
        >
          <Image
            src={pp}
            width={1350}
            height={1800}
            alt="Picture of the author"
            className="rounded-[8px] object-cover object-bottom w-[300px] h-[400px]"
            priority={true}
          />
        </Suspense>
        <div className="flex flex-col gap-6">
          <h1 className="font-prima">Bijen Shrestha</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <ul className="basis-3/4 flex flex-col list-disc">
              <li>
                <p className="italic">
                  Proficient in React.js and Next.js, including functional
                  components, state management, and component lifecycle methods.
                </p>
              </li>
              <li>
                <p className="italic">
                  Experience with popular React libraries and tools, such as
                  React Router, Redux, and Axios.
                </p>
              </li>
              <li>
                <p className="italic">
                  Familiarity with modern frontend development tools like
                  Webpack and npm.
                </p>
              </li>
              <li>
                <p className="italic">
                  Strong knowledge of RESTful APIs and integrating them into
                  React applications.
                </p>
              </li>
              <li>
                <p className="italic">
                  Experience with version control systems, such as Git, and
                  collaboration platforms like GitHub.
                </p>
              </li>
              <li>
                <p className="italic">
                  Ability to work effectively in a team environment, with
                  excellent problem-solving and communication skills.
                </p>
              </li>
            </ul>
            <ul className="basis-1/3">
              <li className="flex">
                <label htmlFor="email" className="font-semibold text-sm">
                  Email : &nbsp;
                </label>
                <p className="opacity-60">s.bijen93@gmail.com</p>
              </li>
              <li className="flex">
                <label htmlFor="email" className="font-semibold text-sm">
                  Phone : &nbsp;
                </label>
                <p className="opacity-60">+977 9843504673</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <h5 className="font-semibold">Tech Stack :</h5>
          <ul className="flex flex-wrap gap-2">
            {techStack.map((item, j) => (
              <li
                key={j}
                className="w-[35px] h-[35px] px-1 rounded-[50%] shadow-md overflow-hidden flex justify-center items-center bg-white custom-transition cursor-pointer hover:translate-y-[-5px]"
              >
                <Image
                  src={item.image}
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
    </Animate>
  );
};

export default About;
