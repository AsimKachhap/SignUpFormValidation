
import './App.css';
import FormInput from './components/FormInput'

function App() {
  return (
    <div className="App">
    <form>
      <FormInput placeHolder="Username"/>
      <FormInput placeHolder="Full Name"/>
      <FormInput placeHolder="Email"/>
      <FormInput placeHolder="Password"/>
    </form>
    </div>
     
  );
}

export default App;
