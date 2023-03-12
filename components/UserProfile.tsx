import { Avatar, Button, Card } from 'antd';
import React from 'react';
const { Meta } = Card;

export default function UserProfile({ onLogout }) {
  const onClick = () => {
    onLogout();
  };

  return (
    <Card
      actions={[
        <div key="twit">
          twitter
          <br />0
        </div>,
        <div key="followings">
          followings
          <br />0
        </div>,
        <div key="followers">
          followers
          <br />0
        </div>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
        title="profile"
      />
      <Button onClick={onClick}>Logout</Button>
    </Card>
  );
}
