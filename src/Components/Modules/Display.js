


import { useState, useEffect } from "react";
import { Button } from "antd";
import Tables from "./Table";
import { useNavigate } from "react-router-dom";
import {PlusOutlined} from "@ant-design/icons";

function Display() {
  const [empData, setEmpData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmpData(data);
  }, []);

  function handleForm() {
    navigate("/form");
  }

  return (
    <>
    <div className="button">
      <Button type="primary" onClick={handleForm} icon={<PlusOutlined/>}>
        Add
      </Button>
      </div>
      <Tables emp={empData} />
    </>
  );
}

export default Display;