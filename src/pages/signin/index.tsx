import React from "react";
import { Col, Row, Typography,Form, Input } from "antd";
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
    <div className="sig-container">
      <Row>
        <Col className="sig-img" >
          <Image size={true} />
        </Col>
      </Row>
      <Row className="sig-information" >
        <Row>
          <Col>
            <Title className="sig-title">
              <Text className="sig-title-1">
                Get’s things done
              </Text>
              <Text className="sig-title-2" >
                with TODO
              </Text>
            </Title>
          </Col>
        </Row>
        <Row className="sig-title">
          <Col className="sig-title-3" >
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
            
          </Form.Item>

          <Form.Item>
            <Button children="Register" />
          </Form.Item>

        </Form>
        <Row className="sig-footer-in" >
          <Text className="sig-footer-in-text" >Already have an account ?<Text className="sig-footer-in-text-2" onClick={submitSigIn}> Sign In</Text></Text>
        </Row>
      </Row>
    </div>
  );
};
