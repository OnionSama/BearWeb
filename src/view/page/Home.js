import React from 'react';
import 'antd/dist/antd.min.css';
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Typography style={{paddingLeft: '2vh'}}>
      <Title>Home</Title>
      <Paragraph>Welcome!</Paragraph>
    </Typography>
  );
}
