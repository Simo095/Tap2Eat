"use client";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";
import { IoChevronBackCircle, IoBagCheck } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/types/state";
import { ModalCartProps } from "@/types/props";
import ModalCancel from "./ModalCancel";

const ModalCart = ({
  showProp,
  handleCloseProp,
  handleShowModalCartProp,
  repetedDishStateProp,
  deleteOrderedFoodProp,
  handleOrderProp,
  costoCopertiProp,
  notRightQuantityProp,
  errorDishInStockProp,
}: ModalCartProps) => {
  const dispatch: AppDispatch = useDispatch();
  const noteAppProp = useSelector((state: RootState) => state.cart.note);
  const notRightQuantity = useSelector(
    (state: RootState) => state.errorCart.listDishNotInStock
  );
  const menuProp = useSelector((state: RootState) => state.menu.menu);
  const cartTotalProp = useSelector((state: RootState) => state.cart.total);

  const [showCancel, setShowCancel] = useState(false);
  const handleCloseCancel = () => setShowCancel(false);
  const handleShowCancel = () => setShowCancel(true);

  useEffect(() => {
    return () => {
      if (notRightQuantity.length > 0) {
        notRightQuantity.forEach((id) => {
          Object.keys(repetedDishStateProp).forEach((dish) => {
            if (
              !["FS_QR", "tavolo", "richiestastock", "note"].includes(dish) &&
              parseInt(dish) === id
            ) {
              delete repetedDishStateProp[id];
            }
          });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className="m-0 p-0">
      <Modal show={showProp} centered onHide={handleCloseProp}>
        <Modal.Header>
          <div className="d-flex flex-column align-items-center justify-content-center ms-1 gap-1">
            <IoChevronBackCircle
              cursor="pointer"
              color="#083759"
              fontSize={60}
              onClick={handleCloseProp}
            />
            <p className="fst-italic">Indietro</p>
          </div>
          <Container className="d-flex justify-content-center mb-5 p-0">
            <span className="fs-2 fst-italic">Lista ordine</span>
          </Container>
        </Modal.Header>

        <Modal.Body>
          <Row className="d-flex justify-content-between row-cols-2">
            <Col>
              <span>Piatto</span>
            </Col>
            <Col>
              <Row className="gap-4 ms-1 mb-3 row-cols-3">
                <Col>
                  <span>Qnt</span>
                </Col>
                <Col>
                  <span>Prezzo</span>
                </Col>
              </Row>
            </Col>
          </Row>

          {repetedDishStateProp &&
            Object.keys(repetedDishStateProp).map((idDish, i) => {
              if (
                ["FS_QR", "tavolo", "richiestastock", "note"].includes(idDish)
              )
                return null;

              const dishObj = menuProp.find(
                (dish) => dish.id.toString() === idDish
              );

              const isNotInStock = notRightQuantityProp.includes(
                parseInt(idDish)
              );

              return (
                <Row
                  className="d-flex justify-content-between row-cols-2"
                  key={i}
                >
                  <Col>
                    {dishObj ? (
                      errorDishInStockProp && isNotInStock ? (
                        <>
                          <p style={{ textDecoration: "line-through" }}>
                            {dishObj.name}
                          </p>
                          <p style={{ fontSize: "7px" }}>
                            ...altri hanno concluso prima
                          </p>
                        </>
                      ) : (
                        <p>{dishObj.name}</p>
                      )
                    ) : null}
                  </Col>
                  <Col>
                    <Row className="gap-4 ms-1">
                      <Col className="ms-2" xs={3}>
                        {repetedDishStateProp[idDish]}
                      </Col>
                      <Col className="text-end" xs={3}>
                        {dishObj &&
                          (dishObj.price % 1 !== 0
                            ? "€" +
                              dishObj.price.toString().replace(".", ",") +
                              "0"
                            : "€" + dishObj.price.toString() + ",00")}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              );
            })}

          <Container fluid className="m-0 p-0 mt-3">
            <Row className="text-end">
              <Col xs={12}>
                <p className="fw-bold me-2 mt-2">
                  <span>Totale: </span>€
                  {cartTotalProp.toFixed(2).replace(".", ",")}
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center gap-1 border-PayCart">
            <IoIosCloseCircle
              onClick={() => {
                handleShowCancel();
                handleCloseProp();
              }}
              cursor="pointer"
              color="#083759"
              fontSize={60}
            />
            <p className="m-0 p-0 fst-italic">Cancella</p>
          </div>

          <div className="d-flex gap-4">
            <div className="d-flex flex-column align-items-center gap-1 border-PayCart">
              <IoBagCheck
                onClick={() => {
                  handleOrderProp();
                  handleCloseProp();
                }}
                cursor="pointer"
                color="#083759"
                fontSize={60}
              />
              <p className="fst-italic">Ordina</p>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <ModalCancel
        showCancel={showCancel}
        handleCloseCancel={handleCloseCancel}
        handleShowCancel={handleShowCancel}
        handleShowModalCart={handleShowModalCartProp}
      />
    </Container>
  );
};

export default ModalCart;
