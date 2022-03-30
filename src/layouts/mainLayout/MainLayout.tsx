import React from "react";

import styles from "./MainLayout.module.css";
import {Header, Footer} from '../../components'
// You need to add this Children paramater, otherwise this code will failed in the Homepage page
export const MainLayout: React.FC = ({children}) => {
  return (
    <>
    <Header />
    <div className={styles["page-content"]}>{children}</div>

    <Footer />
    </>
  )
};
