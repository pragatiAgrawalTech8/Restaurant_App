"use client"
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";
import {useState} from "react"
import "./style.css"
const Restaurantpage = () => {
  const [login,setLogin] = useState(true)
  return (
    <>
    <div>
      <div className="container">
        <RestaurantHeader />
      <h1> Restaurant Login Signup page</h1>
      {
        login?<RestaurantLogin />:<RestaurantSignup />
      }
      <button className="button-link" onClick={()=>setLogin(!login)}>{
      login?"Do not have account?Signup":"Have an Account. Login"
      
    }
    </button>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default Restaurantpage