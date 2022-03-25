import React from "react";
import styles from "./HomePage.module.css";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners,
} from "../../components";

import { Row, Col, Typography, Spin } from "antd";

// a. Mock Up data for the whole project :data import : this is from the mockup.tsx under the src folder and
// export it into the App.tsx
// import { productList1, productList2, productList3 } from "./mockups";
import axios from "axios";

// import { withRouter,RouteComponentProps } from "react-router-dom";
import "../../i18n/configs";
import { withTranslation, WithTranslation } from "react-i18next";
// image import
import SideImage1 from "../../assets/images/sider_2019_12-09.png";
import SideImage2 from "../../assets/images/sider_2019_02-04.png";
import SideImage3 from "../../assets/images/sider_2019_02-04-2.png";

interface State {
  productList: any[];
  loading: boolean;
  error: string | null;
}

// Do not use the export default, it will cause the export failed when you use the short cut rcc

class HomePageComponent extends React.Component<WithTranslation, State> {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8089/api/productCollections"
      );
      this.setState({
        productList: data,
        loading: false,
        error: null,
      });
      console.log(this.state.productList);
    } catch (error:any) {
      console.log(error);

      this.setState({
         error: error.message,
        loading: false,
      });
    }
  }

  render() {
    const { t } = this.props;
    const { productList, loading, error } = this.state;

    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
      );
    }

    if (error) {
      return <div>网站出现错误:{error}</div>;
    }

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
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            //  Here will come with erro,you need to define the PropsTypes in the child component
            // ProductCollection, then error will be gone
            sideImage={SideImage1}
            products={productList[0].touristRoutes}
          />

          {/* 新品上市 */}
          <ProductCollection
            title={
              <Typography.Title level={1} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            //  Here will come with erro,you need to define the PropsTypes in the child component
            // ProductCollection, then error will be gone
            sideImage={SideImage2}
            products={productList[1].touristRoutes}
          />

          {/* 国内游推荐 */}
          <ProductCollection
            title={
              <Typography.Title level={1} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            //  Here will come with erro,you need to define the PropsTypes in the child component
            // ProductCollection, then error will be gone
            sideImage={SideImage3}
            products={productList[2].touristRoutes}
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

export const HomePage = withTranslation()(HomePageComponent); // find the type error, you need to remove the withrouter and RouteComponentProps
