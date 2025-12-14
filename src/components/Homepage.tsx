"use client";
import React, { useEffect } from "react";
import { Button, Container, Image } from "react-bootstrap";
import logoph from "../asset/img/logo.png";
import { FaRegHandPointer } from "react-icons/fa6";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { fetchMenu } from "../redux/slices/menuSlice";
import { AppDispatch } from "@/types/state";

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    //dispatch(fetchMenu());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container
      fluid
      className="m-0 p-0 d-flex flex-column align-items-center justify-content-center mt-5"
    >
      <Container fluid className="m-0 p-0 text-center">
        <Image
          src={logoph.src}
          className="m-0 p-0 ms-2 "
          style={{ width: "300px" }}
        />
      </Container>
      <Container
        fluid
        className="m-0 p-0 d-flex flex-column align-items-center justify-content-center "
        style={{ height: "400px" }}
      >
        <Link href="/menu" style={{ textDecoration: "none" }}>
          <Button
            variant="success"
            className="shadow-iconshome"
            style={{ width: "300px", height: "300px", borderRadius: "5000px" }}
          >
            <h1 className="m-0 p-0 d-flex justify-content-center align-items-center ">
              Inizia A Ordinare!
            </h1>
            <FaRegHandPointer size={50} />
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default HomePage;
