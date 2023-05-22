import Image from "next/image";

import pp from "../assets/images/pp.jpg";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <Image
        src={pp}
        width={200}
        height={200}
        alt="Picture of the author"
        className="rounded-[8px]"
        priority={true}
      />
      <div className="flex flex-col gap-6 max-w-[800px]">
        <h1 className="font-prima">Bijen Shrestha</h1>
        <p className="italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          praesentium fugit, ullam provident fugiat, alias facere ex vel at illo
          pariatur sit sapiente accusantium magni possimus esse ratione ipsam
          architecto?
        </p>
      </div>
    </div>
  );
}
