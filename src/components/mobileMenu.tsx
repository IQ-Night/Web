"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MobileMenu = () => {
  const {
    isMobile,
    menuItems,
    theme,
    mobileMenu,
    setMobileMenu,
    language,
    setLanguage,
  } = useAppContext();
  const pathname = usePathname();

  return (
    <div
      style={{
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(100px)",
        transition: "ease-in 200ms",
      }}
      onClick={() => setMobileMenu(false)}
      className={`fixed z-50 top-0 ${
        mobileMenu ? "right-0 opacity-[1]" : "right-[-100%] opacity-[0.5]"
      } h-screen w-full slide-in-left desktop:hidden flex flex-col gap-[48px]
    text-textlight text-[16px] font-custom font-[600] px-[10%] pt-[40px]`}
    >
      <div className="flex flex-col gap-4 w-full">
        {menuItems.map((item: any) => {
          return (
            <Link href={item.path} key={item.path}>
              <h4
                style={{
                  color: pathname === item.path ? theme.active : theme.text,
                  transition: "ease-in 200ms",
                }}
                className={`cursor-pointer hover:opacity-[1] ${
                  pathname === item.path ? "opacity-1" : "opacity-[0.5]"
                }`}
              >
                {item.label}
              </h4>
            </Link>
          );
        })}
      </div>
      {/* <div
        onClick={(e) => e.stopPropagation()}
        className="flex desktop:items-center flex-col desktop:flex-row gap-2 desktop:gap-8"
      >
        <div
          onClick={() => setLanguage("en")}
          style={{
            opacity: language === "en" ? 1 : 0.5,
            fontSize: "14px",
            color: theme.text,
          }}
          className={` ${
            language !== "en"
              ? "hover:opacity-[0.8] cursor-pointer"
              : "cursor-default"
          }`}
        >
          English
        </div>
        <div
          className={` ${
            language !== "ka"
              ? "hover:opacity-[0.8] cursor-pointer"
              : "cursor-default"
          }`}
          onClick={() => setLanguage("ka")}
          style={{
            opacity: language === "ka" ? 1 : 0.5,
            fontSize: "14px",
            color: theme.text,
          }}
        >
          ქართული
        </div>

        <div
          className={` ${
            language !== "en"
              ? "hover:opacity-[0.8] cursor-pointer"
              : "cursor-default"
          }`}
          onClick={() => setLanguage("ru")}
          style={{
            opacity: language === "ru" ? 1 : 0.5,
            fontSize: "14px",
            color: theme.text,
          }}
        >
          Русский
        </div>
      </div> */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="desktop:w-1/3 flex items-center desktop:justify-center gap-4"
      >
        <a
          href="fb://profile/61562564296082"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook color={theme.text} size={isMobile ? 20 : 20} />
        </a>
        <a
          href="instagram://user?username=sarko_events"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color={theme.text} size={isMobile ? 20 : 20} />
        </a>
        {/* <a
          href="https://www.tiktok.com/@sarko.events"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok color={theme.text} size={20} />
        </a>
        <a
          href="vnd.youtube://www.youtube.com/channel/UC0Fwr1O2Imxpc6mf-PhZwyg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube color={theme.text} size={20} />
        </a> */}

        <a
          href="mailto:sarko.events@Gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail color={theme.text} size={isMobile ? 24 : 24} />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
