import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

function FormTextInput(props) {
  const { addTxtComment } = props
  return (
    <TextArea
      contentEditable
      suppressContentEditableWarning={true}
      data-placeholder="Type your reply..."
      onInput={e => {
        try {
          e.target.innerText.length < 200
            ? addTxtComment(e.target.innerText)
            : (e.target.innerText = e.target.innerText.substr(0, 200))
        } catch (error) {
          console.log(
            error,
            "This is the error from onInput method in ContentEditable component"
          )
        }
      }}
      // onKeyDown={e => {
      //   try {
      //     if (e.target.innerText.length > 200) {
      //       e.preventDefault()
      //     }
      //   } catch (error) {
      //     console.log(
      //       error,
      //       "This is the error from onKeyDown method in FormTextInput component"
      //     )
      //   }
      // }}
    />
  )
}
FormTextInput.propTypes = {
  addTxtComment: PropTypes.func,
}
const TextArea = styled.div`
  background: white;
  color: #1e1e1e;
  font-family: "Roboto", sans-serif;
  font-size: 90%;
  margin: 2vmin 0 0 6vmin;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: break-all;
  white-space: normal;
  resize: none;
  width: 50vmin;
  min-height: 19vmin;
  height: auto;
  &:empty:before {
    content: attr(data-placeholder);
    color: #8899a7;
    font-family: "Roboto", sans-serif;
    font-size: 90%;
  }
`
export default FormTextInput
