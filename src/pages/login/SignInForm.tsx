import React from "react";
import styles from "./SignIn.module.css";
import { Form, Input, Button, Checkbox } from "antd";
import { useSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"; //reouter to the hom page
import { signIn } from "../../redux/user/slice";
export const SignInForm: React.FC = () => {
  // first get the state,
  const loading = useSelector((state) => state.user.loading);
  const jwt = useSelector((state) => state.user.token);
  const error = useSelector((state) => state.user.error);
  const history = useHistory();
  const dispatch = useDispatch();
  // then fetch the data from the useEfect



//   Base one the if there is a token is sent from the backend api to decide login success or failed,
// success will retrouter to the home page

  // useEffect contains a function and a call back, and return something
  useEffect(() => {
    if (jwt!==null) {
      history.push("/");
    }
  }, [jwt]);

  const onFinish = (values: any) => {
    // console.log("Success:", values);
    dispatch(
      signIn({
        email: values.username,
        password: values.password,
      })
    );
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
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
