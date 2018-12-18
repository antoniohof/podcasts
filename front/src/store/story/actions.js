// import Vue from 'vue'
import axios from '@/axios'

const actions = {
  fetchStories: ({ commit }) => {
    return axios.story
      .fetch().then((response) => {
        console.log(response)
        commit('storeStories', response.detail.stories)
        return response.detail
      }).catch((e) => {
        return e
      })
  }
}

export default actions
