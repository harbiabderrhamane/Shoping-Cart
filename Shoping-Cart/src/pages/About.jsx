import React, { useContext } from "react";
import { PRODUCTS } from "../data/items";
import { Col, Row } from "react-bootstrap";
import CartItem from "./CartItem";
import { ShopingContext } from "../context/ShopingCartContext";

function About() {
  const { cartItems, getTotalAmount } = useContext(ShopingContext);
  const totalAmount = getTotalAmount();
  return (
    <>
      <h1>Store</h1>

      <Row md={2} xs={1} lg={3} className="g-3">
        {PRODUCTS.map((item) => (
          <Col key={item.id}>
            {cartItems[item.id] !== 0 ? <CartItem {...item} /> : null}
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center", flexWrap: "nowrap" }}>
        <span>
          <b>total amount is : {totalAmount}</b>
        </span>
      </div>
    </>
  );
}

export default About;
