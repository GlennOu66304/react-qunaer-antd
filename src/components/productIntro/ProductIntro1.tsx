import React from "react";
import styles from "./ProductIntro.module.css";
import { Typography, Carousel, Image,Table,Rate } from "antd";
import { ColumnsType } from 'antd/es/table'

interface PropsType {
  title: string;
  shortDescription: string;
  price: string | number;
  coupons: string;
  points: string;
  discount: string;
  rating: number | number;
  picture: any;
}
// table data columns
const columns1:ColumnsType<RowTypes> = [
  {
    title: "title",
    dataIndex: "title",
    key:"title",
    align: "left",
    width: 120,
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
    align: "center",
  },
]

interface RowTypes{
  title:string, 
  description:string| number | JSX.Element,
  key:number,
  
}


export const ProductIntro: React.FC<PropsType> = ({
  title,
  shortDescription,
  price,
  coupons,
  points,
  discount,
  rating,
  picture,
}) => {

  // table datasource
const data:RowTypes[] = [

  {
    key: 0,
    title: "路线名称",
    description: title,
  },

  {
    key: 1,
    title: "价格",
    description: (
      <>
        ¥{" "}
        <Typography.Text type="danger" strong>
          {price}
        </Typography.Text>
      </>
    ),
  },

  {
    key: 2,
    title: "限时抢购折扣",
    description: discount ? (
      <>
        ¥ <Typography.Text delete>{price}</Typography.Text>{" "}
        <Typography.Text type="danger" strong>
          ¥ {discount}
        </Typography.Text>
      </>
    ) : (
      "暂无折扣"
    ),
  },

  {
    key: 3,
    title: "领取优惠",
    description: coupons ? discount : "无优惠券可领",
  },

  {
    key: 4,
    title: "线路评价",
    description: (
      <>
        <Rate allowHalf defaultValue={+rating} />
        <Typography.Text style={{ marginLeft: 10 }}>
          {rating} 星
        </Typography.Text>
      </>
    ),
  },


]
  // console.log(picture);
  return (
    // left page
    <div className={styles["intro-container"]}>
      {/* title */}
      <Typography.Title level={4}>{title}</Typography.Title>
      {/* descriptiotn */}
      <Typography.Text>{shortDescription}</Typography.Text>

      <div className={styles["intro-detail-content"]}>
        {/* fee and rating */}
        <Typography.Text style={{ marginLeft: 20 }}>
          <span className={styles["intro-detail-strong-text"]}>
            ￥{price}/人起
          </span>
        </Typography.Text>
        <Typography.Text style={{ marginLeft: 50 }}>
          <span className={styles["intro-detail-strong-text"]}>{rating}分</span>
        </Typography.Text>
      </div>
      {/* carsuel */}
      <Carousel autoplay slidesToShow={3}>
        {
        picture.map((img) => (
          <Image height={150} src={img} />
          // console.log(img.url)
        ))
        
        }
      </Carousel>

      {/* table */}
      {/* 1.import Table 
          2.prepare the columns array
          3.prepare the data source array
      */}
      <Table columns={columns1} dataSource={data}
        size="small"
        bordered={false}
        pagination={false}
      />
    </div>
  );
};
