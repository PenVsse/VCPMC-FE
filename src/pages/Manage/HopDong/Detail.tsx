import React, { useEffect, useState } from "react";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import {
  Badge,
  Col,
  Radio,
  Row,
  Typography,
  Modal,
  Space,
  Button,
  Checkbox,
  Input,
  Select,
  Table,
} from "antd";
import { useAppSelector } from "../../../store/hook";
import { Link, useNavigate, useParams } from "react-router-dom";
import { hopdongApi } from "../../../api/hopdongApi";
import { IHopDongUQ } from "./TableData";
import {
  OPTION_MANAGMENT_HSD,
  OPTION_QSH,
  OPTION_VIDEO_UQ_STATUS,
} from "../../../constants/option";
import {
  BsFileEarmarkPdf,
  BsFileEarmarkWord,
  BsPencilSquare,
} from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { IconMenu } from "../../Home";
import {
  AiOutlineClose,
  AiOutlineCloudUpload,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaFileContract } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import TextArea from "antd/es/input/TextArea";
import { MyDatePicker } from "../../Schedule/Create/index";
import { MdSettingsBackupRestore } from "react-icons/md";
import { BiPlus, BiSearch } from "react-icons/bi";
import InputField from "../../../components/InputField";
import { ColumnsType } from "antd/es/table";
import { videoUQ } from "../../../api/video-uq";

export interface MyInputProps {
  title: string;
  label?: string | React.ReactNode;
}

export interface IBanGhiUQ {
  id: string;
  name: string;
  singer: string;
  author: string;
  date: string;
  status: number;
}

export const MyInput: React.FC<MyInputProps> = ({ title, label }) => {
  return (
    <Row style={{ width: "100%", margin: ".25rem 0" }}>
      <Col span={10}>
        <Typography.Text style={{ color: "#fff", fontWeight: 600 }}>
          {`${title}:`}
        </Typography.Text>
      </Col>
      <Col span={14}>
        <Typography.Text style={{ color: "#fff", opacity: 0.7 }}>
          {label}
        </Typography.Text>
      </Col>
    </Row>
  );
};

const Detail: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const params = useParams();
  const navigate = useNavigate();
  const [hdUQ, setHDUQ] = useState<IHopDongUQ>();
  const [banGhiUQ, setBanGhiUQ] = useState<IBanGhiUQ[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [openGH, setOpenGH] = useState<boolean>(false);
  const [optionType, setOptionType] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const hsd = OPTION_MANAGMENT_HSD.find((opt) => opt.value === hdUQ?.effect);

  useEffect(() => {
    if (params.id) {
      hopdongApi
        .getById(params.id)
        .then((res) => res.data)
        .then((data) => {
          setHDUQ(data.data);
        });
    }
    videoUQ
      .getAll()
      .then((res) => res.data)
      .then((data) => {
        setBanGhiUQ(data.data);
      });
  }, [params.id]);

  const columns: ColumnsType<IBanGhiUQ> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên bản ghi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã ISRC",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Ca sĩ",
      dataIndex: "singer",
      key: "singer",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Ngày tải",
      dataIndex: "date",
      key: "date",
      render: (value) => value.slice(0, 10),
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
      render: (value) => {
        const opt = OPTION_VIDEO_UQ_STATUS.find((o) => o.value === value);
        return (
          <div>
            <Badge status="processing" color={opt?.color} />
            <span style={{ marginLeft: ".25rem" }}>{opt?.label}</span>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Link to="#" style={{ textDecoration: "underline", color: "orange" }}>
          Nghe
        </Link>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IBanGhiUQ[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: IBanGhiUQ) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

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
          {`Chi tiết hợp đồng ủy quyền bài hát - ${hdUQ?.id}`}
        </Typography.Title>
        <Row style={{ width: "100%", margin: "1rem 0" }}>
          <Radio.Group>
            <Radio.Button
              style={{
                background: "transparent",
                color: "#fff",
                opacity: !optionType ? 0.8 : 1,
                backgroundColor: !optionType ? "orange" : "unset",
              }}
              onClick={() => setOptionType(false)}
            >
              Thông tin hợp đồng
            </Radio.Button>
            <Radio.Button
              style={{
                background: "transparent",
                color: "#fff",
                opacity: optionType ? 0.8 : 1,
                backgroundColor: optionType ? "orange" : "unset",
              }}
              onClick={() => setOptionType(true)}
            >
              Tác phẩm ủy quyền
            </Radio.Button>
          </Radio.Group>
        </Row>
        {optionType ? (
          <Row style={{ width: "100%", marginTop: ".5rem" }}>
            <Row style={{ width: "100%", justifyContent: "space-between" }}>
              <span>
                <Typography.Text
                  style={{ ...textFont(".9rem"), fontWeight: 600 }}
                >
                  Tình trạng phê duyệt:
                </Typography.Text>
                <Select
                  options={OPTION_VIDEO_UQ_STATUS}
                  defaultValue={OPTION_VIDEO_UQ_STATUS[0].value}
                  style={{
                    width: 160,
                    marginLeft: ".75rem",
                  }}
                  size="large"
                />
              </span>
              <Col>
                <InputField
                  style={{
                    padding: ".5rem 1.5rem",
                    width: 400,
                    backgroundColor: "#2B2B3F",
                  }}
                  placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
                  suffix={<BiSearch style={{ width: 24, height: 24 }} />}
                />
              </Col>
            </Row>
            <Row style={{ width: "100%", marginTop: ".5rem" }}>
              <Table
                rowSelection={
                  isUpdate
                    ? {
                        type: "checkbox",
                        ...rowSelection,
                      }
                    : undefined
                }
                style={{ width: "100%" }}
                columns={columns}
                dataSource={banGhiUQ.map((d) => ({ ...d, key: d.id }))}
              />
            </Row>
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
          </Row>
        ) : (
          <Row style={{ width: "100%", marginTop: ".5rem" }}>
            <Col span={8}>
              <MyInput title="Số hợp đồng" label={hdUQ?.id} />
              <MyInput title="Tên hợp đồng" label={hdUQ?.name} />
              <MyInput title="Ngày hiệu lực" label={"02/06/2021"} />
              <MyInput title="Ngày hết hạn" label={"02/06/2021"} />
              <MyInput
                title="Tình trạng"
                label={
                  <div>
                    <Badge status="processing" color={hsd?.color} />
                    <Typography.Text
                      style={{ ...textFont(".9rem"), marginLeft: ".25rem" }}
                    >
                      {hsd?.label}
                    </Typography.Text>
                  </div>
                }
              />
              <Row
                style={{
                  width: "100%",
                  marginTop: "2rem",
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
              <MyInput title="Pháp nhân uỷ quyền" label="Cá nhân" />
              <MyInput title="Tên người uỷ quyền" label="Nguyễn Văn A" />
              <MyInput title="Ngày sinh" label="10/01/1984" />
              <MyInput title="Giới tính" label="Nam" />
              <MyInput title="Số điện thoại" label="(+84) 345 678 901" />
            </Col>
            <Col span={8}>
              <MyInput
                title="Đính kèm tệp"
                label={
                  <div>
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
              <Row style={{ width: "100%", marginTop: "8.2rem" }}>
                <MyInput title="Số CMND/ CCCD" label="123456789012" />
                <MyInput title="Ngày cấp" label="10/07/2011" />
                <MyInput title="Nơi cấp" label="Tp.HCM, Việt Nam" />
                <MyInput title="Mã số thuế" label="92387489" />
                <MyInput
                  title="Nơi cư trú"
                  label="69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
                />
              </Row>
            </Col>
            <Col span={8} style={{ paddingLeft: "1rem" }}>
              <Row style={{ width: "100%" }}>
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
                <MyInput title="Quyền tác giả" label="0%" />
                <MyInput
                  title="Quyền liên quan"
                  label={
                    <div>
                      <div>Quyền của người biểu diễn: 50%</div>
                      <div>Quyền của nhà sản xuất: 50%</div>
                    </div>
                  }
                />
              </Row>
              <Row style={{ marginTop: "6.6rem", width: "100%" }}>
                <MyInput title="Email" label="123@gmail.com" />
                <MyInput title="Tên đăng nhập" label="123" />
                <MyInput
                  title="Mật khẩu"
                  label="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                />
                <MyInput title="Số tài khoản" label="112312323" />
                <MyInput title="Ngân hàng" label="ACB - Ngân hàng Á Châu" />
              </Row>
            </Col>
          </Row>
        )}
      </Row>

      <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
        <Row
          style={{
            ...textFont("1.25rem"),
            fontWeight: 600,
            color: "#fff",
            marginBottom: ".5rem",
            justifyContent: "center",
          }}
        >
          Hủy hợp đồng ủy quyền
        </Row>
        <TextArea
          style={{ backgroundColor: "#2B2B3F", color: "#fff" }}
          rows={5}
          placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
        />
        <Col
          span={24}
          style={{
            display: "flex",
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
              onClick={() => setOpen(false)}
            >
              Quay lại
            </Button>
            <Button
              type="primary"
              style={{ width: 120 }}
              onClick={() => setOpen(false)}
            >
              Hủy hợp đồng
            </Button>
          </Space>
        </Col>
      </Modal>
      <Modal
        open={openGH}
        onCancel={() => setOpenGH(false)}
        footer={null}
        width={700}
      >
        <Row
          style={{
            ...textFont("1.25rem"),
            fontWeight: 600,
            color: "#fff",
            marginBottom: ".5rem",
            justifyContent: "center",
          }}
        >
          Gia hạn ủy quyền tác phẩm
        </Row>
        <Row style={{ width: "100%" }}>
          <Col span={12}>
            <Typography.Paragraph
              style={{
                ...textFont(".9rem"),
                fontWeight: 600,
              }}
            >
              Thời gian gia hạn
              <span style={{ color: "red", marginLeft: ".25rem" }}>*</span>
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{
                ...textFont(".8rem"),
                opacity: 0.7,
              }}
            >
              Từ ngày: 02/08/2021
            </Typography.Paragraph>
            <Row style={{ width: "100%", marginBottom: "1rem" }}>
              <Typography.Text
                style={{
                  ...textFont(".8rem"),
                  opacity: 0.7,
                }}
              >
                Đến ngày: <MyDatePicker style={{ marginLeft: ".5rem" }} />
              </Typography.Text>
            </Row>
            <Typography.Paragraph
              style={{
                ...textFont(".7rem"),
                opacity: 0.7,
                color: "#FFD0AB",
                width: "240px",
              }}
            >
              Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính sau ngày
              hết hạn hợp đồng cũ một ngày.
            </Typography.Paragraph>
            <Row style={{ width: "100%", marginTop: "2rem" }}>
              <Typography.Text
                style={{
                  ...textFont(".9rem"),
                  fontWeight: 600,
                }}
              >
                Đính kèm tệp:
                <span style={{ marginLeft: ".5rem" }}>
                  <Button
                    style={{
                      backgroundColor: "#3E3E5B",
                      color: "orange",
                      borderColor: "orange",
                      fontWeight: 600,
                    }}
                  >
                    <AiOutlineCloudUpload style={{ marginRight: ".2rem" }} />
                    Tải lên
                  </Button>
                </span>
              </Typography.Text>
              <Row
                style={{
                  width: "100%",
                  color: "#FFF",
                  opacity: 0.9,
                  marginLeft: "6rem",
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
                  </div>
                </div>
              </Row>
            </Row>
          </Col>
          <Col span={12}>
            <Typography.Paragraph
              style={{
                ...textFont(".9rem"),
                fontWeight: 600,
              }}
            >
              Mức nhuận bút
              <span style={{ color: "red", marginLeft: ".25rem" }}>*</span>
            </Typography.Paragraph>
            <Row
              style={{
                width: "100%",
                alignItems: "center",
                marginBottom: ".5rem",
              }}
            >
              <Checkbox />{" "}
              <span
                style={{
                  ...textFont(".8rem"),
                  marginLeft: ".5rem",
                  opacity: 0.7,
                }}
              >
                Quyền tác giả
              </span>
              <Input
                style={{
                  width: 48,
                  backgroundColor: "#2B2B3F",
                  margin: "0 .5rem",
                }}
                defaultValue={0}
              />{" "}
              <span
                style={{
                  ...textFont(".8rem"),
                  opacity: 0.7,
                }}
              >
                %
              </span>
            </Row>
            <Row
              style={{
                width: "100%",
                alignItems: "center",
                marginBottom: ".5rem",
              }}
            >
              <Checkbox />{" "}
              <span
                style={{
                  ...textFont(".8rem"),
                  marginLeft: ".5rem",
                  opacity: 0.7,
                }}
              >
                Quyền liên quan:
              </span>
            </Row>
            <Row
              style={{
                marginLeft: "1rem",
                borderLeft: "1px solid #727288",
              }}
            >
              <Row
                style={{
                  width: "100%",
                  alignItems: "center",
                  marginBottom: ".5rem",
                  marginLeft: ".5rem",
                }}
              >
                <Checkbox />{" "}
                <span
                  style={{
                    ...textFont(".8rem"),
                    marginLeft: ".5rem",
                    opacity: 0.7,
                  }}
                >
                  Quyền của người biểu diễn
                </span>
                <Input
                  style={{
                    width: 48,
                    backgroundColor: "#2B2B3F",
                    margin: "0 .5rem",
                  }}
                  defaultValue={50}
                />{" "}
                <span
                  style={{
                    ...textFont(".8rem"),
                    opacity: 0.7,
                  }}
                >
                  %
                </span>
              </Row>
              <Row
                style={{
                  width: "100%",
                  alignItems: "center",
                  marginBottom: ".5rem",
                  marginLeft: ".5rem",
                }}
              >
                <Checkbox />{" "}
                <span
                  style={{
                    ...textFont(".8rem"),
                    marginLeft: ".5rem",
                    opacity: 0.7,
                  }}
                >
                  Quyền của nhà sản xuất
                </span>
                <Input
                  style={{
                    width: 48,
                    backgroundColor: "#2B2B3F",
                    margin: "0 .5rem",
                  }}
                  defaultValue={50}
                />{" "}
                <span
                  style={{
                    ...textFont(".8rem"),
                    opacity: 0.7,
                  }}
                >
                  %
                </span>
              </Row>
            </Row>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col
            span={24}
            style={{
              display: "flex",
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
                onClick={() => setOpenGH(false)}
              >
                Hủy
              </Button>
              <Button
                type="primary"
                style={{ width: 120 }}
                onClick={() => setOpenGH(false)}
              >
                Lưu
              </Button>
            </Space>
          </Col>
        </Row>
      </Modal>

      {optionType ? (
        isUpdate ? (
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
                <AiOutlineClose
                  className="root_color"
                  style={{ width: 20, height: 20 }}
                />
              }
              label="Từ chối bản ghi"
            />
          </Row>
        ) : (
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
                <BsPencilSquare
                  className="root_color"
                  style={{ width: 20, height: 20 }}
                />
              }
              label="Chỉnh sửa tác phẩm"
              onClick={() => setIsUpdate(true)}
            />
            <IconMenu
              icon={
                <FaFileContract
                  className="root_color"
                  style={{ width: 20, height: 20 }}
                />
              }
              label="Gia hạn hợp đồng"
              onClick={() => setOpenGH(true)}
            />
            <IconMenu
              icon={
                <MdSettingsBackupRestore
                  className="root_color"
                  style={{ width: 20, height: 20 }}
                />
              }
              label="Hủy hợp đồng"
              onClick={() => setOpen(true)}
            />
            <IconMenu
              icon={
                <BiPlus
                  className="root_color"
                  style={{ width: 20, height: 20 }}
                />
              }
              label="Thêm bản ghi"
            />
          </Row>
        )
      ) : (
        <Row
          style={{
            position: "absolute",
            right: 0,
            top: "24%",
            backgroundColor: "#2F2F41",
            padding: "1rem .5rem",
            borderRadius: "16px 0px 0px 16px",
            flexDirection: "column",
          }}
        >
          <IconMenu
            icon={
              <BsPencilSquare
                className="root_color"
                style={{ width: 20, height: 20 }}
              />
            }
            label="Chỉnh sửa hợp đồng"
            onClick={() => navigate("update")}
          />
          <IconMenu
            icon={
              <FaFileContract
                className="root_color"
                style={{ width: 20, height: 20 }}
              />
            }
            label="Gia hạn hợp đồng"
            onClick={() => setOpenGH(true)}
          />
          <IconMenu
            icon={
              <IoMdClose
                className="root_color"
                style={{ width: 20, height: 20 }}
              />
            }
            label="Hủy hợp đồng"
            onClick={() => setOpen(true)}
          />
        </Row>
      )}
    </div>
  );
};

export default Detail;
