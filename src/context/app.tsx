"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { en, ka, ru } from "../languages/list";

/**
 * App state context
 */

const AppContext = createContext<any>(null);

export const useAppContext = () => useContext(AppContext);

interface contextProps {
  children: ReactNode;
}

export const AppContextWrapper: React.FC<contextProps> = ({ children }) => {
  // loading app
  const [loading, setLoading] = useState(true);

  //** theme */
  const [theme, setTheme] = useState({
    id: "blue",
    gradient: "linear-gradient(#001429, #007aff)",
    main: "#007aff",
    background: "#007aff",
    background2: "rgba(255,255,255,0.02)",
    text: "#f7fbff",
    secondaryText: "",
  });

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("sarko-events:theme");
    if (localTheme) {
      let parseObject = JSON.parse(localTheme);
      document.body.style.background = parseObject.gradient;
      document.documentElement.style.background = parseObject.background;
      setTheme(parseObject);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      document.body.style.background = colors[0].gradient;
      document.documentElement.style.background = colors[0].background;
      setTheme(colors[0]);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, []);

  // define device type
  const [isMobile, setIsMobile] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => {
      // Assuming a width less than 768px is a mobile device
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the function to set the initial state
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * languages
   */
  const [language, setLanguage] = useState("en");
  const [activeLanguage, setActiveLanguage] = useState<any>("");

  useEffect(() => {
    let appLang = localStorage.getItem("sarko-events:language") || "en";
    setLanguage(appLang);
  }, []);

  useEffect(() => {
    if (language) {
      if (language === "en") {
        setActiveLanguage(en);
      } else if (language === "ka") {
        setActiveLanguage(ka);
      } else {
        setActiveLanguage(ru);
      }
      localStorage.setItem("sarko-events:language", language);
    }
  }, [language]);

  // nav items
  const menuItems = [
    { path: "/", label: activeLanguage.main },
    { path: "/about", label: activeLanguage.about },
    { path: "/contact", label: activeLanguage.contact },
  ];
  // mobile menu state
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    // Ensure the body has the transition set
    document.body.style.transition = "right 200ms ease-in";

    if (mobileMenu) {
      document.body.style.position = "relative";
      document.body.style.right = "100px";
    } else {
      document.body.style.position = "relative";
      document.body.style.right = "0px";
    }

    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.position = "";
      document.body.style.right = "";
      document.body.style.transition = "";
    };
  }, [mobileMenu]);

  // open request form
  const [active, setActive] = useState(false);

  /**
   * Alerts
   */
  const [alert, setAlert] = useState({ active: false, type: "", text: "" });

  return (
    <>
      <AppContext.Provider
        value={{
          theme,
          setTheme,
          loading,
          activeLanguage,
          language,
          setLanguage,
          menuItems,
          mobileMenu,
          setMobileMenu,
          isMobile,
          colors,
          active,
          setActive,
          alert,
          setAlert,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const colors = [
  {
    id: "black",
    gradient: "linear-gradient(#080808, #151515, #080808)",
    main: "#151515",
    background: "#080808",
    background2: "rgba(255,255,255,0.02)",
    active: "#f7fbff",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#001429",
  },

  {
    id: "light",
    gradient: "linear-gradient(#f1f1f1, #fff, #f1f1f1)",
    main: "#f1f1f1",
    background: "#f1f1f1",
    background2: "rgba(255,255,255,1)",
    active: "#111",
    btn: "#111",
    text: "#111",
    secondaryText: "#f1f1f1",
  },
];
