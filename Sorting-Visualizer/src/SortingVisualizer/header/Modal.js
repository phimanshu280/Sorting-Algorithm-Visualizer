import React from "react";
import ReactModal from "react-modal";

export default function RangeModal({ hideModal }) {
  return (
    <ReactModal isOpen>
      <p>Modal content</p>
      <button onClick={hideModal}>Hide modal</button>
    </ReactModal>
  );
}
