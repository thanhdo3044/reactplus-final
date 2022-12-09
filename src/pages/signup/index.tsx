import React from "react";
import { Col, Row, Typography } from "antd";
import { Form, Input } from "antd";
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

  const { control, handleSubmit,formState:{errors} } = useForm<User>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  const onsubmit = async(data: User) => {
    try {
      navigator("/dashboard");
      
    } catch (error) {
      console.log();
      
    }
  };
  const navigator = useNavigate();
  const submitSigUp = () => {
    navigator("/signin");
  };

  return (
    <div className="welcome-container">
      <Row>
        <Col style={{ margin: "Auto", paddingTop: 68 }}>
          <Image size={true} />
        </Col>
      </Row>
      <Row justify="center" style={{ display: "block" }}>
        <Row style={{ marginTop: -15, display: "block" }}>
          <Col>
            <Title style={{ textAlign: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: 400 }}>
                Welcome back
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 400, display: "block" }}>
                to
              </Text>
            </Title>
          </Col>
        </Row>
        <Row justify="center" style={{marginTop:-15}}>
          <Col>
            <Text style={{fontSize:24,fontWeight:400}}>OUR REMINDER</Text>
          </Col>
        </Row>

        <Row justify="center" style={{marginTop:15}}>
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
              <br />
              <Text type="danger">{errors.email?.message}</Text>
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
              <br />
              <Text type="danger">{errors.password?.message}</Text>
            </Form.Item>

            <Row style={{ marginTop: 149 }}>
              <Form.Item>
                <Button children="Sign In" />
              </Form.Item>
            </Row>
          </Form>
        </Row>
        <Row justify="center" style={{ marginTop: -15 }}>
          <Text style={{ fontWeight: 400, fontSize: 14 }}>
            Don’t have an account ?
            <Text style={{ color: "#D8605B" }} onClick={submitSigUp}>
              {" "}
              Sign Up
            </Text>
          </Text>
        </Row>
      </Row>
    </div>
  );
};
