import React from 'react';
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
  Checkbox

} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const Forms = ({}) => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  let location=useLocation();
  
  useEffect(() => {
    if (update) {
      form.setFieldsValue({
        Code: update.code,
        Name: update.names,
        Email: update.email,
        Activities: update.activities,
        remember: update.edit,
      });
    }
  }, [update]);

  function handleChange(values){
    
    const updatedRecord = {
        code: values.Code,
        name: values.Name,
        email: values.Email,
        activities: values.Activities,
        edit: values.remember,
      };
      
      const exists = emp.some((item) => item.code === values.Code);
      
      if (exists) {
        
        const updatedList = emp.map((item) =>
          item.code === values.Code ? updatedRecord : item
        );
        setEmp(updatedList);
      } else {
        
        setEmp([...emp, updatedRecord]);
      }
        
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    onFinish={handleChange} >
     

      <Form.Item label="Code" name="Code" rules={[{ required: true, message: 'Please input!' }]}>
        <InputNumber  />
      </Form.Item>

      <Form.Item
        label="Name"
        name="Name"
       
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
           label="Email"
            name="Email"
           
            rules={[
              { required: true, message: 'Enter Email' },
              { type: 'email', message: 'Enter a valid email address' },
            ]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
      

      <Form.Item
        label="Activities"
        name="Activities"
       
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}
      >
      <Checkbox>Edit</Checkbox>
    </Form.Item>



      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Forms;