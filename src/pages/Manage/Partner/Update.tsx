import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hook";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import {
  Row,
  Typography,
  Col,
  Space,
  Button,
  Select,
  Switch,
  Table,
  Radio,
} from "antd";
import { MyInput } from "../HopDong/Detail";
import { MyInput as MyInput2 } from "../HopDong/DetailUpdate";
import { IconMenu } from "../../Home";
import { BsPencilSquare } from "react-icons/bs";
import { partnerApi } from "../../../api/partnerApi";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { OPTION_UNIT_ROLE } from "../DonViSuDung/Detail";

const Update: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div
      style={{
        position: "relative",
        maxHeight: "100vh",
        minHeight: "100vh",
        overflowY: "scroll",
      }}
    >
      <MyBreadcrumb
        user={user}
        items={[
          {
            title: "Quản lý",
          },
          {
            title: "Đối tác ủy quyền",
          },
          {
            title: "Cập nhật thông tin người dùng",
          },
        ]}
        separator=">"
      />
      <Row style={{ padding: "0 7rem 0 2rem", width: "100%" }}>
        <Typography.Title
          style={{
            ...textFont("2rem"),
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          Cập nhật thông tin
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1.5rem" }}>
          <Col span={12}>
            <MyInput2 label="Tên người dùng" defaultValue="Amy Ngọc" />
            <MyInput2 label="Email" defaultValue="Phm_L@gmail.com" />
            <MyInput2 label="Số điện thoại" defaultValue="029 8131 6743" />
            <Row
              style={{
                width: "100%",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Vai trò: <span style={{ color: "red" }}>*</span>
              </Col>
              <Col span={16}>
                <Select
                  options={OPTION_UNIT_ROLE}
                  style={{
                    color: "#FFF",
                    width: 220,
                    borderColor: "#727288",
                  }}
                  value={OPTION_UNIT_ROLE[0].value}
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <MyInput2
              label="Tên đăng nhập"
              defaultValue="nguyenvana@gmail.com"
            />
            <MyInput2
              label="Mật khẩu"
              defaultValue="123321123321"
              type="password"
            />
            <MyInput2
              label="Nhập lại mật khẩu"
              defaultValue="123321123321"
              type="password"
            />
            <Row
              style={{
                width: "100%",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Trạng thái:
              </Col>
              <Col span={16}>
                <Radio.Group defaultValue={1}>
                  <Radio value={1} style={{ color: "#FFF", opacity: 0.7 }}>
                    Đã kích hoạt
                  </Radio>
                  <Radio value={2} style={{ color: "#FFF", opacity: 0.7 }}>
                    Ngừng kích hoạt
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ width: "100%", marginTop: "3rem" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Space size={24}>
              <Button
                className="root_color"
                style={{
                  background: "content-box",
                  width: 120,
                  borderColor: "#FF9138",
                }}
                onClick={() => history.back()}
              >
                Hủy
              </Button>
              <Button type="primary" style={{ width: 120 }}>
                Lưu
              </Button>
            </Space>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Update;
