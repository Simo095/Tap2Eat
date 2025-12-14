"use client";
import { Container, Image, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IoChevronBackCircle } from "react-icons/io5";
import { RootState } from "@/types/state";
import { ModalQRProps } from "@/types/props";
import { IoMdCloseCircle } from "react-icons/io";
import QRCode from "react-qr-code";
import scanqr from "../../asset/img/scanqr.png";

const ModalQR: React.FC<ModalQRProps> = ({
  showProp,
  repetedDishStateProp,
  handleShowModalCartProp,
  handleCloseModalQrProp,
}) => {
  const qntCartApp = useSelector((state: RootState) => state.cart.qnt);

  return (
    <Container className="m-0 p-0" fluid>
      <Modal
        show={showProp}
        centered
        onHide={() => {
          window.location.reload();
        }}
      >
        <Modal.Header className="">
          <div className="d-flex flex-column align-items-center justify-content-center ms-1 gap-1">
            <IoChevronBackCircle
              cursor="pointer"
              color="#083759"
              fontSize={60}
              onClick={() => {
                handleCloseModalQrProp();
                handleShowModalCartProp();
              }}
            />
            <p className="fst-italic">Indietro</p>
          </div>
          <Container className="d-flex justify-content-center">
            <Image src={scanqr.src} width={60} />
            <p style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
              Mostra il QR alla cassa
            </p>
          </Container>
          <div className="d-flex flex-column align-items-center justify-content-center ms-1 gap-1">
            <IoMdCloseCircle
              onClick={() => {
                window.location.reload();
              }}
              color="#083759"
              fontSize={60}
              style={{
                cursor: "pointer",
                zIndex: 1,
              }}
            />
            <p className="fst-italic">Chiudi</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex justify-content-center qr-download">
            <div className="m-4">
              <QRCode
                value={
                  repetedDishStateProp
                    ? JSON.stringify(repetedDishStateProp)
                    : "nulla da mostrare"
                }
              />
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container className="d-flex flex-column align-items-center gap-1">
            <p className="text-center">Articoli Totali: {qntCartApp}</p>
            <p className="text-center">
              Chiudi dopo aver letto il QR in cassa, <b>Grazie!</b>
            </p>
          </Container>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ModalQR;
