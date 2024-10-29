"use client";
import { useAppContext } from "@/context/app";
import { useEffect } from "react";
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { loading, isMobile, theme } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ display: loading ? "none" : "flex" }}
      className="oveflow-hidden w-[100%] slide-in-top pt-[100px] desktop:pt-[72px] flex-col desktop:flex-row items-center desktop:items-start px-6 desktop:px-[5%] gap-4 desktop:gap-8 pb-[64px] desktop:pb-[8px]"
    >
      <div className="flex flex-col gap-4 w-full desktop:w-1/3 relative desktop:top-24 desktop:left-24">
        <a
          href="mailto:iq.night.georgia@gmail.com"
          className="cursor-pointer flex items-center gap-2"
          style={{ textDecoration: "underline", color: theme.text }}
        >
          <MdEmail size={isMobile ? 24 : 32} color={theme.active} />{" "}
          <span
            className="text-md desktop:text-xl"
            style={{ color: theme.text }}
          >
            iq.night.georgia@gmail.com
          </span>
        </a>
        <div
          className="cursor-pointer flex items center gap-2"
          style={{ textDecoration: "underline", color: theme.text }}
        >
          <FaMobileButton size={isMobile ? 24 : 32} color={theme.active} />
          <div
            className="text-md desktop:text-xl"
            style={{ color: theme.text }}
          >
            <a
              href="tel:+995555516496"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              +995555516496
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
