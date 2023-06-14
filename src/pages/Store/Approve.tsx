import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { Row, Typography, Col, Space, Select, Checkbox } from "antd";
import { useAppSelector } from "../../store/hook";
import InputField from "../../components/InputField";
import { BiSearch } from "react-icons/bi";
import { OPTION_VIDEO_FORMAT, OPTION_VIDEO_TYPE } from "../../constants/option";
import { FaListUl } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineCheck } from "react-icons/ai";
import UpdateTableDisplay, { IVideoDataType } from "./UpdateTableDisplay";
import UpdateGridDisplay from "./UpdateGridDisplay";
import { IconMenu } from "../Home";
import { IoMdClose } from "react-icons/io";
import { videoApi } from "../../api/video";

const Approve: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [isRow, setIsRow] = useState<boolean>(true);
  const [data, setData] = useState<IVideoDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

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
            title: "Kho bản ghi",
            href: "/store",
          },
          {
            title: "Quản lý phê duyệt",
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
          Phê duyệt bản ghi
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
                  <Checkbox onChange={(e) => setIsAllChecked(e.target.checked)} />
                  <Typography.Text
                    style={{
                      ...textFont(".9rem"),
                      fontWeight: 600,
                      marginLeft: ".5rem",
                    }}
                  >
                    Chọn tất cả
                  </Typography.Text>
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
            {isRow ? (
              <UpdateTableDisplay data={data} loading={loading} />
            ) : (
              <UpdateGridDisplay data={data} isAllChecked={isAllChecked}/>
            )}
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
            <AiOutlineCheck
              style={{ width: 20, height: 20, color: "#0FBF00" }}
            />
          }
          label="Phê duyệt"
        />
        <IconMenu
          icon={<IoMdClose style={{ width: 20, height: 20, color: "red" }} />}
          label="Từ chối"
        />
      </Row>
    </div>
  );
};

export default Approve;
