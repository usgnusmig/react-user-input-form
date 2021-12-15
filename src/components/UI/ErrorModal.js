import React from "react";

import Card from "./Card";
import Button from "./Button";
import styels from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={props.backdrop} onClick={props.onConfirm} />
      <Card className={styels.modal}>
        <header className={styels.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styels.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styels.actions}>
          <Button onClick={props.onConfirm}>확인</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
