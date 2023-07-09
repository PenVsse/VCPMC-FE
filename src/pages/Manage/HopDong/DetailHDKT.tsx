import React from "react";
import { useAppSelector } from "../../../store/hook";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Row, Typography, Col, Badge } from "antd";
import { MyInput } from "./Detail";
import { BsFileEarmarkPdf, BsFileEarmarkWord } from "react-icons/bs";
import TextArea from "antd/es/input/TextArea";

const DetailHDKT: React.FC = () => {
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
            title: "Quản lý",
          },
          {
            title: "Quản lý hợp đồng",
            href: "/management-contract",
          },
          {
            title: "Chi tiết",
          },
        ]}
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
          {`Hợp đồng khai thác - HD123`}
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <Col span={8}>
            <MyInput title="Tên hợp đồng" label="Hợp đồng kinh doanh" />
            <MyInput title="Số hợp đồng" label="123" />
            <MyInput title="Ngày hiệu lực" label="02/06/2021" />
            <MyInput title="Ngày hết hạn:" label="02/06/2021" />
          </Col>
          <Col span={8}>
            <MyInput
              title="Đính kèm tệp"
              label={
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: ".5rem 0",
                    }}
                  >
                    <BsFileEarmarkWord
                      style={{ width: 20, height: 20, marginRight: ".5rem" }}
                    />{" "}
                    hetthuongcannho.doc
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: ".5rem 0",
                    }}
                  >
                    <BsFileEarmarkPdf
                      style={{ width: 20, height: 20, marginRight: ".5rem" }}
                    />{" "}
                    hetthuongcannho.doc
                  </div>
                </div>
              }
            />
          </Col>
          <Col span={8}>
            <MyInput title="Loại hợp đồng" label="Trọn gói" />
            <MyInput title="Giá trị hợp đồng (VNĐ)" label="365.000.000" />
            <MyInput
              title="Tình trạng"
              label={
                <>
                  <Badge
                    status="processing"
                    color="#347AFF"
                    style={{ marginRight: ".25rem" }}
                  />
                  Đang hiệu lực
                </>
              }
            />
          </Col>
        </Row>
        <Row style={{ width: "100%", marginTop: "5rem" }}>
          <Col span={8}>
            <MyInput
              title="Tên đơn vị sử dụng"
              label="Công ty TNHH MTV Âu Lạc"
            />
            <MyInput title="Người đại diện" label="Nguyễn văn A" />
            <MyInput title="Chức vụ" label="Giám đốc" />
            <MyInput title="Ngày sinh" label="01/05/1984" />
            <MyInput title="Quốc tịch" label="Việt Nam" />
            <MyInput title="Số điện thoại" label="123456789012" />
            <MyInput title="Email" label="nguyenvana@gmail.com" />
          </Col>
          <Col span={8}>
            <MyInput title="Giới tính" label="Nam" />
            <MyInput title="CMND/CCCD" label="123456789012" />
            <MyInput title="Ngày cấp" label="02/06/2005" />
            <MyInput title="Nơi cấp" label="Tp.Hồ Chí Minh" />
            <MyInput title="Mã số thuế" label="123456789012" />
            <MyInput
              title="Nơi cư trú"
              label="69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
            />
          </Col>
          <Col span={8}>
          <MyInput title="Tên đăng nhập" label="vuonganhtu123" />
          <MyInput title="Mật khẩu" label="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" />
          <MyInput title="Số tài khoản" label="123456789012" />
          <MyInput title="Ngân hàng" label="ACB - Ngân hàng TMCP Á Châu" />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default DetailHDKT;
