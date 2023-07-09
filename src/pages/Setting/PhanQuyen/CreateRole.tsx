import { Col, Row, Typography, Table, Space, Button } from "antd";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import TextAreaField from "../../../components/TextAreaField";
import { ColumnsType } from "antd/es/table";

interface IRole {
  name: string;
  id: string;
  des: string;
}

const CreateRole = () => {
  const { user } = useAppSelector((state) => state.auth);

  const columns: ColumnsType<IRole> = [
    {
      title: "Mã chức năng",
    },
    {
      title: "Tên nhóm chức năng",
    },
    {
      title: "Chức năng",
    },
  ];

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
            title: "Thêm vai trò",
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
          Thêm vai trò người dùng
        </Typography.Title>
        <Row
          style={{
            width: "100%",
            marginTop: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Col span={10}>
            <InputField
              title="Tên vai trò:"
              fontWeightTitle={600}
              style={{ borderColor: "#CCC" }}
              size="large"
            />
            <TextAreaField
              title="Mô tả:"
              fontWeightTitle={600}
              style={{
                borderColor: "#CCC",
                backgroundColor: "rgb(43, 43, 63)",
                color: "#FFF",
                opacity: 0.8,
              }}
              size="large"
            />
          </Col>
          <Col span={12}>
            <Typography.Paragraph
              style={{
                marginBottom: "0.25rem",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              Phân quyền chức năng
            </Typography.Paragraph>
            <Row style={{ width: "100%", marginTop: "1rem" }}>
              <Table style={{ width: "100%" }} columns={columns} />
            </Row>
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

export default CreateRole;
