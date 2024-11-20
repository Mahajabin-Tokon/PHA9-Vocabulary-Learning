import React from "react";

const Modal = ({ modalInfo }) => {
  const { word, meaning, when_to_say, example } = modalInfo;

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <p className="">Word: {word}</p>
        <p className="">Meaning: {meaning}</p>
        <p className="">When to say: {when_to_say}</p>
        <p className="">Example: {example}</p>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
