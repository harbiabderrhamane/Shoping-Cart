import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { ShopingContext } from "../context/ShopingCartContext";

function StoreItem({ id, productName, price, productImage }) {
  // this will determine if there is anything in the cart allready  if therre is anything show the add cart button otherwise show that + and - sign
  // so we are going to determine what quantity is placholder as variable so we can test out the tow versions of the UI one when the qqntity is 0 and one when the qunatity is another number than 0
  const { cartItems, decreaseCartItem, removeFromCart, increaseCartItem } =
    useContext(ShopingContext); //cause we wanna grab its values
  const quantity = cartItems[id];
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={productImage}
        height="200px"
        style={{ objectFit: "cover", width: "200px" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5">{productName}</span>
          <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartItem(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "8px" }}
            >
              <div
                className="d-flex align-items-center jusrify-center"
                style={{ gap: "8px" }}
              >
                <Button onClick={() => decreaseCartItem(id)}>-</Button>
                <div>
                  <span className="fs-4">{quantity}</span> in Cart
                </div>

                <Button onClick={() => increaseCartItem(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Rmove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
