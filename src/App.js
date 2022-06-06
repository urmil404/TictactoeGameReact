import React, { useState } from "react";
import "./App.css";
import Icon from "./components/icons";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setwinMessage] = useState("");

  const reloadGame = () => {};
  const checkIsWinner = () => {};

  const changeItem = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <Icon />
      </header>
    </div>
  );
};

export default App;
