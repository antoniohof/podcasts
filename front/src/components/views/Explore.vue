<template>
  <section class="explore">
    <header class="explore_header">
      <h1 class="title">Explore</h1>
    </header>
    <section class="explore_content">
      <Map class='map'>
      </Map>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import {
  Map
} from '@/components/organisms'

export default {
  mounted () {
    console.log('mounted explore')
  },
  components: {
    Map
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

.explore
  position: relative
  z-index: 0
  overflow-y: auto
  @media (min-width: 992px)
    overflow-y: hidden
  &_header
    position: relative
    padding-top: 18px
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
    display: flex
    height: 100%
    .map
      width: 100%

    @media (min-width: 992px)
      display: flex
      padding: 0px 20px 0
      margin-right: 0
      margin-left: 0
      max-width: none
      height: 100%

</style>
