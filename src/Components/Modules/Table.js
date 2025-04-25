


import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Tables({ emp }) {
  const navigate = useNavigate();

  const emp2 = emp?.map((d) => ({
    key: d.code,
    code: d.code,
    names: d.name,
    email: d.email,
    activities: d.activities,
    edit: d.edit
  }));

  function handleUpdate(record) {
    navigate("/form", {
      state: {
        update: record
      }
    });
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

  return <Table dataSource={emp2} columns={columns} />;
}

export default Tables;
