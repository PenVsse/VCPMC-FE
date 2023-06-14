import { Row, Typography, Col, Space, Button, Badge } from "antd";
import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import { IVideoDataType } from "./RowDisplay";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import { OPTION_VIDEO_TYPE } from "../../constants/option";
import { AiOutlineCamera } from "react-icons/ai";
import { RiFolderMusicLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { videoApi } from "../../api/video";

const Update: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const params = useParams();
  const [video, setVideo] = useState<IVideoDataType | null>(null);

  const fetchData = () => {
    if (params.id)
      videoApi
        .getById(params.id)
        .then((resp) => resp.data)
        .then((data) => setVideo(data.data))
        .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row
      style={{ position: "relative", height: "100%", flexDirection: "column" }}
    >
      <MyBreadcrumb
        user={user}
        items={[
          {
            title: "Kho bản ghi",
            href: "/store",
          },
          {
            title: "Cập nhật thông tin",
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
          {`Bản ghi - ${video?.name}`}
        </Typography.Title>
        <Row
          style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}
        >
          <Row style={{ width: "76%", justifyContent: "space-between" }}>
            <Row style={{ width: "43%" }}>
              <Col
                span={24}
                style={{
                  backgroundColor: "#2B2B3F",
                  padding: "1rem",
                  borderRadius: 8,
                }}
              >
                <Typography.Title
                  style={{
                    ...textFont("1.35rem"),
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                  className="root_color"
                >
                  Thông tin bản ghi
                </Typography.Title>
                <Row justify={"center"} style={{ position: "relative" }}>
                  <img
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={`/public/images/${video?.picture}`}
                  />
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "#347AFF",
                      borderRadius: "50%",
                      padding: ".1rem .2rem",
                      bottom: 4,
                      right: "38%",
                    }}
                  >
                    <AiOutlineCamera style={{ width: 22, height: 22 }} />
                  </div>
                </Row>
                <Row
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem 0",
                  }}
                >
                  <span>
                    <RiFolderMusicLine
                      style={{ width: 22, height: 22, color: "#18E306" }}
                    />
                  </span>
                  <Typography.Text
                    style={{
                      ...textFont(".8rem"),
                      opacity: 0.8,
                      marginLeft: ".5rem",
                    }}
                  >
                    {`${video?.name}.mp3`}
                  </Typography.Text>
                </Row>
                <Row style={{ width: "100%", justifyContent: "space-between" }}>
                  <Row
                    style={{
                      ...textFont(".9rem"),
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: ".5rem",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>Ngày thêm:</div>
                    <div style={{ opacity: 0.7 }}>07/04/2021 - 17:45:30</div>
                  </Row>
                  <Row
                    style={{
                      ...textFont(".9rem"),
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: ".5rem",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>Người tải lên:</div>
                    <div style={{ opacity: 0.7 }}>Super Admin</div>
                  </Row>
                  <Row
                    style={{
                      ...textFont(".9rem"),
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: ".5rem",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>Người duyệt:</div>
                    <div style={{ opacity: 0.7 }}>Hệ thống</div>
                  </Row>
                  <Row
                    style={{
                      ...textFont(".9rem"),
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: ".5rem",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>Ngày phê duyệt:</div>
                    <div style={{ opacity: 0.7 }}>07/04/2021 - 17:45:50</div>
                  </Row>
                </Row>
              </Col>
              <Col
                span={24}
                style={{
                  backgroundColor: "#2B2B3F",
                  padding: "1rem",
                  marginTop: "1rem",
                  borderRadius: 8,
                  height: "fit-content",
                }}
              >
                <Typography.Title
                  style={{
                    ...textFont("1.35rem"),
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                  className="root_color"
                >
                  Thông tin ủy quyền
                </Typography.Title>
                <Row style={{ width: "100%", marginTop: "1rem" }}>
                  <Row
                    style={{
                      ...textFont(".9rem"),
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: ".5rem",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>Số hợp đồng:</div>
                    <div style={{ opacity: 0.7 }}>BH123</div>
                  </Row>
                  <Row
                    style={{
                      ...textFont(".9rem"),
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: ".5rem",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>Ngày nhận ủy quyền:</div>
                    <div style={{ opacity: 0.7 }}>01/05/2021</div>
                  </Row>
                  <Row
                    style={{
                      ...textFont(".9rem"),
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: ".5rem",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>Ngày hết hạn:</div>
                    <div style={{ opacity: 0.7 }}>01/08/2025</div>
                  </Row>
                  <Row
                    style={{
                      ...textFont(".9rem"),
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: ".5rem",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>Trạng thái:</div>
                    <div style={{ opacity: 0.7 }}>
                      <Badge
                        status="processing"
                        color={"#347AFF"}
                        style={{ marginRight: ".25rem" }}
                      />
                      Còn thời hạn
                    </div>
                  </Row>
                </Row>
              </Col>
            </Row>
            <Row style={{ width: "55%" }}>
              {video && <Col
                span={24}
                style={{
                  backgroundColor: "#2B2B3F",
                  padding: "1rem",
                  borderRadius: 8,
                }}
              >
                <Typography.Title
                  style={{
                    ...textFont("1.35rem"),
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                  className="root_color"
                >
                  Sửa thông tin
                </Typography.Title>
                <Row style={{ width: "100%" }}>
                  <InputField
                    title={
                      <strong>
                        Tên bản ghi: <span style={{ color: "red" }}>*</span>
                      </strong>
                    }
                    style={{ backgroundColor: "#33334D", borderColor: "#ccc" }}
                    span={24}
                    defaultValue={video.name}
                  />
                  <InputField
                    title={
                      <strong>
                        Mã ISRC: <span style={{ color: "red" }}>*</span>
                      </strong>
                    }
                    style={{ backgroundColor: "#33334D", borderColor: "#ccc" }}
                    span={24}
                    defaultValue={video.id}
                  />
                  <InputField
                    title={
                      <strong>
                        Ca sĩ: <span style={{ color: "red" }}>*</span>
                      </strong>
                    }
                    style={{ backgroundColor: "#33334D", borderColor: "#ccc" }}
                    span={24}
                    defaultValue={video.singer}
                  />
                  <InputField
                    title={
                      <strong>
                        Tác giả: <span style={{ color: "red" }}>*</span>
                      </strong>
                    }
                    style={{ backgroundColor: "#33334D", borderColor: "#ccc" }}
                    span={24}
                    defaultValue={video.author}
                  />
                  <InputField
                    title={
                      <strong>
                        Nhà sản xuất: <span style={{ color: "red" }}>*</span>
                      </strong>
                    }
                    style={{ backgroundColor: "#33334D", borderColor: "#ccc" }}
                    span={24}
                    defaultValue={video.author}
                  />
                  <SelectField
                    title={
                      <strong>
                        Thể loại: <span style={{ color: "red" }}>*</span>
                      </strong>
                    }
                    styleSelect={{
                      width: "100%",
                      backgroundColor: "#33334D",
                      borderColor: "#ccc",
                      borderRadius: 8,
                    }}
                    styleTitle={{ ...textFont(".9rem"), color: "#FFFFFF" }}
                    width={"100%"}
                    options={OPTION_VIDEO_TYPE}
                    defaultValue={OPTION_VIDEO_TYPE.find(opt => opt.value === video?.type)?.value}
                  />
                </Row>
              </Col>}
            </Row>
          </Row>
          <Row
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: "2rem",
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
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default Update;
