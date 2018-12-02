
/**
 * Clear error
 * @param {string} fields - receives obj
 * @param {object} removeErrorField - receives the field that needs to be cleaned.
 * if you do not receive any it cleans everything
 */
const clearError = (fields, removeErrorField) => {
  const list = Object.keys(fields).map((k) => {
    return {
      [k]: fields[k]
    }
  })
  let newObject = list.reduce((acc, currentValue) => {
    const key = Object.keys(currentValue)[0]
    const value = currentValue[key]
    let obj = acc
    if (removeErrorField !== key) {
      console.log('entrou', acc[key], 'value', acc[key] = value)
      obj[key] = value
    } else {
      obj[key] = { hasTrue: false, msg: '' }
    }
    return obj
  }, {})
  return newObject
}

/**
 * Create custom errors.
 * @param {string} detail - receives the type of error. Ex: status 400
 * @param {object} obj - receives an obj that the property must have the same name
 * value of the detail argument. This should be a function to perform
 * the code when you see the error.
 */

const handleError = (detail, obj) => {
  const status = obj
  let getStatus = status[detail]
  return getStatus && getStatus()
}

export {
  clearError,
  handleError
}
