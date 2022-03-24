import React from "react";
import { Image, Typography } from "antd";
// 1.withRouter （HOC) import
// you can import withRouter from react-router-dom

import { RouteComponentProps, withRouter,Link} from "react-router-dom";
import {useTranslation} from 'react-i18next'
interface PropsType extends RouteComponentProps {
  id: string | number;
  size: string;
  title: string;
  price: number;
  imageSrc: string;
}


// 2.structure fix:
// 1)const ProductImageCompoent //defien a smal compoent
// 2)export const ProductImage = withRouter（ ProductImage)// define a big compoennt, then wrapper with withRouter

// 
// 3.RotueComponentProps interface extends:add history,location,match

const ProductImageComponent: React.FC<PropsType> = ({
  id,
  size,
  title,
  price,
  imageSrc,
  history,
  location,
  match,
}) => {
  const {t} = useTranslation()
  return (
   
    // click the image to image deails:product image component
    // 4.WithRouter push to deatails{id}, onClick event can push the router
    <Link to={`/detail/${id}`}
    >
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={513} />
      ) : (
        <Image src={imageSrc} height={120} width={243} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          {" "}
          ￥{price} {t('home_page.start_from')}
        </Typography.Text>
      </div>
    </Link>
  );
};

// 5.export with Router(HOC)
export const ProductImage = withRouter(ProductImageComponent);
