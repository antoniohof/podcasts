<template>
  <transition name="fade">
    <header class="topbar" v-if="getMeta">
      <div class="wrap">
        <a class="back" v-if='getMeta.back' @click="goBack">
          <img src="static/icons/backarrow-icon.svg">
        </a>
        <router-link class="logo" v-if='!getMeta.back' to="/" tag="a">
        LOGO
        </router-link>
        <div class="controls">
          <div
            class="controls_btn"
          >Create</div>
          <div
            class="controls_btn"
          >Explore</div>
          <div
            class="controls_btn"
          >Home</div>
        </div>
      </div>
    </header>
  </transition>
</template>

<script>

import {
  mapGetters,
  mapActions
} from 'vuex'

import {
  Dropdown
} from '@/components/atoms'

export default {
  components: {
    Dropdown
  },
  mounted () {
  },
  updated () {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isModalOpen'
    ]),
    getMeta () {
      if (this.$route.meta.top) {
        if (this.$route.meta.top.show) {
          return this.$route.meta.top
        }
        return false
      }
      return false
    }
  },
  methods: {
    goBack: function () {
      this.$router.push(-1)
    }
  },
  watch: {
  }
}
</script>

<style lang="sass" scoped>
@import ../../assets/sass/podcasts
$BtnSizeResetAuto: auto !important
$BtnSizeResetNone: none !important

.topbar
  padding-right: 30px
  padding-left: 30px
  background: $headerBar
  height: 50px
  .wrap
    justify-content: space-between
    display: flex
    flex-direction: row
    width: 100%
    .logo
      width: 50px
      height: 50px
      color: white
      img
        max-width: 100%
        height: auto
    .back
      color: white
      width: 15px
      padding: 2px

    .controls
      width: 50%
      height: 50px
      display: flex
      align-content: right !important
      justify-content: right !important
      flex-direction: row-reverse !important
      &_btn
        width: 100px
        height: 100%
        margin-left: 5px
        color: white
        display: flex
        justify-content: center !important
        flex-direction: column !important
        text-align: center

.btn_topbar
  margin-right: 0
  width: $BtnSizeResetAuto
  height: $BtnSizeResetAuto
  max-width: $BtnSizeResetNone
  min-width: $BtnSizeResetAuto
  max-height: $BtnSizeResetNone
  min-height: $BtnSizeResetAuto

</style>
