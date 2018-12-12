const mutations = {
  storeLocation: (state, value) => {
    console.log('got! cur pos', value)
    state.map.lastLocation = value
  }
}

export default mutations
