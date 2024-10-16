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

type Props = {
    params : string
};

export default function reservation({params}: Props){

const [produits, setProduits] = useState([]);
const [load , setLoad] = useState(false);
const [details , setDetails] = useState([]);


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
const form= useForm({
    resolver : zodResolver(),
    mode : "onChange",
})    
const onSubmit = ()=>{}

return <>

<div>
    {load ? (
      details.length > 0 ? (
        <div className="text-center">
          <h1 className="text-[#fff] text-[25px] mb-10">
            Réserver un véhicule: {details[0].title}
          </h1>
          <img src={details[0].image} alt={details[0].title} className="w-[80px] h-[100px] mb-5" /> {/* Afficher l'image */}
          <p className="text-[#181717]">Catégorie: {details[0].category}</p>
          <p className="text-[#333131]">Description: {details[0].description}</p>
          <p className="text-[#353333]">Prix: ${details[0].price}</p>
          <p className="text-[#333131]">Note: {details[0].rating.rate} ({details[0].rating.count} avis)</p> {/* Afficher le rating */}
          {/* Tu peux ajouter un formulaire de réservation ici */}
        </div>
      ) : (
        <h1 className="text-[#fff] text-[25px] mb-10">Aucun véhicule sélectionné</h1>
      )
    ) : (
      <h1>Chargement...</h1>
    )}
  </div>


<div className="h-[80vh] w-[100vw] flex justify-center items-center flex-col ">
    <div className="flex mb-10 ">
        <div className="h-[8px] w-[100px] bg-[#2948A6] rounded-[10px] mr-5 "></div>
        <div className="h-[8px] w-[100px] bg-[#D2C5EB] rounded-[10px] mr-5 "></div>
        <div className="h-[8px] w-[100px] bg-[#D2C5EB] rounded-[10px] "></div>
    </div>
   <div className="h-[350px] w-[50%] bg-[#2948A6] flex flex-col justify-center items-center rounded-[10px]">
        <div className="">
            {details.length > 0 ?
                (<h1 className="text-[#fff] text-[25px] mb-10 ">Réserver un vehicule {details[0].category}</h1> 
                <img src={details[0].image} alt={details[0].title} className="w-[80px] h-[100px] mb-5" />s):(<h1>chargement</h1> )
            }
        </div>
        {/* <div className="flex ">
            <div className="mr-5 ">
                <label htmlFor="" className="text-[#fff] flex flex-col ">Du</label>
                <input type="date" name="" value="" id="" className="h-8 w-[240px] "/>
            </div>
            <div className="">
                <label htmlFor="" className="text-[#fff] flex flex-col">Au</label>
                <input type="date" name="" value="" id="" className="h-8 w-[240px] " />
            </div>
        </div> */}
        {/* <div className="w-[100%] flex justify-center items-center mt-9"><button type="submit" className="h-9 w-[350px] bg-[#C2CAE7] rounded-[10px] ">Valider</button></div> */}
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
                <Input type="Date" className="h-8 w-[240px] " {...field} />
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
</div>
</>
}
