import React from "react";
import Image from "next/image";
import Animate from "../components/animate/animate";
import pp from "../../assets/images/sqirrel.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <Animate>
      <div className="flex flex-col gap-10 lg:items-center px-10">
        <Image
          src={pp}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-[8px] w-full h-full"
          priority={true}
        />
        <div className="flex flex-col gap-6 max-w-[800px]">
          <h1 className="font-prima">Pole Colionnee</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <p className="italic basis-3/4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore praesentium fugit, ullam provident fugiat, alias facere
              ex vel at illo pariatur sit sapiente accusantium magni possimus
              esse ratione ipsam architecto?
            </p>
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
      </div>
    </Animate>
  );
};

export default About;
