import React from 'react'

const RestaurantLogin = () => {
  return (
    <div>
      <h1>RestaurantLogin</h1>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Email id" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Enter password" className="input-field" />
      </div>
      <button className="button">Login</button>
    </div>
  )
}

export default RestaurantLogin