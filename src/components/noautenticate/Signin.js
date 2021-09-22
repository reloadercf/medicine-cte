/* eslint-disable no-restricted-globals */
/* eslint-disable no-return-assign */
import React, { useContext } from 'react';
import {
  Form, Input, Button, Checkbox, Typography, notification,
} from 'antd';
import { GlobalContext } from '../../lib/ContextFirebase';

const Signin = () => {
  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: type,
      description: message,
    });
  };

  const { handleSignin, CatchErrors } = useContext(GlobalContext);

  const { Title } = Typography;

  const onFinish = (values) => {
    handleSignin(values.username, values.password).then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      openNotificationWithIcon('success', `se registro ${user.email}`);
      setTimeout(() => location.href = '/', 4000);
      // ...
    })
      .catch((error) => {
        openNotificationWithIcon('error', CatchErrors(error.message));
      // ..
      });
  };

  const onFinishFailed = () => {
    openNotificationWithIcon('error', 'Campos imcompletos');
  };

  return (
    <div className="signin">
      <Title>Registrate</Title>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Signin;
