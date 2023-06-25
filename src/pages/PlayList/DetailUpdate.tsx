import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Space, Select, Button } from "antd";
import { useAppSelector } from "../../store/hook";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import DetailTable from "./DetailTable";
import InputField from "../../components/InputField";
import { BiSearch } from "react-icons/bi";
import {
    OPTION_PLAYLIST_MAU,
    OPTION_VIDEO_FORMAT,
} from "../../constants/option";
import { IVideoDataType } from "../Store/RowDisplay";
import { videoApi } from "../../api/video";

const DetailUpdate: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);

    const [data, setData] = useState<IVideoDataType[]>([]);
    const [dataAdd, setDataAdd] = useState<IVideoDataType[]>([]);

    const fetchData = () => {
        videoApi
            .getAll()
            .then((resp) => resp.data)
            .then((data) => {
                setData(data.data);
                setDataAdd(data.data.filter((item: any, index: number) => index < 3))
            });
    };

    useEffect(() => {
        fetchData();
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
                        title: "Playlist",
                        href: "/playlist",
                    },
                    {
                        title: "Chi tiết playlist",
                    },
                    {
                        title: "Chỉnh sửa",
                    },
                ]}
                separator=">"
            />
            <Row style={{ padding: "0 5rem 2rem 2rem", width: "100%" }}>
                <Typography.Title
                    style={{
                        ...textFont("2rem"),
                        fontWeight: 700,
                        color: "#fff",
                        margin: 0,
                    }}
                >
                    {`Thêm bản ghi`}
                </Typography.Title>
                <Row style={{ width: "100%", marginTop: "1.5rem" }}>
                    <Col span={12} style={{ paddingRight: ".75rem" }}>
                        <div
                            style={{
                                backgroundColor: "#2f2f41",
                                padding: "1rem",
                                borderRadius: 12,
                            }}
                        >
                            <Typography.Text
                                style={{
                                    ...textFont("1rem"),
                                    fontWeight: 700,
                                    color: "#fff",
                                    margin: 0,
                                }}
                            >
                                {`Kho bản ghi`}
                            </Typography.Text>
                            <Row style={{ width: "100%" }}>
                                <Space size={32}>
                                    <div>
                                        <Typography.Text
                                            style={{
                                                ...textFont(".9rem"),
                                                color: "#fff",
                                                margin: 0,
                                                opacity: 0.8,
                                                marginRight: ".5rem",
                                            }}
                                        >
                                            {`Thể loại`}
                                        </Typography.Text>
                                        <Select
                                            defaultValue={OPTION_VIDEO_FORMAT[0].value}
                                            options={OPTION_VIDEO_FORMAT}
                                            style={{
                                                width: 140,
                                                backgroundColor: "#1E1E2E",
                                                borderRadius: 8,
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Typography.Text
                                            style={{
                                                ...textFont(".9rem"),
                                                color: "#fff",
                                                margin: 0,
                                                opacity: 0.8,
                                                marginRight: ".5rem",
                                            }}
                                        >
                                            {`Playlist mẫu`}
                                        </Typography.Text>
                                        <Select
                                            defaultValue={OPTION_PLAYLIST_MAU[0].value}
                                            options={OPTION_PLAYLIST_MAU}
                                            style={{
                                                width: 160,
                                                backgroundColor: "#1E1E2E",
                                                borderRadius: 8,
                                            }}
                                        />
                                    </div>
                                </Space>
                            </Row>
                            <InputField
                                style={{
                                    padding: ".5rem 1.5rem",
                                    width: 480,
                                    backgroundColor: "#2B2B3F",
                                    opacity: 0.9,
                                }}
                                placeholder="Tên bản ghi, ca sĩ,..."
                                suffix={<BiSearch style={{ width: 24, height: 24 }} />}
                            />
                            <DetailTable data={data} height={"40vh"} action2="Thêm" />
                        </div>
                    </Col>
                    <Col span={12} style={{ paddingLeft: ".75rem" }}>
                        <div
                            style={{
                                backgroundColor: "#2f2f41",
                                padding: "1rem",
                                borderRadius: 12,
                            }}
                        >
                            <Typography.Text
                                style={{
                                    ...textFont("1rem"),
                                    fontWeight: 700,
                                    color: "#fff",
                                    margin: 0,
                                }}
                            >
                                {`Danh sách bản ghi được thêm vào playlist`}
                            </Typography.Text>
                            <Row style={{ width: "100%", margin: ".5rem 0" }}>
                                <Space size={128}>
                                    <div>
                                        <Typography.Text
                                            style={{
                                                ...textFont("1rem"),
                                                fontWeight: 700,
                                                color: "#fff",
                                                margin: 0,
                                            }}
                                        >
                                            Tổng số:
                                        </Typography.Text>
                                        <span
                                            style={{
                                                ...textFont("1rem"),
                                                opacity: 0.7,
                                                marginLeft: "2rem",
                                            }}
                                        >{`3 bản ghi`}</span>
                                    </div>
                                    <div>
                                        <Typography.Text
                                            style={{
                                                ...textFont("1rem"),
                                                fontWeight: 700,
                                                color: "#fff",
                                                margin: 0,
                                            }}
                                        >
                                            Tổng thời lượng:
                                        </Typography.Text>
                                        <span
                                            style={{
                                                ...textFont("1rem"),
                                                opacity: 0.7,
                                                marginLeft: "2rem",
                                            }}
                                        >{`01:34:31`}</span>
                                    </div>
                                </Space>
                            </Row>
                            <InputField
                                style={{
                                    padding: ".5rem 1.5rem",
                                    width: 480,
                                    backgroundColor: "#2B2B3F",
                                    opacity: 0.9,
                                }}
                                placeholder="Tên bản ghi, ca sĩ,..."
                                suffix={<BiSearch style={{ width: 24, height: 24 }} />}
                            />
                            <DetailTable data={dataAdd} height={"82vh"} action2="Thêm" />
                        </div>
                    </Col>
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
                                    onClick={() => history.back()}
                                >
                                    Hủy
                                </Button>
                                <Button type="primary" style={{ width: 120 }}>
                                    Lưu
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </Row>
            </Row>
        </div>
    );
};

export default DetailUpdate;