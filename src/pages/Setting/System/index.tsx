import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Row, Typography, Col, Image, Select, Space } from "antd";
import { useAppSelector } from "../../../store/hook";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const System = () => {
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
            title: "Cài đặt hệ thống",
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
        <Row style={{ marginTop: "1rem", width: "100%" }}>
          <Col span={10}>
            <Image
              style={{ borderRadius: 12 }}
              src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/system_1.png?alt=media&token=dde151de-ef91-41e6-af62-a0b9fa94e53a"
            />
            <Row
              style={{
                ...textFont("1rem"),
                marginTop: ".5rem",
                justifyContent: "center",
              }}
            >
              Theme 1
            </Row>
            <Row
              style={{ width: "100%", alignItems: "center", margin: "2rem 0" }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Ngôn ngữ hiển thị:
              </Col>
              <Col span={16}>
                <Select
                  options={[
                    { value: 1, label: "Tiếng Việt" },
                    { value: 2, label: "Tiếng Anh" },
                  ]}
                  style={{ color: "#FFF", width: 220, borderColor: "#727288" }}
                  value={1}
                />
              </Col>
            </Row>
          </Col>
          <Col span={14} style={{ paddingLeft: "2rem", height: 300 }}>
            <Row
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Space size={24}>
                <div>
                  <MdKeyboardArrowLeft style={{ width: 50, height: 50 }} />
                </div>
                <div style={{ width: 170 }}>
                  <Image src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/system_2.png?alt=media&token=d400b3cb-3f87-405d-88d7-247a18c44c34" />
                  <Row
                    style={{
                      ...textFont("1rem"),
                      justifyContent: "center",
                      marginTop: ".5rem",
                    }}
                  >
                    Theme 2
                  </Row>
                </div>
                <div style={{ width: 170 }}>
                  <Image src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/system_3.png?alt=media&token=21400e1b-25be-412c-9820-219614ceb048" />
                  <Row
                    style={{
                      ...textFont("1rem"),
                      justifyContent: "center",
                      marginTop: ".5rem",
                    }}
                  >
                    Theme 3
                  </Row>
                </div>
                <div style={{ width: 170 }}>
                  <Image src="https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/system_4.png?alt=media&token=281db234-4ad0-4de3-911f-54f837323f46" />
                  <Row
                    style={{
                      ...textFont("1rem"),
                      justifyContent: "center",
                      marginTop: ".5rem",
                    }}
                  >
                    Theme 4
                  </Row>
                </div>
                <div>
                  <MdKeyboardArrowRight style={{ width: 50, height: 50 }} />
                </div>
              </Space>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default System;
