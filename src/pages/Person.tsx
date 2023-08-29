import React from "react";
import { useParams } from "react-router-dom";

export default function Person() {
  const { id } = useParams();
  return (
    <>
      <h3>{id}</h3>
    </>
  );
}
