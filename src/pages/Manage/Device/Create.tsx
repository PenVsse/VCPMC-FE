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
  Modal,
} from "antd";
import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import { BiPlusCircle, BiSearch } from "react-icons/bi";
import TableData, { IDevice } from "./TableData";
import { deviceApi } from "../../../api/device";
import { IconMenu } from "../../Home";
import { AiFillLock, AiOutlinePlus } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { MyInput, MyInputDate } from "../HopDong/DetailUpdate";
import TextArea from "antd/es/input/TextArea";

const Create: React.FC = () => {
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
            title: "Chi tiết thiết bị",
          },
          {
            title: "Thêm thiết bị mới",
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
          Thêm thiết bị mới
        </Typography.Title>
        <Row style={{ marginTop: "1.5rem", width: "100%" }}>
          <Col span={12}>
            <MyInput label="Tên thiết bị" />
            <MyInput label="SKU/ID" />
            <MyInput label="Địa chỉ Mac" />
            <MyInputDate label="Thời hạn bảo hành" />
            <Row
              style={{
                width: "100%",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Label: <span style={{ color: "red" }}>*</span>
              </Col>
              <Col span={16}>
                <Select
                  options={[]}
                  style={{
                    color: "#FFF",
                    width: 220,
                    borderColor: "#727288",
                  }}
                />
              </Col>
            </Row>
            <Row
              style={{
                width: "100%",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Thông tin: <span style={{ color: "red" }}>*</span>
              </Col>
              <Col span={16}>
                <Select
                  options={[]}
                  style={{
                    color: "#FFF",
                    width: 220,
                    borderColor: "#727288",
                  }}
                />
              </Col>
            </Row>
            <Row
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <span
                style={{
                  marginLeft: "19rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BiPlusCircle
                  style={{
                    color: "orange",
                    width: 20,
                    height: 20,
                    marginRight: ".25rem",
                  }}
                />
                Thêm thông tin
              </span>
            </Row>
            <Row
              style={{
                width: "100%",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Ghi chú:
              </Col>
              <Col span={16}>
                <TextArea
                  style={{
                    width: "220px",
                    backgroundColor: "#2B2B3F",
                    color: "#fff",
                    borderColor: "#727288",
                  }}
                  rows={3}
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <MyInput label="Tên đăng nhập" />
            <MyInput label="Mật khẩu" type="password" />
            <MyInput label="Nhập lại mật khẩu" type="password" />
            <MyInput label="Vị trí" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <Space size={20}>
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
              <Button
                type="primary"
                style={{ width: 120 }}
              >
                Lưu
              </Button>
            </Space>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Create;
