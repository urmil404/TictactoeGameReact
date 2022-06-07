import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "Circle":
      return <FaRegCircle className="icon text-success" />;
    case "Cross":
      return <FaTimes className="icon text-warning" />;
    default:
      return <FaPen className="icon" />;
  }
};

export default Icon;
