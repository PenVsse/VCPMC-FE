import {
  Row,
  Typography,
  Col,
  Space,
  Button,
  Select,
  Switch,
  Table,
  Radio,
  Modal,
} from "antd";
import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import TableData, { IDevice } from "./TableData";
import { deviceApi } from "../../../api/device";
import { IconMenu } from "../../Home";
import { AiFillLock, AiOutlinePlus } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const OPTION_DEVICE_TYPE_ACCOUNT = [
  {
    value: 0,
    label: "Tất cả",
  },
  {
    value: 1,
    label: "Công ty TMCP Bách Hóa Xanh",
  },
  {
    value: 2,
    label: "Công ty TNHH XYZ",
  },
  {
    value: 3,
    label: "Công ty TMCP Adora",
  },
];

const Device: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [data, setData] = useState<IDevice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    deviceApi
      .getAll()
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        setData(data.data);
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
      <MyBreadcrumb user={user} items={[]} />
      <Row style={{ padding: "0 7rem 0 2rem", width: "100%" }}>
        <Typography.Title
          style={{
            ...textFont("2rem"),
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          Danh sách thiết bị
        </Typography.Title>
        <Row
          style={{
            width: "100%",
            margin: "1rem 0",
            justifyContent: "space-between",
          }}
        >
          <Space size={20}>
            <Select
              style={{
                width: 200,
              }}
              placeholder="Chọn nhóm tài khoản"
              options={OPTION_DEVICE_TYPE_ACCOUNT}
            />
            <Select
              style={{
                width: 200,
              }}
              placeholder="Ẩn hiện cột"
            />
          </Space>
          <InputField
            style={{
              padding: ".5rem 1.5rem",
              width: 400,
              backgroundColor: "#2B2B3F",
            }}
            placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
            suffix={<BiSearch style={{ width: 24, height: 24 }} />}
          />
        </Row>
        <Row style={{ width: "100%" }}>
          <TableData data={data} loading={loading} setDisable={setDisable} />
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
            <AiOutlinePlus
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label="Thêm Thiết bị"
          onClick={() => navigate('create')}
        />
        <IconMenu
          icon={
            <FaPowerOff
              className="root_color"
              style={
                disable
                  ? { width: 20, height: 20, opacity: 0.3, cursor: "noDrop" }
                  : { width: 20, height: 20 }
              }
            />
          }
          label="Kích hoạt thiết bị"
        />
        <IconMenu
          icon={
            <AiFillLock
              className="root_color"
              style={
                disable
                  ? { width: 20, height: 20, opacity: 0.3, cursor: "noDrop" }
                  : { width: 20, height: 20 }
              }
            />
          }
          label="Khóa thiết bị"
        />
        <IconMenu
          icon={
            <BsFillTrash3Fill
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label="Xóa thiết bị"
          onClick={() => setIsOpenDelete(true)}
        />
      </Row>

      <Modal
        open={isOpenDelete}
        onCancel={() => setIsOpenDelete(false)}
        footer={null}
        width={340}
      >
        <Typography.Title
          style={{ fontSize: "1.5rem", color: "#FFF", textAlign: "center" }}
        >
          Xóa thiết bị
        </Typography.Title>
        <Row style={{ width: "100%", color: '#FFF', margin: '1rem 0' }}>
          Bạn có chắc chắn muốn xoá các thiết bị này? Hành động này không thể
          hoàn tác.
        </Row>
        <Row style={{ width: "100%" }}>
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
                onClick={() => setIsOpenDelete(false)}
              >
                Hủy
              </Button>
              <Button type="primary" style={{ width: 120 }}>
                Xóa
              </Button>
            </Space>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default Device;
