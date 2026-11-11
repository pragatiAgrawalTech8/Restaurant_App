import {useEffect,useState}from 'react'

const FoodItemList = () => {
    const [foodItem,setFoodItem] = useState([])
    useEffect(()=>{
        loadFoodItem()
    },[])
    const loadFoodItem = async()=>{
        const restaurantData = JSON.parse(localStorage.getItem('restaurantUser'))
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
                    <td><button>Delete</button><button>Edit</button></td>
                </tr>
                ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default FoodItemList