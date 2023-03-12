import { Form, Input } from 'antd';
import React, { useMemo } from 'react';

export default function NicknameEditForm() {
  const style = useMemo(
    () => ({
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px',
    }),
    []
  );

  return (
    <Form style={style}>
      <Input.Search addonBefore="nickname" enterButton="edit" />
    </Form>
  );
}
