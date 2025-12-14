import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

const HellaHopModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Hella Hop</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://2sorelle.it/wp-content/uploads/2019/06/2sorelle_HellaHop_33cl.png"
            alt="Hella Hop"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <p>
            Birra ispirata alle American IPA di colore giallo ambrato brillante.
            Hella Hop racchiude profumi intensi di frutta tropicale, un aroma
            resinoso caratteristico dei luppoli in dry-hopping e sentori esotici
            di melone, lime e papaya. Il corpo è leggermente maltato, morbida in
            bocca, con un tipico taglio amaricante che offre un sorso fresco,
            piacevole e intenso. Disponibile in bottiglia da 33 cL.
          </p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Grado Plato</th>
                <td>13 °P</td>
              </tr>
              <tr>
                <th>Grado Alcolico</th>
                <td>5,7% vol</td>
              </tr>
              <tr>
                <th>Stile di riferimento</th>
                <td>IPA, American</td>
              </tr>
              <tr>
                <th>Colore</th>
                <td>Giallo ambrato</td>
              </tr>
              <tr>
                <th>Amaro</th>
                <td>40 IBU</td>
              </tr>
              <tr>
                <th>Formato</th>
                <td>33cL</td>
              </tr>
              <tr>
                <th>Abbinamenti</th>
                <td>Aperitivo classico, cibi speziati, carni alla brace</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HellaHopModal;
