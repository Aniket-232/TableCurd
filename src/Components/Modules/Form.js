



import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Checkbox
} from "antd";

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } }
};

const Forms = () => {
  const location = useLocation();
  const state = location.state || {};
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    if (state.update) {
      form.setFieldsValue({
        Code: state.update.code,
        Name: state.update.names,
        Email: state.update.email,
        Activities: state.update.activities,
        remember: state.update.edit
      });
    }
  }, [state.update]);

  function handleChange(values) {
    const updatedRecord = {
      id: Date.now(), 
      code: values.Code,
      name: values.Name,
      email: values.Email,
      activities: values.Activities,
      edit: values.remember
    };

    let existing = JSON.parse(localStorage.getItem("employees")) || [];

    
    if (state.update) {
      existing = existing.map(emp =>
        emp.code === state.update.code ? updatedRecord : emp
      );
    } else {
      existing.push(updatedRecord);
    }

    localStorage.setItem("employees", JSON.stringify(existing));
    navigate("/");
  }

  return (
    <div  className="form">
    <Form 
      {...formItemLayout}
      form={form}
      variant="filled"
      style={{ maxWidth: 600 }}
      initialValues={{ variant: "filled" }}
      onFinish={handleChange}
     
    >
      <Form.Item
        label="Code"
        name="Code"
        rules={[{ required: true, message: "Please input!" }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Name"
        name="Name"
        rules={[{ required: true, message: "Please input!" }]}>
        <Input style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          { required: true, message: "Enter Email" },
          { type: "email", message: "Enter a valid email address" }
        ]}>
        <Input placeholder="Enter Email" />
      </Form.Item>

      <Form.Item
        label="Activities"
        name="Activities"
        rules={[{ required: true, message: "Please input!" }]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 6, span: 16 }}>
        <Checkbox>Edit</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Forms;
