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
        
        <div className=" grid grid-flow-row grid-cols-4 mt-9  ">
          <div className="image ">
            <img
              src={HellPara}
              alt=""
              className="h-80 w-60 ml-7 p-1 rounded-xl"
            />
          </div>
          <div className="info  border-white border-2 ">
            <h1 className=" text-[#FFFFFF]  p-8 pl-20 text-4xl underline">Genre</h1>
            <ul className="list-disc text-[#FFFF] pl-8 text-2xl">
              <li>Action</li>
              <li>Dark Fantasy</li>
              <li>Psycological Thriller</li>
            </ul>
          </div>
          <div className="info  border-white border-2 border-l-0 ">
            <h1 className=" text-[#FFFFFF]  p-8 pl-20 text-4xl underline">Manga</h1>
            <div className="flex text-md pl-2">
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
                <li>01/22/18-01/25/21</li>
                <li> 13</li>
              </ul>
            </div>
          </div>
          <div className="info  border-white border-2 border-l-0  ">
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
                <li>	04/1/23–present</li>
                <li> 13</li>
              </ul>
            </div>
          </div>
        </div>
        <main  className="flex items-center justify-center">
          <h1 className=" text-[#FFFFFF]  p-8 text-7xl underline">Characters</h1>
          <div>
            <div className="Charc">
              
            </div>
            <div className="CharcInfo">

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hell;
