<template>
  <section class="home home--transparent">
    <header class="home_header">
      <h1 class="title">Lorem ipsum dolor sit amet</h1>
    </header>
    <section class="home_content">
      Lorem ipsum dolor sit amet
    </section>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import {
} from '@/components/atoms'

export default {
  mounted () {
  },
  components: {
  },
  computed: {
    ...mapGetters([
    ])
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
@import ../../assets/sass/podcasts

.home
  position: relative
  z-index: 0
  overflow-y: auto
  @media (min-width: 992px)
    overflow-y: hidden
  &_header
    position: relative
    padding-left: 18px
    padding-right: 18px
    .title
      display: block
      color: $titleFontColor
    .logo
      display: block
      margin: 50px auto 0
      width: 190px
  &_content
    padding: 80px 20px 0
    margin-right: auto
    margin-left: auto
    width: 100%
    max-width: 320px
    @media (min-width: 992px)
      display: flex
      padding-top: 0
      margin-right: 0
      margin-left: 0
      max-width: none
      height: 100%
      justify-content: center
      align-items: center

</style>
