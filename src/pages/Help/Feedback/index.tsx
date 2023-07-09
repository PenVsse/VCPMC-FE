import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Row, Typography, Col, Image, Select, Space, Button } from "antd";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import TextAreaField from "../../../components/TextAreaField";
import { IconMenu } from "../../Home";
import { FaPenSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const OPTION_HELP = [
  {
    value: 1,
    label: "Tài khoản",
  },
  {
    value: 2,
    label: "Quản lý doanh thu",
  },
  {
    value: 3,
    label: "Vấn đề bản quyền",
  },
  {
    value: 4,
    label: "Khác",
  },
];

const Feedback = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
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
            title: "Hỗ trợ",
          },
          {
            title: "Feedback",
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
          Feedback
        </Typography.Title>
        <Row
          style={{ marginTop: "1rem", justifyContent: "center", width: "100%" }}
        >
          <Row
            style={{
              padding: "1.5rem",
              backgroundColor: "#2F2F41",
              width: 560,
              borderRadius: 16,
            }}
          >
            <InputField
              title="Tên người dùng"
              value={`${user?.lastName} ${user?.firstName}`}
              fontWeightTitle={600}
              size="large"
              span={24}
              primary="orange"
            />
            <SelectField
              title="Bạn muốn được hỗ trợ vấn đề gì?"
              styleSelect={{ width: "100%", backgroundColor: "#2C2C3F" }}
              styleTitle={{ ...textFont("1rem"), fontWeight: 600 }}
              width={"100%"}
              size="large"
              placeholder="Chọn vấn đề bạn cần được hỗ trợ"
              options={OPTION_HELP}
            />
            <TextAreaField
              title="Nội dung"
              style={{
                width: "100%",
                backgroundColor: "#2C2C3F",
                color: "#fff",
                opacity: ".8",
                marginBottom: "5rem",
              }}
              span={24}
              placeholder="Nhập nội dung"
              size="large"
            />
          </Row>
        </Row>
        <Row
          style={{ justifyContent: "center", marginTop: "2rem", width: "100%" }}
        >
          <Button
            style={{
              padding: "0 4rem",
              backgroundColor: "#FF7506",
              color: "#FFF",
              border: "unset",
            }}
            size="large"
          >
            Gửi
          </Button>
        </Row>
      </Row>

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
            <FaPenSquare
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label="Danh sách feedback"
          onClick={() => navigate("list")}
        />
      </Row>
    </div>
  );
};

export default Feedback;
