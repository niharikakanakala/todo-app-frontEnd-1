import React, { useState } from "react";
//import "./TodoInput.css";
import "antd/dist/antd.css";
import { DatePicker, Space, Form, Input, Button } from "antd";

const TodoInput = ({ createTodo }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  //form
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const handleSubmit = (e) => {
    try {
      console.log("eeeeee", e);
      createTodo(task, time);
      setTask("");
      setTime("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        onFinish={handleSubmit}
        //onFinishChange={(e) => setTask(e.target.value)}
        value={task}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="ADD TODO">
          <Input
            placeholder="whats your plan for today?"
            className="TodoInput"
            id="task"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="DUE DATE">
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />
          </Space>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            ADD TODO
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default TodoInput;
