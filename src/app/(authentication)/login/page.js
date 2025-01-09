"use client"

import React, { useEffect } from "react"

import { axios } from "@/lib/axios"

function LoginPage() {
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await axios.post("/login", {
          email: "brando@mail.com",
          password: "secret123",
        })

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMe()
  }, [])
  return <div>LoginPage</div>
}

export default LoginPage
