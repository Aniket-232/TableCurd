import {useState} from "react";
import {Button} from "antd"
import Forms from "./Form";
import Tables from "./Table";
import { useNavigate } from "react-router-dom";

function Display(){
   let [data,setData]=useState([]);
   let [update,setUpdate]=useState({});
   let navigate=useNavigate()

   
    function handleForm(){
         navigate("/form",
           { state:{data:data,setData:setData}}
         );
    }
        // <Forms data={form} setForm={setForm} emp={data} setEmp={setData} />
      
      return (
        <> 
          <Button type="primary" onClick={handleForm}>Add</Button>
         
          {/* <Tables emp={data} setForm={setForm} setUpdate={setUpdate} /> */}
       
          </>
        // <Forms data={form} setForm={setForm} emp={data} setEmp={setData} update={update} />
   
  );
  
}

export default Display;