import styles from "./SearchPage.module.css";
import React from "react";
import { FilterArea, ProductList } from "../../components";
import { MainLayout} from '../../layouts'
import { useEffect } from "react";
import { searchProduct } from "../../reduex/search/slice";
import { useSelector } from "../../reduex/hooks";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Spin } from "antd";

interface MatchParams {
  keyword: string;
}
export const SearchPage: React.FC = () => {
  const { keyword } = useParams<MatchParams>();
  // loading, errors, productlist
  const loading = useSelector((state) => state.productSearch.loading); // like this.state in the class based component
  const error = useSelector((state) => state.productSearch.error);
  const productList = useSelector((state) => state.productSearch.data);
  const pagination = useSelector((state) => state.productSearch.pagination);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    //same like componentdidmout in class component
    //   fetch data function
    const fetchData = async () => {
      dispatch(
        searchProduct({
          nextPage: 1,
          pageSize: 10,
          keyword,
        })
      );
    };
    // call back the function
    fetchData();
    // return something
  }, [location]);

  //   checked the outputed value
  // console.log(product)
  const onPageChange = (nextPage, pageSize) => {
    dispatch(
      searchProduct({
        nextPage,
        pageSize,
        keyword,
      })
    );
  };
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
       {/* searchFilter */}
       <div className={styles["product-list-container"]}>
        <FilterArea />
      </div>

      {/* search Content */}
      <div className={styles["product-list-container"]}>
        <ProductList
          data={productList}
          paging={pagination}
          onPageChange={onPageChange}
        />
      </div>
   </MainLayout>

    
     
  );
};
