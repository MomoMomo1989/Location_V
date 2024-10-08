"use client";
import Link from "next/link";

export default function footer(){
  
return <>

<div className="h-[380px] w-[100vw] bg-[#2948A6] flex justify-center items-center ">
     <div className="h-[237px] w-[97%] bg-[#2948A6] grid grid-cols-2 ">
        <div className="grid grid-cols-2 ">
          <div className="navigation">
            <h1 className="mb-3 text-[#fff] text-[20px]">Navigation</h1>
            <div className="flex flex-col ml-4 ">
                <Link href={""} className="mb-1 text-[#fff] hover:text-[#998d8d]">Acceuil</Link>
                <Link href={""} className="mb-1 text-[#fff] hover:text-[#998d8d]">A propos</Link>
                <Link href={""} className="mb-1 text-[#fff] hover:text-[#998d8d]">Notre garage</Link>
                <Link href={""} className="mb-1 text-[#fff] hover:text-[#998d8d]">Nos Prix</Link>
                <Link href={""} className="mb-1 text-[#fff] hover:text-[#998d8d]">Contact</Link>
            </div>
          </div>
          <div className="Contact">

            <h1 className="mb-3 text-[#fff] text-[20px]">Contact</h1>
            <div className="flex flex-col ml-4 ">
                <h1 className="mb-1 text-[#fff]">xxx-xxx-xxxx</h1>
                <h1 className="mb-1 text-[#fff]">xxx-xxx-xxxx</h1>
                <h1 className="mb-1 text-[#fff]">Location@gmail.com</h1>
                <h1 className="mb-1 text-[#fff]">15 Rue amyoud Tizi-Ozou</h1>
                
            </div>

          </div>
        </div>
        <div className="">
            <form action="" className=" ">
                <div className="grid grid-cols-2">
                   <div className="1 flex flex-col">
                   <h1 className="mb-2 text-[#fff] text-[20px]">Posez votre question</h1>
                   <label  className="mt-1 text-[#fff]" htmlFor="">Nom && Prenom</label>
                   <input type="text" name="" id=""  className="h-8 w-[250px] rounded-[4px] " />
                   <label  className="mt-1 text-[#fff]" htmlFor="">E-Mail</label>
                   <input type="email" name="" id="" className="h-8 w-[250px] rounded-[4px] " />
                   </div>
                   <div className="2 flex flex-col">
                   <label  className="mt-10 text-[#fff]" htmlFor="">Votre message</label>
                   <textarea name="" id="" cols="1" rows="4" className="w-[350px] rounded-[4px]"></textarea>
                   <button type="submit" className="rounded-[10px] w-[166px] h-[40px] text-[#292929] bg-[#C2CAE7] mt-[25px] ml-[180px] hover:bg-[#34363d] hover:text-[#afa8a8] ">Envoyer</button>
                   </div>
                </div>
            </form>
        </div>
     </div>
</div>
</>
}