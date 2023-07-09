import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Col, Row, Table, Typography } from "antd";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import { ColumnsType } from "antd/es/table";
import { ppdtApi } from "../../../api/ppdtApi";
import { IconMenu } from "../../Home";
import { AiOutlineExport } from "react-icons/ai";

interface ILeft {
  id: number;
  name: string;
  luotPhat: number;
  doanhThu: string;
  hanhChinhPhi: string;
  nhuanBut: string;
}

interface IRight {
  id: number;
  name: string;
  luotPhat: number;
  doanhThu: string;
}

const Detail: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [dataLeft, setDataLeft] = useState<ILeft[]>([]);
  const [dataRight, setDataRight] = useState<IRight[]>([]);

  useEffect(() => {
    ppdtApi
      .getAllLeft()
      .then((res) => res.data)
      .then((data) => {
        setDataLeft(data.data[0]);
      });
    ppdtApi
      .getAllRight()
      .then((res) => res.data)
      .then((data) => {
        setDataRight(data.data[0]);
      });
  }, []);

  const columnsLeft: ColumnsType<ILeft> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Bài hát",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số lươt phát(VNĐ)",
      dataIndex: "luotPhat",
      key: "luotPhat",
    },
    {
      title: "Hành chính phí(VNĐ)",
      dataIndex: "hanhChinhPhi",
      key: "hanhChinhPhi",
    },
    {
      title: "Nhuận but(VNĐ)",
      dataIndex: "nhuanBut",
      key: "nhuanBut",
    },
  ];

  const columnsRight: ColumnsType<IRight> = [
    {
      title: "Đơn vị khai thác",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số lượt phát",
      dataIndex: "luotPhat",
      key: "luotPhat",
    },
    {
      title: "Doanh thu(VNĐ)",
      dataIndex: "doanhThu",
      key: "doanhThu",
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
            title: "Doanh thu",
          },
          {
            title: "Phân phối doanh thu",
          },
          {
            title: "Chi tiết doanh thu",
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
          Hợp đồng Ủy quyền UQ123 - Quý 1
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <Col span={14}>
            <Typography.Title
              style={{
                ...textFont("1.25rem"),
                fontWeight: 600,
                color: "#fff",
                margin: 0,
              }}
            >
              Danh sách bản ghi
            </Typography.Title>
            <Row style={{ width: "100%" }}>
              <InputField
                style={{
                  width: 400,
                  backgroundColor: "#2B2B3F",
                }}
                placeholder="Nhập tên bài hát"
                suffix={<BiSearch style={{ width: 24, height: 24 }} />}
              />
            </Row>
            <Row style={{ width: "100%", paddingRight: ".5rem" }}>
              <Table
                style={{ width: "100%" }}
                columns={columnsLeft}
                dataSource={dataLeft}
              />
            </Row>
          </Col>
          <Col span={10}>
            <Typography.Title
              style={{
                ...textFont("1.25rem"),
                fontWeight: 600,
                color: "#fff",
                margin: 0,
              }}
            >
              Doanh thu bản ghi
            </Typography.Title>
            <Row style={{ width: "100%" }}>
              <Typography.Title
                style={{
                  ...textFont("1.5rem"),
                  fontWeight: 700,
                  color: "#FFAC69",
                  margin: ".5rem 0 0 0",
                }}
              >
                Cuộc gọi nhỡ
              </Typography.Title>
              <Row
                style={{
                  width: "100%",
                  paddingLeft: ".5rem",
                  marginTop: "1rem",
                }}
              >
                <Table
                  style={{ width: "100%" }}
                  columns={columnsRight}
                  dataSource={dataRight}
                />
              </Row>
            </Row>
          </Col>
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

export default Detail;
