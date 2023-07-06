import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hook";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { Row, Typography } from "antd";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import TableData, { IDonViSuDung } from "./TableData";
import { unitUsedApi } from "../../../api/unitUsedApi";
import { IconMenu } from "../../Home";
import { AiOutlineClose } from "react-icons/ai";

const DonViSuDung: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<IDonViSuDung[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    unitUsedApi
      .getAll()
      .then((res) => res.data)
      .then((data) => setData(data.data));
    setLoading(false);
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
            title: "Quản lý hợp đồng",
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
          Danh sách đơn vị sử dụng
        </Typography.Title>
        <Row style={{ width: "100%" }}>
          <InputField
            style={{
              padding: ".5rem 1.5rem",
              width: 400,
              backgroundColor: "#2B2B3F",
            }}
            placeholder="Tên khoản giá trị, số hợp đồng,..."
            suffix={<BiSearch style={{ width: 24, height: 24 }} />}
          />
        </Row>
        <Row style={{ marginTop: "1rem", width: "100%" }}>
          <TableData data={data} loading={loading} />
        </Row>
      </Row>

      <Row
        style={{
          position: "absolute",
          right: 0,
          top: "20%",
          backgroundColor: "#2F2F41",
          padding: "1rem .5rem",
          borderRadius: "16px 0px 0px 16px",
          flexDirection: "column",
        }}
      >
        <IconMenu
          icon={
            <AiOutlineClose
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label="Xóa"
        />
      </Row>
    </div>
  );
};

export default DonViSuDung;
