import logo from './logo.svg';
import './App.css';
import { AuthProvaider } from './context/AuthContext';
import FormsFirebase from './componentes/FormsFirebase';

function App() {
  return (
    <AuthProvaider>
    <div className="App">
     
       <FormsFirebase/>
             
    
    </div>
    </AuthProvaider> 
  );
}

export default App;
