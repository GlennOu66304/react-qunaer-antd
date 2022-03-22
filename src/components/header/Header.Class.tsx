import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

import { Typography, Menu, Dropdown, Layout, Input, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
// 2.(4个）import useHistory, useLocation, useMatch, useParamas
// import { useHistory, useLocation,useParams, useRouteMatch} from "react-router-dom";
import { useHistory } from "react-router-dom";
// 1.hooks in header component section, not in the Homepage
// II. click header to root page, click sign to sign in page,click sign up to sign up page

export const Header: React.FC = () => {
  // 3. const history, location, params, params
  const history = useHistory();
  // const location = useLocation()
  // const params = useParams()
  // const routeMatch = useRouteMatch()

  return (
    <div className={styles["app-header"]}>
      {/* topheader */}

      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          {/* slogan */}
          <Typography.Text>让旅游更轻松</Typography.Text>

          {/* language  */}
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>英文</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>

          {/* register or login */}
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => history.push("/register")}>注册</Button>
            <Button onClick={() => history.push("/login")}>登录</Button>
          </Button.Group>
        </div>
      </div>

   
        {/* main Header */}
        <Layout.Header className={styles["main-header"]}>
        <span onClick={() => history.push("/")}>
          {/* logo */}
          <img src={logo} alt="" className={styles["app-logo"]} />

          {/* title */}
          <Typography.Title level={3} className={styles.title}>
            React旅游网
          </Typography.Title>
          </span>
          {/* search */}
          <Input.Search
            className={styles["search-input"]}
            placeholder="请输入旅游目的地，主题，或关键字"
          />
        </Layout.Header>
     

      {/* body */}
      <Menu mode="horizontal" className={styles["main-menu"]}>
        <Menu.Item>旅游首页</Menu.Item>
        <Menu.Item>周末游</Menu.Item>
        <Menu.Item>跟团游</Menu.Item>
        <Menu.Item>自由行</Menu.Item>
        <Menu.Item>私家团</Menu.Item>
        <Menu.Item>游轮</Menu.Item>
        <Menu.Item>酒店+景点</Menu.Item>
        <Menu.Item>当地玩乐</Menu.Item>
        <Menu.Item>主题游</Menu.Item>
        <Menu.Item>定制游</Menu.Item>
        <Menu.Item>游学</Menu.Item>
        <Menu.Item>签证</Menu.Item>
        <Menu.Item>企业游</Menu.Item>
        <Menu.Item>高端游</Menu.Item>
        <Menu.Item>爱玩户外</Menu.Item>
        <Menu.Item>保险</Menu.Item>
      </Menu>
    </div>
  );
};
