import {useState} from 'react'
import { useRouter } from "next/navigation"
const RestaurantSignup = () => {
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [c_password, setc_password] = useState("")
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const router = useRouter()
  async function handleSignup(){
    console.log(email,password,c_password,name,city,address,contact);
    let response = await fetch("http://localhost:3000/api/restaurant",{
      method:"POST",
      body:JSON.stringify({email,password,name,city,address,contact})
    })
    response = await response.json()
    console.log(response);
    if(response.success){
      const {result} = response
      delete result.password
      localStorage.setItem("restaurantUser",JSON.stringify(result))
      router.push("/restaurant/dashboard")
    }
  }
  return (
     <div>
      <h1>Restaurant Signup</h1>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Email id" className="input-field"
         value={email} onChange={(event)=>setEmail(event.target.value)}/>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Enter password" className="input-field" 
        value={password} onChange={(event)=>setPassword(event.target.value)} />
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Confirm password" className="input-field" 
        value={c_password} onChange={(event)=>setc_password(event.target.value)}/>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Restaurant name" className="input-field" 
        value={name} onChange={(event)=>setName(event.target.value)}/>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="city name" className="input-field" 
        value={city} onChange={(event)=>setCity(event.target.value)} />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="address" className="input-field"
        value={address} onChange={(event)=>setAddress(event.target.value)} />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="phone Number" className="input-field" 
        value={contact} onChange={(event)=>setContact(event.target.value)} />
      </div>
      <button className="button" onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default RestaurantSignup