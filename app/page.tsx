"use client"
import CustomerHeader from "./_components/CustomerHeader"
import Footer from "./_components/Footer"
import {useEffect,useState} from "react"

export default function Home() {
const [locations,setLocations] = useState([])
const [selectedLocation,setSelectedLocation] = useState('')
const [showLocation , setShowLocation] = useState(false)

  useEffect(()=>{
    loadLocation()
  },[])

  const loadLocation=async()=>{
    let response = await fetch("http://localhost:3000/api/customer/locations")
    response = await response.json()
    if(response.success){
      setLocations(response.result)
    }
  }
   const handleListItem=(item)=>{
    setSelectedLocation(item)
    setShowLocation(false)
   }
  return (
    <>
    <CustomerHeader />
    <div className="main-page-banner">
    <h1>Restaurant App</h1>
    <div className="input-wrapper">
      <input type="text" onClick={()=>setShowLocation(true)} value={selectedLocation} className="select-input" placeholder="Select Place"/>
      <ul className="location-list">
        {
          showLocation && locations.map((item,key)=>(
            <li onClick={()=>handleListItem(item)} key={item.price}>{item}</li>
          ))
        }
      </ul>
      <input type="text"  className="search-input" placeholder="Enter food or restaurant name"/>
    </div>
    </div>
    <Footer />
    </>
  );
}
