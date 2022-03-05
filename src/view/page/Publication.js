import React from 'react';
import 'antd/dist/antd.min.css';
import {useParams} from "react-router-dom";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Publication() {
  const params = useParams()

  return (
    <Typography style={{paddingLeft: '2vh'}}>
      <Title>Publication #{params.id}</Title>
      <Paragraph>哒哒哒♪</Paragraph>
    </Typography>
  );
}
