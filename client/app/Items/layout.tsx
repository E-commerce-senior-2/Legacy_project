import React from 'react'
import Sidebar from '../components/sidebar';

export default function itemsLayout({
    children
} : {
    children: React.ReactNode;
}) {
  return(
    <div className='layoutExplore  flex'>
    <Sidebar/>
       {children}
    </div>
  )  
}

