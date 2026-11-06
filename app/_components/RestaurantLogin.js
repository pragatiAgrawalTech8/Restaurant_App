import {useState} from 'react'

const RestaurantLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  function handleLogin(){
    if(!email || !password){
      setError(true)
    } else{
      setError(false)
    }
    console.log(email,password);
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