import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import {
    Typography,
    Row,
    Col,
    Divider,
    Badge,
    Space,
    Button,
    Switch,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { playlistApi } from "../../api/playlist";
import { IPlaylistDataType } from "./RowDisplay";
import { RiEarthFill } from "react-icons/ri";
import { FaPenSquare, FaRandom } from "react-icons/fa";
import { RxLoop } from "react-icons/rx";
import DetailTable from "./DetailTable";
import { IVideoDataType } from "../Store/RowDisplay";
import { IconMenu } from "../Home";
import { BsFillTrashFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import InputField from "../../components/InputField";
import TextAreaField from "../../components/TextAreaField";

const Detail: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const params = useParams();
    const navigate = useNavigate();
    const [playlist, setPlaylist] = useState<IPlaylistDataType | null>(null);
    const [videos, setVideos] = useState<IVideoDataType[]>([]);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);

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
                            {isUpdate ? (
                                <InputField
                                    title={
                                        <Typography.Text style={{ color: "#fff", fontWeight: 600 }}>
                                            Tiêu đề:
                                            <span style={{ color: "red", marginLeft: ".25rem" }}>
                                                *
                                            </span>
                                        </Typography.Text>
                                    }
                                    style={{ borderColor: "#ccc" }}
                                    defaultValue={playlist.title}
                                />
                            ) : (
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
                            )}
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
                            {isUpdate ? (
                                <TextAreaField
                                    title={"Mô tả:"}
                                    fontWeightTitle={600}
                                    style={{
                                        borderColor: "#ccc",
                                        backgroundColor: "rgb(43, 43, 63)",
                                        color: "#fff",
                                        opacity: 0.8,
                                    }}
                                    defaultValue={
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua."
                                    }
                                />
                            ) : (
                                <Typography.Text
                                    style={{
                                        ...textFont(".9rem"),
                                        color: "#fff",
                                        margin: 0,
                                        opacity: 0.7,
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt labore et dolore magna aliqua.
                                </Typography.Text>
                            )}
                            <Divider
                                style={{
                                    backgroundColor: "#ccc",
                                    margin: ".5rem 0",
                                    opacity: 0.5,
                                }}
                            />
                            {isUpdate ? (
                                <TextAreaField
                                    title={"Chủ đề:"}
                                    fontWeightTitle={600}
                                    style={{
                                        borderColor: "#ccc",
                                        backgroundColor: "rgb(43, 43, 63)",
                                        color: "#fff",
                                        opacity: 0.8,
                                    }}
                                    defaultValue={playlist.topics}
                                />
                            ) : (
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
                            )}
                            {isUpdate ? (
                                <>
                                    <Row style={{ margin: '1rem 0' }}>
                                        <Switch defaultChecked />{" "}
                                        <Typography.Text
                                            style={{
                                                ...textFont(".9rem"),
                                                color: "#fff",
                                                fontWeight: 600,
                                                margin: 0,
                                                marginLeft: ".5rem",
                                            }}
                                        >
                                            Chế dộ công khai
                                        </Typography.Text>
                                    </Row>
                                    <Typography.Text
                                        style={{
                                            ...textFont(".75rem"),
                                            color: "#fff",
                                            fontWeight: 600,
                                            margin: 0,
                                            marginLeft: ".5rem",
                                            opacity: .7
                                        }}
                                    >
                                        <span style={{ color: "red", marginRight: ".25rem", fontSize: '1rem' }}>
                                            *
                                        </span>
                                        là những trường thông tin bắt buộc
                                    </Typography.Text>
                                </>
                            ) : (
                                <>
                                    <Divider
                                        style={{
                                            backgroundColor: "#ccc",
                                            margin: "1rem 0",
                                            opacity: 0.5,
                                        }}
                                    />
                                    <Row style={{ marginBottom: ".5rem" }}>
                                        <RiEarthFill
                                            style={{ width: 24, height: 24, opacity: 0.5 }}
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
                                </>
                            )}
                        </Col>
                        <Col span={19}>
                            <DetailTable data={videos} />
                            {isUpdate && (
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
                                                onClick={() => setIsUpdate(false)}
                                            >
                                                Hủy
                                            </Button>
                                            <Button type="primary" style={{ width: 120 }}>
                                                Lưu
                                            </Button>
                                        </Space>
                                    </Col>
                                </Row>
                            )}
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
                    {!isUpdate ? (
                        <>
                            <IconMenu
                                icon={
                                    <FaPenSquare
                                        className="root_color"
                                        style={{ width: 20, height: 20 }}
                                    />
                                }
                                label="Chỉnh sửa"
                                onClick={() => setIsUpdate(true)}
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
                        </>
                    ) : (
                        <IconMenu
                            icon={
                                <BiPlus
                                    className="root_color"
                                    style={{ width: 20, height: 20 }}
                                />
                            }
                            label="Thêm bản ghi"
                            onClick={() => navigate("update")}
                        />
                    )}
                </Row>
            </div>
        )
    );
};

export default Detail;