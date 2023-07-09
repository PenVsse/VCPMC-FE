import { Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: "3rem" }} spin />;

const SpinnerPage = () => {
  return (
    <Row
      style={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/logo_1.png?alt=media&token=5215301b-0c17-4d39-a940-c74e28c8dabf"
          }
          alt="logo"
          style={{ width: 120 }}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Spin indicator={antIcon} className="root_color" />
      </div>
    </Row>
  );
};

export default SpinnerPage;
