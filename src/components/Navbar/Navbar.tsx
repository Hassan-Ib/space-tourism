import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import LogoIcon from "../../assets/shared/logo.svg";
import HamburgerMenuIcon from "../../assets/shared/icon-hamburger.svg";
import closeMenuIcon from "../../assets/shared/icon-close.svg";

import { useThemeContext } from "../../provider/themeProvider";

const LinksData = [
  {
    name: "Home",
    url: "/",
    id: "01",
    bgImage: "bg-home",
  },
  {
    name: "Destination",
    url: "/destination",
    bgImage: "bg-destination",
    id: "02",
  },
  {
    name: "Crew",
    url: "/crew",
    bgImage: "bg-crew",
    id: "03",
  },
  {
    name: "Technology",
    url: "/technology",
    bgImage: "bg-technology",
    id: "04",
  },
];

const Navbar = () => {
  return (
    <nav className=" flex items-center font-barlow-condensed text-white ">
      {/* logo */}
      <div className="px-6 flex-1">
        <img src={LogoIcon} alt="space tourism logo" className=" " />
      </div>
      {/* line */}
      <hr className=" w-[20%] hidden" />
      {/* nav */}

      <Links />
      <button className="px-6" aria-label="hamburger menu icon">
        <img src={HamburgerMenuIcon} alt="menu icon" />
      </button>
    </nav>
  );
};

const Links = () => {
  const location = useLocation();
  return (
    <div className="absolute top-0 right-0 w-[70%] h-screen pl-10 backdrop-blur-2xl backdrop-brightness-125 font-thin">
      <ul className="flex flex-col gap-10 pt-24">
        {LinksData.map((link, id) => (
          <li key={id} className="">
            <Link {...link} pathname={location.pathname} />
          </li>
        ))}
      </ul>
      <button
        aria-label="close navigation link"
        className="absolute right-0 top-10">
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
      className="text-2xl flex gap-2 tracking-widest"
      onClick={() => setBgTheme?.(bgImage)}
      to={url}>
      <span className="font-bold">{id}</span>
      {name}
    </RouterLink>
  );
};
export default Navbar;
