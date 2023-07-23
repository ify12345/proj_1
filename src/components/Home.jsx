import React from 'react'
import SideBar from './SideBar'
import { useState, useEffect } from 'react'

const Home = () => {
  const[selected,setSelected] = useState("New")
  
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '3b1f317e63mshedf48b1045a0838p11df67jsn77d173506a78',
  //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //   }
  // };
  // useEffect(()=>{

  //   const url = `https://youtube-v31.p.rapidapi.com/search?q=${setSelected}&part=snippet`;
  
   
  //   fetch(url,options)
  //   .then((response)=> response.json())
  //   .then(data=> console.log(data))
    
  // },[setSelected])

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3b1f317e63mshedf48b1045a0838p11df67jsn77d173506a78',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    const url = `https://moviesdatabase.p.rapidapi.com/titles/search/akas/${setSelected}`;
    fetch(url,options)
    .then((response)=>response.json())
    .then((data)=> console.log(data))    

  },[setSelected])



  return (
    <section className="flex flex-col md:flex-row">
       <div className="border-r-2 border-emerald-50 h-auto md:h-[100vh] px-0 md:px-2">
        <SideBar
        selected={selected}
        setSelected= {setSelected}/>
       </div>

       <div className="ml-4 text-[32px] font-bold">
        <div>
          {selected} <span className='text-blue-500'>videos</span>
        </div>
       </div>
    </section>
  )
}

export default Home
