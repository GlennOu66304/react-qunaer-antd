import React from "react";
import styles from "./BusinessPartner.module.css";
import { Divider, Typography, Row, Col } from "antd";

// image import

import Image1 from "../../assets/images/microsoft-80658_640.png";
import Image2 from "../../assets/images/icon-720944_640.png";
import Image3 from "../../assets/images/follow-826033_640.png";
import Image4 from "../../assets/images/facebook-807588_640.png";

// make the image into a array
const companies = [
  { src: Image1, title: "Microsoft" },
  { src: Image2, title: "Youtube" },
  { src: Image3, title: "Instagram" },
  { src: Image4, title: "Facebook" },
];
export const BusinessPartners: React.FC = () => {
  return (
    <div className={styles.content}>
      {/* // 合作企业 */}
      {/* Section Titel Text */}
      <Divider orientation="left">
        <Typography.Title level={1}> 合作企业</Typography.Title>
      </Divider>

      <Row>
        {/* Map Loop render the image array */}

        {companies.map((c, index) => (
          <Col span={6} key={"business-partner-" + index}>
            <img 
            src={c.src} 
            alt="" 
            style={{
                width:"80%",
                display:"block",
                marginLeft:"auto",
                marginRight:"auto"
            }}
            
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
