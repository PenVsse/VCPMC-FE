import React, { useEffect, useState } from "react";
import { Row, Typography } from "antd";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import TableData, { ISchedule } from "./TableData";
import { scheduleApi } from "../../api/schedule";
import { IconMenu } from "../Home";
import { MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Schedule: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetching = () => {
    setLoading(true);
    scheduleApi
      .getAll()
      .then((resp) => resp.data)
      .then((data) => {
        setSchedules(data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetching();
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
      <MyBreadcrumb user={user} />
      <Row style={{ padding: "0 7rem 0 2rem", width: "100%" }}>
        <Typography.Title
          style={{
            ...textFont("2rem"),
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          Danh sách lịch phát
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <TableData data={schedules} loading={loading} />
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
            <MdPlaylistAdd className="root_color" style={{ width: 20, height: 20 }} />
          }
          label="Thêm lịch phát"
          onClick={() => navigate("create")}
        />
      </Row>
    </div>
  );
};

export default Schedule;