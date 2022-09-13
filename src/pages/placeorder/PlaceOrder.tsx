import React from "react";
// import styles from "./PlaceOrder.module.css";
import { Row, Col } from "antd";
import { MainLayout } from "../../layouts";
import { PaymentForm, CheckOutCard } from "../../components";
// import Cards from "react-credit-cards";
import { useSelector } from "../../redux/hooks";

import { useDispatch } from "react-redux";
import { placeOrder } from "../../redux/placeOrder/slice";
export const PlaceOrder: React.FC = () => {
  const loading = useSelector((state) => state.order.loading);
  const jwt = useSelector((state) => state.user.token) as string;
  const order = useSelector((state) => state.order.currentOrder);
  const dispatch = useDispatch();
  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          <CheckOutCard
            loading={loading}
            order={order}
            onCheckout={() => {
              dispatch(placeOrder({ jwt, orderId: order.id }));
            }}
          />
        </Col>
      </Row>
    </MainLayout>
  );
};
