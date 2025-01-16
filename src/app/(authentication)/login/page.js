"use client"

import React, { useState } from "react"

import { useAuth } from "@/hooks/useAuth"

function LoginPage() {
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  })
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const handleSetCredentials = (e) => {
    console.log(e.target.value)
    setCredentials({ ...credentials, [e.target.id]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await login({ setErrors, setStatus, ...credentials })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form action="#" className="flex flex-col w-2/5 gap-5 my-10 mx-auto" onSubmit={handleLogin}>
      <div className="w-full">
        <p>Email:</p>
        <input
          id="email"
          placeholder="Email"
          className="p-2 outline-none text-black w-full"
          onChange={handleSetCredentials}
        />
      </div>
      <div className="w-full">
        <p>Password:</p>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="p-2 outline-none text-black w-full"
          onChange={handleSetCredentials}
        />
      </div>
      <button type="submit" className="bg-indigo-500 p-2">
        Login
      </button>
    </form>
  )
}

export default LoginPage
