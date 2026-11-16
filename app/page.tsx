"use client"
import CustomerHeader from "./_components/CustomerHeader"
import Footer from "./_components/Footer"
import { useEffect, useState } from "react"

export default function Home() {
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('')
  const [showLocation, setShowLocation] = useState(false)
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    loadLocation()
    loadRestaurant()
  }, [])

  const loadLocation = async () => {
    try {
      let response = await fetch("http://localhost:3000/api/customer/locations")
      if (!response.ok) throw new Error("Location API fail");
      response = await response.json()
      if (response.success) {
        setLocations(response.result)
      }
    } catch (error) {
      console.log("Location Error:", error);
    }
  }

  const loadRestaurant = async () => {
    try {
      let response = await fetch("http://localhost:3000/api/customer")
      if (!response.ok) throw new Error("Restaurant API fail");
      response = await response.json()
      if (response.success) {
        setRestaurants(response.result)
      }
    } catch (error) {
      console.log("Restaurant Error:", error);
    }
  }

  const handleListItem = (item) => {
    setSelectedLocation(item)
    setShowLocation(false)
  }
console.log(restaurants);
  return (
    <>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Restaurant App</h1>
        <div className="input-wrapper">
          <input 
            type="text" 
            onClick={() => setShowLocation(true)} 
            value={selectedLocation} 
            className="select-input" 
            placeholder="Select Place" 
            readOnly
          />
          <ul className="location-list">
            {
              showLocation && locations.map((item, index) => (
                <li onClick={() => handleListItem(item)} key={index}>{item}</li>
              ))
            }
          </ul>
          <input type="text" className="search-input" placeholder="Enter food or restaurant name" />
        </div>
      </div>
      <div className="restaurant-list-container">
        {
          restaurants.map((item)=>(
            <div key={item._id} className="restaurant-wrapper">
              <div className="heading-wrapper">
                  <h3>{item.name}</h3>
                  <h5>Contact:{item.contact}</h5>
              </div>
              <div className="address-wrapper">
                <div>{item.city}</div>
                <div className="address">{item.address}, Email:{item.email}</div>
              </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  );
}