import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Col, Row, Typography, Table } from "antd";
import { useAppSelector } from "../../../store/hook";
import { MyInput } from "../../Manage/HopDong/Detail";
import { MyInputDate } from "../../Manage/HopDong/DetailUpdate";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import { ColumnsType } from "antd/es/table";
import { lsdsApi } from "../../../api/lsdsApi";
import { IconMenu } from "../../Home";
import { AiOutlineExport } from "react-icons/ai";

interface ILsdsDetail {
  id: number;
  name: string;
  total: number;
  doanhThu: string;
  bieuDien: string;
  sanXuat: string;
  vcpmc: string;
}

const Detail: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<ILsdsDetail[]>([]);

  useEffect(() => {
    lsdsApi
      .getAllDetail()
      .then((res) => res.data)
      .then((data) => {
        setData(data.data[0]);
      });
  }, []);

  const columns: ColumnsType<ILsdsDetail> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên bài hát",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tổng số lượt phát",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Tổng doanh thu",
      dataIndex: "doanhThu",
      key: "doanhThu",
    },
    {
      title: "Quyền biểu diễn",
      dataIndex: "bieuDien",
      key: "bienDien",
    },
    {
      title: "Quyền sản xuất",
      dataIndex: "sanXuat",
      key: "sanXuat",
    },
    {
      title: "VCPMC",
      dataIndex: "vcpmc",
      key: "vcpmc",
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
            title: "Báo cáo doanh thu",
          },
          {
            title: "Báo cáo chi tiết",
          },
          {
            title: "Chi tiết doanh thu"
          }
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
          Hợp đồng HD123 - Kỳ tháng 06/2021
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <Col span={9} style={{ paddingRight: ".5rem" }}>
            <Row
              style={{
                width: "100%",
                marginBottom: "1rem",
                backgroundColor: "#2B2B3F",
                padding: "1rem",
                borderRadius: 12,
              }}
            >
              <Typography.Title
                style={{
                  ...textFont("1.25rem"),
                  fontWeight: 700,
                  color: "#FF7506",
                  margin: "0 0 1rem 0",
                }}
              >
                Thông tin hợp đồng
              </Typography.Title>
              <Row style={{ width: "100%" }}>
                <MyInput title="Số hợp đồng" label="HĐ123" />
                <MyInput title="Đơn vị khai thác" label="Công ty TNHH ABC" />
                <MyInput title="Loại hợp đồng" label="Trọn gói" />
                <MyInput title="Hiệu lực từ" label="01/01/2020" />
                <MyInput title="Ngày hết hạn" label="01/01/2022" />
                <MyInput title="Giá trị hợp đồng" label="730.000.000 VNĐ" />
                <MyInput
                  title="Giá trị phân phối theo ngày"
                  label="365.000.000 VNĐ"
                />
              </Row>
            </Row>
            <Row
              style={{
                width: "100%",
                marginBottom: "1rem",
                backgroundColor: "#2B2B3F",
                padding: "1rem",
                borderRadius: 12,
              }}
            >
              <Typography.Title
                style={{
                  ...textFont("1.25rem"),
                  fontWeight: 700,
                  color: "#FF7506",
                  margin: "0 0 1rem 0",
                }}
              >
                Thông tin đổi soát
              </Typography.Title>
              <Row style={{ width: "100%" }}>
                <MyInput title="Ký đối soát" label="01/01/2020" />
                <MyInput title="Số bài hát:" label="13 bài" />
                <MyInput title="Tổng số lượt phát" label="200.000 lượt" />
                <MyInput title="Tổng doanh thu" label="300.000.000 VNĐ" />
                <MyInput
                  title="Doanh thu chưa phân phối"
                  label="1.000.000 VNĐ"
                />
                <MyInput title="Trạng thái đối soát" label="Đã đổi soát" />
                <MyInput title="Ngày thực hiện" label="22/04/2021" />
              </Row>
            </Row>
          </Col>
          <Col span={15} style={{ paddingLeft: ".5rem" }}>
            <Row
              style={{ width: "100%", fontSize: "1.15rem", fontWeight: 600 }}
            >
              Danh sách bản ghi
            </Row>
            <Row
              style={{
                width: "100%",
                margin: "1rem 0 .5rem 0",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <MyInputDate label="xem theo ngày/tuần" required={false} />
              </div>
              <div>
                <InputField
                  style={{
                    width: 300,
                    backgroundColor: "#2B2B3F",
                  }}
                  placeholder="Nhập tên tài khoản quản trị"
                  suffix={<BiSearch style={{ width: 24, height: 24 }} />}
                />
              </div>
            </Row>
            <Row style={{ width: "100%", marginTop: ".5rem" }}>
              <Table
                style={{ width: "100%" }}
                columns={columns}
                dataSource={data}
              />
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
          label="Xuất file"
        />
      </Row>
    </div>
  );
};

export default Detail;