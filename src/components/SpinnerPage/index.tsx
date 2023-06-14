import { Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import logo from "../../../public/images/logo_1.png";

const antIcon = <LoadingOutlined style={{ fontSize: '3rem' }} spin />;

const SpinnerPage = () => {
  return (
    <Row style={{
      width: '100vw',
      height: '100vh',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>
        <img src={logo} alt="logo" style={{ width: 120 }} />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Spin indicator={antIcon} className="root_color" />
      </div>
    </Row>
  );
};

export default SpinnerPage;
