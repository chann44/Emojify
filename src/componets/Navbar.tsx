import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GiShipWheel } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
import {
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";

interface ILink {
  name: string;
  link: string;
}

interface OutLinkProps {
  Icon: React.ElementType;
  link: string;
}

const OutLink = ({ Icon, link }: OutLinkProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className="ease-in cursor-pointer transition transform duration-200  text-xl dark:text-white/60 dark:hover:text-white " />
    </a>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  console.log(theme);
  return (
    <>
      <header className="sticky top-0 z-10 px-6 sm:px-16 p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EmojiFy</h1>
        <nav className="flex space-x-6 items-center">
          <div className=" hidden sm:flex space-x-6 "></div>
          <div className="flex items-center space-x-6">
            <OutLink
              Icon={SlSocialGithub}
              link={"https://github.com/chann44"}
            />
          </div>

          {theme == "light" ? (
            <MdOutlineDarkMode
              onClick={() => {
                setTheme("dark");
              }}
              className="active:scale-50 ease-in cursor-pointer transition transform duration-200  text-xl dark:text-white/60 dark:hover:text-white"
            />
          ) : (
            <GiShipWheel
              onClick={() => {
                setTheme("light");
              }}
              className="active:scale-50 ease-in cursor-pointer transition transform duration-200  text-xl dark:text-white/60 dark:hover:text-white"
            />
          )}
          <div
            className="cursor-pointer sm:hidden  block transition transform duration-75 "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose className="text-xl " />
            ) : (
              <AiOutlineMenu className="text-xl " />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
