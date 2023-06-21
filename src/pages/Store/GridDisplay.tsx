import React from "react";
import { IVideoDataType } from "./RowDisplay";
import { Card, Col, Row, Typography, Space } from "antd";
import { textFont } from "../../components/MyBreadcrumb";
import styled from "styled-components";
import { OPTION_VIDEO_FORMAT, OPTION_VIDEO_TYPE } from "../../constants/option";
import { FaPenSquare } from "react-icons/fa";

interface IGridDisplayProps {
  data: IVideoDataType[];
}

interface IMyCardProps {
  video: IVideoDataType;
}

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0.75rem !important;
  }
`;

export interface IMyTagProps {
  tag: string;
  value: string | undefined;
}

export const MyTag: React.FC<IMyTagProps> = ({ tag, value }) => {
  return (
    <div
      style={{
        border: "1px solid #cacaca",
        borderRadius: 6,
        width: "fit-content",
        padding: ".25rem .5rem"
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

export const MyCard: React.FC<IMyCardProps> = ({ video }) => {
  return (
    <Col span={6} style={{ position: 'relative' }}>
      <StyledCard
        hoverable
        style={{
          width: "90%",
          backgroundColor: "#393955",
          borderColor: "#393955",
          marginBottom: '2rem'
        }}
        cover={
          <img
            alt="example"
            src={video.picture}
            style={{
              height: 120,
              objectFit: "cover",
            }}
          />
        }
      >
        <Typography.Title style={{ ...textFont("1rem") }}>
          {video.name}
        </Typography.Title>
        <div style={{ ...textFont(".8rem") }}>
          <strong style={{ opacity: "unset" }}>Ca sĩ:</strong>
          <span style={{ opacity: 0.8, marginLeft: ".25rem" }}>
            {video.singer}
          </span>
        </div>
        <div style={{ ...textFont(".8rem") }}>
          <strong style={{ opacity: "unset" }}>Sáng tác:</strong>
          <span style={{ opacity: 0.8, marginLeft: ".25rem" }}>
            {video.author}
          </span>
        </div>
        <div style={{ ...textFont(".8rem") }}>
          <strong style={{ opacity: "unset" }}>Số hợp đồng:</strong>
          <span style={{ opacity: 0.8, marginLeft: ".25rem" }}>{video.id}</span>
        </div>
        <div style={{ width: "100%", display: "flex", marginTop: ".75rem" }}>
          <Space size={8}>
            <MyTag
              tag={"Thể loại"}
              value={
                OPTION_VIDEO_TYPE.find((type) => type.value === video.type)
                  ?.label
              }
            />
            <MyTag
              tag={"Định dạng"}
              value={
                OPTION_VIDEO_FORMAT.find(
                  (format) => format.value === video.type
                )?.label
              }
            />
            <MyTag tag={"Thời lượng"} value={video.time} />
          </Space>
        </div>
        <FaPenSquare className="root_color" style={{ width: 24, height: 24, position: 'absolute', bottom: 12, right: 12 }} />
      </StyledCard>
    </Col>
  );
};

const GridDisplay: React.FC<IGridDisplayProps> = ({ data }) => {
  return (
    <Row style={{ width: "100%" }}>
      {data.map((video) => (
        <MyCard video={video} key={video.id} />
      ))}
    </Row>
  );
};

export default GridDisplay;