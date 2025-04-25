import React, { useContext } from "react";
import fonder from "/fonder1.png";
import Adaku from "/Adaku1.png";
import Tukura from "/Tukura1.png";
import Samuel from "/samuelvick1.png";
import luka from "/luka1.png";
import Itodo from "/itodo1.png";
import dapal from "/dapal1.png";
import dukup from "/dukup1.png";
import jenny from "/Jennifer1.png";
import harrison from "/harrison1.png";
import { themeContextProvider } from "../Contexts/ThemeContext";
const TeamPhotos = () => {
  const { darkTheme } = useContext(themeContextProvider);
  return (
    <section>
      <div className="w-[95%] grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto gap-8 mb-12">
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={fonder}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Penum Gotar Long
          </a>
          <a href="" className="text-sm ">
            Founder
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={Adaku}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Adaaku Peter Jr{" "}
          </a>
          <a href="" className="text-sm ">
            Co-founder/CEO
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={Tukura}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Tukura Pishikeni
          </a>
          <a href="" className="text-sm ">
            Avisor
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={Samuel}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Samuel Victor
          </a>
          <a href="" className="text-sm ">
            Engineer
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={luka}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Kunanzang Manoah Luka{" "}
          </a>
          <a href="" className="text-sm ">
            {" "}
            Engineer
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={Itodo}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Itodo Simon
          </a>
          <a href="" className="text-sm ">
            Engineer
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={dapal}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Dapal Mitong
          </a>
          <a href="" className="text-sm ">
            Legal officer
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={dukup}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Bala Nenman Dakup
          </a>
          <a href="" className="text-sm ">
            Graphic Designer
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={jenny}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Karlyol Jennifer Wuese
          </a>
          <a href="" className="text-sm ">
            Office Assistant
          </a>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
          <a href="" className="w-[330px] h-[208px]">
            <img
              src={harrison}
              alt=""
              width="296"
              height="208"
              className="w-full h-full"
            />
          </a>
          <a href="" className="text-lg">
            Harrison Titus Iorfa
          </a>
          <a href="" className="text-sm ">
            Social Media Manager/Content Writer/Content Strategies
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamPhotos;
