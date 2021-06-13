import React from 'react'

import Footer from './src/components/Fotter'
import Header from './src/components/Header'



export const Layout = ({children}) => {
  return (
    <div className="  lg:w-100 lg:m-auto  bg-cardColor text-white h-auto font-body">
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </div>
  )
}