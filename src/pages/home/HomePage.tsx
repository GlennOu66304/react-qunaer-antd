import React from "react";
// import styles from "./HomePage.module.css";
import {
  
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners,
} from "../../components";
import { MainLayout } from "../../layouts";

import { Row, Col, Typography, Spin } from "antd";

// a. Mock Up data for the whole project :data import : this is from the mockup.tsx under the src folder and
// export it into the App.tsx
// import { productList1, productList2, productList3 } from "./mockups";

// import { withRouter,RouteComponentProps } from "react-router-dom";
import "../../i18n/configs";
import { withTranslation, WithTranslation } from "react-i18next";
// image import
import SideImage1 from "../../assets/images/sider_2019_12-09.png";
import SideImage2 from "../../assets/images/sider_2019_02-04.png";
import SideImage3 from "../../assets/images/sider_2019_02-04-2.png";

import { connect } from "react-redux";

import { RootState } from "../../reduex/store";
import { giveMeDataActionCreator } from "../../reduex/recommendation/recommendationActions";

const mapStateToProps = (state: RootState) => {
  return {
    productList: state.recommendation.productList,
    loading: state.recommendation.loading,
    error: state.recommendation.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchStart name there is no relationship with recommnendationAction.ts, this is a function name, will be used in the constructor
    // in the componentDidMount function as a function name to call back, then trigger the action creator, and process the reducer
    giveMeData: () => {
      dispatch(giveMeDataActionCreator());
    },
  };
};

type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

// Do not use the export default, it will cause the export failed when you use the short cut rcc

class HomePageComponent extends React.Component<PropsType> {
  async componentDidMount() {
    this.props.giveMeData();
  }

  render() {
    const { t, loading, error } = this.props;

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
      
        <MainLayout>
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
            products={this.props.productList[0].touristRoutes}
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
            products={this.props.productList[1].touristRoutes}
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
            products={this.props.productList[2].touristRoutes}
          />

          {/* BusinessPartners */}
          <BusinessPartners />
        </MainLayout>
    
    );
  }
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent)); // find the type error, you need to remove the withrouter and RouteComponentProps
