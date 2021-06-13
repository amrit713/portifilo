import Head from 'next/head'
import Acomplishments from './src/components/Acomplishments'
import Fotter from './src/components/Fotter'
import Header from "./src/components/Header"
import Hero from "./src/components/Hero"
import Project from './src/components/Project'
import Technologies from './src/components/Technologies'
import TimeLine from './src/components/TimeLine'





export default function Home() {
  return (
    
  <div className= " bg-cardColor text-white h-auto font-body ">
    
    <Header />
    <div className="w-9/12 mx-auto">
    <Hero />
    <Project/>
    <Technologies/>
    <TimeLine />
    <Acomplishments />
    <Fotter />
    </div>
   
  </div>
  )
}
