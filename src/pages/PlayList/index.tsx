import React, { useEffect, useState } from "react";
import { Row, Typography, Col, Space } from "antd";
import { useAppSelector } from "../../store/hook";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import InputField from "../../components/InputField";
import { BiSearch } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import RowDisplay, { IPlaylistDataType } from "./RowDisplay";
import GridDisplay from "./GridDisplay";
import { playlistApi } from "../../api/playlist";
import { IconMenu } from "../Home";
import { useNavigate } from "react-router-dom";
import { MdPlaylistAdd } from "react-icons/md";

const PlayList: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const [isRow, setIsRow] = useState<boolean>(true);
    const [data, setData] = useState<IPlaylistDataType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const fetchData = () => {
        setLoading(true);
        playlistApi
            .getAll()
            .then((resp) => resp.data)
            .then((data) => {
                setData(
                    data.data.map((playlist: any) => ({
                        id: playlist.id,
                        title: playlist.title,
                        numberPlaylist: playlist.BanGhiPlaylists.length,
                        time: playlist.BanGhiPlaylists[playlist.BanGhiPlaylists.length - 1]
                            ?.BanGhi?.time,
                        topics: playlist.topics,
                        createdAt: playlist.createdAt,
                        creater: playlist.creater,
                        picture: playlist.BanGhiPlaylists[0]?.BanGhi?.picture
                    }))
                );
            })
            .finally(() => {
                setLoading(false);
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
                    Playlist
                </Typography.Title>
                <Row style={{ width: "100%" }}>
                    <Col
                        span={24}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <InputField
                            style={{
                                padding: ".5rem 1.5rem",
                                width: 400,
                                backgroundColor: "#2B2B3F",
                            }}
                            placeholder="Tên chủ đề, người tạo,..."
                            suffix={<BiSearch style={{ width: 24, height: 24 }} />}
                        />
                        <div style={{ marginRight: "1rem" }}>
                            <Space size={12}>
                                <FaListUl
                                    style={{
                                        width: 20,
                                        height: 20,
                                        cursor: "pointer",
                                        color: isRow ? "#FF9138" : "#FFFFFF",
                                    }}
                                    onClick={() => setIsRow(true)}
                                />
                                <AiOutlineAppstore
                                    style={{
                                        width: 28,
                                        height: 28,
                                        cursor: "pointer",
                                        color: !isRow ? "#FF9138" : "#FFFFFF",
                                    }}
                                    onClick={() => setIsRow(false)}
                                />
                            </Space>
                        </div>
                    </Col>
                    <Col span={24} style={{ marginTop: "1rem" }}>
                        {isRow ? (
                            <RowDisplay data={data} loading={loading} />
                        ) : (
                            <GridDisplay data={data} />
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
                <IconMenu
                    icon={
                        <MdPlaylistAdd
                            className="root_color"
                            style={{ width: 20, height: 20 }}
                        />
                    }
                    label="Thêm Playlist"
                    onClick={() => navigate("create")}
                />
            </Row>
        </div>
    );
};

export default PlayList;