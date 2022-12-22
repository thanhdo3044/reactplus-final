import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import { Navigate } from "react-router-dom";

import "./Welcome.css"
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
        <Col className="wel-img">
          <Image size={false} />
        </Col>
      </Row>
      <Row className="wel-box-title" >
        <Row>
          <Col>
            <Title className="wel-title-text" >
              <Text className="wel-title-text-1" >Welcome to </Text>
              <Text className="wel-title-text-2">OUR REMINDER</Text>
            </Title>
          </Col>
        </Row>
        <Row >
          <Col className="wel-text-content">
            <Text >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
            </Text>
          </Col>
        </Row>
      </Row>
      <Row className="wel-title-text">
        <Col className="wel-footer">
          {isSub && <Navigate to="/signin" />}
          <Button children="Get Start" icon={true} onclick={onClickLogin} />
        </Col>
      </Row>
    </div>
  );
};
