import React from 'react';
import { useState,useEffect } from 'react';
import { categories } from '../utils/constants';

const SideBar = ({selected ,setSelected}) => {
 
  return (
    <div className="flex flex-row overscroll-y-auto h-auto md:h-[100vh] md:flex-col">
       {categories.map((item,idx)=>(
        
          <button 
          onClick={()=>setSelected(item.name)}
          className="category-btn text-white"
          style={{background: item.name === selected? "gray":"#154290"}}
          key={idx}
           >
            <span className="mr-3" style={{
                color: item.name ===selected?"white":"blue"
            }}>{item.icon}</span>
            <span>{item.name}</span>
          </button>
       ))}
    </div>
  )
}

export default SideBar
