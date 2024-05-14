import React from "react";
import { Card, CardBody } from "reactstrap";
import Icon from "./icons";

const CCard = ({ item, index, changeItem }) =>
{
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
