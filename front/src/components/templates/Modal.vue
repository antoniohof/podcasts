<template>
  <transition name="modal">
    <div class="modal_mask" :class="{ backgroundBlack: getModalType === 'InvitedByEmail'}">
        <transition name="fade">
          <div class="modal_dialog" :class="setCenterContent">
            <div class="modal_header" :class="setSpace">
                <a v-if='!this.getModalArgs.locked' class="close" @click="close">
                  <img :src="topIcon">
                </a>
                <h2 v-if='getModalArgs.titleModal' class="modal_header_title">{{getModalArgs.titleModal}}</h2>
            </div>
            <div class="modal_content">
              <div class="modal_body" :class="{'modal_body--bigcontent' : getModalArgs.bigContent}">
                  <slot name="modal-type"></slot>
              </div>
            </div>
          </div>
        </transition>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  mounted () {
    document.querySelector('body').classList.add('modal_open')
  },
  destroyed () {
    document.querySelector('body').classList.remove('modal_open')
  },
  data () {
    return {
      topIcon: 'static/icons/big-close.svg'
    }
  },
  computed: {
    ...mapGetters([
      'getModalType',
      'getModalArgs',
      'getModalOldArgs',
      'getFirstOpenedModal'
    ]),
    setSpace () {
      return this.getModalArgs.spaceHeader ? 'modal_header--space' : ''
    },
    setCenterContent () {
      return this.getModalArgs.centerContent ? 'modal_dialog--center' : ''
    }
  },
  methods: {
    close () {
      if (this.getModalArgs !== null && this.getModalArgs !== undefined && this.getModalArgs.previous !== undefined && this.getModalArgs.previous !== null && this.getFirstOpenedModal !== this.getModalArgs.type) {
        let oldArgs = this.getModalOldArgs
        oldArgs.type = this.getModalArgs.previous
        this.$store.dispatch('openModal', oldArgs)
      } else {
        this.$store.dispatch('closeModal')
      }
    }
  },
  watch: {
    getModalArgs (args) {
      if (args !== null && args !== undefined && args.previous !== undefined && args.previous !== null && this.getFirstOpenedModal !== args.type) {
        this.topIcon = 'static/icons/big-back.svg'
      } else {
        this.topIcon = 'static/icons/big-close.svg'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/sass/podcasts.sass'
.modal
  &_mask
    position: fixed
    top: 0
    width: 100%
    height: 100%
    z-index: 9999
    background-color: rgba(0, 0, 0, .8)
  &_header
    padding-top: 20px
    padding-bottom: 20px
    text-align: center
    color: #fff
    .close
      display: inline-block
      width: 45px
      height: 45px
      cursor: pointer
      img
        max-width: 100%
    &_title
      margin-top: 20px
      font-familiy: Vision
      font-size: 24px
    // Space to bottom header
    &--space
      padding-bottom: 100px
  &_dialog
    position: absolute
    display: flex
    flex-flow: column
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow-y: auto
    &--center
      display: flex
      justify-content: center
      flex-flow: column
      @media (max-width: 575px)
        align-items: center

  &_content
    display: flex
    justify-content: center
    flex: 1 1 auto
    padding-bottom: 30px
    width: 100%
  &_body
    padding-right: 30px
    padding-left: 30px
    width: 100%
    min-width: 300px
    max-width: 560px
    @media(min-width: 992px)
      display: flex
      flex-flow: column
      &--bigcontent
        display: initial
        flex-flow: initial

// Effect transition to open modal
.modal-enter-active
  transition: all .7s cubic-bezier(0.075, 0.82, 0.165, 1)
  transition-delay: 0.2s

.modal-leave-active
  transition: all .2s ease-out

.modal-enter, .modal-leave-to
  transform: translateY(10px)
  opacity: 0

</style>
