import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Col, Row, Typography } from "antd";
import { useAppSelector } from "../../../store/hook";
import { MyInputDate } from "../../Manage/HopDong/DetailUpdate";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import TableData, { ILsdp } from "./TableData";
import { lsdsApi } from "../../../api/lsdsApi";

const LSDS: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<ILsdp[]>([]);

  useEffect(() => {
    lsdsApi
      .getAll()
      .then((res) => res.data)
      .then((data) => setData(data.data));
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
            title: "Doanh thu",
          },
          {
            title: "Lịch sử đổi soát",
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
            margin: "1rem 0 .5rem 0",
            justifyContent: "space-between",
          }}
        >
          <Col span={10}>
            <MyInputDate label="Thời gian thực hiện" required={false} />
          </Col>
          <Col span={8}>
            <InputField
              style={{
                width: 400,
                backgroundColor: "#2B2B3F",
              }}
              placeholder="Nhập tên tài khoản quản trị"
              suffix={<BiSearch style={{ width: 24, height: 24 }} />}
            />
          </Col>
        </Row>
        <Row style={{ width: "100%", fontSize: "1.15rem", fontWeight: 600 }}>
          Danh sách hợp đồng ủy quyền
        </Row>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <TableData data={data} />
        </Row>
      </Row>
    </div>
  );
};

export default LSDS;
