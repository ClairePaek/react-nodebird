// pages에 들어있어야 next에서 code splitting을 할 수 있다.

import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followingList = [
    {
      nickname: 'sam',
      picture: 'https://joesch.moe/api/v1/random',
      loading: false,
    },
    {
      nickname: 'nami',
      picture: 'https://joesch.moe/api/v1/random',
      loading: false,
    },
    {
      nickname: 'eric',
      picture: 'https://joesch.moe/api/v1/random',
      loading: false,
    },
  ];
  const followerList = [
    {
      nickname: 'claire',
      picture: 'https://joesch.moe/api/v1/random',
      loading: false,
    },
    {
      nickname: 'kim',
      picture: 'https://joesch.moe/api/v1/random',
      loading: false,
    },
    {
      nickname: 'park',
      picture: 'https://joesch.moe/api/v1/random',
      loading: false,
    },
  ];

  return (
    <>
      <Head>
        <title>NordBird 🕊️ | 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="following list" data={followingList} />
        <FollowList header="follower list" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
