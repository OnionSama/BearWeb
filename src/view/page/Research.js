import React from 'react';
import 'antd/dist/antd.min.css';
import { useParams } from "react-router-dom";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Research() {
  const params = useParams()

  return (
    <Typography style={{paddingLeft: '2vh'}}>
      <Title>Research #{params.id}</Title>
      <Paragraph>啦啦啦♪</Paragraph>
    </Typography>
  );
}
