import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { getTimeFormat } from "../../helper/helpers"

class MainCommentContainer extends Component {
  render() {
    const { mainComment } = this.props
    return (
      <Container>
        <MainCommentWrapper>
          <MainCommentinfo>
            <MainCommentOwner>
              {mainComment.commentOwner.name} .
            </MainCommentOwner>
            <MainCommentDate>
              {getTimeFormat(mainComment.createdOn)}
            </MainCommentDate>
          </MainCommentinfo>
          <MainCommentMsg>{mainComment.commentMsg}</MainCommentMsg>
        </MainCommentWrapper>
        <MainCommentAvatar>
          <Img src={mainComment.commentOwner.avatar}></Img>
        </MainCommentAvatar>
      </Container>
    )
  }
}
MainCommentContainer.propTypes = {
  mainComment: PropTypes.object,
}
const Container = styled.div`
// background:red;
  margin:0;
  padding:0;
  display: flex;
  align-items: flex-end;
  justify-content:flex-start;
  flex-direction: column;
  position relative;
  width: 100%;
  height: auto;
  min-height:13.4vmin;
`
const MainCommentAvatar = styled.div`
  // background: green;
  background: white;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0.6vmin;
  left: 0.6vmin;
  width: 7vmin;
  height: 7vmin;
`
const Img = styled.img`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  object-fit: cover;
  width: 5.8vmin;
  height: 5.8vmin;
`
const MainCommentWrapper = styled.div`
  // background: grey;
  margin: 1.2vmin 0 0 0;
  padding: 0 0 1.5vmin 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-left: solid 2px #3d5566;
  width: 56.2vmin;
  height: auto;
  min-height: 12.2vmin;
`
const MainCommentinfo = styled.div`
  background: white;
  margin: 0 0 0 2vmin;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  width: 50vmin;
  height: auto;
  min-height: 2.6vmin;
`

const MainCommentOwner = styled.span`
  // background: yellow;
  color: #1e1e1e;
  font-family: "Roboto", sans-serif;
  font-size: 80%;
  font-weight: bold;
  margin: 0 1.5% 0 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 2.6vmin;
`
const MainCommentDate = styled.span`
  // background: pink;
  color: #8899a7;
  font-family: "Roboto", sans-serif;
  font-size: 70%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 2.6vmin;
`
const MainCommentMsg = styled.div`
  background: white;
  color: #1e1e1e;
  font-family: "Roboto", sans-serif;
  font-size: 90%;
  font-weight: 500;
  margin: 0 0 0 2vmin;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 50vmin;
  height: auto;
  min-height: 13.4;
`
export default MainCommentContainer
