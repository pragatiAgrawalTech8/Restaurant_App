import {useState} from 'react'
import {useRouter} from "next/navigation"
const RestaurantLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  async function handleLogin(){
    if(!email || !password){
      setError(true)
    } else{
      setError(false)
    }
   
    let response = await fetch("http://localhost:3000/api/restaurant",{
      method:"POST",
      body:JSON.stringify({email,password,login:true})
    })
    response=await response.json()
    if(response.success && response.result){
  const {password, ...user} = response.result
  localStorage.setItem("restaurantUser", JSON.stringify(user))
  router.push("/restaurant/dashboard")
} else {
  alert("login failed")
}
  }
  return (
    <div>
      <h1>RestaurantLogin</h1>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Email id" className="input-field"
        value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {
          error && !email && <span className="input-error">Enter valid email</span>
        }
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Enter password" className="input-field"
        value={password} onChange={(e)=>setPassword(e.target.value)} />
        {
          error && !password && <span className="input-error">Enter valid password</span>
        }
      </div>
      <button className="button" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default RestaurantLogin