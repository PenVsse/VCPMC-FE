import { Row, Typography, Col, Space, Button, Modal } from "antd";
import React, { ReactNode, useState } from "react";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import defailtImage from "../../../public/images/no_avatar.png";
import InputField from "../../components/InputField";
import { AiOutlineCamera } from "react-icons/ai";
import { FaPenSquare } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { logout } from "../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import success from "../../../public/images/success.png";

export interface IconMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  label: string;
}

export const IconMenu: React.FC<IconMenuProps> = ({ icon, label, ...rest }) => {
  return (
    <Row
      style={{
        width: 72,
        justifyContent: "center",
        cursor: "pointer",
        margin: ".5rem 0",
      }}
      {...rest}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "#727288",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </div>
      <div style={{ marginTop: ".35rem" }}>
        <Typography.Paragraph
          style={{
            color: "#fff",
            opacity: 0.7,
            width: "100%",
            textAlign: "center",
            margin: 0,
            fontSize: ".8rem",
          }}
        >
          {label}
        </Typography.Paragraph>
      </div>
    </Row>
  );
};

const Home: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { openNotification, contextHolder } = useNotification();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleChangePass = () => {
    setOpenModal(false);
    openNotification(
      "success",
      "bottom",
      "Đổi mật khẩu thành công!",
        <img style={{ width: 30, height: 30 }} alt="icon" src={success} />
    );
  };

  return (
    <Row style={{ position: "relative" }}>
      {contextHolder}
      <MyBreadcrumb user={user} />
      <Row style={{ padding: "0 3rem 0 2rem", width: "100%" }}>
        <Typography.Title
          style={{
            ...textFont("2rem"),
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Thông tin cơ bản
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <Col
            span={5}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                alt="avatar"
                src={defailtImage}
                style={{
                  borderRadius: "50%",
                  width: 200,
                  height: 200,
                  objectFit: "contain",
                }}
              />
              <AiOutlineCamera
                style={{
                  position: "absolute",
                  width: 30,
                  height: 30,
                  bottom: 10,
                  right: 20,
                  fontWeight: 700,
                }}
              />
            </div>
            <Row
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Typography.Text
                style={{
                  ...textFont("1.25rem"),
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                {`${user?.lastName} ${user?.firstName}`}
              </Typography.Text>
            </Row>
          </Col>
          <Col span={19}>
            <Row
              style={{
                width: "50%",
                justifyContent: "space-evenly",
                marginLeft: 40,
              }}
            >
              <InputField
                title="Họ:"
                span={11}
                titleSize={"1rem"}
                opacityTitle={0.7}
                size="large"
                defaultValue={user?.lastName}
                readonly={!isUpdate}
              />
              <InputField
                title="Tên:"
                span={11}
                titleSize={"1rem"}
                opacityTitle={0.7}
                size="large"
                defaultValue={user?.firstName}
                readonly={!isUpdate}
              />
              <InputField
                title="Ngày sinh:"
                span={11}
                titleSize={"1rem"}
                opacityTitle={0.7}
                size="large"
                defaultValue={user?.dob?.slice(0, 10).replaceAll("-", "/")}
                readonly={!isUpdate}
              />
              <InputField
                title="Số điện thoại:"
                span={11}
                titleSize={"1rem"}
                opacityTitle={0.7}
                size="large"
                defaultValue={user?.phone}
                readonly={!isUpdate}
              />
              <InputField
                title="Email:"
                span={23}
                titleSize={"1rem"}
                opacityTitle={0.7}
                size="large"
                defaultValue={user?.email}
                disabled
              />
              <InputField
                title="Tên đăng nhập:"
                span={23}
                titleSize={"1rem"}
                opacityTitle={0.7}
                size="large"
                defaultValue={user?.username}
                disabled
              />
              <InputField
                title="Phân quyền:"
                span={11}
                titleSize={"1rem"}
                opacityTitle={0.7}
                size="large"
                defaultValue={user?.Role.name}
                disabled
              />
              <Col span={11}></Col>
              {isUpdate && (
                <Col span={24}>
                  <Row justify="center" style={{ marginTop: "3rem" }}>
                    <Space size={32}>
                      <Button
                        className="root_color"
                        style={{
                          background: "content-box",
                          width: 150,
                          borderColor: "#FF9138",
                        }}
                        size="large"
                        onClick={() => setIsUpdate(false)}
                      >
                        Hủy
                      </Button>
                      <Button
                        type="primary"
                        style={{ width: 150 }}
                        size="large"
                        onClick={() => setIsUpdate(false)}
                      >
                        Lưu
                      </Button>
                    </Space>
                  </Row>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Row>

      {!isUpdate && (
        <Row
          style={{
            position: "absolute",
            right: 0,
            top: "24%",
            backgroundColor: "#2F2F41",
            padding: "1rem .5rem",
            borderRadius: "16px 0px 0px 16px",
            flexDirection: "column",
          }}
        >
          <IconMenu
            icon={
              <FaPenSquare
                className="root_color"
                style={{ width: 20, height: 20 }}
              />
            }
            label="Sửa thông tin"
            onClick={() => setIsUpdate(true)}
          />
          <IconMenu
            icon={
              <FiLock
                className="root_color"
                style={{ width: 20, height: 20 }}
              />
            }
            label="Đổi mật khẩu"
            onClick={() => setOpenModal(true)}
          />
          <IconMenu
            icon={
              <MdLogout
                className="root_color"
                style={{ width: 20, height: 20 }}
              />
            }
            label="Đăng xuất"
            onClick={handleLogout}
          />
        </Row>
      )}

      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        width={360}
      >
        <Row
          style={{
            justifyContent: "center",
            ...textFont("1.25rem"),
            fontWeight: 600,
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Thay đổi mật khẩu
        </Row>
        <Row style={{ width: "100%" }}>
          <InputField
            title="Mật khẩu hiện tại"
            span={24}
            titleSize={".9rem"}
            opacityTitle={0.7}
            size="large"
            type="password"
            defaultValue={user?.password}
          />
          <InputField
            title="Mật khẩu mới"
            span={24}
            titleSize={".9rem"}
            opacityTitle={0.7}
            size="large"
            type="password"
            defaultValue={""}
          />
          <InputField
            title="Nhập lại mật khẩu mới"
            span={24}
            titleSize={".9rem"}
            opacityTitle={0.7}
            size="large"
            type="password"
            defaultValue={""}
          />
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
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
                onClick={() => setOpenModal(false)}
              >
                Hủy
              </Button>
              <Button
                type="primary"
                style={{ width: 120 }}
                onClick={handleChangePass}
              >
                Lưu
              </Button>
            </Space>
          </Col>
        </Row>
      </Modal>
    </Row>
  );
};

export default Home;
