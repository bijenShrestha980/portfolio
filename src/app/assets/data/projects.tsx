import { StaticImageData } from "next/image";
//
import demat from "../images/projects/demat.png";
import trekcard from "../images/projects/trekcard.png";
import members from "../images/projects/members.png";
import affix from "../images/projects/affixlink.png";
//
import immer from "../images/tech/immer.svg";
import js from "../images/tech/js.svg";
import react from "../images/tech/react.svg";
import redux from "../images/tech/redux.svg";
import sass from "../images/tech/sass.svg";
import tailwind from "../images/tech/tailwind.svg";

const projects: {
  title: string;
  link: string;
  image: StaticImageData;
  description: string;
  techStack: { title: string; image: StaticImageData; id: number }[];
  id: number;
}[] = [
  {
    title: "demat",
    link: "https://demat.gurkhasfinance.com.np",
    image: demat,
    description: "https://www.linkedin.com/in/bijen-shrestha-a5282a178/",
    techStack: [
      { title: "react", image: react, id: 1 },
      { title: "immer", image: immer, id: 2 },
      { title: "js", image: js, id: 3 },
      { title: "sass", image: sass, id: 4 },
    ],
    id: 1,
  },
  {
    title: "trekcard",
    link: "https://trekcard.app",
    image: trekcard,
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore praesentium fugit, ullam provident fugiat, alias facere ex vel at illo pariatur sit sapiente accusantium magni possimus esse ratione ipsam architecto?",
    techStack: [
      { title: "react", image: react, id: 1 },
      { title: "immer", image: immer, id: 2 },
      { title: "js", image: js, id: 3 },
      { title: "sass", image: sass, id: 4 },
    ],
    id: 2,
  },
  {
    title: "nrna members",
    link: "https://members.globalnrna.org/login",
    image: members,
    description: "https://www.instagram.com/0_0bijen/",
    techStack: [
      { title: "react", image: react, id: 1 },
      { title: "redux", image: redux, id: 2 },
      { title: "js", image: js, id: 3 },
      { title: "tailwind", image: tailwind, id: 4 },
    ],
    id: 3,
  },
  {
    title: "affixlink",
    link: "https://admin.affixlink.app",
    image: affix,
    description: "https://www.instagram.com/0_0bijen/",
    techStack: [
      { title: "react", image: react, id: 1 },
      { title: "redux", image: redux, id: 2 },
      { title: "js", image: js, id: 3 },
      { title: "tailwind", image: tailwind, id: 4 },
    ],
    id: 4,
  },
];

export { projects };
