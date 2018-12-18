// import Vue from 'vue'
const actions = {
  setLastLocation: ({ commit }, location) => commit('storeLocation', location),
  fetchCurrentPosition: ({ commit, dispatch, state }, location) => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        zoom: state.map.lastLocation.zoom
      }
      dispatch('setLastLocation', this.center)
    })
  }
}

export default actions
