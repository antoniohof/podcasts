// import { detectOS } from 'detect-browser'

export function disableiOSZoom () {
  if (window.DetectRTC.osName !== 'iOS') return
  let lastTouchAtMs = 0

  document.addEventListener('touchmove', ev => {
    if (window.DetectRTC.osName !== 'iOS') return

    if (ev.scale === 1) return
    ev.preventDefault()
  })

  document.addEventListener('touchend', ev => {
    if (window.DetectRTC.osName !== 'iOS') return

    const now = new Date().getTime()
    const isDoubleTouch = now - lastTouchAtMs <= 300
    lastTouchAtMs = now
    if (isDoubleTouch) {
      ev.preventDefault()
    }
  })
}
