import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { Row, Typography } from "antd";
import TableData, { Device } from "../Create/TableData";
import { useEffect, useState } from "react";
import { deviceApi } from "../../../api/device";
import { IconMenu } from "../../Home";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import ModalSchedule from "../ModalSchedule";

const ScheduleDevice = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    deviceApi
      .getAll()
      .then((resp) => resp.data)
      .then((data) => {
        setDevices(data.data);
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
            title: "Lập lịch phát",
            href: "/schedule",
          },
          {
            title: "Chi tiết",
          },
          {
            title: "Chỉnh sửa lịch phát",
          },
          {
            title: "Áp lịch cho thiết bị",
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
          Danh sách thiết bị
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <TableData data={devices} loading={loading} />
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
            <AiOutlineCheck
              style={{ width: 20, height: 20, color: "orange" }}
            />
          }
          label="Lưu"
          onClick={() => setOpenModal(true)}
        />
        <IconMenu
          icon={
            <IoMdClose style={{ width: 20, height: 20, color: "orange" }} />
          }
          label="Hủy"
          onClick={() => history.back()}
        />
      </Row>

      <ModalSchedule open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default ScheduleDevice;
