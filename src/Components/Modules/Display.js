


import { useState, useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import {PlusOutlined} from "@ant-design/icons";
import Tables from "../Common/Table";

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
 
  
  const columns = [
      {
        title: "Code",
        dataIndex: "code",
        key: "code"
      },
      {
        title: "Name",
        dataIndex: "names",
        key: "name"
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "Activities",
        dataIndex: "activities",
        key: "activities"
      },
      {
        title: "Edit",
        dataIndex: "edit",
        key: "edit",
        render: (text, record) =>
          record.edit ? (
            <Button
              type="primary"
              key={record.code}
              onClick={() => handleUpdate(record)}
            >
              Edit
            </Button>
          ) : (
            <div />
          )
      }
    ];

    function handleUpdate(record) {
      navigate("/form", {
        state: {
          update: record
        }
      });
    }

    const emp2 = empData?.map((d) => ({
      key: d.code,
      code: d.code,
      names: d.name,
      email: d.email,
      activities: d.activities,
      edit: d.edit
    }));

  return (
    <>
    <div className="button">
      <Button type="primary" onClick={handleForm} icon={<PlusOutlined/>}>
        Add
      </Button>
      </div>
      <Tables emp2={emp2} columns={columns} />
      
      
    </>
  );
}

export default Display;
