import React, { Component } from "react"
import styled from "styled-components"

class ModalTop extends Component {
  constructor() {
    super()
    this.state = {
      color: "#1d9bea",
    }
    this.style = {
      // background: "yellow",
      // position: "absolute",
      // top: "0",
      // left: "0",
      width: "4vmin",
      height: " 4vmin",
      borderRadius: "50%",
    }
  }

  render() {
    const { color } = this.state
    return (
      <Container>
        <CloseModalBtn>
          {" "}
          <svg
            style={this.style}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            enableBackground="new 0 0 40 40"
          >
            <line
              x1="15"
              y1="15"
              x2="25"
              y2="25"
              stroke={color}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeMiterlimit="10"
            ></line>
            <line
              x1="25"
              y1="15"
              x2="15"
              y2="25"
              stroke={color}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeMiterlimit="10"
            ></line>
          </svg>
        </CloseModalBtn>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 25px 25px 0 0;
  border-bottom: solid 1px #bcbcbc;
  width: 100%;
  height: 6vmin;
`
const CloseModalBtn = styled.button`
  background: white;
  font-family: "Roboto", sans-serif;
  margin: 0 0 0 1.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  border: none;
  width: 4vmin;
  height: auto;
  min-height: 4vmin;
  &:hover {
    background: #1d9bea3b;
  }
`

export default ModalTop
