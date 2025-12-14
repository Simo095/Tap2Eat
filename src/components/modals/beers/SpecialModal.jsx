import React from "react";
import { Modal, Table } from "react-bootstrap";

const SpecialModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Special</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://2sorelle.it/wp-content/uploads/2019/02/2sorelle_Special_33cl.png"
            alt="Special"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Special</h2>
          <p>
            Birra ispirata alle Strong Belgian Ale che rende protagonista il
            lievito con i suoi esteri fruttati. Caratterizzata da un colore
            giallo ambrato e una schiuma compatta, è intensa nella sua grande
            bevibilità. L’aggiunta di luppoli da aroma tedeschi la arricchisce
            di sentori fruttati che ricordano il melone bianco, la fragola, la
            pesca con leggere sfumature agrumate.
            <br />
            Non filtrata, non pastorizzata e rifermentata in bottiglia.
            <br />
            Disponibile in bottiglia da 33 cL e 75 cL.
          </p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Grado Plato</th>
                <td>15,5 °P</td>
              </tr>
              <tr>
                <th>Grado Alcolico</th>
                <td>7,7% vol</td>
              </tr>
              <tr>
                <th>Stile di riferimento</th>
                <td>Strong Belgian Ale</td>
              </tr>
              <tr>
                <th>Colore</th>
                <td>Giallo ambrato</td>
              </tr>
              <tr>
                <th>Amaro</th>
                <td>26 IBU</td>
              </tr>
              <tr>
                <th>Formato</th>
                <td>33 cL, 75 cL</td>
              </tr>
              <tr>
                <th>Abbinamenti</th>
                <td>
                  Carni grigliate, formaggi a media stagionatura, biscotti e
                  torte margherite, piatti speziati e cucina aromatica
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SpecialModal;
