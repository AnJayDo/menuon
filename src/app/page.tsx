import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <section className="cover w-full pl-8 lg:px-8 flex flex-col justify-center">
        <Image
          className="lg:absolute right-0 lg:max-w-5xl xl:max-w-7xl"
          src={"/fastfood.webp"}
          alt="Fast Food image cover for MenuOn"
          width={1000}
          height={800}
        />
        <div className="w-full max-w-7xl mx-auto flex flex-col relative justify-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-amber-900 dark:text-white pr-3">
            <span className="gradient-text">Instant Menu</span>
            <br />
            on the Internet
          </h1>
          <p className="text-lg text-slate-800 dark:text-slate-300 font-medium mb-4 pr-3">
            Bring your menu to the internet
            <br />
            Make it easier for your customers with QR menu
          </p>
          <div className="flex">
            <Link href={"#"} className="fill-btn">
              Try it now
            </Link>
            <Link href={"#"} className="preview-btn ml-4">
              Explore
              <FaArrowRight className="arrow" color={"#58360D"} size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
