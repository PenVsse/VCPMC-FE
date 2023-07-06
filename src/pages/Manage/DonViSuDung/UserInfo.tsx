import React, { useState } from "react";
import { useAppSelector } from "../../../store/hook";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Row, Typography, Col, Space, Button, Select, Radio } from "antd";
import { MyInput } from "../HopDong/Detail";
import { MyInput as MyInput2 } from "../HopDong/DetailUpdate";
import { IconMenu } from "../../Home";
import { BsPencilSquare } from "react-icons/bs";
import { OPTION_UNIT_ROLE } from "./Detail";

const UserInfo: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

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
        items={
          isUpdate
            ? [
                {
                  title: "Quản lý",
                },
                {
                  title: "Đơn vị sử dụng",
                },
                {
                  title: "Chi tiết",
                },
                {
                  title: "Thông tin người dùng",
                },
              ]
            : [
                {
                  title: "Quản lý",
                },
                {
                  title: "Đơn vị sử dụng",
                },
                {
                  title: "Chi tiết",
                },
                {
                  title: "Thông tin người dùng",
                },
                {
                  title: "Chỉnh sửa thông tin",
                },
              ]
        }
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
          Thông tin người dùng
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1.5rem" }}>
          {isUpdate ? (
            <>
              <Col span={12}>
                <MyInput2 label="Tên người dùng" defaultValue="123" />
                <MyInput2 label="Email" defaultValue="123@gmail.com" />
                <Row
                  style={{
                    width: "100%",
                    alignItems: "center",
                    margin: ".5rem 0",
                  }}
                >
                  <Col
                    span={8}
                    style={{ ...textFont("1rem"), fontWeight: 600 }}
                  >
                    Tình trạng: <span style={{ color: "red" }}>*</span>
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
                  defaultValue="123"
                />
                <MyInput2
                  label="Mật khẩu"
                  defaultValue="123"
                  type="password"
                />
                <MyInput2
                  label="Nhập lại mật khẩu"
                  defaultValue="123"
                  type="password"
                />
                <Row
                  style={{
                    width: "100%",
                    alignItems: "center",
                    margin: ".5rem 0",
                  }}
                >
                  <Col
                    span={8}
                    style={{ ...textFont("1rem"), fontWeight: 600 }}
                  >
                    Trạng thái người dùng:
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
            </>
          ) : (
            <>
              <Col span={12}>
                <MyInput label="Nguyễn văn A" title="Tên người dùng" />
                <MyInput label="QA" title="Vai trò" />
                <MyInput label="123@gmail.com" title="Email" />
              </Col>
              <Col span={12}>
                <MyInput label="123" title="Tên đăng nhập" />
                <MyInput
                  label="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                  title="Mật khẩu"
                />
                <MyInput label="Đã kích hoạt" title="Trạng thái thiết bị" />
              </Col>
            </>
          )}
        </Row>
      </Row>
      {isUpdate && (
        <Row style={{ width: "100%", marginTop: '3rem' }}>
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
                onClick={() => setIsUpdate(false)}
              >
                Hủy
              </Button>
              <Button type="primary" style={{ width: 120 }}>
                Lưu
              </Button>
            </Space>
          </Col>
        </Row>
      )}
      {!isUpdate && (
        <Row
          style={{
            position: "absolute",
            right: 0,
            top: "20%",
            backgroundColor: "#2F2F41",
            padding: "1rem .5rem",
            borderRadius: "16px 0px 0px 16px",
            flexDirection: "column",
          }}
        >
          <IconMenu
            icon={
              <BsPencilSquare
                className="root_color"
                style={{ width: 20, height: 20 }}
              />
            }
            label="Chỉnh sửa"
            onClick={() => setIsUpdate(true)}
          />
        </Row>
      )}
    </div>
  );
};

export default UserInfo;
