import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ModalTop from "./modalTop"
import ModalBottom from "./modalBottom"

class CommentModal extends Component {
  render() {
    const { mainComment, mainReply, handleSubmit } = this.props
    return (
      <Container>
        <ModalTop />
        <ModalBottom
          mainComment={mainComment}
          mainReply={mainReply}
          handleSubmit={handleSubmit}
        />
      </Container>
    )
  }
}
CommentModal.propTypes = {
  handleSubmit: PropTypes.func,
  mainComment: PropTypes.object,
  mainReply: PropTypes.object,
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
  -webkit-box-shadow: 3px 7px 24px 9px rgba(199, 199, 199, 0.48);
  box-shadow: 3px 7px 24px 9px rgba(199, 199, 199, 0.48);
  width: 60vmin;
  height: auto;
  min-height: 41vmin;
`

export default CommentModal
