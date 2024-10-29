"use client";
import Button from "@/components/button";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";

const AboutUs = () => {
  const { theme, language, loading, activeLanguage } = useAppContext();
  return (
    <div
      className="flex-1"
      style={{ color: theme.text, display: loading ? "none" : "flex" }}
    >
      <div className="w-full h-full px-4 py-4 pt-[100px] slide-in-top flex flex-col items-center">
        <div className="flex w-full items-center justify-center gap-4 mb-4">
          <div className="relative overflow-hidden rounded-xl w-full desktop:w-2/5 h-full flex items-center">
            <Img
              src={"/images/bg.jpg"}
              alt="img"
              style={{
                aspectRatio: 1,
                zIndex: 0,
                width: "100%",
              }}
            />
          </div>
        </div>

        {texts.map((item: any, index: number) => {
          return (
            <div className="w-full desktop:max-w-[50%] mx-auto desktop:text-center">
              <div className="mt-4">
                <h2 className="text-xl mb-2 font-semibold">
                  {item.title[language]}
                </h2>
                {item?.list[language] && (
                  <ul className="list-disc pl-5 text-md">
                    {item?.list[language].map((i: any, index: number) => {
                      return <li key={index}>{i}</li>;
                    })}
                  </ul>
                )}
              </div>
              <div className="mt-4">
                <p className="text-md">{item.description[language]}</p>
              </div>
            </div>
          );
        })}
        <div className="w-full desktop:w-full h-48 flex desktop:justify-center gap-[16px] mt-[24px]">
          <div className="cursor-pointer relative overflow-hidden desktop:rounded-xl rounded-lg desktop:w-[20%]  w-[38%] h-[54px] flex items-center justify-center gap-[8px] bg-[black] border-[1px]">
            <FaApple color="white" size={32} />
            <div>
              <p className="text-[8px]">Download on the</p>
              <h2 className="font-[700] text-[16px]">App Store</h2>
            </div>
          </div>
          <div className="cursor-pointer relative overflow-hidden desktop:rounded-xl rounded-lg desktop:w-[20%] w-[38%] h-[54px] flex items-center justify-center gap-[8px] bg-[black] border-[1px]">
            <FaGooglePlay color="white" size={24} />
            <div>
              <p className="text-[8px]">GET IT ON</p>
              <h2 className="font-[700] text-[16px]">Google Play</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const texts = [
  {
    title: {
      en: "Mafia Night online game",
      ru: "100+ успешных мероприятий",
      ka: "100+ წარმატებული ღონისძიება",
    },
    description: {
      en: "Play with friends",
      ru: "Наша команда, работающая более 8 лет, поможет вам воплотить ваши мечты в реальность. Более 100 успешно проведенных мероприятий подтверждают наш профессионализм и опыт.",
      ka: "ჩვენი გუნდი, რომელიც ოპერირებს უკვე 8 წელიწადზე მეტი დროის განმავლობაში, დაგეხმარებათ თქვენი ოცნებების განხორციელებაში. 100-ზე მეტი წარმატებით ჩატარებული ღონისძიება ჩვენი პროფესიონალიზმისა და გამოცდილების დასტურია.",
    },
    list: [],
  },
];
