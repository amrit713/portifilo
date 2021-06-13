import React from 'react'
import { project} from "./content"
import Link from "next/link";



function Project() {
    return (
        <div className="mt-7 ">
           <h1 className="text-3xl font-medium" >{project.title}</h1>
        
        <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 px-6 mt-10 gap-7">
            {
                project.projects.map((project)=>{
                    return(
                        <div key={project.id} className="w-full border-none  bg-background rounded-xl overflow-hidden hover:shadow-2xl flex flex-col space-y-4 ">
                            <img className="object-cover" src={project.image} alt="" />
                            
                            <p className="m-auto text-2xl font-medium text-blue-300">{project.title}</p>
                            <div className="border-b-4 border-green-600 w-10 rounded-full m-auto"/>
                            <div className=" p-4 ">
                            <p>{project.description}</p>
                            <div className="flex justify-around mt-3 text-gray-400">
                                <p>{project.develop.react}</p>
                                <p>{project.develop.next}</p>
                                <p>{project.develop.redux}</p>
                            </div>

                            <div className="flex justify-around mt-6" >
                            <Link href={project.code} >
                               <a className="bg-red-800 py-2 px-6 rounded-full  text-gray-400 hover:bg-red-500 hover:text-white">Code</a> 
                            </Link>

                            <Link href={project.source}>
                               <a className="bg-red-8 bg-red-800 py-2 px-6 rounded-full text-gray-400 hover:bg-red-500 hover:text-white">Source</a> 
                            </Link>

                            
                            </div>

                            </div>
                            </div>
                    )
                })
            }

        </div>

          
        </div>
    )
}

export default Project
