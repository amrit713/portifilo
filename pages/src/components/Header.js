import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link'
import { DiCssdeck } from 'react-icons/di';


function Header() {
    return (
        <div className="flex justify-around h-20 text-gray-300 ">
            {/* left side */}
            <div className="flex items-center text-white cursor-pointer ">
                <Link href="/">
                    <a className="flex  space-x-2" >
                    <DiCssdeck size="2rem" />
                <h5 className="font-medium text-lg">Portfolio</h5> 
                    </a>

                </Link>
                
            </div>

            {/* center */}
            <div className="sm:flex hidden lg:space-x-20 space-x-10 items-center font-medium text-lg">
                <Link href="/project" scroll={true}>

                    <a >
                    <h5 className="hover:text-white cursor-pointer " >Projects</h5>
                    </a>
               
                </Link>
                
                <Link href="/technologies" scroll={true}>

                    <a >
                    <h5 className="hover:text-white cursor-pointer">Technologies</h5>
                    </a>
                
                </Link>

                <Link href="/about" scroll={true}>
                    <a >
                    <h5 className="hover:text-white cursor-pointer">About</h5>
                    </a>
                
                    
                </Link>

               
               
               
            </div>
            
            {/* right Side */}
            <div className="flex space-x-10 items-center ">
                <Link href="https://github.com/amrit713" >
                    <a>
                    < AiFillGithub size="2rem"  className="hover:text-white hover:decoration-underline cursor-pointer " />
                    </a>
                </Link>
                
                <Link href="https://www.linkedin.com/in/amrit-ghimire-b2488a199/">
                <a>
                <AiFillLinkedin size="2rem" className="hover:text-white cursor-pointer" />
                </a>
                </Link>
                
                <Link href="https://www.instagram.com/am_rit_ghimire/?hl=en">
                <a>
                <AiFillInstagram size="2rem"  className="hover:text-white cursor-pointer"/>
                </a>
                </Link>
                

            </div>
        </div>
    )
}

export default Header
