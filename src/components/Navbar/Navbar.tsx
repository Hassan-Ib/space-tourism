import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import LogoIcon from "../../assets/shared/logo.svg";
import HamburgerMenuIcon from "../../assets/shared/icon-hamburger.svg";
import closeMenuIcon from "../../assets/shared/icon-close.svg";

import { useThemeContext } from "../../provider/themeProvider";

const LinksData = [
  {
    name: "Home",
    url: "/",
    id: "00",
    bgImage: "bg-home",
  },
  {
    name: "Destination",
    url: "/destination",
    bgImage: "bg-destination",
    id: "01",
  },
  {
    name: "Crew",
    url: "/crew",
    bgImage: "bg-crew",
    id: "02",
  },
  {
    name: "Technology",
    url: "/technology",
    bgImage: "bg-technology",
    id: "03",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeNav = () => {
    setOpen(false);
  };
  const openNav = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    const root = document.getElementById("app-container");
    if (open) {
      root?.classList.add("h-screen");
    }
    console.log("from useEffect");
    return () => {
      root?.classList.remove("h-screen");
      console.log("from useEffect return");
    };
  }, [open]);

  return (
    <nav className=" flex items-center font-barlow-condensed text-white ">
      {/* logo */}
      <div className="px-6 flex-1">
        <img src={LogoIcon} alt="space tourism logo" className=" " />
      </div>
      {/* line */}
      <hr className=" w-[20%] hidden" />
      {/* nav */}

      {open ? <Links open={open} closeNav={closeNav} /> : null}
      <button
        onClick={openNav}
        className="px-6"
        aria-label="hamburger menu icon">
        <img src={HamburgerMenuIcon} alt="menu icon" />
      </button>
    </nav>
  );
};

const Links = ({ open, closeNav }: { open: boolean; closeNav: () => void }) => {
  const location = useLocation();
  return (
    <div className="absolute top-0 right-0 w-[70%] h-screen  backdrop-blur-2xl backdrop-brightness-125 ">
      <ul className=" pt-40">
        {LinksData.map((link, id) => (
          <li key={id} className="">
            <Link {...link} pathname={location.pathname} />
          </li>
        ))}
      </ul>
      <button
        onClick={closeNav}
        aria-label="close navigation link"
        className="absolute right-6 top-12">
        <img src={closeMenuIcon} alt="close navigation link" />
      </button>
    </div>
  );
};

const Link = ({
  pathname,
  url,
  name,
  bgImage,
  id,
}: { pathname: string } & typeof LinksData[0]) => {
  const { setBgTheme } = useThemeContext();
  const isActive = pathname === url;
  React.useEffect(() => {
    console.log(pathname, isActive, bgImage);
    if (isActive) {
      //for home page and intial render, React wont rerender since i'm the same value
      setBgTheme?.(bgImage);
    }
  }, [bgImage, isActive, setBgTheme, pathname]);

  return (
    <RouterLink
      className="relative flex gap-4 tracking-[4px] uppercase pl-10 py-4 group"
      onClick={() => setBgTheme?.(bgImage)}
      to={url}>
      <span className=" font-black">{id}</span>
      {name}

      <span
        className={`absolute w-1 h-full top-0 right-0 transition-all duration-300 ${
          isActive ? "bg-white gou" : "group-hover:bg-in-between"
        }`}></span>
    </RouterLink>
  );
};
export default Navbar;
