"use client";
import { useAppContext } from "@/context/app";
import Image from "next/image";
import { useEffect } from "react";
import { CiMobile3 } from "react-icons/ci";

const Projects = () => {
  const { theme, loading, isMobile } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: "Sarko Events",
      img: "/tp.jpg",
    },
    {
      id: "Geo - Market",
      description: "Unique georgian online marketplace",
      img: "/tp.jpg",
      link: "https://geomarket.shop",
    },
    {
      id: "BeautyVerse",
      description: "Unique georgian online marketplace",
      img: "/tp.jpg",
      comment: "Mobile Only",
      link: "https://beautyverse.ge",
      ios: "yes",
      android: "yes",
    },
    {
      id: "BeautyVerse1",
      description: "Unique georgian online marketplace",
      img: "/tp.jpg",
      comment: "Mobile only",
      link: "https://beautyverse.ge",
      ios: "yes",
      android: "yes",
    },
    {
      id: "BeautyVerse2",
      description: "Unique georgian online marketplace",
      img: "/tp.jpg",
      comment: "Mobile only",
      link: "https://beautyverse.ge",
      ios: "yes",
      android: "yes",
    },
    {
      id: "BeautyVerse3",
      description: "Unique georgian online marketplace",
      img: "/tp.jpg",
      comment: "Mobile only",
      link: "https://beautyverse.ge",
      ios: "yes",
      android: "yes",
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
            className="w-full  desktop:w-[60%] shadow-md rounded-xl flex
          flex-col gap-4 p-4 bg-[rgba(255,255,255,0.05)]"
            key={index}
          >
            <div className="flex items-center">
              <Image
                className="object-cover rounded-xl"
                src={item.img}
                width={isMobile ? 100 : 150}
                height={isMobile ? 100 : 150}
                alt="img"
              />

              <div
                className="desktop:h-[150px] h-[100px] p-4 desktop:p-6 rounded-[10px] w-full ml-2 desktop:ml-4 shadow-sm bg-[rgba(255,255,255,0.02)]
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
                    style={{ background: theme.active, color: theme.text }}
                    href={item.link}
                  >
                    Link
                  </a>
                  {item.android && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                      style={{ background: theme.active, color: theme.text }}
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
                      style={{ background: theme.active, color: theme.text }}
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
                style={{ background: theme.active, color: theme.text }}
                href={item.link}
              >
                Link
              </a>
              {item.android && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                  style={{ background: theme.active, color: theme.text }}
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
                  style={{ background: theme.active, color: theme.text }}
                  href={item.ios}
                >
                  iOS
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
