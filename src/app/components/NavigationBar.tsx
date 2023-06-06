import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { FaArrowRight } from "react-icons/fa";
import { list } from "postcss";
const logo = "/MenuOn.svg";

export default function NavigationBar() {
  const linkList = [
    {
      title: "Home",
      link: "/",
      isBlank: false,
    },
    {
      title: "Features",
      link: "#",
      isBlank: false,
    },
    {
      title: "Pricing",
      link: "#",
      isBlank: false,
    },
    {
      title: "FAQs",
      link: "#",
      isBlank: false,
    },
    {
      title: "Blog",
      link: "#",
      isBlank: false,
    },
  ];
  return (
    <nav className="">
      <Link href={"/"}>
        <Image src={logo} alt="MenuOn 🚀 logo" width={160} height={60} />
      </Link>
      <ul className="hidden lg:flex">
        {linkList.map((item, index) => (
          <li key={"link-" + index}>
            <Link
              href={item.link}
              target={item.isBlank ? "_blank" : ""}
              className="header-link"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="ml-auto flex justify-center items-center">
        <DarkModeToggle className="translate-y-25" />
        <Link href={"#"} className="preview-btn ml-4 md:ml-9">
          <span>Preview</span>
          <FaArrowRight className="arrow" color={"#58360D"} size={16} />
        </Link>
      </div>
    </nav>
  );
}
