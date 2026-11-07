import {useState} from 'react'

const AddFoodItem = () => {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [path,setPath] = useState("")
  const [description,setDescription] = useState("")

  function handleAddFoodItem(){
    console.log(name,path,price,description);
  }
  return (
    <div className="container">
    <div>AddFoodItem</div>
    <div className="input-wrapper">
      <input className="input-field" type="text" placeholder="Enter food name"
      value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="input-wrapper">
      <input className="input-field" type="text" placeholder="Enter price"
      value={price} onChange={(e)=>setPrice(e.target.value)} />
    </div>
    <div className="input-wrapper">
      <input className="input-field" type="text" placeholder="Enter Image path"
      value={path} onChange={(e)=>setPath(e.target.value)} />
    </div>
    <div className="input-wrapper">
      <input className="input-field" type="text" placeholder="Enter food Description"
      value={description} onChange={(e)=>setDescription(e.target.value)} />
    </div>
    <div className="input-wrapper">
      <button className="button" onClick={handleAddFoodItem}>Add Food Item</button>
    </div>
    
    </div>
  )
}

export default AddFoodItem