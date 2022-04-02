import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import LogoIcon from "../../assets/shared/logo.svg";
import HamburgerMenuIcon from "../../assets/shared/icon-hamburger.svg";
// import HomeBg from "../../assets/home/background-home-mobile.jpg";
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
    <nav className=" flex items-center font-barlow-condensed text-white font-medium">
      {/* logo */}
      <div className="flex-1">
        <img src={LogoIcon} alt="space tourism logo" className=" " />
      </div>
      {/* line */}
      <hr className="hidden" />
      {/* nav */}

      <Links />
      <button className=" " aria-label="hamburger menu icon">
        <img src={HamburgerMenuIcon} alt="menu icon" />
      </button>
    </nav>
  );
};

const Links = () => {
  const location = useLocation();
  return (
    <div className="absolute top-0 right-0 w-[70%] h-screen flex flex-col justify-center  text-white">
      <ul>
        {LinksData.map((link, id) => (
          <li key={id} className="">
            <Link {...link} pathname={location.pathname} />
          </li>
        ))}
      </ul>
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
      className="text-xl flex gap-2 "
      onClick={() => setBgTheme?.(bgImage)}
      to={url}>
      <span className="font-bold">{id}</span>
      {name}
    </RouterLink>
  );
};
export default Navbar;
