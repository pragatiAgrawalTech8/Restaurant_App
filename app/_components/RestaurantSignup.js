import React from 'react'

const RestaurantSignup = () => {
  return (
     <div>
      <h1>Restaurant Signup</h1>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Email id" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Enter password" className="input-field" />
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Confirm password" className="input-field" />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Restaurant name" className="input-field" />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="city name" className="input-field" />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="address" className="input-field" />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="phone Number" className="input-field" />
      </div>
      <button className="button">Signup</button>
    </div>
  )
}

export default RestaurantSignup