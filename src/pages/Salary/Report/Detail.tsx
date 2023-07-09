import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Row, Typography, Col, Select, Table, Space, Modal, Button } from "antd";
import { useAppSelector } from "../../../store/hook";
import { useEffect, useState } from "react";
import { OPTION_MONTH, OPTION_QUY, OPTION_THANG } from ".";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { lsdsApi } from "../../../api/lsdsApi";
import { IconMenu } from "../../Home";
import { FaFileContract } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";

interface IDetail {
  id: string;
  name: string;
  from: string;
  to: string;
  typeHD: string;
  tongLuotPhat: string;
  day: string;
}

const Detail = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [option, setOption] = useState<number>(1);
  const [data, setData] = useState<IDetail[]>([]);

  useEffect(() => {
    lsdsApi
      .getAll()
      .then((res) => res.data)
      .then((data) => {
        setData(data.data);
      });
  }, []);

  const columns: ColumnsType<IDetail> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Số hợp đồng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Đơn vị khai thác",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Thời hạn hợp đồng",
      dataIndex: "thoiHan",
      key: "thoiHan",
      render: (_, record) =>
        `${record.from.slice(0, 10).replaceAll("-", "/")}-${record.to
          .slice(0, 10)
          .replaceAll("-", "/")}`,
    },
    {
      title: "Loại hợp đồng",
      dataIndex: "typeHD",
      key: "typeHD",
      render: (value) => (value === "1" ? "Trọn gói" : "Theo lượt phát"),
    },
    {
      title: "Số thiết bị đã đồng bộ",
      dataIndex: "device",
      key: "device",
      render: () => {
        const numRan = Math.floor(Math.random() * 32);
        const numTo = Math.floor(Math.random() * numRan);

        return (
          <div
            style={{ color: numRan === numTo ? "red" : "#ccc" }}
          >{`${numTo}/${numRan}`}</div>
        );
      },
    },
    {
      title: "Tổng lượt phát",
      dataIndex: "tongLuotPhat",
      key: "tongLuotPhat",
    },
    {
      title: "Ngày chốt đổi soát",
      dataIndex: "day",
      key: "day",
      render: (value) => value.slice(0, 10).replaceAll("-", "/"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size={24}>
          <Link
            to={`detail/${record.id}`}
            style={{ color: "orange", textDecoration: "underline" }}
          >
            Chi tiết doanh thu
          </Link>
          <Link
            to={`detail/${record.id}`}
            style={{ color: "orange", textDecoration: "underline" }}
          >
            Lịch sử đồng bộ trên thiết bị
          </Link>
        </Space>
      ),
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
          Doanh thu theo hợp đồng khai thác
        </Typography.Title>
        <Row
          style={{
            width: "100%",
            marginBottom: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>
            <Typography.Text style={{ ...textFont("1rem"), fontWeight: 600 }}>
              Theo tháng:
            </Typography.Text>
            <Select
              options={OPTION_THANG}
              defaultValue={option}
              style={{
                width: 180,
                marginLeft: ".75rem",
              }}
              onChange={(e) => setOption(e)}
            />

            <Select
              options={option === 1 ? OPTION_MONTH : OPTION_QUY}
              defaultValue={1}
              style={{
                width: 180,
                marginLeft: "2rem",
              }}
              onChange={(e) => setOption(e)}
            />
          </span>
          <InputField
            style={{
              width: 400,
              backgroundColor: "#2B2B3F",
            }}
            placeholder="Nhập tên người dùng"
            suffix={<BiSearch style={{ width: 24, height: 24 }} />}
          />
        </Row>
        <Row style={{ width: "100%" }}>
          <Table
            style={{ width: "100%" }}
            columns={columns}
            dataSource={data}
          />
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
            <FaFileContract
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label="Chốt doanh thu"
          onClick={() => setOpenModal(true)}
        />
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

      <Modal
        footer={null}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <Row
          style={{
            width: "100%",
            ...textFont("1.4rem"),
            fontWeight: 600,
            justifyContent: "center",
          }}
        >
          Chốt doanh thu
        </Row>
        <Row
          style={{
            width: "100%",
            ...textFont(".9rem"),
            opacity: 0.7,
            margin: "1rem 0",
          }}
        >
          Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021 trên tất
          cả các hợp đồng sử dụng.
        </Row>
        <Row style={{ width: "100%", ...textFont(".9rem"), opacity: 0.7 }}>
          {`Nhấn <Tiếp tục> để chốt doanh thu.`}
        </Row>
        <Row style={{ width: "100%", ...textFont(".9rem"), opacity: 0.7 }}>
          {`Nhấn <Hủy> để hủy bỏ và không chốt doanh thu.`}
        </Row>
        <Row style={{ width: "100%", marginTop: '2rem' }}>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
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
                onClick={() => setOpenModal(false)}
              >
                Hủy
              </Button>
              <Button
                type="primary"
                style={{ width: 120 }}
              >
                Tiếp tục
              </Button>
            </Space>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default Detail;
