import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./style.css";

function App() {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("h1 .textCustom", {
      y: 300,
      opacity: 0,
      stagger: 0.1,
    });
    tl.to(".overlay", {
      y: -900,
      ease: "power2.out",
    });
    tl.from('.title h1',{
      y:100,
      opacity:0,
      stagger:0.1
    })
    tl.from('.title h3',{
      y:100,
      opacity:0,
      stagger:0.1
    })
    tl.from('.title p',{
      y:100,
      opacity:0,
      stagger:0.1
    })
  });

  return (
    <div className="bg-[#1E1E2F] h-full  w-full ">
      <div className="absolute z-1 flex flex-col items-center  justify-center h-96 w-full title">
        <h1 className=" text-[#FFFFFF]  p-8 text-7xl">My Anime List</h1>
        <h3 className=" text-[#FFFFFF] text-5xl">
          Welcome to My Anime Universe! 🌟🎌
        </h3>
        <p className=" text-[#FFFFFF] text-2xl pt-10 w-7xl">
          Dive into a world filled with action, adventure, and unforgettable
          stories! This website is a tribute to my favorite anime, where I share
          the best series that have left a lasting impact on me. From
          heart-racing battles to heartwarming friendships, each anime here has
          something special that makes it stand out.
        </p>
      </div>

      <div className=" h-screen w-full">
        <div className=" absolute flex text-center justify-center top-0 z-10 h-screen w-full bg-[#0c0c1a] overlay">
          <h1 className=" absolute top-72 text-blue-400 text-7xl ">
            <span className="textCustom">W</span>
            <span className="textCustom">e</span>
            <span className="textCustom">l</span>
            <span className="textCustom">c</span>
            <span className="textCustom">o</span>
            <span className="textCustom">m</span>
            <span className="textCustom">e</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
