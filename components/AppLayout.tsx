import Link from 'next/link';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href={"/"} id="link">노드버드</Link>
        <Link href={"/profile"} id="link">프로필</Link>
        <Link href={"/signup"} id="link">회원가입</Link>
      </div>
      {children}
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;