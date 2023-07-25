import React, { useState } from "react";
import { Modal, ModalContent, ModalFooter, ModalHeader } from "./modal";
import "./App.scss";
import Danger from "./assets/Danger Circle.svg";

function App() {
  const [modalVisible, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <button type="button" onClick={showModal}>
        show modal
      </button>
      {modalVisible && (
        <Modal>
          <ModalHeader title="Ooops..." closeModal={closeModal} />
          <ModalContent>
            <div className="content-main">
              <img src={Danger} alt="danger" className="content-image" />
              <p>
                This action is not available for your current KYC level. Please
                upgrade your account.
              </p>
            </div>
            <div className="modal-upgrade">
              <p className="modal-description">
                To upgrade your account, press the "Upgrade" button or contact
                the
              </p>
              <a className="modal-link" href="#">
                Jubee support team
              </a>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="button-white" type="button" onClick={hideModal}>
              KYC Policy
            </button>
            <button className="button-gradient" type="button">
              Upgrade
            </button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
}

export default App;
