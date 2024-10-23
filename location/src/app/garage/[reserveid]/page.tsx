"use client";
import {
    Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
 } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState,useEffect } from "react";
import { useRouter } from 'next/router';
import { formSchema } from "../_schemas/reservation-form";
import { formInputType } from "../_schemas/reservation-form";
import  Valiationresult  from "../../../components/valiation-result";
import { Checkbox } from "@/components/ui/checkbox"

type Props = {
    params : string
};

export default function reservation({params}: Props){

const [produits, setProduits] = useState([]);
const [load , setLoad] = useState(false);
const [details , setDetails] = useState([]);
const [formReserv, setFormReserv] = useState({});
const [togle, setTogle] = useState(false);
const [panier, setPanier]=useState({
  nbrJr : 0,
  prixT : 0.0,
});
const [validationF, setValidationF] = useState(false);
useEffect (()=>{
    const vehicleInfo = async ()=>{
    const data = await fetch(`https://fakestoreapi.com/products/`);
    const donnee = await data.json();
    setProduits(donnee);
    setLoad(true)
    }   
    vehicleInfo();
},[])

const filtring = ()=>{
    const newfiltring = produits.filter((produit)=> produit.id.toString() == params.reserveid )
    // console.log(newfiltring)
    setDetails(newfiltring);
}

useEffect(() => {
    if (produits.length > 0) {
      filtring();
    }
  }, [produits]);

  useEffect(() => {
    if (details.length > 0) {
      console.log(details)
    }
  }, [details]);

// console.log(produits)
const form= useForm<formInputType>({
    resolver : zodResolver(formSchema),
    mode : "onChange",
}) 
const form2= useForm<formInputType>({
  resolver : zodResolver(formSchema),
  mode : "onChange",
})    
const onSubmit = (data : formInputType )=>{
  setFormReserv(data);
  setTogle(!togle);
}
useEffect(() => {
  const dateDu = new Date(formReserv.DateDu);
  const dateAu = new Date(formReserv.DateAu);
  const diffIn = dateAu - dateDu;
  const diffInDays = diffIn / (1000 * 60 * 60 * 24);
  if (details.length > 0) {
    const prixTotal = diffInDays*details[0].price;
    setPanier({
      nbrJr: diffInDays,
      prixT: prixTotal
    });
  } else {
    console.log("blabla")
  }
}, [formReserv])

const retour = ()=>{
  setTogle(!togle)
}
const attributvalchek = (e: React.ChangeEvent<HTMLInputElement>)=>{
  setValidationF(e.target.checked)
}
const validationFinal = ()=>{
  if (validationF== true) {
    console.log("valider avec succes")
  } else {
    console.log("accepter la politique de ...")
  }
}
// const tes1 = ()=>{
//   console.log(formReserv)
// }

return <>

<div className="h-[80vh] w-[100vw] flex justify-center items-center flex-col ">
     <div className="flex mb-10 ">
        <div className={`${togle ? "bg-[#D2C5EB]" : "bg-[#2948A6]"} ""h-[8px] w-[100px]  rounded-[10px] mr-5 "" `}></div>
        <div className={`${togle ? "bg-[#2948A6]" : "bg-[#D2C5EB]"} ""h-[8px] w-[100px]  rounded-[10px] mr-5 "" `}></div>
        <div className="h-[8px] w-[100px] bg-[#D2C5EB] rounded-[10px] "></div>
    </div>
    <div className="h-[350px] w-[50%] bg-[#2948A6] flex flex-col justify-center items-center rounded-[10px]">
        <div className="">
            {details.length > 0 ?
                ( <div className="flex flex-col justify-center items-center mb-6">
                  <div className="flex justify-center items-center ">
                  <h1 className="text-[#fff] text-[25px]  mr-7">Réserver un produit :  {details[0].category}</h1> 
                  <img src={details[0].image} alt={details[0].title} className="w-[80px] h-[100px] " />
                </div>
                <p className="text-[#ff9090] text-[15px] mb-2 mt-[-20px]">Prix: {details[0].price} $/Jr</p>
                </div> 
                ):(<h1>chargement</h1> )
            }
        </div>     
                     <div className={`${togle ? "hidden": "visible" }`} >
                     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="flex ">
      <div className="mr-5 ">
        <FormField
          control={form.control}
          name="DateDu"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#fff]">Date Du</FormLabel>
              <FormControl>
                <Input type="date" className="h-8 w-[240px] " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="">
        <FormField
          control={form.control}
          name="DateAu"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#fff]">Date Au</FormLabel>
              <FormControl>
                <Input type="Date" className="h-8 w-[240px] " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        </div>
        <div className="w-[100%] flex justify-center items-center mt-9">
          <Button type="submit" className="h-9 w-[350px] bg-[#C2CAE7] rounded-[10px] text-[#2c2c2c] hover:text-[#e2e2e2] ">Valider</Button>
        </div>
      </form>
          </Form>
                     </div>
                       <div className={`${togle ? "visible": "hidden" } "w-[100%] " `}>
                          { panier.prixT  > 0 ? 
                          (
                            <div className="flex flex-col items-center justify-center">
                               <div className="flex items-center justify-center">
                                   <h1 className="text-[18px] text-[#fff] mr-5 ">Le prix total pour </h1>
                                   <h1 className="text-[20px] text-[#ff8787] mr-2">{panier.nbrJr}</h1>
                                   <h1 className="text-[20px] text-[#fff] "> Jr</h1>
                               </div>
                               <div className=" flex items-center justify-center">
                                    <h1 className="text-[18px] text-[#fff] mr-5">est de :  </h1>
                                    <h1 className="text-[20px] text-[#ff8787] mr-2">{panier.prixT}</h1>
                                    <h1 className="text-[20px] text-[#fff] ">$</h1>
                               </div>
                            </div>
                            
                            
                          ) : (<h1>chargement</h1>)

                          }
                          <div className="flex items-center justify-start border-[1px] border-[#fff] p-3 ">
                            <div className="items-top flex space-x-2">
                                <Checkbox id="terms1" checked={validationF} onChange={attributvalchek} />
                                <div className="grid gap-1.5 leading-none">
                                  <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Acceptez pour valider
                                  </label>
                                  <p className="text-sm text-[#bdbdbd]">
                                      Vous acceptez nos conditions d'utilisation et notre politique de paiement .
                                  </p>
                                </div>
                              </div>
                          </div>
                          <Form {...form2}>
                                 <div className="mt-4 flex justify-end">
                                   <Button type="submit" className="h-9 w-[100px] bg-[#C2CAE7] rounded-[10px] text-[#2c2c2c] hover:text-[#e2e2e2] mr-7 " onClick={retour}>Retour</Button>
                                   <Button type="submit" className="h-9 w-[100px] bg-[#C2CAE7] rounded-[10px] text-[#2c2c2c] hover:text-[#e2e2e2] " onClick={validationFinal} >Valider</Button>
                                 </div>
                          </Form>
                     </div>
   </div>
</div>
</>
}
