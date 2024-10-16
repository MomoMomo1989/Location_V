"use client";
import Image from "next/image";
import Link  from "next/link";
export default function navigation(){
return <>
<div className="h-[50px] w-[100vw] bg-[#2948A6] flex items-center justify-start  ">
        <div className="h-[34px] w-[34px] bg-white rounded-[100%] mr-5 flex items-center justify-center ml-3 ">
        <Image src="/voiture.png" width={25} height={25} alt="" className="h-[26px] w-[26px]"/>
        </div>
        
        <Link href="/" className="ml-2 mr-4 text-[#ffffff] hover:text-[#bbaeae] ">Acceuil </Link>
        <Link href="" className="ml-2 mr-4 text-[#ffffff] hover:text-[#bbaeae] ">A propos</Link>
        <Link href="/garage" className="ml-2 mr-4 text-[#ffffff] hover:text-[#bbaeae] ">Notre garage</Link>
        <Link href="" className="ml-2 mr-4 text-[#ffffff] hover:text-[#bbaeae] ">Nos Prix</Link>
        <Link href="" className="ml-2 mr-4 text-[#ffffff] hover:text-[#bbaeae] ">Contact</Link>
        
    </div>

</>
}