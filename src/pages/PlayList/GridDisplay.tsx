import React from "react";
import { IPlaylistDataType, TopicComponent } from "./RowDisplay";
import { Card, Col, Row, Space } from "antd";
import { textFont } from "../../components/MyBreadcrumb";
import styled from "styled-components";
import { TbAlertCircle } from "react-icons/tb";

interface IGridDisplayProps {
    data: IPlaylistDataType[];
}

interface IMyCardProps {
    playlist: IPlaylistDataType;
}

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0.75rem !important;
  }
`;

export interface IMyTagProps {
    tag: string;
    value: string | undefined | number;
}

export const MyTag: React.FC<IMyTagProps> = ({ tag, value }) => {
    return (
        <div
            style={{
                border: "1px solid #cacaca",
                borderRadius: 6,
                width: "fit-content",
                padding: ".25rem .5rem",
            }}
        >
            <div style={{ ...textFont(".55rem"), opacity: 0.7, textAlign: "center" }}>
                {tag}
            </div>
            <div
                style={{ ...textFont(".8rem"), textAlign: "center", fontWeight: 600 }}
            >
                {value}
            </div>
        </div>
    );
};

export const MyCard: React.FC<IMyCardProps> = ({ playlist }) => {
    return (
        <Col span={6} style={{ position: "relative" }}>
            <StyledCard
                hoverable
                style={{
                    width: "90%",
                    backgroundColor: "#393955",
                    borderColor: "#393955",
                    marginBottom: "2rem",
                }}
                cover={
                    <img
                        alt="example"
                        src={playlist.picture}
                        style={{
                            height: 120,
                            objectFit: "cover",
                        }}
                    />
                }
            >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {/* <Space size={4}> */}
                    {playlist.topics.split(",").map((topic, index) => (
                        <TopicComponent label={topic.trim()} key={index} style={{ marginRight: 8, marginBottom: 4 }} />
                    ))}
                    {/* </Space> */}
                </div>
                <div style={{ ...textFont(".8rem") }}>
                    <strong style={{ opacity: "unset" }}>Người tạo:</strong>
                    <span style={{ opacity: 0.8, marginLeft: ".25rem" }}>
                        {playlist.creater}
                    </span>
                </div>
                <div style={{ ...textFont(".8rem") }}>
                    <strong style={{ opacity: "unset" }}>Ngày tạo:</strong>
                    <span style={{ opacity: 0.8, marginLeft: ".25rem" }}>
                        {playlist.createdAt.slice(0, 10).replaceAll("-", "/")}
                    </span>
                </div>
                <div style={{ width: "100%", display: "flex", marginTop: ".75rem" }}>
                    <Space size={8}>
                        <MyTag tag={"Số bản ghi"} value={playlist.numberPlaylist} />
                        <MyTag tag={"Thời lượng"} value={playlist.time} />
                    </Space>
                </div>
                <TbAlertCircle
                    className="root_color"
                    style={{
                        width: 24,
                        height: 24,
                        position: "absolute",
                        bottom: 12,
                        right: 12,
                    }}
                />
            </StyledCard>
        </Col>
    );
};

const GridDisplay: React.FC<IGridDisplayProps> = ({ data }) => {
    return (
        <Row style={{ width: "100%" }}>
            {data
                .filter((playlist) => playlist.numberPlaylist > 0)
                .map((playlist) => (
                    <MyCard playlist={playlist} key={playlist.id} />
                ))}
        </Row>
    );
};

export default GridDisplay;