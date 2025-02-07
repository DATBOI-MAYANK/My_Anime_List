import React from "react";
import HellPara from "../../coverImage/Hell.png";
function Hell() {
  return (
    <div className=" bg-[#1E1E2F] min-h-full w-full">
      <div className="absolute z-1 flex  flex-col   h-auto w-full title">
        <div className="flex items-center justify-center">
          <h1 className=" text-[#FFFFFF]  p-8 text-7xl">
            Hell's Paradise: Jigokuraku
          </h1>
        </div>
        <div className=" grid grid-flow-row grid-cols-4  ">
          <div className="image">
            <img
              src={HellPara}
              alt=""
              className="h-80 w-60 ml-7 p-1 rounded-[1.25rem]"
            />
          </div>
          <div className="info">
            <h1 className=" text-[#FFFFFF]  p-8 text-4xl underline">Genre</h1>
            <ul className="list-disc text-[#FFFF] text-2xl">
              <li>Action</li>
              <li>Dark Fantasy</li>
              <li>Psycological Thriller</li>
            </ul>
          </div>
          <div className="info ">
            <h1 className=" text-[#FFFFFF]  p-8 text-4xl underline">Manga</h1>
            <div className="flex text-md">
              <ul className=" text-[#FFFFFF] mx-1">
                <li>Written by </li>
                <li>Published by</li>
                <li>English publisher</li>
                <li>Imprint</li>
                <li>Magazine</li>
                <li>Demographic</li>
                <li>Original run</li>
                <li>Volumes</li>
              </ul>
              <ul className=" text-[#FFFFFF] mx-1">
                <li>Yuji Kaku</li>
                <li> Shueisha</li>
                <li>NA: Viz Media</li>
                <li>Jump Comics+</li>
                <li> Shōnen Jump+</li>
                <li>Shōnen</li>
                <li>01/22/-01/25/2021</li>
                <li> 13</li>
              </ul>
            </div>
          </div>
          <div className="info">
            <h1 className=" text-[#FFFFFF] p-5 text-3xl underline">
              Anime television series
            </h1>
            <div className="flex text-md">
              <ul className=" text-[#FFFFFF] mx-1">
                <li>Directed by </li>
                <li>Produced by</li>
                <li>Written by </li>
                <li>Music by</li>
                <li>Studio</li>
                <li>Licensed by</li>
                <li>Original network</li>
                <li>Original run</li>
                <li>Episodes</li>
              </ul>
              <ul className=" text-[#FFFFFF] mx-1">
                <li> Kaori Makita</li>
                <li> Nozomi Ishii</li>
                <li>Akira Kindaichi</li>
                <li> Yoshiaki Dewa</li>
                <li> MAPPA</li>
                <li>Crunchyroll Netflix</li>
                <li>TXN (TV Tokyo)</li>
                <li>	April 1, 2023 – present</li>
                <li> 13</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hell;
