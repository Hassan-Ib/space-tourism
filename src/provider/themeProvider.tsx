import React, { ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
};

type ThemeContext = {
  bgImage: string;
  setBgTheme?: (theme: string) => void;
};
const initaState = {
  bgImage: "",
};
const ThemeCtx = React.createContext<ThemeContext>(initaState);

const ThemeProvider = (props: Props) => {
  const [bgImage, setBgImage] = React.useState<string>("bg-home");

  const setBgTheme = React.useCallback((value: string) => {
    console.log("bgset to value ", value);
    setBgImage(value);
  }, []);

  return (
    <ThemeCtx.Provider value={{ bgImage, setBgTheme }}>
      {props.children}
    </ThemeCtx.Provider>
  );
};

export const useThemeContext = () => {
  return { ...useContext(ThemeCtx) };
};

export default ThemeProvider;
