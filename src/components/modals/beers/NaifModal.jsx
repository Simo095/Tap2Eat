import React from "react";
import { Modal, Table } from "react-bootstrap";

const NaifModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Naïf</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://2sorelle.it/wp-content/uploads/2018/03/Naif33NEW.png"
            alt="Naïf"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Naïf</h2>
          <p>
            Birra chiara realizzata con malto pils e luppoli nobili tedeschi. Un
            colore giallo dorato e un corpo leggero racchiudono note di miele
            quasi nascoste, che si abbracciano alle sensazioni delicatamente
            speziate e agrumate dei luppoli rendendola estremamente dissetante e
            adatta a ogni occasione. Non filtrata, non pastorizzata e
            rifermentata in bottiglia. Disponibile in bottiglia da 33 cL.
          </p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Grado Plato</th>
                <td>10,5 °P</td>
              </tr>
              <tr>
                <th>Grado Alcolico</th>
                <td>4,6% vol</td>
              </tr>
              <tr>
                <th>Stile di riferimento</th>
                <td>Italian ale</td>
              </tr>
              <tr>
                <th>Colore</th>
                <td>Giallo dorato</td>
              </tr>
              <tr>
                <th>Amaro</th>
                <td>22 IBU</td>
              </tr>
              <tr>
                <th>Formato</th>
                <td>33cL</td>
              </tr>
              <tr>
                <th>Abbinamenti</th>
                <td>
                  Aperitivo classico, piatti a base di pesce e crostacei,
                  formaggi freschi
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NaifModal;
