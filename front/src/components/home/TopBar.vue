<template>
  <transition name="fade">
    <header class="topbar" v-if="getMeta">
      <div class="row topbar_wrap">
        <div class="col">
          <router-link class="topbar_logo" to="/" tag="a">
          </router-link>
          <!-- router-link(:to="{name: 'workspacePlan'}")-->
          <!-- router-link(:to="{name: 'WorkSpaceConfirm'}")-->
          <a class="back" v-if="getMeta.back" @click="goBack">
            <img src="static/icons/backarrow-icon.svg">
          </a>
        </div>
        <div class="col topbar_controls">
          <a
            class="btn_topbar"
            background="none"
            type="circle-regular"
            :icon="{
              type: 'file',
              value: 'static/icons/people-icon.png',
              size: 'small'
            }"
            :tooltip="{ content: $t('tooltips.userProfile') }"
          ></a>
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
  &_wrap
    > .col
      display: inline-flex
      align-items: center
      height: 50px
  &_logo
    display: inline-block
    width: 150px
    height: 20px
    img
      max-width: 100%
      height: auto
  &_controls
    padding-right: 0
    justify-content: flex-end

.btn_topbar
  margin-right: 0
  width: $BtnSizeResetAuto
  height: $BtnSizeResetAuto
  max-width: $BtnSizeResetNone
  min-width: $BtnSizeResetAuto
  max-height: $BtnSizeResetNone
  min-height: $BtnSizeResetAuto

</style>
