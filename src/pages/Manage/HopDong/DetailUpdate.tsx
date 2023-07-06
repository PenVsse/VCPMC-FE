import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hook";
import { IHopDongUQ } from "./TableData";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import {
  Row,
  Col,
  Typography,
  Input,
  Select,
  Button,
  Divider,
  Radio,
  Space,
} from "antd";
import { useParams } from "react-router-dom";
import { hopdongApi } from "../../../api/hopdongApi";
import { MyDatePicker } from "../../Schedule/Create";
import { AiOutlineClose, AiOutlineCloudUpload } from "react-icons/ai";
import { BsFileEarmarkPdf, BsFileEarmarkWord } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { MyInput as MyInput2 } from "./Detail";
import TextArea from "antd/es/input/TextArea";

interface MyInputProps {
  label: string;
  required?: boolean;
  defaultValue?: string;
  span1?: number;
  span2?: number;
  type?: string;
}

export const MyInput: React.FC<MyInputProps> = ({
  label,
  required = true,
  defaultValue,
  span1,
  span2,
  type,
}) => {
  return (
    <Row style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}>
      <Col span={span1 || 8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
        {label}:{required && <span style={{ color: "red" }}>*</span>}
      </Col>
      <Col span={span2 || 16}>
        <Input
          style={{
            backgroundColor: "#2B2B3F",
            width: 220,
            borderColor: "#727288",
          }}
          defaultValue={defaultValue}
          type={type}
        />
      </Col>
    </Row>
  );
};

export const MyInputDate: React.FC<MyInputProps> = ({
  label,
  required = true,
  defaultValue,
  span1,
  span2,
}) => {
  return (
    <Row style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}>
      <Col span={span1 || 8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
        {label}:{required && <span style={{ color: "red" }}>*</span>}
      </Col>
      <Col span={span2 || 16}>
        <MyDatePicker
          placeholder="dd/mm/yyyy"
          style={{
            backgroundColor: "#2B2B3F",
            width: 220,
            borderColor: "#727288",
          }}
        />
      </Col>
    </Row>
  );
};

const DetailUpdate: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const params = useParams();
  const [hdUQ, setHDUQ] = useState<IHopDongUQ>();

  useEffect(() => {
    if (params.id) {
      hopdongApi
        .getById(params.id)
        .then((res) => res.data)
        .then((data) => {
          setHDUQ(data.data);
        });
    }
  }, [params.id]);

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
          {`Hợp đồng ủy quyền bài hát - ${hdUQ?.id}`}
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1rem" }}>
          <Col span={8}>
            {hdUQ && (
              <>
                <MyInput
                  label="Số hợp đồng"
                  required={false}
                  defaultValue={hdUQ?.id}
                />
                <MyInput
                  label="Tên hợp đồng"
                  required={false}
                  defaultValue={hdUQ?.name}
                />
              </>
            )}
            <MyInputDate label="Ngày hiệu lực" required={false} />
            <MyInputDate label="Ngày hết hạn" required={false} />
            <Row
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Tình trạng:
              </Col>
              <Col span={16}>
                <Select
                  options={[{ value: 1, label: "Đang hiệu lực" }]}
                  style={{ color: "#FFF", width: 220, borderColor: "#727288" }}
                  value={1}
                  disabled
                />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
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
                    <AiOutlineCloudUpload style={{ marginRight: ".2rem" }} />
                    Tải lên
                  </Button>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                width: "100%",
                color: "#FFF",
                opacity: 0.9,
                marginLeft: "8.25rem",
                marginTop: ".5rem",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: ".5rem 0",
                  }}
                >
                  <BsFileEarmarkWord
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: ".5rem",
                    }}
                  />{" "}
                  hetthuongcannho.doc
                  <AiOutlineClose
                    style={{
                      width: 16,
                      height: 16,
                      marginLeft: ".5rem",
                      color: "red",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: ".5rem 0",
                  }}
                >
                  <BsFileEarmarkPdf
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: ".5rem",
                    }}
                  />{" "}
                  hetthuongcannho.doc
                  <AiOutlineClose
                    style={{
                      width: 16,
                      height: 16,
                      marginLeft: ".5rem",
                      color: "red",
                    }}
                  />
                </div>
              </div>
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
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={10} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Pháp nhân ủy quyền:
              </Col>
              <Col span={14}>
                <Radio.Group defaultValue={1}>
                  <Radio value={1} style={{ color: "#FFF", opacity: 0.7 }}>
                    Cá nhân
                  </Radio>
                  <Radio value={2} style={{ color: "#FFF", opacity: 0.7 }}>
                    Tổ chức
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>
            <MyInput
              label="Tên người ủy quyền"
              defaultValue="Nguyễn Văn A"
              span1={10}
              span2={14}
            />
            <MyInputDate label="Tên người ủy quyền" span1={10} span2={14} />
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
            <Row
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={10} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Quốc tịch: <span style={{ color: "red" }}>*</span>
              </Col>
              <Col span={14}>
                <Select
                  options={[{ value: 1, label: "Việt Nam" }]}
                  style={{ color: "#FFF", width: 220, borderColor: "#727288" }}
                  value={1}
                />
              </Col>
            </Row>
            <MyInput
              label="Số điện thoại"
              defaultValue="(+84) 345 678 901"
              span1={10}
              span2={14}
            />
          </Col>
          <Col span={8}>
            <MyInput label="CMND/CCCD" defaultValue="123456789012" />
            <MyInputDate label="Ngày cấp" />
            <MyInput label="Nơi cấp" defaultValue="Tp.HCM, Việt Nam" />
            <MyInput
              label="Mã số thuế"
              defaultValue="92387489"
              required={false}
            />
            <Row
              style={{ width: "100%", alignItems: "center", margin: ".5rem 0" }}
            >
              <Col span={8} style={{ ...textFont("1rem"), fontWeight: 600 }}>
                Nơi cư trú:
              </Col>
              <Col span={16}>
                <TextArea
                  style={{
                    width: "220px",
                    backgroundColor: "#2B2B3F",
                    color: "#fff",
                  }}
                  defaultValue={
                    "69/53, Nguyễn Gia Trí, phường 25, quận Bình Thạnh, thành phố Hồ Chí Minh"
                  }
                  rows={3}
                />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <MyInput
              label="Email"
              defaultValue="123@gmail.com"
              required={false}
            />
            <MyInput
              label="Tên đăng nhập"
              defaultValue="123"
            />
            <MyInput label="Mật khẩu" defaultValue="12345678" type="password" />
            <MyInput
              label="Số tài khoản"
              defaultValue="1231123312211223"
              required={false}
            />
            <MyInput
              label="Ngân hàng"
              defaultValue="ACB - Ngân hàng Á Châu"
              required={false}
            />
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
              <Button type="primary" style={{ width: 120 }}>
                Lưu
              </Button>
            </Space>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default DetailUpdate;
