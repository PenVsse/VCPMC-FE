import { Row, Typography } from "antd";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { Select } from "antd";
import { OPTION_QSH } from "../../../constants/option";
import { useState } from "react";
import { Line } from "@ant-design/plots";
import { IconMenu } from "../../Home";
import { FaFileContract } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const OPTION_THANG = [
  {
    value: 1,
    label: "Theo tháng",
  },
  {
    value: 2,
    label: "Theo quý",
  },
];

export const OPTION_MONTH = [
  {
    value: 1,
    label: "Tháng 1",
  },
  {
    value: 2,
    label: "Tháng 2",
  },
  {
    value: 3,
    label: "Tháng 3",
  },
  {
    value: 4,
    label: "Tháng 4",
  },
  {
    value: 5,
    label: "Tháng 5",
  },
  {
    value: 6,
    label: "Tháng 6",
  },
  {
    value: 7,
    label: "Tháng 7",
  },
  {
    value: 8,
    label: "Tháng 8",
  },
  {
    value: 9,
    label: "Tháng 9",
  },
  {
    value: 10,
    label: "Tháng 10",
  },
  {
    value: 11,
    label: "Tháng 11",
  },
  {
    value: 12,
    label: "Tháng 12",
  },
];

export const OPTION_QUY = [
  {
    value: 1,
    label: "Quý 1",
  },
  {
    value: 2,
    label: "Quý 2",
  },
  {
    value: 3,
    label: "Quý 3",
  },
  {
    value: 4,
    label: "Quý 4",
  },
];

const data = Array.from({ length: 31 }, (_, index) => ({
  x: index + 1 + "",
  y: `${Math.floor(Math.random() * 11)} triệu`,
}));

const Report = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [option, setOption] = useState<number>(OPTION_THANG[0].value);

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
          Báo cáo doanh thu
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
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
        </Row>
        <Row
          style={{
            margin: "1rem 0",
            borderRadius: 12,
            backgroundColor: "#2F2F41",
            width: "100%",
            padding: "1rem 0",
          }}
        >
          <div style={{ width: "20%" }}>
            <Typography.Title
              style={{
                ...textFont("1rem"),
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              Tổng số bài hát
            </Typography.Title>
            <Typography.Title
              style={{
                ...textFont("1.2rem"),
                textAlign: "center",
                marginTop: 0,
                color: "#FFAC69",
                fontWeight: 700,
              }}
            >
              100
            </Typography.Title>
          </div>
          <div
            style={{
              width: "20%",
              borderLeft: "1px solid #79798B",
              borderRight: "1px solid #79798B",
            }}
          >
            <Typography.Title
              style={{
                ...textFont("1rem"),
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              Tổng số lượt phát
            </Typography.Title>
            <Typography.Title
              style={{
                ...textFont("1.2rem"),
                textAlign: "center",
                marginTop: 0,
                color: "#FFAC69",
                fontWeight: 700,
              }}
            >
              32.000.000
            </Typography.Title>
          </div>
          <div
            style={{
              width: "20%",
              borderLeft: "1px solid #79798B",
              borderRight: "1px solid #79798B",
            }}
          >
            <Typography.Title
              style={{
                ...textFont("1rem"),
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              Doanh thu trên lượt phát
            </Typography.Title>
            <Typography.Title
              style={{
                ...textFont("1.2rem"),
                textAlign: "center",
                marginTop: 0,
                color: "#FFAC69",
                fontWeight: 700,
              }}
            >
              1.564.745.000đ
            </Typography.Title>
          </div>
          <div
            style={{
              width: "20%",
              borderLeft: "1px solid #79798B",
              borderRight: "1px solid #79798B",
            }}
          >
            <Typography.Title
              style={{
                ...textFont("1rem"),
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              Doanh thu chưa phân phối
            </Typography.Title>
            <Typography.Title
              style={{
                ...textFont("1.2rem"),
                textAlign: "center",
                marginTop: 0,
                color: "#FFAC69",
                fontWeight: 700,
              }}
            >
              164.745.000đ
            </Typography.Title>
          </div>
          <div
            style={{
              width: "20%",
            }}
          >
            <Typography.Title
              style={{
                ...textFont("1rem"),
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              Hành chính phí
            </Typography.Title>
            <Typography.Title
              style={{
                ...textFont("1.2rem"),
                textAlign: "center",
                marginTop: 0,
                color: "#FFAC69",
                fontWeight: 700,
              }}
            >
              3.253.000đ
            </Typography.Title>
          </div>
        </Row>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <Typography.Title
            style={{
              ...textFont("1.2rem"),
              margin: 0,
              fontWeight: 600,
            }}
          >
            Biểu đồ theo dõi lượt phát - 29/06/2021
          </Typography.Title>
          <Row
            style={{
              width: "100%",
              backgroundColor: "#2F2F41",
              padding: "1rem",
              borderRadius: 12,
              marginTop: "1rem",
            }}
          >
            <Line
              padding={"auto"}
              xField="x"
              yField="y"
              smooth={true}
              data={data}
              style={{ width: "100%" }}
              color={"#FFAC69"}
            />
          </Row>
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
          label="Báo cáo chi tiết"
          onClick={() => navigate('detail')}
        />
      </Row>
    </div>
  );
};

export default Report;