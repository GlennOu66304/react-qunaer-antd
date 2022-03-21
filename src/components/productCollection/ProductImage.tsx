import React from "react";
import { Image, Typography } from "antd";
interface PropsType {
  id: string | number;
  size: string;
  title: string;
  price: number;
  imageSrc: string;
}

export const ProductImage: React.FC<PropsType> = ({
  id,
  size,
  title,
  price,
  imageSrc,
}) => {
  return (
    <>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={513} />
      ) : (
        <Image src={imageSrc} height={120} width={243} />
      )}
      <div>
      <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
      <Typography.Text type="danger" strong>
        {" "}
        ￥{price} 起
      </Typography.Text>
      </div>
    </>
  );
};
