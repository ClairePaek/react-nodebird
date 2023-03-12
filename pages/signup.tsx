import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input } from 'antd';
import useinput from '../hooks/useinput';

const Signup = () => {
  const [id, onChangeId] = useinput('');
  const [password, onChangePassworkd] = useinput('');

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <AppLayout>
      <Head>
        <title>NordBird 🕊️ | 회원가입</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input
            name="user-id"
            value={id}
            required
            onChange={onChangeId}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-password">PASSWORD</label>
          <br />
          <Input
            name="user-password"
            value={password}
            required
            onChange={onChangePassworkd}
          ></Input>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
