import React from "react"
import { createGlobalStyle } from "styled-components"
import ErrorBoundary from "../components/errorBoundary"
import CommentModal from "../components/commentModal"
import { comment, reply } from "../../helper/info"

function IndexPage() {
  console.log(comment)
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <CommentModal mainComment={comment} mainReply={reply} />
    </ErrorBoundary>
  )
}
const GlobalStyle = createGlobalStyle`
  body,html {
    background:white;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    }
    button:active:focus,
    button:focus {
    outline: 0 !important;
    outline-offset: 0 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  * ::-webkit-scrollbar {
    display: none;
  }
  *{
    margin: 0;
    padding: 0;
  }
  input:focus,
  textarea:focus,
  div:focus,
  select:focus {
    outline: none;
  }
`
export default IndexPage
