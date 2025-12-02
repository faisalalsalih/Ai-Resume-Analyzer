import React from 'react'
import type { Route } from "./+types/auth"


export function meta({}: Route.MetaArgs){
    return [
        {title: "Resumecam | Auth"},
        {name: 'description', content: "Log into Your Account"}
    ]
}



const auth = () => {
  return (
    <>
      <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        
      </main>
    </>
  )
}

export default auth
