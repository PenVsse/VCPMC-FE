import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Row, Typography, Col, Image, Select, Space, Button } from "antd";
import { useAppSelector } from "../../../store/hook";

const Download = () => {
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
            title: "Hỗ trợ",
          },
          {
            title: "Tải App",
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
          Cài đặt cấu hình
        </Typography.Title>
        <Row
          style={{ width: "100%", marginTop: "7rem", justifyContent: "center" }}
        >
          <Typography.Title
            style={{
              ...textFont("3rem"),
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              textAlign: "center",
              width: 500,
            }}
          >
            ứng dụng <span style={{ color: "#FF7506" }}>VCPMC</span>
            <Row
              style={{
                padding: "0 4rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  borderBottom: "2px dashed #FF7506",
                  width: "100%",
                  margin: "1rem 0",
                }}
              ></div>
            </Row>
            <Row style={{ width: "100%" }}>
              <Typography.Title
                style={{
                  ...textFont("2rem"),
                  color: "#fff",
                  margin: 0,
                  opacity: 0.9,
                }}
              >
                Bạn vui lòng chọn{" "}
                <strong style={{ fontWeight: 900 }}>nền tảng</strong> phù hợp để
                trải nghiệm
              </Typography.Title>
            </Row>
          </Typography.Title>
        </Row>
        <Row
          style={{ width: "100%", justifyContent: "center", marginTop: "3rem" }}
        >
          <Space size={56}>
            <Row
              style={{
                flexDirection: "column",
                backgroundColor: "#2F2F41",
                padding: "4rem 3rem 2rem 3rem",
                borderRadius: 16,
              }}
            >
              <div>
                <img
                  style={{ width: 150, height: 76, marginBottom: "4rem" }}
                  src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/Frame.png?alt=media&token=ff8b8c06-1e7e-48d0-8e12-23f4d594b60d"
                />
              </div>
              <Button
                style={{
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#FF7506",
                }}
                size="large"
              >
                Tạo Upload
              </Button>
            </Row>
            <Row
              style={{
                flexDirection: "column",
                backgroundColor: "#2F2F41",
                padding: "4rem 3rem 2rem 3rem",
                borderRadius: 16,
              }}
            >
              <div>
                <img
                  style={{
                    width: 150,
                    height: 76,
                    marginBottom: "4rem",
                    objectFit: "contain",
                  }}
                  src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/pngegg%20(1)%201.png?alt=media&token=67578f7e-6eb9-44dc-a797-1d19346ffaf8"
                />
              </div>
              <Button
                style={{
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#FF7506",
                }}
                size="large"
              >
                Tạo App Window
              </Button>
            </Row>
            <Row
              style={{
                flexDirection: "column",
                backgroundColor: "#2F2F41",
                padding: "4rem 3rem 2rem 3rem",
                borderRadius: 16,
              }}
            >
              <div>
                <img
                  style={{
                    width: 150,
                    height: 76,
                    marginBottom: "4rem",
                    objectFit: "contain",
                  }}
                  src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/Mask%20Group.png?alt=media&token=9b284170-dd3c-4121-81fd-0855ec49e29c"
                />
              </div>
              <Button
                style={{
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#FF7506",
                }}
                size="large"
              >
                Tạo App Android
              </Button>
            </Row>
          </Space>
        </Row>
      </Row>
    </div>
  );
};

export default Download;
