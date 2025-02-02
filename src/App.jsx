import bgImage from './assets/bgImage/Anime-Bg.png'

function App() {

  return (

     <div className='bg-[#1E1E2F] h-full  w-full '>
      <div className='absolute z-20 flex  top-14 justify-center h-full w-full'><h1  className=' text-[#FFFFFF] text-7xl'>My Anime List</h1></div>
       <div className=' h-screen w-full'>
        <img src={bgImage} alt="bgImage" className='h-screen w-full object-cover' />
        <div className=' absolute top-0 z-10 h-screen w-full  opacity-60 bg-[#A32AA9]' ></div>
       </div>
      
     </div>
  )
}

export default App
