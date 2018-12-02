// import Vue from 'vue'
import axios from '@/axios'
import Router from '@/router'
import i18n from '@/assets/js/i18n'

const actions = {
  login: ({ commit, rootGetters, dispatch }, creadentials) => {
  },
  logout: ({ commit, rootGetters, dispatch }) => {
  },
  register: ({ commit, rootGetters, dispatch }, credentials) => {

  },

  fetchUser: ({ commit, getters, rootGetters, dispatch }) => {
  },

  fetchStorage: ({ commit, rootGetters, dispatch }) => {
  },

  changePassword: ({ commit, rootGetters, dispatch }, payload) => {
  },

  resetPassword: ({ commit, rootGetters, dispatch }, payload) => {
  },

  resetPasswordCheckToken: ({ commit, rootGetters, dispatch }, payload) => {
  }
}

export default actions
