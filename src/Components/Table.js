import { Space, Table, Tag ,Button} from 'antd';

function Tables({emp,setForm,setUpdate}){
    const emp2 = emp.map((d) =>{
        console.log(d.edit);
       return({

            key: d.code,
            code: d.code,
            names: d.name,
            email: d.email,
            activities: d.activities,
            edit:d.edit
          });
    }) 

    function handleUpdate(e){
          console.log(e);
          setForm("update")
          setUpdate(e)

    }
      
      const columns = [
        {
          title: 'code',
          dataIndex: 'code',
          key: 'code',
        },
        {
          title: 'Name',
          dataIndex: 'names',
          key: 'name',
        },
        {
          title: 'email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'activities',
          dataIndex: 'activities',
          key: 'activities',
        },{
            title:'Edit',
            dataIndex:'edit',
            key:'edit',
            render:(text,record,index)=>{

                 if(record.edit){
                    return <Button type="primary" key={record.code} disabled={!record.edit} onClick={(e)=>{handleUpdate(record)}} >  
                Edit
              </Button>
                 }else{
                    return <div></div>
                 }
            }
            
        }
      ];
      
      return (<Table dataSource={emp2} columns={columns}  />)
}

export default Tables;