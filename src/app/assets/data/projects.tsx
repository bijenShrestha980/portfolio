import { StaticImageData } from "next/image";
//
import demat from "../images/projects/demat.png";
import trekcard from "../images/projects/trekcard.png";
import members from "../images/projects/members.png";
import affix from "../images/projects/affixlink.png";
import nrna from "../images/projects/nrna.png";
//
import immer from "../images/tech/immer.svg";
import js from "../images/tech/js.svg";
import next from "../images/tech/next.svg";
import react from "../images/tech/react.svg";
import redux from "../images/tech/redux.svg";
import sass from "../images/tech/sass.svg";
import tailwind from "../images/tech/tailwind.svg";

const projects: {
  id: number;
  title: string;
  link: string;
  image: StaticImageData;
  description: string;
  techStack: { title: string; image: StaticImageData; id: number }[];
}[] = [
  {
    id: 1,
    title: "demat",
    link: "https://demat.gurkhasfinance.com.np",
    image: demat,
    description:
      "DEMAT is a Gurkha Finance authorised demat account cloud registration platform where the user can perform all registration, approval, payment, etc throught the application.",
    techStack: [
      { title: "react", image: react, id: 1 },
      { title: "immer", image: immer, id: 2 },
      { title: "js", image: js, id: 3 },
      { title: "sass", image: sass, id: 4 },
    ],
  },
  {
    id: 2,
    title: "trekcard",
    link: "https://trekcard.app",
    image: trekcard,
    description:
      "Trekking Recreation Expedition in Khumbu made safer with Trekcard.",
    techStack: [
      { title: "react", image: react, id: 1 },
      { title: "immer", image: immer, id: 2 },
      { title: "js", image: js, id: 3 },
      { title: "sass", image: sass, id: 4 },
    ],
  },
  {
    id: 3,
    title: "nrna members",
    link: "https://members.globalnrna.org/login",
    image: members,
    description:
      "An umbrella organization for Nepali Diaspora around the world, NRNA is a global network for people of Nepali origin, working to address their interests, concerns, and welfare.",
    techStack: [
      { title: "next", image: next, id: 1 },
      { title: "react", image: react, id: 2 },
      { title: "redux", image: redux, id: 3 },
      { title: "js", image: js, id: 4 },
      { title: "tailwind", image: tailwind, id: 5 },
    ],
  },
  {
    id: 4,
    title: "affixlink",
    link: "https://admin.affixlink.app",
    image: affix,
    description:
      "Tap to connect! Share your social media links; Share your book and files; Share your images and videos.",
    techStack: [
      { title: "react", image: react, id: 1 },
      { title: "redux", image: redux, id: 2 },
      { title: "js", image: js, id: 3 },
      { title: "tailwind", image: tailwind, id: 4 },
    ],
  },
  {
    id: 5,
    title: "NRNA",
    link: "https://globalnrna.org/",
    image: nrna,
    description:
      "Bringing the Nepali Diaspora together, facilitating the socio-economic development of Nepal",
    techStack: [
      { title: "next", image: next, id: 1 },
      { title: "react", image: react, id: 2 },
      { title: "immer", image: immer, id: 3 },
      { title: "js", image: js, id: 4 },
      { title: "sass", image: sass, id: 5 },
    ],
  },
];

export { projects };
