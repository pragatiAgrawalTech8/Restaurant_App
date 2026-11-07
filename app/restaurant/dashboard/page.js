"use client"
import React from 'react'
import RestaurantHeader from "@/app/_components/RestaurantHeader"
import AddFoodItem from "@/app/_components/AddFoodItem"
import {useState} from "react"
import './../style.css'
const Dashboard = () => {
  const [addItem,setAddItem] = useState(false)
  return (
    <>
    <RestaurantHeader />
    <button onClick={()=>setAddItem(true)}>Add Food</button>
    <button onClick={()=>setAddItem(false)}>Dashboard</button>
    {
      addItem ? <AddFoodItem/> : <div>Dashboard</div>
    }
    
    
    </>
  )
}

export default Dashboard