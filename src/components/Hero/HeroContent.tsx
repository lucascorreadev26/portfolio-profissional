import Profile from "./Profile"

const HeroContent = () => {
  return (
    <div className="flex flex-rowg gap-68">

      <div className="flex flex-col">
        <h2 className="text-8xl font-inter font-bold mt-12">Lucas Corrêa</h2>
        <div className="flex flex-row items-center gap-8">
            <span className=" inline-flex w-16 h-1 bg-blue-500 ml-3" ></span>
            <h2 className="text-5xl font-inter font-bold mt-2" >Full Stack Developer</h2>
        </div>
        <p className="text-xl font-inter w-140 text-justify mt-8 text-gray-400">Construo aplicações web modernas com React, Node.js e PostgreSQL. Focado em código limpo, UX pensada e soluções que escalam.</p>
      </div>

        <Profile />
    </div>


  )
}

export default HeroContent