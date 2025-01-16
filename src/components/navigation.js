import Link from "next/link"
import React from "react"
import { useAuth } from "@/hooks/useAuth"

function Navigation() {
  const { logout } = useAuth({ middleware: "auth" })

  return (
    <header className=" w-full flex justify-end">
      <nav className=" flex flex-end">
        <Link href="#" onClick={logout}>
          Logout
        </Link>
      </nav>
    </header>
  )
}

export default Navigation
