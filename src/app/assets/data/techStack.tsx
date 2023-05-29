import { StaticImageData } from "next/image";
//
import immer from "../images/tech/immer.svg";
import js from "../images/tech/js.svg";
import ts from "../images/tech/typescript.svg";
import react from "../images/tech/react.svg";
import next from "../images/tech/next.svg";
import redux from "../images/tech/redux.svg";
import sass from "../images/tech/sass.svg";
import tailwind from "../images/tech/tailwind.svg";

export const techStack: {
  title: string;
  image: StaticImageData;
  id: number;
}[] = [
  { title: "react", image: react, id: 1 },
  { title: "next", image: next, id: 2 },
  { title: "redux", image: redux, id: 3 },
  { title: "js", image: js, id: 4 },
  { title: "ts", image: ts, id: 4 },
  { title: "immer", image: immer, id: 5 },
  { title: "tailwind", image: tailwind, id: 6 },
  { title: "sass", image: sass, id: 7 },
];
