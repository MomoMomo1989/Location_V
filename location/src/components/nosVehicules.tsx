"use client";
import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function nosVehicules(){

    useEffect(()=>{
        Aos.init({duration: 1000})
      },[])



return <>

<div className="flex flex-col ">
    <div className="h-[100px] w-[100vw] flex justify-center items-center "><h1 className="text-[30px] font-bold " data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Notre garage</h1></div>
    <Splide aria-label="My Favorite Images">
        <SplideSlide>
        <div className="grid grid-cols-4 pl-[120px] ">
        <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  ">
        <Image src="/car.png" width={220} height={180} alt="" className="h-[160px] w-[220px]"/>
        <div className="flex items-start w-[100%] pl-3 mb-5 "><h1 className="text-[#2948A6] font-bold ">Audi RS8 Model 2024</h1></div>
        <div className="flex items-start w-[100%] pl-3 mb-5"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
        <div className="flex justify-end w-[100%] mr-3 mb-4"><h1 className="text-[#272727] font-bold ">15000 DA/Jour</h1></div>
        <div className="flex justify-end w-[100%] mr-3"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Reserver</button></div>
        </div>

        <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  ">
        <Image src="/car.png" width={220} height={180} alt="" className="h-[160px] w-[220px]"/>
        <div className="flex items-start w-[100%] pl-3 mb-5 "><h1 className="text-[#2948A6] font-bold ">Audi RS8 Model 2024</h1></div>
        <div className="flex items-start w-[100%] pl-3 mb-5"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
        <div className="flex justify-end w-[100%] mr-3 mb-4"><h1 className="text-[#272727] font-bold ">15000 DA/Jour</h1></div>
        <div className="flex justify-end w-[100%] mr-3"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Reserver</button></div>
        </div>

        <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  ">
        <Image src="/car.png" width={220} height={180} alt="" className="h-[160px] w-[220px]"/>
        <div className="flex items-start w-[100%] pl-3 mb-5 "><h1 className="text-[#2948A6] font-bold ">Audi RS8 Model 2024</h1></div>
        <div className="flex items-start w-[100%] pl-3 mb-5"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
        <div className="flex justify-end w-[100%] mr-3 mb-4"><h1 className="text-[#272727] font-bold ">15000 DA/Jour</h1></div>
        <div className="flex justify-end w-[100%] mr-3"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Reserver</button></div>
        </div>

        <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  ">
        <Image src="/car.png" width={220} height={180} alt="" className="h-[160px] w-[220px]"/>
        <div className="flex items-start w-[100%] pl-3 mb-5 "><h1 className="text-[#2948A6] font-bold ">Audi RS8 Model 2024</h1></div>
        <div className="flex items-start w-[100%] pl-3 mb-5"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
        <div className="flex justify-end w-[100%] mr-3 mb-4"><h1 className="text-[#272727] font-bold ">15000 DA/Jour</h1></div>
        <div className="flex justify-end w-[100%] mr-3"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Reserver</button></div>
        </div>
    </div>
    </SplideSlide>
    <SplideSlide>
        <div className="grid grid-cols-4 pl-[120px] ">
        <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  ">
        <Image src="/car.png" width={220} height={180} alt="" className="h-[160px] w-[220px]"/>
        <div className="flex items-start w-[100%] pl-3 mb-5 "><h1 className="text-[#2948A6] font-bold ">Audi RS8 Model 2024</h1></div>
        <div className="flex items-start w-[100%] pl-3 mb-5"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
        <div className="flex justify-end w-[100%] mr-3 mb-4"><h1 className="text-[#272727] font-bold ">15000 DA/Jour</h1></div>
        <div className="flex justify-end w-[100%] mr-3"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Reserver</button></div>
        </div>

        <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  ">
        <Image src="/car.png" width={220} height={180} alt="" className="h-[160px] w-[220px]"/>
        <div className="flex items-start w-[100%] pl-3 mb-5 "><h1 className="text-[#2948A6] font-bold ">Audi RS8 Model 2024</h1></div>
        <div className="flex items-start w-[100%] pl-3 mb-5"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
        <div className="flex justify-end w-[100%] mr-3 mb-4"><h1 className="text-[#272727] font-bold ">15000 DA/Jour</h1></div>
        <div className="flex justify-end w-[100%] mr-3"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Reserver</button></div>
        </div>

        <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  ">
        <Image src="/car.png" width={220} height={180} alt="" className="h-[160px] w-[220px]"/>
        <div className="flex items-start w-[100%] pl-3 mb-5 "><h1 className="text-[#2948A6] font-bold ">Audi RS8 Model 2024</h1></div>
        <div className="flex items-start w-[100%] pl-3 mb-5"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
        <div className="flex justify-end w-[100%] mr-3 mb-4"><h1 className="text-[#272727] font-bold ">15000 DA/Jour</h1></div>
        <div className="flex justify-end w-[100%] mr-3"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Reserver</button></div>
        </div>

        <div className="h-[360px] w-[250px] rounded-[10px] bg-[#C2CAE7] flex flex-col justify-center items-center  ">
        <Image src="/car.png" width={220} height={180} alt="" className="h-[160px] w-[220px]"/>
        <div className="flex items-start w-[100%] pl-3 mb-5 "><h1 className="text-[#2948A6] font-bold ">Audi RS8 Model 2024</h1></div>
        <div className="flex items-start w-[100%] pl-3 mb-5"><h1 className="text-[#3ea629] font-bold ">Disponible</h1></div>
        <div className="flex justify-end w-[100%] mr-3 mb-4"><h1 className="text-[#272727] font-bold ">15000 DA/Jour</h1></div>
        <div className="flex justify-end w-[100%] mr-3"><button type="submit" className="w-[120px] h-[30px] bg-[#2948A6] rounded-[10px] text-white ">Reserver</button></div>
        </div>
    </div>
    </SplideSlide>
</Splide>
    <div className="flex justify-end pr-[120px] mt-3 ">
        <button type="submit" className="w-[250px] h-[30px] bg-[#2948A6] rounded-[10px] text-white">voir plus </button>
    </div>
</div>

</>
}