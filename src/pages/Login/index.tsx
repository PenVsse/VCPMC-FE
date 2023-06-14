import { Row, Col, Typography, Form, Button, Spin } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../public/images/logo_1.png";
import InputField from "../../components/InputField";
import { ILogin } from "../../types/auth";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../store/hook";
import { login, login as setLogin } from "../../store/slice/authSlice";
import { BsChatFill } from "react-icons/bs";
import CheckboxField from "../../components/CheckboxField";
import { authApi } from "../../api/auth";

const loginSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const { control, setError, getValues } = useForm<ILogin>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = async () => {
    if (Object.keys(control?._formState.errors).length > 0) return;

    const data = getValues();
    let isError = false;
    for (const key in data) {
      if (data[key as keyof ILogin].trim() === "") {
        setError(key as keyof ILogin, {
          type: "manual",
          message: `${key} is required`,
        });
        isError = true;
      }
    }

    if (isError) return;

    setLoading(true);
    const { username, password } = data;
    authApi.login({
      password,
      username
    })
    .then(res => res.data)
    .then(data => {
      dispatch(login({ user: data.user }));
    })
    .catch(() => {
      setError("password", {
        type: "manual",
        message: `mật khẩu hoặc tên đăng nhập không chính xác`,
      });
    })
    .finally(() => {
      setLoading(false);
    })

  };
  

  return (
    <Row style={{ minHeight: "100vh" }}>
      <Col span={24}>
        <Row justify="center" style={{ marginTop: "4rem" }}>
          <img src={logo} alt="logo" style={{ width: 150, height: 150 }} />
        </Row>
        <Row
          style={{
            fontFamily: "Nunito",
            fontSize: "2rem",
            fontWeight: 700,
            justifyContent: "center",
            margin: "1rem 0",
          }}
        >
          Đăng nhập
        </Row>
        <Row style={{ maxWidth: 400, margin: "0 auto" }}>
          <Controller
            name="username"
            control={control}
            render={({ field, fieldState }) => {
              
              return (
                <InputField
                  span={24}
                  title="Tên đăng nhập"
                  titleSize={".85rem"}
                  fontWeightTitle={600}
                  opacityTitle={0.7}
                  invalidMessage={fieldState.error && fieldState.error.message}
                  {...field}
                />
              );
            }}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <InputField
                  span={24}
                  title="Password"
                  titleSize={".85rem"}
                  fontWeightTitle={600}
                  opacityTitle={0.7}
                  invalidMessage={fieldState.error && fieldState.error.message}
                  type="password"
                  {...field}
                />
              );
            }}
          />
          <Col span={24} style={{ marginTop: "0.4rem" }}>
            <CheckboxField
              label="Ghi nhớ đăng nhập"
              styleLabel={{
                color: "#fff",
                opacity: 0.7,
                marginLeft: ".5rem",
              }}
            />
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Button
              style={{
                fontFamily: "Nunito",
                padding: "0 2rem",
                fontSize: ".9rem",
              }}
              size="large"
              type="primary"
              onClick={handleLogin}
              disabled={loading}
            >
              Đăng nhập
            </Button>
          </Col>
        </Row>
      </Col>
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          className="root_color"
          to={"/reset-password"}
          style={{ textDecoration: "underline" }}
        >
          Quên mật khẩu?
        </Link>
      </Col>
    </Row>
  );
};

export default Login;
