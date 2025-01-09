"use client"

import { useAuth } from "@/hooks/useAuth"
import useEcho from "@/hooks/useEcho"
import { useEffect } from "react"

export default function Home() {
  const { user } = useAuth()
  const echo = useEcho()

  useEffect(() => {
    if (echo) {
      console.log(echo)
    }
  }, [])

  console.log(user)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
    </div>
  )
}
