import Head from 'next/head'
import  Link from 'next/link'
import { Layout } from './Layout'
import Acomplishments from './src/components/Acomplishments';
import Hero from "./src/components/Hero"
import Project from './src/components/Project'
import Technologies from './src/components/Technologies'
import TimeLine from './src/components/TimeLine'





export default function Home() {
  return (
    
    <Layout>
  <div className= " ">
    
    
    
    <div className="w-9/12 mx-auto">
    <Hero />
   
    <Project/>
    <Technologies/>
    <TimeLine />
    <Acomplishments />
    
    </div>
   
  </div>
  </Layout>
  )
}
