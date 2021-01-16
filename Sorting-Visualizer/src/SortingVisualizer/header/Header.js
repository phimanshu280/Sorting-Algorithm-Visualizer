import React from "react";
import { Buttons, Container } from "./header.style.js";

export default function Header({
  rangeChange,
  randomList,
  bubbleOnClick,
  insertOnClick,
  selectionSort,
}) {
  return (
    <Container>
      <Buttons onClick={randomList}>Generate Random Array</Buttons>
      <Buttons onClick={rangeChange}> Select Array Size</Buttons>
      <Buttons>Merge</Buttons>
      <Buttons onClick={selectionSort}>Selection</Buttons>
      <Buttons onClick={bubbleOnClick}>Bubble</Buttons>
      <Buttons onClick={insertOnClick}>Insertion</Buttons>
    </Container>
  );
}
