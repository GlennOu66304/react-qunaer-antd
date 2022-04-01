import React from 'react'
import styles from "./SignUp.module.css";
import { Form, Input, Button, Checkbox } from "antd";
import {useHistory} from 'react-router-dom'
import axios from 'axios';
export const RegisterForm : React.FC = ()=>{
    const history = useHistory()
    const onFinish = async (values: any) => {
        // 66789@qq.com
        // 123456
        try {
          await  axios.post("http://123.56.149.216:8089/auth/register",{
                email:values.username,
                password:values.password,
                confirmPassword:values.confirm

            })

            history.push('/login')
        } catch (error) {
            alert("注册失败")
            
        }
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
      };
    return (

        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles["register-form"]}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
              label="ConfirmPassword"
              name="confirm"
              rules={[
                { required: true, message: "Please input your password!" },
                // Add the rules to check the first passord and second password if they are same

                // 1.get the filedvalue as paramaters
                ({ getFieldValue }) => ({
                  // 2. validate the first passord and second value funcion
                  validator(_, value) {
                    //   // 3.if else promise check the logic

                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve(); // need to add () at the end of the resolve
                    }

                    return Promise.reject("确认密码不一致");
                  },
                }),
              ]}
            >
             <Input.Password />
            </Form.Item>,

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
}