import "./formInput.css"

import React from 'react'

const FormInput = (props) => {
  return (
    <div className="formInput">
        <label>Username</label>
    <input placeholder={props.placeHolder}
    onChange={(e)=>  props.setUsername(e.target.value)
        } />
    </div>
    
    
  )
}

export default FormInput