"use client";
import React from 'react'
import { useState , useEffect} from "react";
import Image from "next/image";
export default function vehicules() {
    const [garages , setGarage] = useState(null); 
    const [load , setLoad] = useState(false);
    useEffect(()=>{
        const recupGarege =async () =>{
            const data = await fetch("https://fakestoreapi.com/products")
            const donne = await data.json();
            setGarage(donne);
            setLoad(true)
        }
        recupGarege()
    },[]);
    console.log(garages)
  return ( 
    <div className="w-[100vw] h-auto grid grid-cols-4 gap-4 mb-10 pl-11 ">
    {load ? (garages.map(
        garage => ( 
            <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  relative">
             <img src={garage.image} alt=""  className="h-[160px] w-[220px]" />   
            <div className="flex items-start w-[100%] pl-3 mb-2  "><h1 className="text-[#2948A6] font-bold ">{garage.title}</h1></div>
            <div className="flex items-start w-[100%] pl-3 mb-2"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
            <div className="flex justify-end w-[100%] mr-5 mb-2"><h1 className="text-[#272727] font-bold ">{garage.price} DA/Jour</h1></div>
            <div className="flex justify-end w-[100%]  absolute bottom-1 right-1"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Réserver</button></div>
            </div>   
         
    )
    )) : ( <h1>chargement</h1> )}
    
    </div>
  )
}
