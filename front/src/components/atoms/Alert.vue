<template lang="pug">
  transition(name='alertanim')
    .alert
      .alert-text(v-if="getAlertArgs !== null && getAlertArgs.text !== undefined && getAlertArgs.text !== '' && !getIsInVR")
        h1 {{getAlertArgs.text}}
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getAlertArgs',
      'getIsInVR'
    ])
  },
  methods: {
    ...mapActions([
      'closeAlert'
    ])
  }
}
</script>

<style lang="sass" scoped>

.alert
  height: 100%
  width: 100%
  -webkit-transform: translate3d(0,0,0)
  pointer-events: none
  z-index: 99999
  position: absolute
  display: table
  text-align: center

  .alert-text
    margin-top: 120px
    display: inline-block
    background-color: #1E1D23
    max-width: 400px
    border-radius: 6px
    filter: drop-shadow(1.4px 1.4px 5px #1E1D23)

    h1
      font-size: 13px
      color: #eae719
      font-weight: 700
      text-align: center
      text-transform: uppercase
      padding: 4px 15px 4px 15px

.alertanim-enter-active
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1)

.alertanim-leave-active
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1)

.alertanim-enter, .alertanim-leave-to
  transform: scale(0.93)
  opacity: 0

</style>
