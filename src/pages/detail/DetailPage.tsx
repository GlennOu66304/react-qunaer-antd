import React from "react";
import styles from "./DetailPage.module.css";
// 3)RouteComponentProps react-rotuer-dom
import { RouteComponentProps, useParams } from "react-router-dom";
import { ProductIntro, ProductComment } from "../../components";
import { MainLayout } from "../../layouts";
// import axios from "axios";
import { useEffect } from "react";
import { Spin, Row, Col, DatePicker, Divider, Typography } from "antd";
import { commentMockData } from "./mockup";
// import the actions
import { giveMeProductDetails } from "../../redux/productDetail/slice";
// impor the hooks
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
// 4)interface prop types check
interface MatchParams {
  touristRouteId: string;
  comment: any;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  // console.log(props)
  // aftert add the  MatchParams and the <RouteComponentProps< MatchParams>> , the error after props.location will lose

  // every router compoponetn will have props :2)match.history,location(props)
  // console.log(props.history)
  // console.log(props.location)
  // console.log(props.match)

  const { touristRouteId } = useParams<MatchParams>();
  // loading, errors, productlist
  const loading = useSelector((state) => state.productDetail.loading); // like this.state in the class based component
  const error = useSelector((state) => state.productDetail.error);
  const product = useSelector((state) => state.productDetail.data);
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;
  useEffect(() => {
    //same like componentdidmout in class component
    //   fetch data function
    const fetchData = async () => {
      dispatch(giveMeProductDetails(touristRouteId));
    };
    // call back the function
    fetchData();
    // return something
  }, []);

  //   checked the outputed value
  // console.log(product)

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
        {/* 1.product details and date */}
        <div className={styles["product-intro-container"]}>
          <Row>
            {/* left side: Produt Detail */}
            <Col span={11}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.price}
                coupons={product.coupons}
                points={product.points}
                discount={product.discount}
                rating={product.rating}
                picture={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            {/* Right side:date */}
            <Col span={13}>
              <RangePicker open style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>
        {/* 2. 锚点菜单*/}
        <div className={styles["product-detail-anchor"]}> </div>
        {/* 3.产品特色 */}
        <div id="feature" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={1}>产品特色</Typography.Title>
          </Divider>

          <div
            dangerouslySetInnerHTML={{ __html: product.features }}
            style={{ margin: 50 }}
          ></div>
        </div>
        {/* 4.费用 */}
        <div id="fees" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={1}>费用</Typography.Title>
          </Divider>

          <div
            dangerouslySetInnerHTML={{ __html: product.fees }}
            style={{ margin: 50 }}
          ></div>
        </div>
        {/* 5预定须知 */}
        <div id="notes" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={1}>预定须知</Typography.Title>
          </Divider>

          <div
            dangerouslySetInnerHTML={{ __html: product.notes }}
            style={{ margin: 50 }}
          ></div>
        </div>
        {/* 6.用户评价 */}
        <div id="components" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={1}>用户评价</Typography.Title>
          </Divider>

          <div style={{ margin: 40 }}>
            <ProductComment data={commentMockData} />
          </div>
        </div>
      </MainLayout>
   
  );
};
