import { List, Button, Card, Skeleton, Avatar } from 'antd';
import React from 'react';
import { FollowObject } from '../model/FollowObject';
import PropTypes from 'prop-types';

export default function FollowList({ header, data }) {
  return (
    <List
      style={{ marginBottom: 20 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button>+</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item: FollowObject) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">
              {header == 'follower list' ? 'follow' : 'unfollow'}
            </a>,
            <a key="list-loadmore-more">remove</a>,
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture} />}
              title={<a href="https://ant.design">{item.nickname}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    ></List>
  );
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
