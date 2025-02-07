import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../../style.css'
function Marque() {

    useGSAP(()=>{
        gsap.to('.marque',{
            transform:'translateX(-200%)',
            duration:6,
            repeat:-1,
            ease:"none"
        })
    })

  return (
    <div className='contianer flex  space-x-10 p-5 bg-[#FF2E63] border-y-4 border-[#FFFFFF]'>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        <div className="marque text-7xl shrink-0 font-bold text-[#FFFFFF]">Anime 🌟🎌</div>
        
    </div>
  )
}

export default Marque