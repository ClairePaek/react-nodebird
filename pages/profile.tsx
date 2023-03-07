// pages에 들어있어야 next에서 code splitting을 할 수 있다.

import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
  return (
  <>
    <Head>
      <title>NordBird 🕊️ | 프로필</title>
    </Head>
    <AppLayout>프로필 페이지</AppLayout>
  </>)
};

export default Profile;