import React, { Component } from "react"
import styled from "styled-components"
import ModalTop from "./modalTop"
import ModalMiddle from "./modalMiddle"
import ModalBottom from "./modalBottom"

class CommentModal extends Component {
  render() {
    return (
      <Container>
        <ModalTop />
        {/* <ModalMiddle />
        <ModalBottom /> */}
      </Container>
    )
  }
}
const Container = styled.div`
  color: black;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 25px;
  // border: solid 1px #bcbcbc;
  -webkit-box-shadow: 3px 7px 24px 9px rgba(199, 199, 199, 0.48);
  box-shadow: 3px 7px 24px 9px rgba(199, 199, 199, 0.48);
  width: 60vmin;
  height: auto;
  min-height: 50vmin;
`

export default CommentModal
