"use client";
import Button from "@/components/button";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect } from "react";
import { CiMobile3 } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";

const Projects = () => {
  const { theme, loading, isMobile } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: "E-Store",
      img: "/tp.jpg",
      path: true,
      link: "/projects/e-commerce",
    },
    // {
    //   id: "Sarko Events",
    //   img: "/tp.jpg",
    // },
    {
      id: "Geo - Market",
      description: "Unique georgian online marketplace",
      img: "/geo-market.png",
      link: "https://geomarket.shop",
    },

    {
      id: "Wordex",
      description: "English/Georgian words learning app",
      img: "/wordex.png",
      comment: "Mobile only",
      link: "https://beautyverse.ge",
      ios: "yes",
      android: "yes",
    },
    {
      id: "BeautyVerse",
      description: "World of Beauty & Self Care",
      img: "/beautyverse.jpg",
      comment: "Mobile Only",
      link: "https://beautyverse.ge",
      ios: "yes",
      android: "yes",
    },
    {
      id: "ELAN Georgia",
      description: "E-commerce system for Beauty Brand",
      img: "/elangeorgia.jpg",
      comment: "Mobile only",
      link: "https://elanofficial.ge",
    },
  ];

  return (
    <div
      style={{ display: loading ? "none" : "flex" }}
      className="slide-in-top w-full h-[95vh] w-full
     pt-[100px] desktop:pt-[140px] text-white
      flex-col items-center gap-4
      overflow-y-auto pb-[140px] px-4"
    >
      {projects?.map((item: any, index: number) => {
        return (
          <div
            style={{ background: theme.background2 }}
            className="w-full  desktop:w-[60%] shadow-sm rounded-xl flex
          flex-col gap-4 p-4"
            key={index}
          >
            <div className="flex items-center">
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  minWidth: isMobile ? "100px" : "150px",
                  minHeight: isMobile ? "100px" : "150px",
                }}
              >
                <Img
                  src={item.img}
                  alt="img"
                  style={{
                    aspectRatio: 1,
                    zIndex: 0,
                    width: "100%",
                  }}
                />
              </div>
              <div
                style={{ color: theme.text }}
                className="desktop:h-[150px] h-[100px] p-4 desktop:p-6 rounded-[10px] w-full ml-2 desktop:ml-4 shadow-sm border-[1.5px] border-[rgba(255,255,255,0.02)]
            flex items-center justify-between relative"
              >
                {item.comment === "Mobile only" && !isMobile && (
                  <div
                    style={{ fontSize: "12px" }}
                    className="absolute right-4 top-4 text-sm font-custom
                bg-[rgba(255,255,255,0.05)] py-1 px-3 font-[700] rounded-full
                flex items-center gap-2"
                  >
                    <CiMobile3 />
                    {item.comment}
                  </div>
                )}
                <div className="fle flex-col gap-1">
                  <h4 className="text-xl">{item.id}</h4>
                  <p className="mt-2 text-sm font-custom">{item.description}</p>
                </div>
                <div className="hidden mt-4 font-custom desktop:flex gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                    style={{
                      background: theme.active,
                      color: theme.secondaryText,
                    }}
                    href={item.link}
                  >
                    Link
                  </a>
                  {item.android && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                      style={{
                        background: theme.active,
                        color: theme.secondaryText,
                      }}
                      href={item.android}
                    >
                      Android
                    </a>
                  )}
                  {item.ios && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                      style={{
                        background: theme.active,
                        color: theme.secondaryText,
                      }}
                      href={item.ios}
                    >
                      iOS
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="flex font-custom desktop:hidden gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                style={{ background: theme.active, color: theme.secondaryText }}
                href={item.link}
              >
                Link
              </a>
              {item.android && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                  style={{
                    background: theme.active,
                    color: theme.secondaryText,
                  }}
                  href={item.android}
                >
                  Android
                </a>
              )}
              {item.ios && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                  style={{
                    background: theme.active,
                    color: theme.secondaryText,
                  }}
                  href={item.ios}
                >
                  iOS
                </a>
              )}
            </div>
          </div>
        );
      })}
      <Link
        href="/uiuxcomponents"
        className="h-12 w-[100%] desktop:hidden mt-12 flex items-center gap-4 shadow-md rounded-full"
      >
        <Button
          title="UI/UX Components"
          color={theme.secondaryText}
          background={theme.btn}
          icon={<IoMdArrowDropright size={24} />}
          onClick={() => undefined}
        />
      </Link>
    </div>
  );
};

export default Projects;
