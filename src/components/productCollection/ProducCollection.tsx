import React from "react";
import styles from "./ProductCollection.module.css";
import { ProductImage } from "./ProductImage";
import { Row, Col, Divider } from "antd";

interface PropsType {
  title: JSX.Element;
  sideImage: string;
  products: any[];
}
export const ProductCollection: React.FC<PropsType> = ({
  title,
  sideImage,
  products,
}) => {
  return (
    <div className={styles.content}>
      {/* Section Titel Text */}
      <Divider orientation="left">{title} </Divider>

      {/* One Row For The Whole Content */}
      <Row>
        {/* 1)Col1: side image */}
        <Col span={4}>
          <img src={sideImage} alt="" className={styles["side-image"]} />
        </Col>

        {/* 2)Col2:right side two rows: */}
        <Col span={20}>
          {/* Row1:Top section */}
          <Row>
            {/* a.two columns: */}

            {/* a.1 big images:image + text+prices */}
            <Col span={12}>
              <ProductImage
                id={products[0].id}
                size={"large"}
                title={products[0].title}
                price={products[0].price}
                imageSrc={products[0].touristRoutePictures[0].url}
              />
            </Col>

            {/* small images with text+prices */}
            <Col span={12}>
              {/* First row images */}
              <Row>
                {/* two images first */}
                <Col span={12}>
                  <ProductImage
                    id={products[1].id}
                    size={"small"}
                    title={products[1].title}
                    price={products[1].price}
                    imageSrc={products[1].touristRoutePictures[0].url}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[2].id}
                    size={"small"}
                    title={products[2].title}
                    price={products[2].price}
                    imageSrc={products[2].touristRoutePictures[0].url}
                  />
                </Col>
              </Row>

              {/* second row for two images */}
              <Row>
                {/* two images second */}
                <Col span={12}>
                  <ProductImage
                    id={products[3].id}
                    size={"small"}
                    title={products[3].title}
                    price={products[3].price}
                    imageSrc={products[3].touristRoutePictures[0].url}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[4].id}
                    size={"small"}
                    title={products[4].title}
                    price={products[4].price}
                    imageSrc={products[4].touristRoutePictures[0].url}
                  />{" "}
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Row2:bottom section */}
          <Row>
            {/* four columns */}
            <Col span={6}>
              <ProductImage
                id={products[5].id}
                size={"small"}
                title={products[5].title}
                price={products[5].price}
                imageSrc={products[5].touristRoutePictures[0].url}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[6].id}
                size={"small"}
                title={products[6].title}
                price={products[6].price}
                imageSrc={products[6].touristRoutePictures[0].url}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[7].id}
                size={"small"}
                title={products[7].title}
                price={products[7].price}
                imageSrc={products[7].touristRoutePictures[0].url}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[8].id}
                size={"small"}
                title={products[8].title}
                price={products[8].price}
                imageSrc={products[8].touristRoutePictures[0].url}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
