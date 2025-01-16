"use client"

import React, { useEffect, useState } from "react"

import { axios } from "@/lib/axios"
import { useAuth } from "@/hooks/useAuth"

function Page() {
  useAuth({
    middleware: "auth",
  })

  const [switchboardCategories, setSwitchboardCategories] = useState([])
  const [caseDetails, setCaseDetails] = useState({
    description: "",
    switchboard_categories_id: "",
  })

  useEffect(() => {
    const getSwitchboardCategories = async () => {
      try {
        const { data } = await axios.get("/api/v1/switchboardCategories")
        setSwitchboardCategories(data.switchboardCategories)
      } catch (error) {}
    }

    getSwitchboardCategories()
  }, [])

  const handleCaseDetailsChange = (e) => {
    setCaseDetails({
      ...caseDetails,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("/api/v1/cases/createSelfCase", { ...caseDetails })

      if (response) {
        setCaseDetails({
          ...caseDetails,
          description: "",
          switchboard_categories_id: "",
        })
      }
    } catch (error) {
      console.error(error)
    }

    console.log(caseDetails)
  }

  return (
    <form action="#" className="flex flex-col w-2/5 gap-5 my-10 mx-auto" onSubmit={handleSubmit}>
      <div className="w-full">
        <p>Description:</p>
        <input
          id="description"
          placeholder="Description"
          className="p-2 outline-none text-black w-full"
          value={caseDetails.description}
          onChange={handleCaseDetailsChange}
        />
      </div>

      <div className="w-full">
        <p>Switchboard Category:</p>
        <select
          id="switchboard_categories_id"
          className="text-black outline-none w-full p-2"
          value={caseDetails.switchboard_categories_id}
          onChange={handleCaseDetailsChange}
        >
          <option value="">Choose Switchboard Category</option>
          {switchboardCategories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.category}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-indigo-500 p-2">
        Create
      </button>
    </form>

    // <form action="#" className="flex flex-col w-2/5 gap-5 my-10 mx-auto" onSubmit={handleLogin}>
    //   <div className="w-full">
    //     <p>Email:</p>
    //     <input
    //       id="email"
    //       placeholder="Email"
    //       className="p-2 outline-none text-black w-full"
    //       onChange={handleSetCredentials}
    //     />
    //   </div>
    //   <div className="w-full">
    //     <p>Password:</p>
    //     <input
    //       id="password"
    //       type="password"
    //       placeholder="Password"
    //       className="p-2 outline-none text-black w-full"
    //       onChange={handleSetCredentials}
    //     />
    //   </div>
    //   <button type="submit" className="bg-indigo-500 p-2">
    //     Login
    //   </button>
    // </form>
  )
}

export default Page
