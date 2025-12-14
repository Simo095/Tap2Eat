"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button, Col, Container, Image, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/types/state";
import { checkObjToDBAndMenu, modifyObjToDB } from "@/redux/slices/cartSlice";
import ModalCart from "../modals/ModalCart";
import ModalQR from "../modals/ModalQR";
import logo from "../../asset/img/logo.png";

const HeaderMenu: React.FC = () => {
  const [showModalCart, setShowModalCart] = useState(false);
  const [showModalQr, setShowModalQr] = useState(false);

  const handleCloseModalCart = () => setShowModalCart(false);
  const handleShowModalCart = () => setShowModalCart(true);
  const handleShowModalQr = () => setShowModalQr(true);
  const handleCloseModalQr = () => setShowModalQr(false);
  const deleteOrderedFood = () => window.location.reload();

  const notify = useSelector((state: RootState) => state.cart.notify);
  const note = useSelector((state: RootState) => state.cart.note);
  const coveredCost = useSelector((state: RootState) => state.cart.covered);
  const qntCartApp = useSelector((state: RootState) => state.cart.qnt);
  const orderFood = useSelector((state: RootState) => state.cart.orderedFood);
  const objToDB = useSelector((state: RootState) => state.cart.objIdDishQnt);
  const notRightQuantity = useSelector(
    (state: RootState) => state.errorCart.listDishNotInStock
  );
  const errorDishInStock = useSelector(
    (state: RootState) => state.errorCart.errorDishNotRightStock
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const orderFoodIds = orderFood.map((item) => item);
    dispatch(modifyObjToDB({ orderFoodApp: orderFoodIds, note: note }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderFood]);

  return (
    <Container>
      <Navbar
        className="bg-body-tertiary fixed-top"
        style={{ borderBottom: "5px solid" }}
      >
        <Row className="d-flex justify-content-between w-100">
          <Col xs={9}>
            <Image
              src={logo.src}
              style={{ width: "250px", height: "100px", marginLeft: "" }}
            />
          </Col>
          <Col xs={2}>
            <Container className="d-flex flex-column gap-2 align-items-end">
              {notify ? (
                <Button
                  className="d-flex justify-content-center align-items-center position-relative shadow-icons "
                  onClick={async () => {
                    dispatch(
                      checkObjToDBAndMenu({
                        objToDB,
                        notRightQuantity,
                        handleShowModalCart,
                      })
                    );
                  }}
                  style={{
                    backgroundColor: "#00000000",
                    border: "solid 2px black",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    cursor: "pointer",
                    boxShadow: "5px 5px 15px 5px #083759",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "-6px",
                      top: "-6px",
                    }}
                  >
                    {qntCartApp}
                  </span>
                  <FaShoppingCart fontSize={30} color="black" />
                </Button>
              ) : (
                <Button
                  className="d-flex justify-content-center align-items-center position-relative shadow-icons "
                  onClick={() => {
                    handleShowModalCart();
                  }}
                  style={{
                    backgroundColor: "#00000000",
                    border: "solid 2px black",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    cursor: "pointer",
                  }}
                >
                  <FaShoppingCart fontSize={30} color="black" />
                </Button>
              )}
              <Button
                className="d-flex justify-content-center align-items-center shadow-icons"
                href="#top"
                style={{
                  backgroundColor: "#00000000",
                  border: "solid 2px black",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                }}
              >
                <FaArrowCircleUp color="black" fontSize={30} />
              </Button>
            </Container>
          </Col>
        </Row>
      </Navbar>

      <ModalCart
        showProp={showModalCart}
        handleCloseProp={handleCloseModalCart}
        handleShowModalCartProp={handleShowModalCart}
        repetedDishStateProp={objToDB}
        deleteOrderedFoodProp={deleteOrderedFood}
        handleOrderProp={handleShowModalQr}
        costoCopertiProp={coveredCost}
        notRightQuantityProp={notRightQuantity}
        errorDishInStockProp={errorDishInStock}
      />
      <ModalQR
        showProp={showModalQr}
        repetedDishStateProp={objToDB}
        handleShowModalCartProp={handleShowModalCart}
        handleCloseModalQrProp={handleCloseModalQr}
      />
    </Container>
  );
};
export default HeaderMenu;
