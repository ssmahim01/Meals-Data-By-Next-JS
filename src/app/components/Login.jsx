"use client"
import { signIn } from "next-auth/react"

export default function Login() {
  return (
         <button onClick={() => signIn()} className="px-4 py-1 rounded-md hover:bg-gray-100 hover:text-gray-800 border border-gray-300 font-bold">Login</button>
  )
}
