import React, { useEffect, useState } from "react";
import { Row, Typography, Col, Space, Select } from "antd";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import InputField from "../../components/InputField";
import { BiSearch } from "react-icons/bi";
import {
  OPTION_VIDEO_FORMAT,
  OPTION_VIDEO_HSD,
  OPTION_VIDEO_STATUS,
  OPTION_VIDEO_TYPE,
} from "../../constants/option";

import { FaListUl, FaPenSquare } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import RowDisplay, { IVideoDataType } from "./RowDisplay";
import GridDisplay from "./GridDisplay";
import { IconMenu } from "../Home";
import { videoApi } from "../../api/video";
import { useNavigate } from "react-router-dom";

const Store: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isRow, setIsRow] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IVideoDataType[]>([]);

  const fetchData = () => {
    setLoading(true);
    videoApi
      .getAll()
      .then((resp) => resp.data)
      .then((data) => setData(data.data))
      .catch(() => {
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ position: "relative", maxHeight: "100vh", minHeight: '100vh', overflowY: 'scroll' }}
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
          Kho bản ghi
        </Typography.Title>
        <Row style={{ width: "100%" }}>
          <Col span={24}>
            <InputField
              style={{
                padding: ".5rem 1.5rem",
                width: 400,
                backgroundColor: "#2B2B3F",
              }}
              placeholder="Tên bản ghi, ca sĩ,..."
              suffix={<BiSearch style={{ width: 24, height: 24 }} />}
            />
          </Col>
          <Col
            span={24}
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Space size={32}>
                <span>
                  <Typography.Text
                    style={{ ...textFont(".9rem"), fontWeight: 600 }}
                  >
                    Thể loại:
                  </Typography.Text>
                  <Select
                    options={OPTION_VIDEO_TYPE}
                    defaultValue={OPTION_VIDEO_TYPE[0].value}
                    style={{
                      width: 120,
                      marginLeft: ".75rem",
                    }}
                  />
                </span>
                <span>
                  <Typography.Text
                    style={{ ...textFont(".9rem"), fontWeight: 600 }}
                  >
                    Định dạng:
                  </Typography.Text>
                  <Select
                    options={OPTION_VIDEO_FORMAT}
                    defaultValue={OPTION_VIDEO_FORMAT[0].value}
                    style={{
                      width: 120,
                      marginLeft: ".75rem",
                    }}
                  />
                </span>
                <span>
                  <Typography.Text
                    style={{ ...textFont(".9rem"), fontWeight: 600 }}
                  >
                    Thời hạn sử dụng:
                  </Typography.Text>
                  <Select
                    options={OPTION_VIDEO_HSD}
                    defaultValue={OPTION_VIDEO_HSD[0].value}
                    style={{
                      width: 120,
                      marginLeft: ".75rem",
                    }}
                  />
                </span>
                <span>
                  <Typography.Text
                    style={{ ...textFont(".9rem"), fontWeight: 600 }}
                  >
                    Trạng thái:
                  </Typography.Text>
                  <Select
                    options={OPTION_VIDEO_STATUS}
                    defaultValue={OPTION_VIDEO_STATUS[0].value}
                    style={{
                      width: 180,
                      marginLeft: ".75rem",
                    }}
                  />
                </span>
              </Space>
            </div>
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
            {isRow ? <RowDisplay data={data} loading={loading}/> : <GridDisplay data={data} />}
          </Col>
        </Row>
      </Row>

      <Row
        style={{
          position: "absolute",
          right: 0,
          top: "36%",
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
          label="Quản lý phê duyệt"
          onClick={() => navigate('approve')}
        />
      </Row>
    </div>
  );
};

export default Store;
