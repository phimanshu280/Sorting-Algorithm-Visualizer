import React from "react";
import styled from "styled-components";
import { Buttons, BlackButton } from "./header/header.style";

export default function Main({ data }) {
  const width = window.screen.width / data.length;
  return (
    <Container>
      <BlocksContainer>
        {data.map((size, i) => (
          <>
            <Bar height={`${size}px`} width={`${width}px`} key={i}>
              {data.length < 20 && <BlackButton disabled>{size}</BlackButton>}
            </Bar>
          </>
        ))}
      </BlocksContainer>
      <Step>
        <Buttons disabled>Made With Love By Himanshu Patel</Buttons>
      </Step>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const BlocksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to right, #c04848, #480048);
  border: 1px solid white;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.active ? "#B50002" : "#FAD444")};
  margin-right: 2px;
  ${(props) => props.style}
`;
