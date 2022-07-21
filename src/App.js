import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput'

function App() {
  const[values, setValues]=useState({
    username:"",
    errorMessage:"",
    email:"",
    password:"",
    confirmpassword:"",
  });

  const inputs =[
    {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 characters long with no special characters",
    label:"Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"Invalid email address!",
    label:"Email",
    required: true
  },
  {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Date of Birth",
    label:"Birthday"
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8-20 characters long and should include 1 letter, 1 number and 1 special character",
    label:"Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true
  },
  {
    id:5,
    name:"confirmpassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"Passwords don't match!",
    label:"Confirm Password",
    pattern: values.password,
    required: true
  },
 ];

 const submitHandeler= (e)=>{
  e.preventDefault();
 };
  
  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  };

console.log(values);
  return (
    <div className="App">
    <form onSubmit={submitHandeler}>
    <h1>Sign Up</h1>
    {inputs.map((inputs)=>(
      <FormInput 
      key={inputs.id} 
      {...inputs} 
      value = {values[inputs.name]} 
      onChange={onChange}  />
    ))}
      
      
      <button>Submit</button>
    </form>
    </div>
     
  );
}

export default App;
