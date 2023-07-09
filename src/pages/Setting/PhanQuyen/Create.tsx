import { Row, Typography, Col, Space, Button } from "antd";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import { MyDatePicker } from "../../Schedule/Create";
import SelectField from "../../../components/SelectField";

const Create = () => {
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
            title: "Cài đặt",
          },
          {
            title: "Phân quyền người dùng",
          },
          {
            title: "Thêm người dùng",
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
          />
          <InputField
            title={<>Email: </>}
            style={{ borderColor: "#727288" }}
            span={11}
            fontWeightTitle={600}
          />
          <InputField
            title={<>Số điện thoại: </>}
            style={{ borderColor: "#727288" }}
            span={11}
            fontWeightTitle={600}
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
              styleSelect={{ width: "100%" }}
              styleTitle={{ ...textFont("1rem"), fontWeight: 600 }}
              width={"100%"}
            />
          </Col>
        </Row>
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
    </div>
  );
};

export default Create;
