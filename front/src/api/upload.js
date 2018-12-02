
import Vue from 'vue' // eslint-disable-line no-unused-vars
import store from '../store' // eslint-disable-line no-unused-vars

// NEEDS REFACTOR TO axios

const getSignedURLForDropZone = function (file, assetType, assetDestination) {
  var filePath = ''
  if (file.fullPath !== undefined) { // in case the person dropped a folder
    filePath = 'files/users/' + store.getters['auth/userInfo'].id + '/' + assetDestination + '/' + file.fullPath
  } else {
    filePath = 'files/users/' + store.getters['auth/userInfo'].id + '/' + assetDestination + '/' + file.name
  }

  var data = {
    filePath: filePath.toString(),
    contentType: file.type.toString()
  }
  return Vue.http({
    url: process.env.API_UPLOAD,
    method: 'POST',
    body: data,
    headers: {
      'x-api-key': process.env.API_UPLOAD_KEY
    }
  })
}

const getSignedURLForDropZoneWithFileName = function (fileName, assetType, assetDestination) {
  var filePath = 'files/users/' + store.getters['auth/userInfo'].id + '/' + assetDestination + '/' + fileName

  var data = {
    filePath: filePath.toString(),
    contentType: assetType
  }
  return Vue.http({
    url: process.env.API_UPLOAD,
    method: 'POST',
    body: data,
    headers: {
      'x-api-key': process.env.API_UPLOAD_KEY
    }
  })
}

const getBase64 = function (file) { // eslint-disable-line no-unused-vars
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    console.log(reader.result)
  }
  reader.onerror = function (error) {
    console.log('Error: ', error)
  }
}

export default {
  getSignedURLForDropZone,
  getSignedURLForDropZoneWithFileName
}
