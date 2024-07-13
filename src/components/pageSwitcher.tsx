"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const PageSwitcher = () => {
  // app context
  const { theme, loading } = useAppContext();

  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && !pathname.includes("/projects/") && (
        <div
          className={`fixed left-[5%] top-36 h-[70vh] rounded-full
      hidden ${
        loading ? "desktop:hidden" : "desktop:flex"
      } flex-col items-center justify-center`}
        >
          <Link
            href={
              pathname === "/contact"
                ? "/skills"
                : pathname === "/skills"
                ? "/uiuxcomponents"
                : pathname === "/uiuxcomponents"
                ? "/projects"
                : pathname === "/projects"
                ? "/offers"
                : "/"
            }
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.0.5)",
              transition: "ease-in 200ms",
            }}
            className="w-16 h-16 rounded-full border-[1px] border-[rgba(255,255,255,0.1)]
      shadow-md flex items-center justify-center cursor-pointer hover:opacity-[0.8]"
          >
            <IoMdArrowDropleft size={40} color={theme.text} />
          </Link>
        </div>
      )}
      {pathname !== "/contact" && !pathname.includes("/projects/") && (
        <div
          className={`absolute ${
            pathname === "/" ? "right-[15%]" : "right-[5%]"
          } bottom-0 bottom-auto top-36 h-[70vh] rounded-full
      hidden ${
        loading ? "desktop:hidden" : "desktop:flex"
      } flex-col items-center justify-center`}
        >
          <Link
            href={
              pathname === "/"
                ? "/offers"
                : pathname === "/offers"
                ? "/projects"
                : pathname === "/projects"
                ? "/uiuxcomponents"
                : pathname === "/uiuxcomponents"
                ? "/skills"
                : "/contact"
            }
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.0.5)",
              transition: "ease-in 200ms",
            }}
            className="w-16 h-16 rounded-full border-[1px] border-[rgba(255,255,255,0.1)]
      shadow-md flex items-center justify-center cursor-pointer hover:opacity-[0.8]"
          >
            <IoMdArrowDropright size={40} color={theme.text} />
          </Link>
        </div>
      )}
    </>
  );
};

export default PageSwitcher;
