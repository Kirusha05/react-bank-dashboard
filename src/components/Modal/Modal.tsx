import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props: { hideModal: () => void }) => {
  return (
    <div
      className="fixed z-40 top-0 left-0 w-full h-full bg-black opacity-80"
      onClick={props.hideModal}
    />
  );
};

const ModalOverlay = (props: any) => {
  return (
    <div className="bg-white z-50 fixed top-1/2 left-1/2 w-5/6 sm:w-96 p-6 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col items-start overflow-hidden transition-all ease-in" {...props} >
      {props.children}
    </div>
  );
};

interface Props {
  isActive: boolean;
  hideModal: () => void;
}

const Modal: React.FC<Props> = (props) => {
  if (!props.isActive) return null;

  const hideModal = () => {
    props.hideModal();
    document.body.className = "";
  };

  const portalElement = document.getElementById("overlays") as HTMLDivElement;
  document.body.className = "overflow-hidden";

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideModal={hideModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
