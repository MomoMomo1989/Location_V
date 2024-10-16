import React from 'react'
import Link from 'next/link'
export default function notfound() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="">not found</div>
        <Link href={"/"}>Page d'acueil</Link>
    </div>
  )
}
