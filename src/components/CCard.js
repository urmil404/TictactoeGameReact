import React,{useState} from "react";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import Icon from "./icons";

const CCard = ({ item, index, changeItem }) =>
{
  const [Color, setColor] = useState("");
  return (
    <Card
      onClick={() => {
        changeItem(index);
      }}
    >
      <CardBody className="box">
        <Icon name={item} />
      </CardBody>
    </Card>
  );
};

export default CCard;
