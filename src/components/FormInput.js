import "./formInput.css"

import React from 'react'

const FormInput = (props) => {
  return (
    <div classNaame="formInput">
        <label>Username</label>
    <input placeHolder={props.placeHolder}/>
    </div>
    
    
  )
}

export default FormInput