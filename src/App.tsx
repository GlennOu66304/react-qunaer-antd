import React from "react";
// import './App.css';
// 4.change and clean clean the file
// 1)change the App.css to App.module.css
// 2)App.tsx change as well：
import styles from "./App.module.css";
// to use this trick, you need to put the index.ts file under header folder, footer folder to export the component Header, Footer ,
// then  folder also under components folder to export the header, footer folder
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners
} from "./components";

// ## Component to format the project
// o.assetes and component folder
// under the component folder
// 1.Header & Footer:
// 1)folder
// 2)css file
// 3)tsx file: make sure the html css layout is correct, do not put the comment above the div.
// 4)
// 4)index.ts
import { Row, Col,Typography } from "antd";


// a. Mock Up data for the whole project :data import : this is from the mockup.tsx under the src folder and 
// export it into the App.tsx
import {productList1,productList2,productList3} from './mockups'

// image import 
import SideImage1 from './assets/images/sider_2019_12-09.png';
import SideImage2 from './assets/images/sider_2019_02-04.png';
import SideImage3 from './assets/images/sider_2019_02-04-2.png';


function App() {
  return (
    // 3.html part:

    // 1)clean the file;
    <div className={styles.App}>
      {/* import the Header, Footer component */}
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
         title={<Typography.Title level={1} type="warning">爆款推荐</Typography.Title>}
        //  Here will come with erro,you need to define the PropsTypes in the child component
        // ProductCollection, then error will be gone
         sideImage={SideImage1}
         products={productList1}
        />

        {/* 新品上市 */}
        <ProductCollection 
         title={<Typography.Title level={1} type="danger">新款上市</Typography.Title>}
        //  Here will come with erro,you need to define the PropsTypes in the child component
        // ProductCollection, then error will be gone
         sideImage={SideImage2}
         products={productList2}
        />

        {/* 国内游推荐 */}
        <ProductCollection 
         title={<Typography.Title level={1} type="success">国内旅游推荐</Typography.Title>}
        //  Here will come with erro,you need to define the PropsTypes in the child component
        // ProductCollection, then error will be gone
         sideImage={SideImage3}
         products={productList3}
        />
      </div> 

{/* BusinessPartners */}
<BusinessPartners/>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
