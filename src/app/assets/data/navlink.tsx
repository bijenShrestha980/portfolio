import {
  ContactIcon,
  FileTextIcon,
  HomeIcon,
  SmileIcon,
} from "../../components/icons/Icons";

const navlink: {
  title: string;
  link: string;
  id: number;
  icon: React.JSX.Element;
}[] = [
  { title: "home", link: "/", id: 1, icon: <HomeIcon /> },
  { title: "about", link: "/about", id: 2, icon: <SmileIcon /> },
  { title: "portfolio", link: "/portfolio", id: 3, icon: <FileTextIcon /> },
  { title: "contact", link: "/contact", id: 4, icon: <ContactIcon /> },
];

export { navlink };
