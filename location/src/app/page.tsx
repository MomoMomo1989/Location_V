"use client";

import Image from "next/image";
import NosVehicules from "../components/nosVehicules" ;
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
useEffect(()=>{
  Aos.init({duration: 1000})
},[])

  return (
    <>
    <section className="grid grid-cols-2 w-[100vw] h-[400px] ">
      <div className="relative">
        <svg width="740" height="400" viewBox="0 0 852 499" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40.3321C0 40.3321 63.4934 -27.2925 120.988 12.5887C178.482 52.4699 387.46 44.667 431.955 28.6279C476.451 12.5887 741.923 24.2931 753.422 68.509C764.921 112.725 887.408 198.556 841.913 224.999C796.418 251.442 826.415 277.885 795.918 354.613C765.421 431.341 766.921 416.602 681.93 410.967C596.938 405.332 536.945 505.034 476.451 457.784C415.957 410.534 281.971 422.671 307.968 478.592C333.966 534.512 137.986 457.784 137.986 457.784L0 396.228V152.606V40.3321Z" fill="#C2CAE7" />
        </svg>
        <div className="absolute top-[15%] left-40 w-[90%] flex flex-col ">
          <h1 className="text-[50px] font-bold">Louez la voiture</h1>
          <h1 className="text-[50px] font-bold">de vos réves</h1>
          <h1 className="text-[50px] font-bold">à un prix</h1>
          <h1 className="text-[50px] text-[#2948A6] font-bold">imbattable</h1>
        </div>
      </div>
      <div className="h-[100%] w-[100%] ">
        <Image src="/car.png" width={700} height={700} className="mt-4 " alt="" />
      </div>
    </section>

    <section className="grid grid-cols-2 w-[100vw] h-[400px] bg-[#2948A6]">
        <div className="flex flex-col p-14">
          <h1  className="text-[45px] text-[#ffffff] mb-6">A propos de nous</h1>
          <p className="text-[#ffffff] ">Cras volutpat risus vitae purus rutrum, at convallis neque porttitor. 
               Nulla eu elementum ante. Donec lacinia purus non accumsan molestie.  
               Pellentesque ullamcorper mauris vel tellus posuere, eget laoreet nisi  accumsan. 
               Curabitur felis quam, gravida ut nisl sit amet, mattis auctor  metus. Sed eget justo convallis, 
               molestie erat id, fermentum ligula. Nam iaculis pretium purus in varius.
                Duis tincidunt pretium dolor. Nam eget nibh ac felis fermentum aliquet vel sed mauris.</p>
        </div>
          <div className="">
          <Image src="/office.png" width={700} height={900} className="mt-4 " alt="" />
          </div>
    </section>
    <section className="w-[100vw] h-[500px]" >
      <NosVehicules/>
    </section>
    <section className="w-[100vw] h-[500px] mt-6" >
     <div className="flex items-center justify-center mb-8"><h1 className="text-[30px] font-bold  " data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Nos prix</h1></div>
     <div className="pl-[279px] pr-[279px] flex justify-between items-center ">
      <div className="h-[300px] w-[300px] rounded-[50%] bg-[#4829A6] flex flex-col items-center justify-center" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <svg width="63" height="94" viewBox="0 0 63 94" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M15.7518 2.09904C15.9423 1.49288 16.3375 0.960756 16.8783 0.582351C17.4192 0.203947 18.0765 -0.000369445 18.7518 5.01498e-07H43.7518C44.2467 0.000351947 44.7345 0.110658 45.1749 0.321839C45.6153 0.53302 45.9958 0.839036 46.2851 1.2147C46.5743 1.59035 46.7641 2.02491 46.8387 2.4826C46.9134 2.94028 46.8707 3.40801 46.7143 3.84726L35.5893 35.0814H59.3768C59.962 35.081 60.5356 35.2344 61.0322 35.524C61.5288 35.8137 61.9285 36.2279 62.1858 36.7196C62.4431 37.2114 62.5476 37.7608 62.4874 38.3054C62.4273 38.8499 62.2049 39.3678 61.8456 39.7999L18.0956 92.422C17.6474 92.9637 17.0101 93.3409 16.295 93.4879C15.5798 93.6349 14.8322 93.5423 14.1826 93.2262C13.5329 92.9102 13.0226 92.3908 12.7405 91.7587C12.4585 91.1265 12.4227 90.4218 12.6393 89.7675L23.8956 55.5456H3.12683C2.64098 55.5459 2.16176 55.4401 1.72723 55.2368C1.29269 55.0335 0.914812 54.7383 0.623596 54.3745C0.33238 54.0106 0.135851 53.5883 0.0496181 53.141C-0.0366154 52.6937 -0.0101786 52.2338 0.12683 51.7977L15.7518 2.09904Z" fill="white"/>
        </svg>
        <h1 className="text-[30px]  text-white ">Rapidité</h1>
      </div>
      <div className="h-[300px] w-[300px] rounded-[50%] bg-[#D2C5EB] flex flex-col items-center justify-center" data-aos="zoom-out"  data-aos-offset="300" data-aos-easing="ease-in-sine" >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M15.6251 49.9999C15.6241 43.9654 17.2118 38.0369 20.2284 32.8105C23.2451 27.5841 27.5844 23.2439 32.8102 20.2262C38.036 17.2086 43.9642 15.6198 49.9987 15.6195C56.0332 15.6193 61.9615 17.2076 67.1876 20.2249C67.9049 20.6328 68.7545 20.7403 69.5509 20.5241C70.3473 20.3079 71.0258 19.7855 71.4384 19.0708C71.851 18.3562 71.9642 17.5073 71.7533 16.7095C71.5424 15.9117 71.0245 15.2297 70.3126 14.8124C62.5679 10.341 53.5643 8.55004 44.6981 9.71715C35.8318 10.8843 27.5984 14.9443 21.2748 21.2676C14.9511 27.5908 10.8906 35.824 9.72287 44.6901C8.55518 53.5563 10.3456 62.56 14.8165 70.3049C19.2873 78.0499 26.1888 84.1031 34.4505 87.526C42.7123 90.9489 51.8726 91.5502 60.5108 89.2364C69.149 86.9227 76.7825 81.8234 82.2273 74.7292C87.672 67.6351 90.6239 58.9426 90.6251 49.9999C90.6251 49.1711 90.2958 48.3762 89.7098 47.7902C89.1237 47.2041 88.3289 46.8749 87.5001 46.8749C86.6713 46.8749 85.8764 47.2041 85.2904 47.7902C84.7043 48.3762 84.3751 49.1711 84.3751 49.9999C84.3751 59.1167 80.7534 67.8601 74.3069 74.3067C67.8603 80.7533 59.1169 84.3749 50.0001 84.3749C40.8832 84.3749 32.1398 80.7533 25.6933 74.3067C19.2467 67.8601 15.6251 59.1167 15.6251 49.9999Z" fill="white"/>
         <path d="M95.9625 20.9625C96.2531 20.672 96.4836 20.3271 96.6408 19.9474C96.7981 19.5678 96.879 19.1609 96.879 18.75C96.879 18.3391 96.7981 17.9323 96.6408 17.5526C96.4836 17.173 96.2531 16.8281 95.9625 16.5375C95.672 16.247 95.3271 16.0165 94.9474 15.8593C94.5678 15.702 94.1609 15.6211 93.75 15.6211C93.3391 15.6211 92.9323 15.702 92.5526 15.8593C92.173 16.0165 91.8281 16.247 91.5375 16.5375L50 58.0813L33.4625 41.5375C33.172 41.247 32.8271 41.0165 32.4474 40.8593C32.0678 40.702 31.6609 40.6211 31.25 40.6211C30.8391 40.6211 30.4323 40.702 30.0526 40.8593C29.673 41.0165 29.3281 41.247 29.0375 41.5375C28.747 41.8281 28.5165 42.173 28.3593 42.5526C28.202 42.9323 28.1211 43.3391 28.1211 43.75C28.1211 44.1609 28.202 44.5678 28.3593 44.9474C28.5165 45.3271 28.747 45.672 29.0375 45.9625L47.7875 64.7125C48.0778 65.0036 48.4227 65.2345 48.8023 65.392C49.182 65.5495 49.589 65.6306 50 65.6306C50.4111 65.6306 50.8181 65.5495 51.1977 65.392C51.5774 65.2345 51.9223 65.0036 52.2125 64.7125L95.9625 20.9625Z" fill="white"/>
       </svg>
        <h1 className="text-[30px]  text-white ">Efficacité</h1>
      </div>
      <div className="h-[300px] w-[300px] rounded-[50%] bg-[#8FDFFF] flex flex-col items-center justify-center" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <svg width="78" height="92" viewBox="0 0 78 92" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M30.975 8.57006C31.3813 3.10321 36.925 -1.12411 42.9 0.267457L44.5313 0.653353C47.425 1.33159 49.9938 3.31954 50.8563 6.29561C52.2313 11.0667 54.1875 20.9772 51.2438 32.6651C52.1642 32.5465 53.0873 32.4471 54.0125 32.367C58.4688 31.9869 64.4438 31.946 69.7375 33.5948C72.975 34.6063 75.95 37.5765 77.2375 41.0379C78.3875 44.1485 78.2375 47.832 75.775 51.1706C76.1333 51.8722 76.4208 52.5797 76.6375 53.293C77.1188 54.8717 77.3438 56.6082 77.3438 58.298C77.3438 59.9877 77.1188 61.7243 76.6375 63.3029C76.3938 64.0923 76.075 64.8991 75.6375 65.6651C76.6938 67.9278 76.3063 70.4537 75.6188 72.3773C74.9112 74.2752 73.8813 76.054 72.5688 77.6454C72.9063 78.5341 73.0438 79.4696 73.0438 80.3642C73.0438 82.1475 72.4875 84.0185 71.4625 85.6966C69.375 89.1228 65.2313 91.9177 59.375 91.9177H37.5C33.7188 91.9177 30.8125 91.4441 28.3375 90.643C26.2089 89.9169 24.1751 88.9676 22.275 87.8131L21.975 87.6377C18.825 85.8427 15.7313 84.077 9.05 83.4163C4.2625 82.9368 0 79.3234 0 74.377V50.9893C0 46.0195 4.28125 42.6166 8.48125 41.5466C13.7875 40.1901 18.3188 36.9451 21.8063 33.3025C25.3063 29.6365 27.5188 25.8184 28.3 23.7194C29.5438 20.3574 30.525 14.721 30.975 8.57591V8.57006Z" fill="white"/>
       </svg>
        <h1 className="text-[30px]  text-white ">Disponibilité</h1>
      </div>
     </div>
    </section>
    </> 
  );
}


