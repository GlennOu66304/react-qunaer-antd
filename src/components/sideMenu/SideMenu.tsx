import React from "react";
import styles from "./SideMenu.module.css";
import { Menu } from "antd";
import { sideMenuList } from "./mockup";
import { GifOutlined } from "@ant-design/icons";
export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {/* 
       first loop for title

        use the bracket instead of the curly bracket to avoide the return error
        Changing {} to () worked for me
        [How to fix "Expected to return a value in arrow function" with reactjs?](https://stackoverflow.com/questions/62653450/how-to-fix-expected-to-return-a-value-in-arrow-function-with-reactjs)

         */}

      {sideMenuList.map((m, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GifOutlined />
              {m.title}
            </span>
          }
        >
          {/* {/* second loop for the second subtitle, here you need to find the subMnu array list first */}
          {m.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}`}
              title={
                <span>
                  <GifOutlined />
                  {sm.title}
                </span>
              }
            >

              {/* the reson why this section does not display because of the index issue, need to use the smsindex */}
              {sm.subMenu.map((sms, smsindex) => (
                <Menu.Item key={`sub-sub-${smsindex}`}>
                  <span>
                    <GifOutlined />
                    {sms}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}{" "}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
