import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { Row, Typography, Col } from "antd";
import { MyInputDate } from "../../Manage/HopDong/DetailUpdate";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import TableData, { IPPDT } from "./TableData";
import { useEffect, useState } from "react";
import { ppdtApi } from "../../../api/ppdtApi";
import { AiOutlineExport } from "react-icons/ai";
import { IconMenu } from "../../Home";

const PPDoanhThu = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<IPPDT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    ppdtApi
      .getAll()
      .then((res) => res.data)
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

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
            title: "Phân phối doanh thu",
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
          Quản lý phân phối doanh thu
        </Typography.Title>
        <Row
          style={{
            width: "100%",
            margin: "1rem 0",
            justifyContent: "space-between",
          }}
        >
          <Col span={6}>
            <MyInputDate label="Theo tháng" required={false} />
          </Col>
          <Col span={8}>
            <InputField
              style={{
                width: 400,
                backgroundColor: "#2B2B3F",
              }}
              placeholder="Nhập tên bài hát"
              suffix={<BiSearch style={{ width: 24, height: 24 }} />}
            />
          </Col>
        </Row>
        <Row style={{ width: "100%", fontSize: "1.15rem", fontWeight: 600 }}>
          Danh sách hợp đồng ủy quyền
        </Row>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <TableData data={data} loading={loading} />
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
            <AiOutlineExport
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label="Xuất dữ liệu"
        />
      </Row>
    </div>
  );
};

export default PPDoanhThu;
