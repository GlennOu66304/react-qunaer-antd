import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

import { Typography, Menu, Dropdown, Layout, Input, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
// 2.(4个）import useHistory, useLocation, useMatch, useParamas
// import { useHistory, useLocation,useParams, useRouteMatch} from "react-router-dom";
import {
  useHistory,
  // useLocation,
  // useParams,
  // useRouteMatch,
} from "react-router-dom";
// 1.hooks in header component section, not in the Homepage
// II. click header to root page, click sign to sign in page,click sign up to sign up page
import { useTranslation } from "react-i18next";
import { useSelector } from "../../redux/hooks"; //useSelector types and hooks from hooks.ts
import { useDispatch } from "react-redux";
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
} from "../../redux/language/languageActions";

import { userSlice } from "../../redux/user/slice";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";
import { useState, useEffect } from "react";

interface JwtPayload extends DefaultJwtPayload {
  username: string;
}

export const Header: React.FC = () => {
  // 3. const history, location, params, params
  const history = useHistory();
  // const location = useLocation();
  // const params = useParams();
  // const routeMatch = useRouteMatch();
  const { t } = useTranslation();
  // ge the state value by useSelector first
  const language = useSelector((state) => state.language.language);

  const languageList = useSelector((state) => state.language.languageList);
  const jwt = useSelector((s) => s.user.token);
  // dispatch
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (jwt) {
      const token = jwt_decode<JwtPayload>(jwt);
      setUsername(token.username);
    }
  }, [jwt]);

  const menuClickHandler = (e) => {
    if (e.key === "New") {
      // this.props.addlanguage("新语言", "new");
      dispatch(addLanguageActionCreator("新语言", "new"));
    } else {
      // this.props.changelanguage(e.key);
      dispatch(changeLanguageActionCreator(e.key));
    }
  };

  

  const onLogout = () => {
    dispatch(userSlice.actions.logOut());
    history.push("/");
  };

  return (
    <div className={styles["app-header"]}>
      {/* topheader */}

      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          {/* slogan */}
          <Typography.Text>{t("header.slogan")}</Typography.Text>

          {/* language  */}
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map((l) => {
                  return <Menu.Item key={l.code}> {l.name} </Menu.Item>;
                })}
                {/* 1.html add the new language section: Add new menu item*/}
                <Menu.Item key="New"> {t("header.add_new_language")}</Menu.Item>
                ;
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>

          {jwt ? (
            <Button.Group className={styles["button-group"]}>
              <span> {t("header.welcome")}</span>
              <Typography.Text strong>{username}</Typography.Text>
              <Button >{t("header.shoppingCart")}</Button>
              <Button onClick={onLogout}>{t("header.signOut")}</Button>
            </Button.Group>
          ) : (
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => history.push("/register")}>
                {t("header.register")}
              </Button>
              <Button onClick={() => history.push("/login")}>
                {t("header.signin")}
              </Button>
            </Button.Group>
          )}
        </div>
      </div>

      {/* main Header */}
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => history.push("/")}>
          {/* logo */}
          <img src={logo} alt="" className={styles["app-logo"]} />

          {/* title */}
          <Typography.Title level={3} className={styles.title}>
            {t("header.title")}
          </Typography.Title>
        </span>
        {/* search */}
        <Input.Search
          className={styles["search-input"]}
          placeholder="请输入旅游目的地，主题，或关键字"
          onSearch={(keywords) => history.push("/search/" + keywords)}
        />
      </Layout.Header>

      {/* body */}
      <Menu mode="horizontal" className={styles["main-menu"]}>
        <Menu.Item>{t("header.home_page")}</Menu.Item>
        <Menu.Item>{t("header.weekend")}</Menu.Item>
        <Menu.Item>{t("header.group")}</Menu.Item>
        <Menu.Item>{t("header.backpack")}</Menu.Item>
        <Menu.Item>{t("header.private")}</Menu.Item>
        <Menu.Item>{t("header.cruise")}</Menu.Item>
        <Menu.Item>{t("header.hotel")}</Menu.Item>
        <Menu.Item>{t("header.local")}</Menu.Item>
        <Menu.Item>{t("header.theme")}</Menu.Item>
        <Menu.Item>{t("header.custom")}</Menu.Item>
        <Menu.Item>{t("header.study")}</Menu.Item>
        <Menu.Item>{t("header.visa")}</Menu.Item>
        <Menu.Item>{t("header.enterprise")}</Menu.Item>
        <Menu.Item>{t("header.high_end")}</Menu.Item>
        <Menu.Item>{t("header.outdoor")}</Menu.Item>
        <Menu.Item>{t("header.insurance")}</Menu.Item>
      </Menu>
    </div>
  );
};
