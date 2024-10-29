"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import Img from "./image";
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

export const Footer = () => {
  const { loading, theme, language, setLanguage, isMobile } = useAppContext();
  return (
    <div
      style={{
        display: loading ? "none" : "flex",
        background: theme.background,
      }}
      className="z-40 px-[5%] pt-8 pb-6 w-full
      border-t-[0.5px] border-t-[rgba(255,255,255,0.1)]
      flex-col"
    >
      <div className="w-full flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-[32px]">
        <Link
          href="/"
          className="desktop:w-1/3 flex items-center scale-up cursor-pointer"
        >
          <div className="relative  flex items-center justify-center text-[white] text-[28px] font-[700]">
            IQ Night
          </div>
        </Link>
        <div className="desktop:w-1/3 flex items-center desktop:justify-end gap-4">
          <a
            href={
              isMobile
                ? "fb://profile/61562564296082"
                : "https://www.facebook.com/profile.php?id=61562564296082"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color={theme.text} size={isMobile ? 20 : 20} />
          </a>
          <a
            href={
              isMobile
                ? "instagram://user?username=sarko_events"
                : "https://www.instagram.com/sarko_events"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color={theme.text} size={isMobile ? 20 : 20} />
          </a>
          {/* <a
            href={
              isMobile
                ? "https://www.tiktok.com/@sarko.events"
                : "https://www.tiktok.com/@sarko.events"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok color={theme.text} size={20} />
          </a> */}
          {/* <a
            href={
              isMobile
                ? "vnd.youtube://www.youtube.com/channel/UC0Fwr1O2Imxpc6mf-PhZwyg"
                : "https://www.youtube.com/channel/UC0Fwr1O2Imxpc6mf-PhZwyg"
            }
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

        {/* <div className="desktop:w-1/3 flex justify-end desktop:items-center flex-col desktop:flex-row gap-2 desktop:gap-8">
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
      </div>

      <div
        style={{ color: theme.text }}
        className="z-10 flex items-center mt-auto pt-12"
      >
        &copy; Copyright
      </div>
    </div>
  );
};
