import React from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import {
  Button,
  Col,
  Input,
  Radio,
  Row,
  Typography,
  Select,
  Space,
} from "antd";
import { MyInput, MyInputDate } from "./DetailUpdate";
import { BsFileEarmarkPdf, BsFileEarmarkWord } from "react-icons/bs";
import { MyInput as MyInput2 } from "./Detail";
import { AiOutlineCloudUpload } from "react-icons/ai";
import TextAreaField from "../../../components/TextAreaField";

const HDCopy: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

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
            title: "Chi tiết",
          },
          {
            title: "Chỉnh sửa thông tin",
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
          {`Bản sao hợp đồng khai thác - HD123`}
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem", marginBottom: "2rem" }}>
          <Col span={8}>
            <MyInput label="Tên hợp đồng" defaultValue="Hợp đồng kinh doanh" />
            <MyInput label="Số hợp đồng" defaultValue="123" />
            <MyInputDate label="Ngày hiệu lực" />
            <MyInputDate label="Ngày hết hạn" />
          </Col>
          <Col span={8}>
            <MyInput2
              title="Đính kèm tệp"
              label={
                <div>
                  <span style={{ marginLeft: ".25rem" }}>
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
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: ".5rem 0",
                    }}
                  >
                    <BsFileEarmarkWord
                      style={{ width: 20, height: 20, marginRight: ".5rem" }}
                    />{" "}
                    hetthuongcannho.doc
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: ".5rem 0",
                    }}
                  >
                    <BsFileEarmarkPdf
                      style={{ width: 20, height: 20, marginRight: ".5rem" }}
                    />{" "}
                    hetthuongcannho.doc
                  </div>
                </div>
              }
            />
          </Col>
          <Col span={8}>
            <Row
              style={{ width: "100%", fontWeight: 600, marginBottom: "1rem" }}
            >
              Loại hợp đồng:
            </Row>
            <Row style={{ width: "100%", marginBottom: "1rem" }}>
              <Col span={8}>
                <Radio.Group
                  defaultValue={1}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Radio value={1} style={{ color: "#FFF", display: "flex" }}>
                    Trọn gói
                  </Radio>
                </Radio.Group>
              </Col>
              <Col
                span={16}
                style={{
                  paddingLeft: ".5rem",
                  borderLeft: "1px solid #727288",
                }}
              >
                <Row style={{ width: "100%" }}>
                  <Col
                    span={10}
                    style={{ opacity: 0.7, marginBottom: ".5rem" }}
                  >{`Giá trị hợp đồng (VNĐ)`}</Col>
                  <Col span={14}>
                    <Input
                      style={{
                        width: "120px",
                        backgroundColor: "#2B2B3F",
                        borderColor: "#727288",
                      }}
                      defaultValue={"214.500.000"}
                    />
                  </Col>
                </Row>
                <Row style={{ width: "100%" }}>
                  <Col
                    span={10}
                    style={{ opacity: 0.7, marginBottom: ".5rem" }}
                  >{`Giá trị phân phối (VNĐ)/ngày`}</Col>
                  <Col span={14}>
                    <Input
                      style={{
                        width: "120px",
                        backgroundColor: "#2B2B3F",
                        borderColor: "#727288",
                      }}
                      defaultValue={"1.500.000"}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ width: "100%" }}>
              <Col span={8}>
                <Radio.Group
                  disabled
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Radio value={1} style={{ color: "#FFF", display: "flex" }}>
                    Lượt phát
                  </Radio>
                </Radio.Group>
              </Col>
              <Col span={16} style={{ paddingLeft: ".5rem" }}>
                <Row style={{ width: "100%" }}>
                  <Col
                    span={10}
                    style={{ opacity: 0.7, marginBottom: ".5rem" }}
                  >{`Giá trị lượt phát (VNĐ)/ngày`}</Col>
                  <Col span={14}>
                    <Input
                      style={{
                        width: "120px",
                        backgroundColor: "#3E3E50",
                        borderColor: "#727288",
                      }}
                      disabled
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col span={8}>
            <Row style={{ width: "100%" }}>
              <MyInput
                label="Tên đợn vị sử dụng"
                span1={10}
                span2={14}
                defaultValue="Công ty TNHH MTV  Âu Lạc"
              />
              <MyInput
                label="Người đại diện"
                span1={10}
                span2={14}
                defaultValue="Nguyễn văn A"
              />
              <MyInput
                label="Chức vụ"
                span1={10}
                span2={14}
                defaultValue="Giám đốc"
              />
              <MyInputDate label="Ngày sinh" span1={10} span2={14} />
              <Row
                style={{
                  width: "100%",
                  alignItems: "center",
                  margin: ".5rem 0",
                }}
              >
                <Col span={10} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                  Quốc tịch:
                  <span style={{ marginLeft: ".25rem", color: "red" }}>*</span>
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
                    disabled
                  />
                </Col>
              </Row>
              <MyInput
                label="Số điện thoại"
                span1={10}
                span2={14}
                defaultValue="123456789012"
              />
              <MyInput
                label="Email"
                span1={10}
                span2={14}
                defaultValue="123@gmail.com"
              />
            </Row>
          </Col>
          <Col span={8}>
            <Row
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={10} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Giới tính: <span style={{ color: "red" }}>*</span>
              </Col>
              <Col span={14}>
                <Radio.Group defaultValue={1}>
                  <Radio value={1} style={{ color: "#FFF", opacity: 0.7 }}>
                    Nam
                  </Radio>
                  <Radio value={2} style={{ color: "#FFF", opacity: 0.7 }}>
                    Nữ
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>
            <MyInput label="CMND/CCCD" defaultValue="123456789012" />
            <MyInputDate label="Ngày cấp" />
            <MyInput label="Nơi cấp" defaultValue="Tp.Hồ Chí Minh" />
            <MyInput label="Mã số thuế" defaultValue="123456789012" />
            <Row
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Nơi cư trú:
              </Col>
              <Col span={16}>
                <TextAreaField
                  style={{
                    width: "220px",
                    backgroundColor: "#2B2B3F",
                    color: "#fff",
                    borderColor: "#727288",
                    opacity: 0.7,
                  }}
                  defaultValue={
                    "69/53, Nguyễn Gia Trí, phường 25, quận Bình Thạnh, thành phố Hồ Chí Minh"
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <MyInput label="Tên đăng nhập" defaultValue="vuonganhtu123" />
            <MyInput
              label="Mật khẩu"
              defaultValue="vuonganhtu123"
              type="password"
            />
            <MyInput
              label="Số tài khoản"
              defaultValue="1231123312211223"
              required={false}
            />
            <MyInput
              label="Ngân hàng"
              defaultValue="Ngân hàng Phương Đông - OCB"
              required={false}
            />
          </Col>
        </Row>
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
            <Button type="primary" style={{ width: 120 }}>
              Lưu
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default HDCopy;
