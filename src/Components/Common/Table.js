



import { Table, Button } from "antd";


function Tables({emp2,columns}) {

  return <Table dataSource={emp2} columns={columns} />;
}

export default Tables;
