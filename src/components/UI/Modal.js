import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart} />;
};

const Modalverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Modalverlays>{props.children}</Modalverlays>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
