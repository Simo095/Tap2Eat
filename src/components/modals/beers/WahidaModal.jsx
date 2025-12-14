import React from "react";
import { Modal, Table } from "react-bootstrap";

const WahidaModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Wahida</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://2sorelle.it/wp-content/uploads/2019/06/2sorelle_Wahida_33cl.png"
            alt="Wahida"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Wahida</h2>
          <p>
            Birra chiara brassata con malto d’orzo, frumento e avena e speziata
            con semi di coriandolo e scorze di agrumi.
            <br />
            Di colore giallo paglierino, con un bel cappello di schiuma pannosa
            e candida. Al naso è leggera e fresca con aromi di lievito, agrumi e
            coriandolo. In bocca è delicata e cremosa, leggermente acidula con
            sensazioni speziate.
            <br />
            Non filtrata, non pastorizzata e rifermentata in bottiglia.
            <br />
            Disponibile nel formato da 33 cL.
          </p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Grado Plato</th>
                <td>12 °P</td>
              </tr>
              <tr>
                <th>Grado Alcolico</th>
                <td>5,1 % vol</td>
              </tr>
              <tr>
                <th>Stile di riferimento</th>
                <td>Blanche</td>
              </tr>
              <tr>
                <th>Colore</th>
                <td>Giallo paglierino</td>
              </tr>
              <tr>
                <th>Amaro</th>
                <td>15 IBU</td>
              </tr>
              <tr>
                <th>Formato</th>
                <td>33 cL</td>
              </tr>
              <tr>
                <th>Abbinamenti</th>
                <td>
                  Aperitivo classico, Formaggi stagionati, Carni bianche e Pesce
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WahidaModal;
