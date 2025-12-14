import React from "react";
import { Modal, Table } from "react-bootstrap";

const AmberAleModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Amber Ale</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://2sorelle.it/wp-content/uploads/2019/06/2sorelle_Amber_Ale_33cl.png"
            alt="Amber Ale"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Amber Ale</h2>
          <p>
            Birra ispirata alle Bière de Garde, dal colore ambrato lucente. Le
            note maltate la rendono intensa e avvolgente in bocca, con sentori
            di crosta di pane. Intrisa di profumi che ricordano prugne e
            ciliegie sotto spirito, è grande in ogni suo sorso. Non filtrata,
            non pastorizzata e rifermentata in bottiglia. Disponibile nei
            formati da 33 e 75 cL.
          </p>
          <p>
            2 Sorelle Amber Ale, nel corso degli anni, ha ottenuto diversi
            riconoscimenti sulla Guida alle Birre d’Italia edita da Slow Food:{" "}
            <strong>Grande Birra</strong> sulla Guida alle Birre d’Italia 2019,
            <strong>Birra Imperdibile</strong> sulla Guida alle Birre d’Italia
            2021 e <strong>Etichetta Imperdibile</strong>
            sulla Guida alle Birre d’Italia 2023.
          </p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Grado Plato</th>
                <td>18 °P</td>
              </tr>
              <tr>
                <th>Grado Alcolico</th>
                <td>7,5% vol</td>
              </tr>
              <tr>
                <th>Stile di riferimento</th>
                <td>Bière de Garde</td>
              </tr>
              <tr>
                <th>Colore</th>
                <td>Rosso aranciato</td>
              </tr>
              <tr>
                <th>Amaro</th>
                <td>25 IBU</td>
              </tr>
              <tr>
                <th>Formato</th>
                <td>33 cL, 75 cL</td>
              </tr>
              <tr>
                <th>Abbinamenti</th>
                <td>
                  Brasati e arrosti, formaggi stagionati o erborinati, carni
                  grigliate, dolci al cacao, frutta secca
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AmberAleModal;
