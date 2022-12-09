import React from "react";
import { Col, Row, Typography } from "antd";
import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import "./SignIn.css";
import { User } from "../../model/user";
import { Button } from "../../components/button";
import { Image } from "../../components/image";
import { axiosUser } from "../../api/axiosUser";

const { Text, Title } = Typography;
export const SignIn: React.FC = () => {
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Name is a required field"),
      email: yup.string().required("Email is a required field"),
      password: yup.string().required("Password is a required field"),
      confirm: yup.string().required("Confirm Password is a required field"),
    })
    .required();
  const navigator = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });
  const onsubmit = async (data: User) => {
    try {
      if (data.password === data.confirm) {
        await axiosUser.postLogin(data)
        navigator("/signup")
      }
      else {
        alert("Password input does not match ")
      }
    } catch (error) {
      console.log(error);

    }


  }
  const submitSigIn = () => {
    navigator("/signup");
  }

  return (
    <div className="welcome-container">
      <Row>
        <Col style={{ margin: "Auto", paddingTop: 38 }}>
          <Image size={true} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: -25 }}>
        <Row>
          <Col>
            <Title style={{ textAlign: "center" }}>
              <Text style={{ fontSize: 24, fontWeight: 400 }}>
                Get’s things done{" "}
              </Text>
              <Text style={{ fontSize: 24, fontWeight: 400, display: "block" }}>
                with TODO
              </Text>
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col style={{ marginTop: -25, marginBottom: 15 }}>
            <Text >
              Let’s help you meet up your tasks
            </Text>
          </Col>
        </Row>
        <Form onFinish={handleSubmit(onsubmit)} >
          <Form.Item>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  className="input-sign"
                  placeholder="Enter your full name"
                  {...field}
                  status={errors.name ? "error" : ""}
                />
              )}
            />
            <br />
            <Text type="danger">{errors.name?.message}</Text>
          </Form.Item>

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

          <Form.Item>
            <Controller
              name="confirm"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  className="input-sign"
                  placeholder="Confirm Password"
                  {...field}
                  status={errors.confirm ? "error" : ""}
                />
              )}
            />
            <br />
            <Text type="danger">{errors.confirm?.message}</Text>
          </Form.Item>

          <Form.Item>
            <Button children="Register" />
          </Form.Item>

        </Form>
        <Row style={{ marginTop: -15 }}>
          <Text style={{ fontWeight: 400, fontSize: 14 }}>Already have an account ?<Text style={{ color: "#D8605B" }} onClick={submitSigIn}> Sign In</Text></Text>
        </Row>
      </Row>
    </div>
  );
};
