import React, { useState } from "react";
import Modal from "../modal/Modal";

const LoginModal = ({ isOpen, onClose, setIsLoginModalOpen }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
    </>
  );
};

export default LoginModal;
