import {useEffect,useState}from 'react'
import {useRouter} from "next/navigation"
const FoodItemList = () => {
    const [foodItem,setFoodItem] = useState([])
    const router = useRouter()
    useEffect(()=>{
        loadFoodItem()
    },[])
    const loadFoodItem = async()=>{
        const restaurantData = JSON.parse(localStorage.getItem('restaurantUser'))
        if(!restaurantData) return
        let resto_id = restaurantData._id
        let response = await fetch("http://localhost:3000/api/restaurant/foods/"+resto_id)
        response = await response.json()
        if(response.success){
            setFoodItem(response.result)
        } else{
            alert("Food item list not loading")
        }
        console.log(response);
    }
    const deleteFoodItem = async(id)=>{
        let response = await fetch("http://localhost:3000/api/restaurant/foods/"+id,{
            method:"delete"
        })
            response = await response.json()
            if(response.success){
                loadFoodItem()
            } else{
                alert("food item not deleted")
            }
    }
  return (
    <div>
        <h1>FoodItemList</h1>
        <table>
            <thead>
                <tr>
                    <td>S.N</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                    <td>Operation</td>
                </tr>
            </thead>
            <tbody>
                {
                foodItem.map((item,key)=>(
                 <tr key={key}>
                    <td>{key+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img src={item.path} alt={item.name} width="50" height="50" /></td>
                    <td><button onClick={()=>deleteFoodItem(item._id)}>Delete</button>
                    <button onClick={()=>router.push('/restaurant/dashboard/edit/'+item._id)}>Edit</button></td>
                </tr>
                ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default FoodItemList