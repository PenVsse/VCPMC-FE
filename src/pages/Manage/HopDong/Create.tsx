import React, { useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import {
  Button,
  Card,
  Col,
  Divider,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsFileEarmarkPdf, BsFileEarmarkWord } from "react-icons/bs";
import {
  AiFillCheckCircle,
  AiOutlineClose,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { MyInput, MyInputDate } from "./DetailUpdate";
import { MyInput as MyInput2 } from "./Detail";
import TextArea from "antd/es/input/TextArea";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";

const Create: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [optionType, setOptionType] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

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
            title: "Quản lý",
          },
          {
            title: "Quản lý hợp đồng",
            href: "/management-contract",
          },
          {
            title: isAdd ? "Thêm bản ghi" : "Thêm hợp đồng",
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
          {isAdd ? "Thêm thông tin bản ghi" : `Thêm hợp đồng ủy quyền mới`}
        </Typography.Title>

        {isAdd ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "3rem",
            }}
          >
            <Row>
              <Card
                style={{
                  backgroundColor: "#2B2B3F",
                  color: "#FFF",
                  border: "none",
                  width: 560,
                }}
              >
                <Typography.Title
                  style={{
                    fontSize: "1.5rem",
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AiFillCheckCircle
                    style={{ color: "#0FBF00", marginRight: ".5rem" }}
                  />
                  Hợp đồng đã được tạo thành công
                </Typography.Title>
                <Divider style={{ backgroundColor: "#C8C8DB" }} />
                <Typography.Paragraph
                  style={{
                    fontSize: "1rem",
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  Có 2 cách để tạo bản ghi:
                </Typography.Paragraph>
                <Row style={{ width: "100%", padding: "0 1.5rem" }}>
                  <Typography.Paragraph
                    style={{
                      fontSize: ".9rem",
                      color: "#FFF",
                      opacity: 0.9,
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "orange" }}>
                      Cách 1:
                    </span>{" "}
                    Upload bản ghi trực tiếp
                  </Typography.Paragraph>
                  <div style={{ width: "100%", paddingLeft: "2rem" }}>
                    <Typography.Paragraph
                      style={{
                        fontSize: ".9rem",
                        color: "#FFF",
                        opacity: 0.7,
                      }}
                    >
                      Bạn có thể thực hiện thêm bản ghi ngay trên website
                    </Typography.Paragraph>
                    <Button
                      size="large"
                      style={{
                        backgroundColor: "#FF7506",
                        color: "#FFF",
                        border: "unset",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Thêm bản ghi trực tiếp
                    </Button>
                  </div>
                </Row>
                <Row
                  style={{
                    width: "100%",
                    padding: "0 1.5rem",
                    margin: "2rem 0",
                  }}
                >
                  <Typography.Paragraph
                    style={{
                      fontSize: ".9rem",
                      color: "#FFF",
                      opacity: 0.9,
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "orange" }}>
                      Cách 2:
                    </span>{" "}
                    Upload bản ghi qua phần mềm
                  </Typography.Paragraph>
                  <div style={{ width: "100%", paddingLeft: "2rem" }}>
                    <Typography.Paragraph
                      style={{
                        fontSize: ".9rem",
                        color: "#FFF",
                        opacity: 0.7,
                      }}
                    >
                      Bạn có thể thêm bản ghi bằng tool
                    </Typography.Paragraph>
                    <Button
                      size="large"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "#FF7506",
                        color: "#FF7506",
                      }}
                    >
                      Thêm bản ghi bằng tool
                    </Button>
                  </div>
                </Row>
                <Typography.Text
                  style={{ color: "#FF4747", marginTop: "1rem" }}
                >
                  Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
                </Typography.Text>
              </Card>
            </Row>
          </div>
        ) : (
          <>
            <Row style={{ width: "100%", marginTop: "1rem" }}>
              <Col span={8}>
                <MyInput label="Số hợp đồng" />
                <MyInput label="Tên hợp đồng" />
                <MyInputDate label="Ngày hiệu lực" />
                <MyInputDate label="Ngày hết hạn" />
              </Col>
              <Col span={8}>
                <Row
                  style={{
                    width: "100%",
                    alignItems: "center",
                    margin: ".5rem 0",
                  }}
                >
                  <Col
                    span={8}
                    style={{ ...textFont("1rem"), fontWeight: 600 }}
                  >
                    Đính kèm tệp:
                  </Col>
                  <Col span={16}>
                    <Row style={{ width: "100%" }}>
                      <Button
                        style={{
                          backgroundColor: "#1E1E2E",
                          color: "orange",
                          borderColor: "orange",
                          fontWeight: 600,
                        }}
                      >
                        <AiOutlineCloudUpload
                          style={{ marginRight: ".2rem" }}
                        />
                        Tải lên
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={8} style={{ paddingLeft: "1rem" }}>
                <Row style={{ width: "100%", margin: ".5rem 0" }}>
                  <div
                    style={{
                      color: "orange",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 600,
                    }}
                  >
                    <RiErrorWarningLine
                      style={{ width: 20, height: 20, marginRight: ".5rem" }}
                    />{" "}
                    Mức nhuận bút
                  </div>
                </Row>
                <Row style={{ width: "100%" }}>
                  <MyInput2 title="Quyền tác giả" label="0%" />
                  <MyInput2
                    title="Quyền liên quan"
                    label={
                      <div>
                        <div>Quyền của người biểu diễn: 50%</div>
                        <div>Quyền của nhà sản xuất: 50%</div>
                      </div>
                    }
                  />
                </Row>
              </Col>
            </Row>
            <Divider style={{ backgroundColor: "#727288" }} />
            <Row style={{ width: "100%" }}>
              <Row
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
              >
                <Typography.Text
                  style={{
                    ...textFont("1.15rem"),
                    color: "orange",
                    fontWeight: 600,
                  }}
                >
                  Thông tin pháp nhân uỷ quyền
                </Typography.Text>
              </Row>
              <Col span={8}>
                <Row
                  style={{
                    width: "100%",
                    alignItems: "center",
                    margin: ".5rem 0",
                  }}
                >
                  <Col
                    span={10}
                    style={{ ...textFont("1rem"), fontWeight: 600 }}
                  >
                    Pháp nhân ủy quyền:
                  </Col>
                  <Col span={14}>
                    <Radio.Group
                      value={optionType ? 2 : 1}
                      onChange={(e) =>
                        setOptionType(e.target.value === 1 ? false : true)
                      }
                    >
                      <Radio value={1} style={{ color: "#FFF", opacity: 0.7 }}>
                        Cá nhân
                      </Radio>
                      <Radio value={2} style={{ color: "#FFF", opacity: 0.7 }}>
                        Tổ chức
                      </Radio>
                    </Radio.Group>
                  </Col>
                </Row>
                {optionType ? (
                  <>
                    <MyInput label="Tên tổ chức" />
                    <MyInput label="Mã số thuế" required={false} />
                    <MyInput label="Số tài khoản" required={false} />
                    <MyInput label="Ngân hàng" required={false} />
                    <Row
                      style={{
                        width: "100%",
                        alignItems: "center",
                        margin: ".5rem 0",
                      }}
                    >
                      <Col
                        span={8}
                        style={{ ...textFont("1rem"), fontWeight: 600 }}
                      >
                        Địa chỉ:
                      </Col>
                      <Col span={16}>
                        <TextArea
                          style={{
                            width: "220px",
                            backgroundColor: "#2B2B3F",
                            color: "#fff",
                            borderColor: "#727288",
                          }}
                          rows={4}
                        />
                      </Col>
                    </Row>
                  </>
                ) : (
                  <>
                    <MyInput label="Tên người ủy quyền" span1={10} span2={14} />
                    <Row
                      style={{
                        width: "100%",
                        alignItems: "center",
                        margin: ".5rem 0",
                      }}
                    >
                      <Col
                        span={10}
                        style={{ ...textFont("1rem"), fontWeight: 600 }}
                      >
                        Giới tính: <span style={{ color: "red" }}>*</span>
                      </Col>
                      <Col span={14}>
                        <Radio.Group defaultValue={1}>
                          <Radio
                            value={1}
                            style={{ color: "#FFF", opacity: 0.7 }}
                          >
                            Nam
                          </Radio>
                          <Radio
                            value={2}
                            style={{ color: "#FFF", opacity: 0.7 }}
                          >
                            Nữ
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                    <MyInputDate label="Ngày sinh" span1={10} span2={14} />
                    <Row
                      style={{
                        width: "100%",
                        alignItems: "center",
                        margin: ".5rem 0",
                      }}
                    >
                      <Col
                        span={10}
                        style={{ ...textFont("1rem"), fontWeight: 600 }}
                      >
                        Quốc tịch: <span style={{ color: "red" }}>*</span>
                      </Col>
                      <Col span={14}>
                        <Select
                          options={[{ value: 1, label: "Việt Nam" }]}
                          style={{
                            color: "#FFF",
                            width: 220,
                            borderColor: "#727288",
                          }}
                          value={1}
                        />
                      </Col>
                    </Row>
                    <MyInput label="Số điện thoại" span1={10} span2={14} />
                  </>
                )}
              </Col>
              <Col span={8}>
                {optionType ? (
                  <>
                    <MyInput label="Người đại diện" />
                    <MyInput label="Chức vụ" required={false} />
                    <MyInputDate label="Ngày sinh" />{" "}
                    <Row
                      style={{
                        width: "100%",
                        alignItems: "center",
                        margin: ".5rem 0",
                      }}
                    >
                      <Col
                        span={8}
                        style={{ ...textFont("1rem"), fontWeight: 600 }}
                      >
                        Giới tính:
                      </Col>
                      <Col span={16}>
                        <Radio.Group defaultValue={1}>
                          <Radio
                            value={1}
                            style={{ color: "#FFF", opacity: 0.7 }}
                          >
                            Nam
                          </Radio>
                          <Radio
                            value={2}
                            style={{ color: "#FFF", opacity: 0.7 }}
                          >
                            Nữ
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                    <MyInput label="CMND/CCCD" />
                    <MyInputDate label="Ngày cấp" /> <MyInput label="Nơi cấp" />
                    <Row
                      style={{
                        width: "100%",
                        alignItems: "center",
                        margin: ".5rem 0",
                      }}
                    >
                      <Col
                        span={8}
                        style={{ ...textFont("1rem"), fontWeight: 600 }}
                      >
                        Quốc tịch: <span style={{ color: "red" }}>*</span>
                      </Col>
                      <Col span={16}>
                        <Select
                          options={[{ value: 1, label: "Việt Nam" }]}
                          style={{
                            color: "#FFF",
                            width: 220,
                            borderColor: "#727288",
                          }}
                          value={1}
                        />
                      </Col>
                    </Row>
                  </>
                ) : (
                  <>
                    <MyInput label="CMND/CCCD" />
                    <MyInputDate label="Ngày cấp" />
                    <MyInput label="Nơi cấp" />
                    <MyInput label="Mã số thuế" />
                    <Row
                      style={{
                        width: "100%",
                        alignItems: "center",
                        margin: ".5rem 0",
                      }}
                    >
                      <Col
                        span={8}
                        style={{ ...textFont("1rem"), fontWeight: 600 }}
                      >
                        Nơi cư trú:
                      </Col>
                      <Col span={16}>
                        <TextArea
                          style={{
                            width: "220px",
                            backgroundColor: "#2B2B3F",
                            color: "#fff",
                            borderColor: "#727288",
                          }}
                          rows={3}
                        />
                      </Col>
                    </Row>
                  </>
                )}
              </Col>
              <Col span={8}>
                {optionType ? (
                  <>
                    <Row
                      style={{
                        width: "100%",
                        alignItems: "center",
                        margin: ".5rem 0",
                      }}
                    >
                      <Col
                        span={8}
                        style={{ ...textFont("1rem"), fontWeight: 600 }}
                      >
                        Nơi cư trú:
                      </Col>
                      <Col span={16}>
                        <TextArea
                          style={{
                            width: "220px",
                            backgroundColor: "#2B2B3F",
                            color: "#fff",
                            borderColor: "#727288",
                          }}
                          rows={3}
                        />
                      </Col>
                    </Row>
                    <MyInput label="Số điện thoại" required={false} />
                    <MyInput label="Email" />
                    <MyInput label="Tên đăng nhập" />
                    <MyInput label="Mật khẩu" type="password" />
                  </>
                ) : (
                  <>
                    <MyInput label="Email" />
                    <MyInput label="Tên đăng nhập" />
                    <MyInput label="Mật khẩu" type="password" />
                    <MyInput label="Số tài khoản" required={false} />
                    <MyInput label="Ngân hàng" required={false} />
                  </>
                )}
              </Col>
            </Row>
            <Row style={{ width: "100%" }}>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem 0",
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
                  <Button
                    type="primary"
                    style={{ width: 120 }}
                    onClick={() => setIsAdd(true)}
                  >
                    Lưu
                  </Button>
                </Space>
              </Col>
            </Row>
          </>
        )}
      </Row>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        title={null}
      >
        <Typography.Title
          style={{ ...textFont("1.25rem"), textAlign: "center" }}
        >
          Thêm bản ghi mới
        </Typography.Title>
        <Row style={{ width: "100%", justifyContent: "space-between" }}>
          <InputField
            title={
              <>
                Tên bản ghi:
                <span style={{ color: "red", marginLeft: ".25rem" }}>*</span>
              </>
            }
            fontWeightTitle={600}
            span={24}
          />
          <InputField
            title={
              <>
                Mã ISRC:
                <span style={{ color: "red", marginLeft: ".25rem" }}>*</span>
              </>
            }
            span={24}
            fontWeightTitle={600}
          />
          <InputField
            title={
              <>
                Tác giả:
                <span style={{ color: "red", marginLeft: ".25rem" }}>*</span>
              </>
            }
            span={24}
            fontWeightTitle={600}
          />
          <InputField
            title={
              <>
                Ca sĩ/Nhóm nhạc:
                <span style={{ color: "red", marginLeft: ".25rem" }}>*</span>
              </>
            }
            span={24}
            fontWeightTitle={600}
          />
          <Col span={11}>
            <SelectField
              title={
                <>
                  Thể loại:
                  <span style={{ color: "red", marginLeft: ".25rem" }}>*</span>
                </>
              }
              styleSelect={{
                width: "100%",
                backgroundColor: "#2B2B3F",
              }}
              styleTitle={{
                fontWeight: 600,
                color: "#FFF",
                marginBottom: ".75rem",
              }}
              width={"100%"}
            />
          </Col>
          <InputField
            title={
              <>
                Nhà sản xuất:
                <span style={{ color: "red", marginLeft: ".25rem" }}>*</span>
              </>
            }
            span={11}
            fontWeightTitle={600}
          />
          <Col span={12}>
            <Row
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={8} style={{ ...textFont(".9rem"), fontWeight: 600 }}>
                Đính kèm bản ghi:
              </Col>
              <Col span={16}>
                <Row style={{ width: "100%" }}>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      color: "orange",
                      borderColor: "orange",
                      fontWeight: 600,
                    }}
                  >
                    <AiOutlineCloudUpload style={{ marginRight: ".2rem" }} />
                    Tải lên
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={8} style={{ ...textFont(".9rem"), fontWeight: 600 }}>
                Đính kèm lời bài hát:
              </Col>
              <Col span={16}>
                <Row style={{ width: "100%" }}>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      color: "orange",
                      borderColor: "orange",
                      fontWeight: 600,
                    }}
                  >
                    <AiOutlineCloudUpload style={{ marginRight: ".2rem" }} />
                    Tải lên
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
          <Row style={{ width: "100%" }}>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: '1rem'
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
                  onClick={() => setOpen(false)}
                >
                  Hủy
                </Button>
                <Button type="primary" style={{ width: 120 }}>
                  Tải lên
                </Button>
              </Space>
            </Col>
          </Row>
        </Row>
      </Modal>
    </div>
  );
};

export default Create;
