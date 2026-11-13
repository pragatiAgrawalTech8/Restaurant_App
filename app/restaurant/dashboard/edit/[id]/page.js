'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from "next/navigation"
const EditFoodItem = () => {
  const params = useParams() // Direct hook
  const id = params.id

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [path, setPath] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    handleLoadFoodItem()
  }, [])

  const handleLoadFoodItem = async () => {
    let response = await fetch("http://localhost:3000/api/restaurant/foods/edit/" + id)
    response = await response.json()
    if (response.success) {
      console.log(response.result);
      setName(response.result.name)
      setPrice(response.result.price)
      setPath(response.result.path)
      setDescription(response.result.description)
    }
  }

  async function handleEditFoodItem() {
    console.log(name, path, price, description);
    if (!name || !price || !path || !description) {
      setError(true)
      return false
    } else {
      setError(false)
    }
    let response = await fetch("http://localhost:3000/api/restaurant/foods/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, price, path, description })
    }
    )
     if (!response.ok) {
        alert("Server error: Data update nahi ho paya");
        return;
    }
    response = await response.json()
    if (response.success) {
      router.push("/restaurant/dashboard")
    } else{
      alert("Data is not updated please try again")
    }
  }
  return (
    <div className="container">
      <div>Update Food Item</div>
      <div className="input-wrapper">
        <input className="input-field" type="text" placeholder="Enter food name"
          value={name} onChange={(e) => setName(e.target.value)} />
        {
          error && !name && <span className="input-error">Please enter valid name</span>
        }
      </div>
      <div className="input-wrapper">
        <input className="input-field" type="text" placeholder="Enter price"
          value={price} onChange={(e) => setPrice(e.target.value)} />
        {
          error && !price && <span className="input-error">Please enter valid price</span>
        }
      </div>
      <div className="input-wrapper">
        <input className="input-field" type="text" placeholder="Enter Image path"
          value={path} onChange={(e) => setPath(e.target.value)} />
        {
          error && !path && <span className="input-error">Please enter valid path</span>
        }
      </div>
      <div className="input-wrapper">
        <input className="input-field" type="text" placeholder="Enter food Description"
          value={description} onChange={(e) => setDescription(e.target.value)} />
        {
          error && !description && <span className="input-error">Please enter valid description</span>
        }
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={handleEditFoodItem}>update Food Item</button>
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={() => router.push('/restaurant/dashboard')}>Back to Food Item List</button>
      </div>

    </div>
  )
}

export default EditFoodItem