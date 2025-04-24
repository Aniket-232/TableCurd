import logo from './logo.svg';
import './App.css';
import Display from "./Components/Display";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from "./Components/Form";


function App() {
  return (
    <> 
      <BrowserRouter >
       <Routes>
          <Route path="/" element={<Display />}  />
          <Route path="form" element={<Form />}  />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
