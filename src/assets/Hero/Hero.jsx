import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../style.css";
import Hell from "../coverImage/Hell.png";
import Bleach from "../coverImage/Bleach.jpg";
import OnePiece from "../coverImage/OnePiece.jpg";
import Naruto from "../coverImage/Naruto.jpg";
import {Link} from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const HeroRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: HeroRef.current,
          scroller: "body",
          start: "top 50%",
          end: "bottom 100%",
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
    <>
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
              <Link
                to='/Hell'
                className="hover:cursor-pointer"
              >
              More Info...
              </Link>
            </button>
          </p>
        </div>
        <div className="string Anime">
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
            <Link
                to={'/Bleach'}
              >
              More Info...
              </Link>
            </button>
          </p>
          <img
            src={Bleach}
            alt="coverImage"
            className="h-80 w-60 mr-7  p-1 rounded-[1.25rem]"
          />
        </div>
        <div className="string Anime">
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
            <button className="bg-[#fff] text-black rounded-md text-xl p-2 mt-3 mr-[86%] hover:bg-gradient-to-r from-[#FF2E63] via-purple-500 to-[#08D9D6] ">
            <Link
                to={'/OnePiece'}
              >
              More Info...
              </Link>
            </button>
          </p>
        </div>
        <div className="string Anime">
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
            <Link
                to={'/Naruto'}
              >
              More Info...
              </Link>
            </button>
          </p>
          <img
            src={Naruto}
            alt="coverImage"
            className="h-80 w-60 mr-7  p-1 rounded-[1.25rem]"
          />
        </div>
      </div>
      
    </>
  );
}

export default Hero;
