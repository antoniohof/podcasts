import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from '../../../locales'

Vue.use(VueI18n)

const currentLanguage = window.navigator.language.substring(0, 2)

const i18n = new VueI18n({
  locale: currentLanguage,
  fallbackLocale: 'en',
  messages
})

export default i18n
