"use client"
import Link from "next/link"
import {useEffect,useState} from "react"
import {useRouter,usePathname} from "next/navigation"

const RestaurantHeader = () => {
    const [details,setDetails] = useState(null)
    const router = useRouter()
    const pathName= usePathname()
    useEffect(() => {
    const data = localStorage.getItem("restaurantUser")
    let user = null
    try {
        user = data ? JSON.parse(data) : null
    } catch (e) {
        user = null
    }

    if (user && user.name) {
        setDetails(user)
        if (pathName === "/restaurant") router.push("/restaurant/dashboard")
    } else {
        setDetails(null)
        if (pathName === "/restaurant/dashboard") router.push("/restaurant")
    }
}, [pathName])
    const logout = ()=>{
        localStorage.removeItem("restaurantUser")
        setDetails(null)
        router.push("/restaurant")
    }
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img style={{ width: 100 }} src="/foodDelivery.jpg" alt="" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {
                    details && details.name?
                    <>
                    <li><button onClick={logout}>Logout</button></li>
                    <li><Link href="/">Profile</Link></li>
                    </>
                    
                    : <li><Link href="/">Login/Signup</Link></li>
                }
                
                
            </ul>
        </div>
    )
}

export default RestaurantHeader