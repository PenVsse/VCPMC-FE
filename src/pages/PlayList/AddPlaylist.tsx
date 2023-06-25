import React from "react";
import MyBreadcrumb, { textFont } from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import { Row, Col, Typography, Divider, Switch, Button, Space } from "antd";
import InputField from "../../components/InputField";
import TextAreaField from "../../components/TextAreaField";
import { AiOutlineCloudUpload } from "react-icons/ai";
import DetailTable from "./DetailTable";
import { IconMenu } from "../Home";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AddPlaylist: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    return (
        <div
      style= {{
        position: "relative",
            maxHeight: "100vh",
                minHeight: "100vh",
                    overflowY: "scroll",
      }
}
    >
    <MyBreadcrumb
        user={ user }
items = {
    [
    {
        title: "Playlist",
        href: "/playlist",
    },
    {
        title: "Thêm playlist mới",
    },
        ]}
separator = ">"
    />
    <Row style={ { padding: "0 7rem 0 2rem", width: "100%" } }>
        <Typography.Title
          style={
    {
            ...textFont("2rem"),
            fontWeight: 700,
                color: "#fff",
                    margin: 0,
          }
}
        >
    Thêm Playlist
        < /Typography.Title>
        < Row style = {{ width: "100%", marginTop: "1.5rem" }}>
            <Col span={ 5 } style = {{ paddingRight: "1rem" }}>
                <Typography.Paragraph
              style={
    {
                ...textFont("1rem"),
            marginBottom: ".5rem",
              }
}
            >
    Ảnh bìa:
</Typography.Paragraph>
    < Button
className = "root_color"
style = {{
    background: "content-box",
        width: 120,
            borderColor: "#FF9138",
                display: "flex",
                    alignItems: "center",
                        justifyContent: "center",
              }}
            >
    <AiOutlineCloudUpload style={ { marginRight: ".25rem" } } /> Tải lên
        < /Button>
        < Divider
style = {{
    backgroundColor: "#ccc",
        margin: ".5rem 0",
            opacity: 0.5,
              }}
/>
    < InputField
title = {
                < Typography.Text style = {{ color: "#fff", fontWeight: 600 }}>
    Tiêu đề:
<span style={ { color: "red", marginLeft: ".25rem" } }>* </span>
    < /Typography.Text>
              }
style = {{ borderColor: "#ccc" }}
/>
    < Divider
style = {{
    backgroundColor: "#ccc",
        margin: ".5rem 0",
            opacity: 0.5,
              }}
/>
    < Row style = {{ width: "100%", marginBottom: ".5rem" }}>
        <Col span={ 12 }>
            <Typography.Text
                  style={
    {
                    ...textFont(".9rem"),
            fontWeight: 700,
                color: "#fff",
                    margin: 0,
                  }
}
                >
    Tổng số:
</Typography.Text>
    < /Col>
    < Col
span = { 12}
style = {{ display: "flex", justifyContent: "space-between" }}
              >
    <div></div>
    < Typography.Text
style = {{
                    ...textFont(".9rem"),
        color: "#fff",
            margin: 0,
                opacity: 0.7,
                  }}
                >
    {`0 bản ghi`}
</Typography.Text>
    < /Col>
    < /Row>
    < Row style = {{ width: "100%", marginBottom: ".5rem" }}>
        <Col span={ 12 }>
            <Typography.Text
                  style={
    {
                    ...textFont(".9rem"),
            fontWeight: 700,
                color: "#fff",
                    margin: 0,
                  }
}
                >
    Tổng thời lượng:
</Typography.Text>
    < /Col>
    < Col
span = { 12}
style = {{ display: "flex", justifyContent: "space-between" }}
              >
    <div></div>
    < Typography.Text
style = {{
                    ...textFont(".9rem"),
        color: "#fff",
            margin: 0,
                opacity: 0.7,
                  }}
                >
    {`--:--:--`}
</Typography.Text>
    < /Col>
    < /Row>
    < Divider
style = {{
    backgroundColor: "#ccc",
        margin: ".5rem 0",
            opacity: 0.5,
              }}
/>
    < TextAreaField
title = { "Mô tả:"}
fontWeightTitle = { 600}
style = {{
    borderColor: "#ccc",
        backgroundColor: "rgb(43, 43, 63)",
            color: "#fff",
                opacity: 0.8,
              }}
/>
    < Divider
style = {{
    backgroundColor: "#ccc",
        margin: ".5rem 0",
            opacity: 0.5,
              }}
/>
    < TextAreaField
title = { "Chủ đề:"}
fontWeightTitle = { 600}
style = {{
    borderColor: "#ccc",
        backgroundColor: "rgb(43, 43, 63)",
            color: "#fff",
                opacity: 0.8,
              }}
/>
    < Row style = {{ margin: "1rem 0" }}>
        <Switch defaultChecked /> { " "}
        < Typography.Text
style = {{
                  ...textFont(".9rem"),
        color: "#fff",
            fontWeight: 600,
                margin: 0,
                    marginLeft: ".5rem",
                }}
              >
    Chế dộ công khai
        < /Typography.Text>
        < /Row>
        < /Col>
        < Col span = { 19} >
            <DetailTable data={ [] } />
                < Typography.Text
style = {{
                ...textFont(".75rem"),
        color: "#fff",
            fontWeight: 600,
                margin: 0,
                    marginLeft: ".5rem",
                        opacity: 0.7,
              }}
            >
    <span
                style={
    {
        color: "red",
            marginRight: ".25rem",
                fontSize: "1rem",
                }
}
              >
                *
    </span>
              là những trường thông tin bắt buộc
    < /Typography.Text>
    < Row style = {{ width: "100%" }}>
        <Col
                span={ 24 }
style = {{
    display: "flex",
        justifyContent: "center",
            marginTop: "1rem",
                }}
              >
    <Space size={ 20 }>
        <Button
                    className="root_color"
style = {{
    background: "content-box",
        width: 120,
            borderColor: "#FF9138",
                    }}
onClick = {() => history.back()}
                  >
    Hủy
    < /Button>
    < Button type = "primary" style = {{ width: 120 }}>
        Lưu
        < /Button>
        < /Space>
        < /Col>
        < /Row>
        < /Col>
        < /Row>
        < /Row>

        < Row
style = {{
    position: "absolute",
        right: 0,
            top: "17%",
                backgroundColor: "#2F2F41",
                    padding: "1rem .5rem",
                        borderRadius: "16px 0px 0px 16px",
                            flexDirection: "column",
        }}
      >
    <IconMenu
          icon={
    <BiPlus className="root_color" style = {{ width: 20, height: 20 }
} />
          }
label = "Thêm bản ghi"
onClick = {() => navigate('video')}
/>
    < /Row>
    < /div>
  );
};

export default AddPlaylist;