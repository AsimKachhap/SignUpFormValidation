import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput'

function App() {
  const [username, setUsername]= useState("");
  return (
    <div className="App">
    <form>
      <FormInput placeHolder="Username" setUsername={setUsername} />
      <FormInput placeHolder="Full Name"/>
      <FormInput placeHolder="Email"/>
      <FormInput placeHolder="Password"/>
    </form>
    </div>
     
  );
}

export default App;
