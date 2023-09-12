import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { ShopingContext } from "../context/ShopingCartContext";
function CartItem({ id, productImage, price, productName }) {
  const { cartItems, getTotalAmount } = useContext(ShopingContext);
  const totalAmount = getTotalAmount();
  const quantity = cartItems[id];
  return (
    <>
      <Card className="h-100 d-flex">
        <Card.Img
          variant="top"
          src={productImage}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <div className="d-flex justify-content-between align-items-baseline mb-4 flex-column">
              <span className="fs-5 mb-3">
                ( {cartItems[id]} ) * {productName}
              </span>
              <span>{price}</span>
            </div>
            <span className="ms-2 text-muted">${price * quantity}</span>
          </Card.Title>
          <div className="mt-auto">
            <div>
              <span></span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CartItem;
