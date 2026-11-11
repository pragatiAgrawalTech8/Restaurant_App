import {useState} from 'react'

const AddFoodItem = (props) => {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [path,setPath] = useState("")
  const [description,setDescription] = useState("")
  const [error,setError] = useState(false)

  async function handleAddFoodItem(){
    console.log(name,path,price,description);
    if(!name || !price || !path || !description){
      setError(true)
      return false
    } else{
      setError(false)
    }
    let restro_id
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
    if(restaurantData){
      restro_id = restaurantData._id
    }
    let response = await fetch("http://localhost:3000/api/restaurant/foods",{
      method:"POST",
      body:JSON.stringify({name,price,path,description,restro_id})
    })
    response = await response.json()
    if(response.success){
      alert("Food item added")
      props.setAddItem(false)
    } else{
      alert("Food item not added")

    }
  }
  return (
    <div className="container">
    <div>AddFoodItem</div>
    <div className="input-wrapper">
      <input className="input-field" type="text" placeholder="Enter food name"
      value={name} onChange={(e)=>setName(e.target.value)} />
      {
        error && !name && <span className="input-error">Please enter valid name</span>
      }
    </div>
    <div className="input-wrapper">
      <input className="input-field" type="text" placeholder="Enter price"
      value={price} onChange={(e)=>setPrice(e.target.value)} />
      {
        error && !price && <span className="input-error">Please enter valid price</span>
      }
    </div>
    <div className="input-wrapper">
      <input className="input-field" type="text" placeholder="Enter Image path"
      value={path} onChange={(e)=>setPath(e.target.value)} />
      {
        error && !path && <span className="input-error">Please enter valid path</span>
      }
    </div>
    <div className="input-wrapper">
      <input className="input-field" type="text" placeholder="Enter food Description"
      value={description} onChange={(e)=>setDescription(e.target.value)} />
      {
        error && !description && <span className="input-error">Please enter valid description</span>
      }
    </div>
    <div className="input-wrapper">
      <button className="button" onClick={handleAddFoodItem}>Add Food Item</button>
    </div>
    
    </div>
  )
}

export default AddFoodItem