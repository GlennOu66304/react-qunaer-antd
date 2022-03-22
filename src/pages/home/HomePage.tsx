import React, { Component } from "react";
import styles from "./HomePage.module.css";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners,
} from "../../components";

import { Row, Col, Typography } from "antd";

// a. Mock Up data for the whole project :data import : this is from the mockup.tsx under the src folder and
// export it into the App.tsx
import { productList1, productList2, productList3 } from "./mockups";

// image import
import SideImage1 from "../../assets/images/sider_2019_12-09.png";
import SideImage2 from "../../assets/images/sider_2019_02-04.png";
import SideImage3 from "../../assets/images/sider_2019_02-04-2.png";

// Do not use the export default, it will cause the export failed when you use the short cut rcc

export class HomePage extends Component {
  render() {
    return (
      
      <>
        <Header />
        {/* content */}
        <div className={styles["page-content"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>

            <Col span={18}>
              <Carousel />
            </Col>
          </Row>

          {/* website body content  */}

          {/* 爆款推荐 */}
          <ProductCollection
            title={
              <Typography.Title level={1} type="warning">
                爆款推荐
              </Typography.Title>
            }
            //  Here will come with erro,you need to define the PropsTypes in the child component
            // ProductCollection, then error will be gone
            sideImage={SideImage1}
            products={productList1}
          />

          {/* 新品上市 */}
          <ProductCollection
            title={
              <Typography.Title level={1} type="danger">
                新款上市
              </Typography.Title>
            }
            //  Here will come with erro,you need to define the PropsTypes in the child component
            // ProductCollection, then error will be gone
            sideImage={SideImage2}
            products={productList2}
          />

          {/* 国内游推荐 */}
          <ProductCollection
            title={
              <Typography.Title level={1} type="success">
                国内旅游推荐
              </Typography.Title>
            }
            //  Here will come with erro,you need to define the PropsTypes in the child component
            // ProductCollection, then error will be gone
            sideImage={SideImage3}
            products={productList3}
          />
        </div>

        {/* BusinessPartners */}
        <BusinessPartners />

        {/* footer */}
        <Footer />
      </>
    );
  }
}
