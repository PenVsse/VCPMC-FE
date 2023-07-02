import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hook";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { Row, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { scheduleApi } from "../../api/schedule";
import { ISchedule } from "./TableData";
import TableDataDetail, { generateRandomNumber } from "./TableDataDetail";
import { videoApi } from "../../api/video";
import { IconMenu } from "../Home";
import { BiPen, BiPencil } from "react-icons/bi";

const Detail: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const params = useParams();
    const [schedule, setSchedule] = useState<ISchedule | null>(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id)
            scheduleApi
                .getById(params.id)
                .then((resp) => resp.data)
                .then((data) => {
                    setSchedule(data.data);
                });
        videoApi.getAll()
            .then(resp => resp.data)
            .then(data => {
                const randomNumber = generateRandomNumber(0, data.data.length)
                setData(data.data.filter((_: any, index: number) => index < randomNumber));
            })
    }, [params.id]);

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
                    {schedule?.name}
                </Typography.Title>
                <Row style={{ width: "100%", margin: '1rem 0' }}>
                    <Typography.Text
                        style={{
                            ...textFont("1.25rem"),
                            fontWeight: 700,
                            color: "#fff",
                            margin: 0,
                        }}
                    >
                        Danh sách Playlist
                    </Typography.Text>
                </Row>
                <Row style={{ width: '100%' }}>
                    <TableDataDetail data={data} loading={loading} />
                </Row>
            </Row>
            <Row
                style={{
                    position: "absolute",
                    right: 0,
                    top: "18%",
                    backgroundColor: "#2F2F41",
                    padding: "1rem .5rem",
                    borderRadius: "16px 0px 0px 16px",
                    flexDirection: "column",
                }}
            >
                <IconMenu
                    icon={
                        <BiPencil
                            className="root_color"
                            style={{ width: 20, height: 20 }}
                        />
                    }
                    label="Chỉnh sửa lịch phát"
                    onClick={() => navigate("update")}
                />
            </Row>
        </div>
    );
};

export default Detail;