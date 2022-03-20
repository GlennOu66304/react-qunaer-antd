import React from "react";
import logo from "./logo.svg";
// import './App.css';
// 4.change and clean clean the file
// 1)change the App.css to App.module.css
// 2)App.tsx change as well：
import styles from "./App.module.css";
// import 'antd/dist/antd.css';
import { Typography, Menu, Dropdown, Layout, Input, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

function App() {
  return (
    // 3.html part:

    // 1)clean the file;
    <div className={styles.App}>

      {/* Header */}   
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
              <Button>注册</Button>
              <Button>登录</Button>
            </Button.Group>
          </div>
        </div>
        
        {/* main Header */}
        <Layout.Header className={styles["main-header"]}>
          {/* logo */}
          <img src={logo} alt="" className={styles["app-logo"]} />

          {/* title */}
          <Typography.Title level={3} className={styles.title}>
            React旅游网
          </Typography.Title>

          {/* search */}
          <Input.Search
            className={styles["search-input"]}
            placeholder="请输入旅游目的地，主题，或关键字"
          />
        </Layout.Header>
      </div>

         {/* body */}
<Menu mode="horizontal" className={styles["main-menu"]}>
 <Menu.Item>
   旅游首页
 </Menu.Item>
 <Menu.Item>
  周末游
 </Menu.Item>
 <Menu.Item>
  跟团游
 </Menu.Item>
 <Menu.Item>
  自由行
 </Menu.Item>
 <Menu.Item>
 私家团
 </Menu.Item>
 <Menu.Item>
 游轮
 </Menu.Item>
 <Menu.Item>
   酒店+景点
 </Menu.Item>
 <Menu.Item>
  当地玩乐
 </Menu.Item>
 <Menu.Item>
  主题游
 </Menu.Item>
 <Menu.Item>
  定制游
 </Menu.Item>
 <Menu.Item>
 游学
 </Menu.Item>
 <Menu.Item>
签证
 </Menu.Item>
 <Menu.Item>
企业游
 </Menu.Item>
 <Menu.Item>
高端游
 </Menu.Item>
 <Menu.Item>
爱玩户外
 </Menu.Item>
 <Menu.Item>
保险
 </Menu.Item>
</Menu>


        {/* Footer */}
        <Layout.Footer style={{textAlign:"center"}} >
        <Typography.Title level={3}>此版权归@react旅游网</Typography.Title>

        </Layout.Footer>
    </div>
  );
}

export default App;
