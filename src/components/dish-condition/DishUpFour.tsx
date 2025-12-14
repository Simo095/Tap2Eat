"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Numero from "../client-menu/Numero";
import HellaHopModal from "../modals/beers/HellaHopModal";
import WahidaModal from "../modals/beers/WahidaModal";
import SpecialModal from "../modals/beers/SpecialModal";
import NaifModal from "../modals/beers/NaifModal";
import AmberAleModal from "../modals/beers/AmberAleModal";
import { BsInfoCircle } from "react-icons/bs";
import { DishProps } from "@/types/props";

const DishUpFour: React.FC<DishProps> = ({ dish }) => {
  const [showHella, setShowHella] = useState(false);
  const [showNaif, setShowNaif] = useState(false);
  const [showAmber, setShowAmber] = useState(false);
  const [showWahida, setShowWahida] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);
  const handleShowHella = () => setShowHella(true);
  const handleCloseHella = () => setShowHella(false);
  const handleShowNaif = () => setShowNaif(true);
  const handleCloseNaif = () => setShowNaif(false);
  const handleShowAmber = () => setShowAmber(true);
  const handleCloseAmber = () => setShowAmber(false);
  const handleShowWahida = () => setShowWahida(true);
  const handleCloseWahida = () => setShowWahida(false);
  const handleShowSpecial = () => setShowSpecial(true);
  const handleCloseSpecial = () => setShowSpecial(false);

  return (
    <Container fluid className="m-0 p-0" key={dish.id}>
      <Row
        className="row-cols-3 align-items-center d-flex w-100"
        style={{ minHeight: "90px" }}
      >
        <Col className="m-0 p-0 d-flex flex-grow-1" xs={4}>
          <span className="fs-5 fw-bold flex-grow-1 m-0 p-0 ps-3">
            {dish.name}
            {dish.name.includes("HELLA") ? (
              <BsInfoCircle onClick={handleShowHella} />
            ) : dish.name.includes("WAHIDA") ? (
              <BsInfoCircle onClick={handleShowWahida} />
            ) : dish.name.includes("NAIF") ? (
              <BsInfoCircle onClick={handleShowNaif} />
            ) : dish.name.includes("SPECIAL") ? (
              <BsInfoCircle onClick={handleShowSpecial} />
            ) : dish.name.includes("AMBER") ? (
              <BsInfoCircle onClick={handleShowAmber} />
            ) : null}
          </span>
        </Col>
        <Col className="m-0 p-0 d-flex flex-grow-0" xs={3}>
          <span className="fs-4 fw-bold m-0">
            {dish.price % 1 !== 0
              ? "€" + dish.price.toString().replace(".", ",") + "0"
              : "€" + dish.price.toString() + ",00"}
          </span>
        </Col>
        <Col className="m-0 p-0 d-flex flex-grow-0" xs={4}>
          <Numero specificDish={dish} />
        </Col>
      </Row>

      <HellaHopModal show={showHella} handleClose={handleCloseHella} />
      <AmberAleModal show={showAmber} handleClose={handleCloseAmber} />
      <SpecialModal show={showSpecial} handleClose={handleCloseSpecial} />
      <NaifModal show={showNaif} handleClose={handleCloseNaif} />
      <WahidaModal show={showWahida} handleClose={handleCloseWahida} />
    </Container>
  );
};

export default DishUpFour;
