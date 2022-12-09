import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import { Navigate } from "react-router-dom";

import { Button } from "../../components/button";
import { Image } from "../../components/image";

const { Text, Title } = Typography;
export const Welcome: React.FC = () => {
  const [isSub, setSub] = useState<boolean>(false);
  const onClickLogin = () => {
    setSub(true)
  }
  return (
    <div className="welcome-container">
      <Row>
        <Col style={{ marginTop: 150 }}>
          <Image size={false} />
        </Col>
      </Row>
      <Row justify="center">
        <Row>
          <Col>
            <Title style={{ textAlign: "center" }}>
              <Text style={{ fontSize: 24 }}>Welcome to </Text>
              <Text strong style={{ display: "block", fontSize: 24 }}>OUR REMINDER</Text>
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col style={{ width: 281, textAlign: "center" }}>
            <Text >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
            </Text>
          </Col>
        </Row>
      </Row>
      <Row justify="center">
        <Col style={{ marginTop: 90 }} >
          {isSub && <Navigate to="/signin" />}
          <Button children="Get Start" icon={true} onclick={onClickLogin} />
        </Col>
      </Row>
    </div>
  );
};
