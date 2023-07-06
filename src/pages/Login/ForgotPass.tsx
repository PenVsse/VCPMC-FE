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

const ForgotPass = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
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
          Khôi phục mật khẩu
        </Row>
        <Row
          style={{
            fontFamily: "Nunito",
            fontSize: "1rem",
            justifyContent: "center",
            margin: "1rem 0",
            opacity: 0.7,
          }}
        >
          {isSubmit
            ? "Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail."
            : "Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu"}
        </Row>
        {isSubmit && (
          <Row
            style={{
              fontFamily: "Nunito",
              fontSize: "1rem",
              justifyContent: "center",
              margin: "1rem 0",
              opacity: 0.7,
            }}
          >
            Click vào đường link được đính kèm trong mail để chuyển đến trang
            đặt lại mật khẩu.
          </Row>
        )}
        {!isSubmit && (
          <Row justify="center">
            <InputField
              title="Email"
              size="large"
              style={{ width: 500 }}
              fontWeightTitle={600}
            />
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
                onClick={() => setIsSubmit(true)}
              >
                Xác nhận
              </Button>
            </Col>
          </Row>
        )}
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
          to={"/login"}
          style={{ textDecoration: "underline" }}
        >
          Quay lại đăng nhập
        </Link>
      </Col>
    </Row>
  );
};

export default ForgotPass;
