import React, { useCallback, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useinput from '../hooks/useinput';

const FormItem = styled(Form.Item)`
  margin-top: 10px;
`;
const SigninForm = styled(Form)`
  padding: 10px;
`;
export default function LoginForm({ onLoggedIn }) {
  const [id, onChangeId] = useinput('');
  const [password, onChangePassworkd] = useinput('');

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    onLoggedIn();
  }, [id, password]);

  return (
    <SigninForm
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onSubmitForm} //이미 preventDefault가 적용되어있다.
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link href="/signup">register now!</Link>
      </FormItem>
    </SigninForm>
  );
}
