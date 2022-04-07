import React, { useState } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
// import Container from "../Container";

const LinksData = [
  {
    name: "Home",
    url: "/",
    id: "00",
  },
  {
    name: "Destination",
    url: "/destination",
    id: "01",
  },
  {
    name: "Crew",
    url: "/crew",
    id: "02",
  },
  {
    name: "Technology",
    url: "/technology",
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

    if (!root) return;

    if (open) {
      root?.classList.add("h-screen", "overflow-hidden");
    } else {
      root?.classList.remove("h-screen", "overflow-hidden");
    }
  }, [open]);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full py-6 md:py-0 lg:py-10 bg-transparent font-barlow-condensed text-white ">
      {/* logo */}
      <div className="flex items-center">
        <div className="px-6 flex-1 lg:flex-initial ">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        {/* line */}
        <div className=" h-[2px] ml-10 relative z-20 bg-in-between hidden lg:block flex-1 translate-x-5" />
        {/* nav */}

        {open ? (
          <div
            aria-hidden={!open}
            className="nav-link-effect-mobile absolute md:hidden top-0 right-0 w-[70%] h-screen  backdrop-blur-2xl backdrop-brightness-125 ">
            <Links />
            <button
              onClick={closeNav}
              aria-label="close navigation link"
              className="absolute right-10 top-10 ">
              <img
                src="/assets/shared/icon-close.svg"
                alt="close navigation link"
              />
            </button>
          </div>
        ) : null}

        <div className="nav-link-effect hidden md:block backdrop-blur-2xl backdrop-brightness-125 px-10 lg:px-32   ">
          <Links />
        </div>
        <button
          onClick={openNav}
          className="px-6 md:hidden"
          aria-label="hamburger menu icon">
          <img src="/assets/shared/icon-hamburger.svg" alt="menu icon" />
        </button>
      </div>
    </nav>
  );
};

const Links = () => {
  const location = useLocation();
  return (
    <ul className=" pt-32 md:py-0 md:flex md:gap-10">
      {LinksData.map((link, id) => (
        <li key={id} className="">
          <Link {...link} pathname={location.pathname} />
        </li>
      ))}
    </ul>
  );
};

const Link = ({
  pathname,
  url,
  name,
  id,
}: { pathname: string } & typeof LinksData[0]) => {
  const isActive = pathname === url;
  return (
    <RouterLink
      className="relative flex gap-4 uppercase nav-text pl-10 md:px-0 py-4 md:py-8  group"
      to={url}>
      <span className=" font-black md:hidden lg:block">{id}</span>
      {name}

      <span
        className={`absolute w-1 h-full top-0 right-0 transition-all duration-300 md:w-full md:h-1 md:top-[96%] md:left-0 ${
          isActive ? "bg-white " : "group-hover:bg-in-between"
        }`}></span>
    </RouterLink>
  );
};
export default Navbar;
