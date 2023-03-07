/**
 * 페이지 마다 공통적으로 들어가는 걸 처리
 */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/reset.css' //ant design 전체 적용

export default function App({ Component }) {
  return (
  <>
    <Head>
      <title>NordBird 🕊️</title>
    </Head>
    <Component />
  </>);
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
