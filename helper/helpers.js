/* eslint-disable */
import moment from "moment"

export const getmedia = (gif, image) => {
  if (gif !== "") return [gif]
  if (image !== "") return [image]
  return []
}
export const createTextLinks = text => {
  return (text || "").replace(
    /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w\-]*)?(\?[^\s]*)?/gi,
    function (match, space, url) {
      let hyperlink = url
      if (!hyperlink.match("^https?://")) {
        hyperlink = "http://" + hyperlink
      }
      return `<span style="color:#2D8CFF;white-space:pre; diplaye:flex;align-items:flex-start;justify-content:flex-start;word-break: break-all;white-space: normal;flex-wrap: wrap">${match}</span>`
    }
  )
}

function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11) ?
    match[2] :
    null;
}
export const getVideoLinks = text => {
  var urlExp = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w\-]*)?(\?[^\s]*)?/g
  var exp = new RegExp(urlExp)
  let urlmatch = ""
  let videos = []
  while ((urlmatch = exp.exec(text)) !== null) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    if (
      text
      .substr(urlmatch.index, urlmatch.index + urlmatch[0].length)
      .split("watch").length > 1
    ) {
      const match = getId(text.substr(urlmatch.index, urlmatch.index + urlmatch[0].length))
      videos.push(`//www.youtube.com/embed/${match}`)
    }
  }
  return videos.pop()
}
export const getTimeDifferece = time => {
  const timeDiff = moment(Number(time)).fromNow()
  console.log(timeDiff, "getTimeDifferece")
  return timeDiff
}
export const getTimeFormat = time => {
  const timeFormat = moment(Number(time)).format("MMM Do")
  console.log(timeFormat, "getTimeFormat")
  return timeFormat
}
