"use client";
import { useState , useEffect} from "react";
import  Vehicules  from "../../components/vehicules";
export default function garage(){
return <>
    
<div className="w-[100vw] flex justify-center items-center mt-4 mb-4">
    <div className="w-[98%] h-[60px] rounded-lg bg-[#C2CAE7] flex justify-between items-center ">
        <h1 className="text-[25px] ml-5 ">Recherchez le vehicule dont vous avez besoin</h1>
        <div className="flex">
        <input type="search" name="" id="" className="h-[40px] w-[500px] rounded-l-[10px] rounded-bl-[10px] " />
        <button type="submit" className="mr-3 bg-[#2948A6] w-[36px] flex justify-center items-center rounded-r-[10px] rounded-br-[10px] "><svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g clipPath="url(#clip0_1_883)">
             <path d="M29.355 25.86C31.7758 22.5567 32.86 18.4612 32.3908 14.3929C31.9216 10.3245 29.9336 6.58335 26.8245 3.91783C23.7153 1.25231 19.7144 -0.140984 15.6221 0.0166989C11.5299 0.174382 7.64801 1.87141 4.75322 4.76828C1.85843 7.66514 0.164174 11.5482 0.00941907 15.6406C-0.145335 19.733 1.25082 23.7329 3.91857 26.8401C6.58631 29.9473 10.3289 31.9327 14.3976 32.399C18.4663 32.8653 22.561 31.7781 25.8625 29.355H25.86C25.9334 29.455 26.015 29.5508 26.105 29.6425L35.73 39.2675C36.1988 39.7366 36.8347 40.0003 37.4979 40.0005C38.1611 40.0007 38.7972 39.7375 39.2663 39.2688C39.7354 38.8 39.9991 38.1641 39.9993 37.5009C39.9995 36.8377 39.7363 36.2016 39.2675 35.7325L29.6425 26.1075C29.5532 26.017 29.4571 25.9359 29.355 25.86ZM30 16.25C30 18.0557 29.6444 19.8437 28.9534 21.5119C28.2624 23.1801 27.2496 24.6959 25.9728 25.9727C24.696 27.2495 23.1802 28.2623 21.5119 28.9534C19.8437 29.6444 18.0557 30 16.25 30C14.4444 30 12.6564 29.6444 10.9882 28.9534C9.31992 28.2623 7.80413 27.2495 6.52733 25.9727C5.25052 24.6959 4.23771 23.1801 3.5467 21.5119C2.8557 19.8437 2.50005 18.0557 2.50005 16.25C2.50005 12.6033 3.9487 9.10591 6.52733 6.52729C9.10595 3.94866 12.6033 2.50001 16.25 2.50001C19.8968 2.50001 23.3941 3.94866 25.9728 6.52729C28.5514 9.10591 30 12.6033 30 16.25Z" fill="white"/>
             </g>
             <defs>
             <clipPath id="clip0_1_883">
             <rect width="40" height="40" fill="white"/>
             </clipPath>
             </defs>
             </svg>
        </button>
        </div>
    </div>
</div>
<Vehicules/>
</>
}