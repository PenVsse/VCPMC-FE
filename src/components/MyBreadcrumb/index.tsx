import { Breadcrumb, Row, Avatar, Typography, Dropdown, Select } from "antd";
import React, { CSSProperties } from "react";
import styled from "styled-components";
import { BreadcrumbProps } from "../../types/components/breadcrumb";

export const textFont = (fontSize: string | number): CSSProperties => ({
  fontFamily: "Nunito",
  fontSize,
  color: "#fff",
});

const ConfigBreadcrumb = styled(Breadcrumb)`
  font-family: "Nunito" !important;
  font-size: 1.25rem;

  li {
    color: #fff !important;
    opacity: 0.7;
    font-size: 0.85rem;

    a {
      color: #fff !important;
    }
  }
`;

const MyDropDown = styled(Dropdown)`
  ul {
    padding: 0 !important;
  }
`;

const MySelect = styled(Select)`
  .ant-select-selector {
    background: content-box !important;
  }

  .ant-select-arrow {
    color: #fff !important;
  }

  .ant-select-dropdown {
    background: content-box !important;
  }
`;

const MyBreadcrumb: React.FC<BreadcrumbProps> = ({
  separator,
  items,
  user,
}) => {
  // const itemss: MenuProps["items"] = [
  //   {
  //     key: "1",
  //     label: (
  //       <div
  //         className="root_background"
  //         style={{
  //           padding: ".4rem 1.5rem",
  //           borderTopLeftRadius: "",
  //         }}
  //       >
  //         <Typography.Text
  //           style={{ ...textFont("1.25rem"), fontWeight: 700, color: "#fff" }}
  //         >
  //           Thông báo
  //         </Typography.Text>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <div style={{ padding: ".5rem 1rem" }}>
  //         <div>
  //           <Typography.Text
  //             style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
  //           >
  //             Người dùng: Nguyễn Thị Thùy Dung
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Typography.Text style={{ ...textFont(".75rem") }}>
  //             Thời gian nhận số: 12h20 ngày 30/11/2021
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Divider style={{ margin: '1rem 0 0 0'}}/>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <div style={{ padding: ".5rem 1rem" }}>
  //         <div>
  //           <Typography.Text
  //             style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
  //           >
  //             Người dùng: Nguyễn Thiên Chinh
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Typography.Text style={{ ...textFont(".75rem") }}>
  //             Thời gian nhận số: 12h20 ngày 30/11/2021
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Divider style={{ margin: '1rem 0 0 0'}}/>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "4",
  //     label: (
  //       <div style={{ padding: ".5rem 1rem" }}>
  //         <div>
  //           <Typography.Text
  //             style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
  //           >
  //             Người dùng: Võ Thị Kim Liên
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Typography.Text style={{ ...textFont(".75rem") }}>
  //             Thời gian nhận số: 12h20 ngày 30/11/2021
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Divider style={{ margin: '1rem 0 0 0'}}/>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "5",
  //     label: (
  //       <div style={{ padding: ".5rem 1rem" }}>
  //         <div>
  //           <Typography.Text
  //             style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
  //           >
  //             Người dùng: Nguyễn Quốc Huy
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Typography.Text style={{ ...textFont(".75rem") }}>
  //             Thời gian nhận số: 12h20 ngày 30/11/2021
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Divider style={{ margin: '1rem 0 0 0'}}/>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "6",
  //     label: (
  //       <div style={{ padding: ".5rem 1rem" }}>
  //         <div>
  //           <Typography.Text
  //             style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
  //           >
  //             Người dùng: Vũ Ngọc Lan Anh
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Typography.Text style={{ ...textFont(".75rem") }}>
  //             Thời gian nhận số: 12h20 ngày 30/11/2021
  //           </Typography.Text>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "7",
  //     label: (
  //       <div style={{ padding: ".5rem 1rem" }}>
  //         <div>
  //           <Typography.Text
  //             style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
  //           >
  //             Người dùng: Nguyễn Thị Trúc Anh
  //           </Typography.Text>
  //         </div>
  //         <div>
  //           <Typography.Text style={{ ...textFont(".75rem") }}>
  //             Thời gian nhận số: 12h20 ngày 30/11/2021
  //           </Typography.Text>
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <Row
      style={{
        alignItems: "center",
        width: "100%",
        padding: "1rem 4rem 0 2rem",
        height: 60,
        zIndex: 9999,
      }}
      justify="space-between"
    >
      <ConfigBreadcrumb separator={separator} items={items} />
      <Row style={{ alignItems: "center" }}>
        <Row
          style={{
            padding: ".5rem",
            cursor: "pointer",
            marginRight: "1rem",
            width: 200,
          }}
        >
          <MySelect
            style={{ width: 200 }}
            defaultValue={1}
            options={[
              {
                value: 1,
                label: (
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Tiếng Việt{" "}
                    <img
                      alt="logo"
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/vietnam_1.png?alt=media&token=b747b630-1143-4d16-ac3e-e76b2cb4dead"
                      }
                      style={{
                        width: 16,
                        height: 16,
                        objectFit: "contain",
                        marginLeft: ".5rem",
                      }}
                    />
                  </div>
                ),
              },
              {
                value: 2,
                label: (
                  <div
                    style={{
                      color: "#fff",
                      opacity: 0.7,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    English
                  </div>
                ),
              },
            ]}
          />
        </Row>
        <Row style={{ marginRight: ".5rem" }}>
          <Avatar
            src={
              "https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/no_avatar.jpg?alt=media&token=f439c5a5-cd01-4208-9aca-1a7d39611dca"
            }
            alt="avatar"
            size="large"
          />
        </Row>
        <div>
          <Typography.Paragraph
            style={{
              fontFamily: "Nunito",
              fontWeight: 700,
              margin: 0,
              color: "#fff",
            }}
          >
            {`${user?.lastName} ${user?.firstName}`}
          </Typography.Paragraph>
          <Typography.Paragraph
            className="root_color"
            style={{ fontFamily: "Nunito", margin: 0, opacity: 0.7 }}
          >
            {user?.Role.name}
          </Typography.Paragraph>
        </div>
      </Row>
    </Row>
  );
};

export default MyBreadcrumb;
