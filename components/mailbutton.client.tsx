"use client";
import React, { useState } from "react";

export default function MailButton() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true);
    (window as Window).location.href = "mailto:jonee4339@hotmail.com";
  }

  return (
    <button onClick={handleClick} className="btn btn-primary my-8">
      {clicked ? "E-mail copied" : "Copy Email"}
    </button>
  );
}
