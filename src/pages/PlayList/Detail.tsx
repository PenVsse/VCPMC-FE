import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import { Typography, Row, Col, Divider, Badge } from "antd";
import { useParams } from "react-router-dom";
import { playlistApi } from "../../api/playlist";
import { IPlaylistDataType } from "./RowDisplay";
import { RiEarthFill } from "react-icons/ri";
import { FaPenSquare, FaRandom } from "react-icons/fa";
import { RxLoop } from "react-icons/rx";
import DetailTable from "./DetailTable";
import { IVideoDataType } from "../Store/RowDisplay";
import { IconMenu } from "../Home";
import { BsFillTrashFill } from "react-icons/bs";

const Detail: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const params = useParams();
    const [playlist, setPlaylist] = useState<IPlaylistDataType | null>(null);
    const [videos, setVideos] = useState<IVideoDataType[]>([]);

    const fetchData = () => {
        if (params.id) {
            playlistApi
                .getById(params.id)
                .then((resp) => resp.data)
                .then((data) => {
                    setVideos(
                        data.data.BanGhiPlaylists.map((banghi: any) => banghi.BanGhi)
                    );

                    setPlaylist({
                        id: data.data.id,
                        title: data.data.title,
                        numberPlaylist: data.data.BanGhiPlaylists.length,
                        time: data.data.BanGhiPlaylists[
                            data.data.BanGhiPlaylists.length - 1
                        ]?.BanGhi?.time,
                        topics: data.data.topics,
                        createdAt: data.data.createdAt,
                        creater: data.data.creater,
                        picture: data.data.BanGhiPlaylists[0]?.BanGhi?.picture,
                    } as IPlaylistDataType);
                });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(playlist);

    return (
        playlist && (
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
                            title: "Chi tiết Playlist",
                        },
                    ]}
                    separator=">"
                />
                <Row style={{ padding: "0 7rem 2rem 2rem", width: "100%" }}>
                    <Typography.Title
                        style={{
                            ...textFont("2rem"),
                            fontWeight: 700,
                            color: "#fff",
                            margin: 0,
                        }}
                    >
                        {`Playlist ${playlist.title}`}
                    </Typography.Title>
                    <Row style={{ width: "100%", marginTop: "1rem" }}>
                        <Col span={5} style={{ paddingRight: "1rem" }}>
                            <img
                                style={{
                                    width: "100%",
                                    height: "220px",
                                    borderRadius: 8,
                                }}
                                alt="image"
                                src={
                                    playlist.picture ||
                                    "https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/Frame%20485.png?alt=media&token=ed08d6be-2840-47a1-a59f-04a4da1d2b1f"
                                }
                            />
                            <Typography.Text
                                style={{
                                    ...textFont("1.25rem"),
                                    fontWeight: 700,
                                    color: "#fff",
                                    margin: 0,
                                }}
                            >
                                {playlist.title}
                            </Typography.Text>
                            <Divider
                                style={{
                                    backgroundColor: "#ccc",
                                    margin: ".5rem 0",
                                    opacity: 0.5,
                                }}
                            />
                            <Row style={{ width: "100%", marginBottom: ".5rem" }}>
                                <Col span={12}>
                                    <Typography.Text
                                        style={{
                                            ...textFont(".9rem"),
                                            fontWeight: 700,
                                            color: "#fff",
                                            margin: 0,
                                        }}
                                    >
                                        Người tạo:
                                    </Typography.Text>
                                </Col>
                                <Col span={12}>
                                    <Typography.Text
                                        style={{
                                            ...textFont(".9rem"),
                                            color: "#fff",
                                            margin: 0,
                                            opacity: 0.7,
                                        }}
                                    >
                                        {playlist.creater}
                                    </Typography.Text>
                                </Col>
                            </Row>
                            <Row style={{ width: "100%", marginBottom: ".5rem" }}>
                                <Col span={12}>
                                    <Typography.Text
                                        style={{
                                            ...textFont(".9rem"),
                                            fontWeight: 700,
                                            color: "#fff",
                                            margin: 0,
                                        }}
                                    >
                                        Tổng số:
                                    </Typography.Text>
                                </Col>
                                <Col span={12}>
                                    <Typography.Text
                                        style={{
                                            ...textFont(".9rem"),
                                            color: "#fff",
                                            margin: 0,
                                            opacity: 0.7,
                                        }}
                                    >
                                        {`${playlist.numberPlaylist} bản ghi`}
                                    </Typography.Text>
                                </Col>
                            </Row>
                            <Row style={{ width: "100%", marginBottom: ".5rem" }}>
                                <Col span={12}>
                                    <Typography.Text
                                        style={{
                                            ...textFont(".9rem"),
                                            fontWeight: 700,
                                            color: "#fff",
                                            margin: 0,
                                        }}
                                    >
                                        Tổng thời lượng:
                                    </Typography.Text>
                                </Col>
                                <Col span={12}>
                                    <Typography.Text
                                        style={{
                                            ...textFont(".9rem"),
                                            color: "#fff",
                                            margin: 0,
                                            opacity: 0.7,
                                        }}
                                    >
                                        {playlist.time}
                                    </Typography.Text>
                                </Col>
                            </Row>
                            <Divider
                                style={{
                                    backgroundColor: "#ccc",
                                    margin: ".5rem 0",
                                    opacity: 0.5,
                                }}
                            />
                            <Typography.Text
                                style={{
                                    ...textFont(".9rem"),
                                    color: "#fff",
                                    margin: 0,
                                    opacity: 0.7,
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt labore et dolore magna aliqua.
                            </Typography.Text>
                            <Divider
                                style={{
                                    backgroundColor: "#ccc",
                                    margin: ".5rem 0",
                                    opacity: 0.5,
                                }}
                            />
                            <Row style={{ width: "100%" }}>
                                {playlist.topics.split(",").map((topic) => (
                                    <div>
                                        <Badge
                                            status="processing"
                                            color="#347AFF"
                                            style={{ margin: "0 .25rem 0 1rem" }}
                                        />
                                        {topic.trim()}
                                    </div>
                                ))}
                            </Row>
                            <Divider
                                style={{
                                    backgroundColor: "#ccc",
                                    margin: "1rem 0",
                                    opacity: 0.5,
                                }}
                            />
                            <Row style={{ marginBottom: ".5rem" }}>
                                <RiEarthFill style={{ width: 24, height: 24, opacity: 0.5 }} />
                                <Typography.Text
                                    style={{
                                        ...textFont(".9rem"),
                                        color: "#fff",
                                        margin: 0,
                                        opacity: 0.7,
                                        marginLeft: ".5rem",
                                    }}
                                >
                                    Hiển thị ở chế độ công khai
                                </Typography.Text>
                            </Row>
                            <Row style={{ marginBottom: ".5rem" }}>
                                <FaRandom
                                    className="root_color"
                                    style={{ width: 20, height: 20, opacity: 0.5 }}
                                />
                                <Typography.Text
                                    style={{
                                        ...textFont(".9rem"),
                                        color: "#fff",
                                        margin: 0,
                                        opacity: 0.7,
                                        marginLeft: ".5rem",
                                    }}
                                >
                                    Phát ngẫu nhiên
                                </Typography.Text>
                            </Row>
                            <Row style={{ marginBottom: ".5rem" }}>
                                <RxLoop style={{ width: 20, height: 20, opacity: 0.5 }} />
                                <Typography.Text
                                    style={{
                                        ...textFont(".9rem"),
                                        color: "#fff",
                                        margin: 0,
                                        opacity: 0.7,
                                        marginLeft: ".5rem",
                                    }}
                                >
                                    Lặp lại
                                </Typography.Text>
                            </Row>
                        </Col>
                        <Col span={19}>
                            <DetailTable data={videos} />
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
                            <FaPenSquare
                                className="root_color"
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        label="Chỉnh sửa"
                    />
                    <IconMenu
                        icon={
                            <BsFillTrashFill
                                className="root_color"
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        label="Xóa Playlist"
                    />
                </Row>
            </div>
        )
    );
};

export default Detail;