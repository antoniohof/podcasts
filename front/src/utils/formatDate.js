
const formatDate = (formatInputDate, valueDate) => {
  if (formatInputDate === 'timestamp') {
    let date = new Date(valueDate * 1000).toDateString()
    return date.slice(4, 15)
  }
  if (formatInputDate === 'dateMysql') {
    let dateParts = valueDate.split('-')
    let dateFormated = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].slice(0, 2)).toDateString()
    return dateFormated.slice(4, 15)
  }
  return valueDate
}

export default formatDate
