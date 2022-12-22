import React from "react";
import { Col, Row, Typography,Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";
import { User } from "../../model/user";
import { Button } from "../../components/button";
import { Image } from "../../components/image";

const { Text, Title } = Typography;
export const SignUp: React.FC = () => {
  const schema = yup
    .object()
    .shape({
      email: yup.string().required("Email is a required field"),
      password: yup.string().required("Password is a required field"),
    })
    .required();

  const { control, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  const onsubmit = async (data: User) => {
    try {
      navigator("/dashboard");

    } catch (error) {
      console.log("Error SigUp:",error);

    }
  };
  const navigator = useNavigate();
  const submitSigUp = () => {
    navigator("/signin");
  };

  return (
    <div className="sig-container">
      <Row>
        <Col className="sig-up-img">
          <Image size={true} />
        </Col>
      </Row>
      <Row className="sig-up-information">
        <Row className="sig-up-title" >
          <Col className="sig-up-title-1">
            <Title >
              <Text className="sig-up-text-1">
                Welcome back
              </Text>
              <Text className="sig-up-text-2">
                to
              </Text>
            </Title>
          </Col>
          <Col>
            <Text className="sig-up-text-3">OUR REMINDER</Text>
          </Col>
        </Row>
        

        <Row className="sig-up-log">
          <Form onFinish={handleSubmit(onsubmit)}>
            <Form.Item>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    className="input-sign"
                    placeholder="Enter your email"
                    {...field}
                    status={errors.email ? "error" : ""}
                  />
                )}
              />
              
            </Form.Item>

            <Form.Item>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    className="input-sign"
                    type="password"
                    placeholder="Enter password"
                    {...field}
                    status={errors.password ? "error" : ""}
                  />
                )}
              />
              
            </Form.Item>

            <Row className="sig-up-btn">
              <Form.Item>
                <Button children="Sign In" />
              </Form.Item>
            </Row>
          </Form>
        </Row>
        <Row className="sig-up-footer">
          <Text className="sig-up-footer-text">
            Don’t have an account ?
            <Text className="sig-up-footer-text-1" onClick={submitSigUp}>
              {" "}
              Sign Up
            </Text>
          </Text>
        </Row>
      </Row>
    </div>
  );
};
