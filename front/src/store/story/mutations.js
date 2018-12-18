const mutations = {
  storeStories: (state, value) => {
    console.warn('stored', value)
    state.story.list = value
  }
}

export default mutations
