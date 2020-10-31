import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// import client from "../configs/Client"
// import { useMutation } from "@apollo/client"
// import { CREATE_COMMENT, GET_COMMENTS_LIST } from "../queries/AllQueries"

const Form = ({ children, gift, text, images, submitComment }) => {
  //This is the place for modify client OnSubmit

  return (
    <FormContainer onSubmit={e => submitComment()}>{children}</FormContainer>
  )
}
Form.propTypes = {
  children: PropTypes.node.isRequired,
  submitComment: PropTypes.func,
  text: PropTypes.string,
  gif: PropTypes.string,
  images: PropTypes.array,
}
const FormContainer = styled.form`
  // background: purple;
  margin: 0;
  padding: 0;
  display:flex;
  align-items: center;
  justify-content:flex-start;
  flex-direction: column;
  position relative;
  border-radius: 0 0 25px 25px;
  width: 100%;
  height: auto;
  min-height: 27.4vmin;
`

export default Form
