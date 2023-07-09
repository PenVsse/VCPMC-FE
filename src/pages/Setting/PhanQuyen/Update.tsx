import { Row, Typography, Col, Radio, Space, Button } from "antd";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "../../../types/auth";
import InputField from "../../../components/InputField";
import { MyDatePicker } from "../../Schedule/Create";
import SelectField from "../../../components/SelectField";
import { IconMenu } from "../../Home";
import { BiUserX } from "react-icons/bi";
import { AiOutlineKey } from "react-icons/ai";

const Update = () => {
  const { user } = useAppSelector((state) => state.auth);
  const params = useParams();
  const [userData, setUserData] = useState<IUser>();

  useEffect(() => {
    if (params.id) {
      const user = JSON.parse(params.id);
      setUserData(user);
    }
  }, [params.id]);

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
            title: "Cài đặt",
          },
          {
            title: "Phân quyền người dùng",
          },
          {
            title: "Chỉnh sửa",
          },
        ]}
        separator=">"
      />
      <Row
        style={{
          padding: "0 7rem 0 2rem",
          width: "100%",
        }}
      >
        <Typography.Title
          style={{
            ...textFont("2rem"),
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          Chỉnh sửa thông tin người dùng
        </Typography.Title>
        {userData && (
          <Row
            style={{
              width: "70%",
              marginTop: "2rem",
              justifyContent: "space-between",
            }}
          >
            <InputField
              title={
                <>
                  Tên người dùng:{" "}
                  <span style={{ marginLeft: ".2rem", color: "red" }}>*</span>
                </>
              }
              style={{ borderColor: "#727288" }}
              span={11}
              fontWeightTitle={600}
              defaultValue={`${userData?.lastName} ${userData?.firstName}`}
            />
            <InputField
              title={<>Email: </>}
              style={{ borderColor: "#727288" }}
              span={11}
              fontWeightTitle={600}
              defaultValue={userData.email}
            />
            <InputField
              title={<>Số điện thoại: </>}
              style={{ borderColor: "#727288" }}
              span={11}
              fontWeightTitle={600}
              defaultValue={userData.phone}
            />
            <InputField
              title={
                <>
                  Tên đăng nhập:{" "}
                  <span style={{ marginLeft: ".2rem", color: "red" }}>*</span>
                </>
              }
              style={{ borderColor: "#727288" }}
              span={11}
              fontWeightTitle={600}
              defaultValue={userData.username}
            />
            <Col span={11} style={{ margin: "0.5rem 0" }}>
              <Typography.Paragraph
                style={{
                  marginBottom: "0.25rem",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Ngày hết hạn:
              </Typography.Paragraph>
              <MyDatePicker style={{ width: "100%" }} />
            </Col>
            <InputField
              title={
                <>
                  Mật khẩu:{" "}
                  <span style={{ marginLeft: ".2rem", color: "red" }}>*</span>
                </>
              }
              style={{ borderColor: "#727288" }}
              span={11}
              fontWeightTitle={600}
              defaultValue={userData.password}
              type="password"
            />
            <Col span={11}>
              <SelectField
                title={
                  <>
                    Vai trò:{" "}
                    <span style={{ marginLeft: ".2rem", color: "red" }}>*</span>
                  </>
                }
                options={[
                  { label: "Admin", value: 1 },
                  { label: "User", value: 2 },
                ]}
                defaultValue={userData.roleId}
                styleSelect={{ width: "100%" }}
                styleTitle={{ ...textFont("1rem"), fontWeight: 600 }}
                width={"100%"}
              />
            </Col>
            <Col span={11} style={{ margin: "0.5rem 0" }}>
              <Typography.Paragraph
                style={{
                  marginBottom: "0.25rem",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Trạng thái:{" "}
                <span style={{ marginLeft: ".2rem", color: "red" }}>*</span>
              </Typography.Paragraph>
              <Radio.Group defaultValue={1}>
                <Radio value={1} style={{ ...textFont("1rem") }}>
                  Đang hoạt động
                </Radio>
                <Radio value={2} style={{ ...textFont("1rem") }}>
                  Ngừng hoạt động
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
        )}
      </Row>

      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
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
          <Button type="primary" style={{ width: 120 }}>
            Lưu
          </Button>
        </Space>
      </Col>

      <Row
        style={{
          position: "absolute",
          right: 0,
          top: "16%",
          backgroundColor: "#2F2F41",
          padding: "1rem .5rem",
          borderRadius: "16px 0px 0px 16px",
          flexDirection: "column",
        }}
      >
        <IconMenu
          icon={
            <BiUserX className="root_color" style={{ width: 20, height: 20 }} />
          }
          label="Xóa người dùng"
        />
        <IconMenu
          icon={
            <AiOutlineKey
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label="Khôi phục mật khẩu"
        />
      </Row>
    </div>
  );
};

export default Update;
