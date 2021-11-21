import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

function modal(props) {
  const animationTimings = {
    enter: 500,
    exit: 500,
  };
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimings}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
        appear: "",
        appearActive: "ModalOpen"
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button">
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
}

export default modal;
