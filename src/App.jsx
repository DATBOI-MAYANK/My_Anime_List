import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import Hell from "./assets/coverImage/Hell.png";
import Bleach from "./assets/coverImage/Bleach.jpg";
import OnePiece from "./assets/coverImage/OnePiece.jpg";
import Naruto from "./assets/coverImage/Naruto.jpg";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const HeroRef = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("h1 .textCustom", {
      y: 300,
      opacity: 0,
      stagger: 0.1,
    });
    tl.to(".overlay", {
      y: "-100%",
      ease: "power2.out",
    });
    tl.from(".title h1", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });
    tl.from(".title h3", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });
    tl.from(".title p", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: HeroRef.current,
          scroller: "body",
          start: "top 50%",
          end: "bottom 100%",
          markers:true,
          scrub: 1,
        },
      })
      .from(".Anime", {
        opacity: 0,
        y: 100,
        stagger: 0.4,
      });
  });

  return (
    <div className="  bg-[#1E1E2F] min-h-full w-full ">
      <div className="absolute z-1 flex  flex-col items-center  justify-center h-vh w-full title">
        <h1 className=" text-[#FFFFFF]  p-8 text-7xl">
          My <span className="text-[#08D9D6]">Anime</span> List
        </h1>
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
        <p className=" text-[#FFFFFF] text-2xl pt-5 w-7xl">
          Explore detailed pagesfeaturing character bios, stunning visuals, and
          exciting insights into what makes each anime truly amazing. Whether
          you're a seasoned otaku or just starting your anime journey, I hope
          you find something here that sparks your interest!
        </p>
      </div>
      <div className=" h-screen w-full">
        <div className=" absolute flex text-center justify-center top-0 z-10 h-screen w-full bg-[#0c0c1a] overlay">
          <h1 className=" absolute top-72 text-[#08D9D6] text-7xl ">
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
      <div className=" h-auto w-full " ref={HeroRef}>
        <div className="flex items-center justify-between  Anime">
          <img
            src={Hell}
            alt="coverImage"
            className="h-80 w-60 ml-7 p-1 rounded-[1.25rem]"
          />
          <p className=" text-[#FFFFFF] text-2xl m-1 p-5 w-7xl">
            Captured during an assassination mission, Gabimaru the Hollow is
            sentenced to be executed, but nothing seems to kill him due to his
            superhuman body. Believing his love for his wife to be
            subconsciously keeping him alive, executioner Yamada Asaemon Sagiri
            offers him the chance to be pardoned of all crimes by the Shogunate
            if he finds the elixir of life on Shinsenkyo, a legendary realm
            recently discovered southwest of the Ryukyu Kingdom. After losing
            five expedition teams sent to the island, this time the Shogunate
            sends a group of death row convicts. The convicts are each given a
            Yamada Asaemon executioner, who they must return with in order to
            obtain the pardon.
            <button className="bg-[#fff] text-black rounded-md text-xl p-2 mt-3 ml-[86%] hover:bg-gradient-to-r from-[#FF2E63] via-purple-500 to-[#08D9D6] ">
              More Info...
            </button>
          </p>
        </div>
        <div class="string Anime">
          <svg width="100%" height="100">
            <path
              d="M 10 100 Q 680 100 1340 100"
              stroke="white"
              strokeWidth="7"
              fill="transparent"
            />
          </svg>
        </div>
        <div className="flex items-center justify-between mt-5 Anime">
          <p className=" text-[#FFFFFF] text-2xl m-1 p-5 w-7xl">
            The anime follows Ichigo Kurosaki, a high schooler who becomes a
            substitute Soul Reaper after Rukia Kuchiki sacrifices herself to
            protect him. When Rukia is sentenced to death, Ichigo trains to save
            her, uncovering Sōsuke Aizen’s plot to merge Soul Reapers and
            Hollows using the Hōgyoku. Aizen later kidnaps Orihime to overthrow
            the Soul King, leading Ichigo and his friends to battle his elite
            Espada. Ichigo ultimately sacrifices his powers to defeat Aizen.
            Later, he regains them to stop the Fullbringer group Xcution. The
            anime also features exclusive arcs with the Bounts, rogue Soul
            Reapers, and Zanpakutō spirits.
            <button className="bg-[#fff] text-black rounded-md text-xl p-2 mt-3 mr-[86%] hover:bg-gradient-to-r from-[#FF2E63] via-purple-500 to-[#08D9D6] ">
              More Info...
            </button>
          </p>
          <img
            src={Bleach}
            alt="coverImage"
            className="h-80 w-60 mr-7  p-1 rounded-[1.25rem]"
          />
        </div>
        <div class="string Anime">
          <svg width="100%" height="100">
            <path
              d="M 10 100 Q 680 100 1340 100"
              stroke="white"
              strokeWidth="7"
              fill="transparent"
            />
          </svg>
        </div>
        <div className="flex items-center justify-between mt-5 Anime">
          <img
            src={OnePiece}
            alt="coverImage"
            className="h-80 w-60 ml-7  p-1 rounded-[1.25rem]"
          />
          <p className=" text-[#FFFFFF] text-2xl m-1 p-5 w-7xl">
            The world of One Piece is home to humans and diverse races,
            including giants, merfolk, fish-men, and the Mink tribe. It is
            governed by the World Government, which controls the Navy to combat
            pirates and Cipher Pol as its secret police. Opposing them is the
            Revolutionary Army, seeking to overthrow their rule. The series
            explores moral ambiguity in piracy, portraying both villains and
            rebels against authoritarian control. Supernatural elements include
            Devil Fruits, granting abilities at the cost of swimming, and Haki,
            enhancing willpower and combat skills, making it one of the few ways
            to counter Devil Fruit users.
            <button className="bg-[#fff] text-black rounded-md text-xl p-2 mt-3 ml-[86%] hover:bg-gradient-to-r from-[#FF2E63] via-purple-500 to-[#08D9D6] ">
              More Info...
            </button>
          </p>
        </div>
        <div class="string Anime">
          <svg width="100%" height="100">
            <path
              d="M 10 100 Q 680 100 1340 100"
              stroke="white"
              strokeWidth="7"
              fill="transparent"
            />
          </svg>
        </div>
        <div className="flex items-center justify-between mt-5 Anime">
          <p className=" text-[#FFFFFF] text-2xl m-1 p-5 w-7xl">
            The Nine-Tails fox attacks Konoha, and the Fourth Hokage, Minato
            Namikaze, sacrifices himself to seal it inside his newborn son,
            Naruto Uzumaki. The Third Hokage resumes leadership, and Naruto
            grows up shunned by the villagers. He learns the truth 12 years
            later from Mizuki, whom he defeats, earning Iruka’s respect. Naruto
            joins Team 7 with Sasuke Uchiha and Sakura Haruno under Kakashi
            Hatake. They complete missions and later enter the Chunin Exams,
            where Orochimaru kills the Third Hokage. Jiraiya rejects the Hokage
            title and finds Tsunade to become the Fifth Hokage. Orochimaru
            tempts Sasuke with power to defeat his brother Itachi. Sasuke leaves
            Konoha, and despite Naruto’s attempt to stop him, he refuses to
            return. Naruto trains with Jiraiya, while Sakura becomes Tsunade’s
            apprentice, setting the stage for their next encounters.
            <button className="bg-[#fff] text-black rounded-md text-xl p-2 mt-3 mr-[86%] hover:bg-gradient-to-r from-[#FF2E63] via-purple-500 to-[#08D9D6] ">
              More Info...
            </button>
          </p>
          <img
            src={Naruto}
            alt="coverImage"
            className="h-80 w-60 mr-7  p-1 rounded-[1.25rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
