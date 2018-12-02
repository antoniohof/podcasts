<template>
  <div class="app">
    <TopBar>
    </TopBar>
    <router-view
      class="view"
    ></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import {
  Modal
} from '@/components/templates'

import {
  TopBar
} from '@/components/home'

import {
} from '@/modals'

export default {
  components: {
    Modal,
    TopBar
  },
  data () {
    return {
    }
  },
  created () {
    console.warn('[podcasts project] - starting')
    if (process.env.NODE_ENV === 'production') {
      // document.addEventListener('contextmenu', event => event.preventDefault())
    }
  },
  mounted () {
    this.$nextTick(function () {
      // window.addEventListener('resize', this.setScreenLayout)
      // window.addEventListener('resize', this.setInnerHeight)
    })
    // this.initTrail()
  },
  updated () {
  },
  computed: {
    ...mapGetters('auth', [
    ])
  },
  methods: {
    ...mapActions([
    ]),
    parseBranch (data) { // parse deep links
      console.log('data branch', data)
      var payload
      let modalData
      try {
        switch (data.deep_link_type) {
        case '':
          break
        }
      } catch (error) {
        this.$router.push('/')
      }
    }
  },
  watch: {
  },
  beforeDestroy () {
    // window.removeEventListener('resize', this.setScreenLayout)
  },
  name: 'app'
}
</script>

<style lang="sass">
@import assets/sass/podcasts

.app
  height: 100%

.view
  width: 100%
  height: 100%
</style>
