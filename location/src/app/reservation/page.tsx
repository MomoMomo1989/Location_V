"use client";
import {
    Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
 } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "./_schemas/reservation-form-schema";


export default function reservation(){

const form= useForm({
    resolver : zodResolver(formSchema),
    mode : "onChange",
})    
const onSubmit = ()=>{}

return <>
<div className="h-[80vh] w-[100vw] flex justify-center items-center flex-col ">
    <div className="flex mb-10 ">
        <div className="h-[8px] w-[100px] bg-[#2948A6] rounded-[10px] mr-5 "></div>
        <div className="h-[8px] w-[100px] bg-[#D2C5EB] rounded-[10px] mr-5 "></div>
        <div className="h-[8px] w-[100px] bg-[#D2C5EB] rounded-[10px] "></div>
    </div>
   <div className="h-[350px] w-[50%] bg-[#2948A6] flex flex-col justify-center items-center rounded-[10px]">
        <div className=""><h1 className="text-[#fff] text-[25px] mb-10 ">Réserver un vehicule</h1></div>
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
          <Button type="submit" className="h-9 w-[350px] bg-[#C2CAE7] rounded-[10px] ">Valider</Button>
        </div>
      </form>
    </Form>
   </div>
</div>
</>
}