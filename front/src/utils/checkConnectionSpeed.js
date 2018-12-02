/**
 * Check connection speed
 * @param {bool} loop - check connection loop
 * @param {int} interval - if loop true, defaault value 30s
 */
const src = 'https://source.unsplash.com/random/1000x1000'
const checkConnectionSpeed = (_loop, _interval) => {
  var loop = _loop || false
  var interval = _interval || 30000
  var startTime = 0
  var downloadSize = 200000
  var download = new Image()
  var endTime = 0
  download.onload = () => {
    endTime = (new Date()).getTime()
    showResults()
  }

  function checkConnection (first = false) {
    console.log('check connection', src)
    startTime = (new Date()).getTime()
    download.src = src + '?ver=' + (new Date()).getTime()
    if (loop && first) {
      setInterval(checkConnection, interval)
    }
  }
  function showResults () {
    var duration = ((endTime - startTime) / 1000)
    var bitsLoaded = downloadSize * 8
    var speedBps = Math.round(bitsLoaded / duration)
    var speedKbps = (speedBps / 1024).toFixed(2)
    var speedMbps = (speedKbps / 1024).toFixed(2)
    var data = { duration, bitsLoaded, speedKbps, speedMbps }
    window.dispatchEvent(new CustomEvent('connectionSpeed', { 'detail': data }))
    download.src = ''
  }

  checkConnection(true)
}
export { checkConnectionSpeed }
