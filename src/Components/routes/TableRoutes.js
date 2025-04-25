

import {BrowserRouter,Routes,Route} from "react-router-dom"
import DisplayPage from "../pages/DisplayPage";
import FormPage from "../pages/FormPage";

function TableRoutes(){
    return (
        <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<DisplayPage />}  />
          <Route path="form" element={<FormPage />}  />
       </Routes>
      </BrowserRouter>
        </>
    )
}

export default TableRoutes;