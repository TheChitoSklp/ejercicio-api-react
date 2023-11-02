import React, { useState } from "react";
import icon from "../assets/icons/";
export const Card = () => {
  const [message, setMessage] = useState("");
  const [messageId, setMessageId] = useState("");
  return (
    <>
      <h4>ADVICE #{messageId}</h4>
      <p>{message}</p>
      <img src="" alt="" />
    </>
  );
};
