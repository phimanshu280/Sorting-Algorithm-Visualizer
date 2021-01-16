import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  float: left;
  height: 100px;
  width: 100%;
  background-image: linear-gradient(to right, #c04848, #480048);
`;

export const Buttons = styled.button`
  color: #fff;
  background: hsl(227, 10%, 10%);
  font: 300 1em "Fira Sans", sans-serif;
  color: #fff;
  transition: 0.25s;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  
  &:before {content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #001f3f;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
  &:hover,
    &:focus,
    &:active {
      color: white;
    }
    &:hover:before,
    &:focus:before,
    &:active:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
  }
`;

export const BlackButton = styled(Buttons)`
  color: black;
  border-color: black;
`;

export const SlidderWrapper = styled.div`
  padding: 0;
  margin: 0;
  float: left;
  height: 100px;
  width: 100%;
`;
