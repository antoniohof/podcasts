<template lang="pug">
  transition(name="popup")
    .popup-mask
      .popup-wrapper
        transition(name="fade")
          .close
            a(@click="close")
              img(:src="topIcon")
        .popup-container
        slot(name="popup-type")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      topIcon: 'static/icons/big-close.svg'
    }
  },
  computed: {
    ...mapGetters([
      'getPopupType',
      'getPopupArgs'
    ])
  },
  methods: {
    close () {
      this.$store.dispatch('closePopup')
    }
  },
  watch: {
  }
}
</script>

<style lang="sass" scoped>

.popup-mask
  position: fixed
  z-index: 999
  height: 250px
  width: 300px
  background-color: rgba(0, 0, 0, 0.7)
  left: 50%
  top: 30%
  margin-right: -50%;
  border: 1px solid #fffa5e
  transform: translate(-50%, -50%)
  &.backgroundBlack
    background-color: rgba(0, 0, 0, 1)

.popup-wrapper
  position: fixed
  height: 250px
  width: 300px
  -webkit-transform: translate3d(0,0,0)
  margin: 0 auto

  .popup-container
    height: 250px
    width: 300px
    border-radius: 2px
    z-index: 1000
    box-sizing: border-box

    .popup-button
      display: block
      text-align: center
      font-weight: normal
      font-size: 12px
      color: #fffa5e
      background: transparent
      text-transform: uppercase
      border-radius: 95px
      border: 2px solid #fffa5e
      width: 100px
      height: 100px
      word-break: break-word
      box-shadow: 0px 0px 50px 4px rgba(255, 250, 94, 0.26), rgba(255, 250, 94, 0.26) 0px 0px 55px -6px inset
      position: inherit

.close
  right: 50%
  left: inherit
  margin-right: -20px
  top: 8%
  z-index: 999999

  position: absolute

  a
    position: relative
    padding: 0

    img
      width: 40px

      @media screen and ( max-height: 500px )
        margin-top: 0;

.popup-back
  right: 50%
  left: inherit
  margin-right: -25px
  top: 30px

  position: absolute

  a
    position: relative
    padding: 0

    img
      width: 65px

      @media screen and ( max-height: 500px )
        margin-top: 0;

.popup-enter-active
  transition: all .7s cubic-bezier(0.075, 0.82, 0.165, 1)
  transition-delay: 0.2s

.popup-leave-active
  transition: all .2s ease-out

.popup-enter, .popup-leave-to
  transform: translateY(10px)
  opacity: 0

</style>
