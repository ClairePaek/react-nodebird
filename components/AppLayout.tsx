import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import { useState } from 'react';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href={"/"} id="link">노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={"/profile"} id="link">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={"/signup"} id="link">회원가입</Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle'}}/>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://just-my-blog.tistory.com/" target="_blank" rel="norefferrer noopener">찐빵이 블로그</a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;