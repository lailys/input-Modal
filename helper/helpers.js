import moment from 'moment'

export const getTimeDifferece = (time) => {
  const timeDiff = moment(Number(time)).fromNow()
  console.log(timeDiff, "getTimeDifferece")
  return timeDiff
}
export const getTimeFormat = (time) => {
  const timeFormat = moment(Number(time)).format("MMM Do")
  console.log(timeFormat, "getTimeFormat")
  return timeFormat
}
