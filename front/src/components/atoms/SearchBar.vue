<template>
  <div class="projsearch">
    <input type="text" :placeholder="placeField" @input="searchText" value="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    placeField: {
      type: String,
      default: ''
    }
  },
  methods: {
    searchText (event) {
      this.$emit('onsearch', event.target.value)
    }
  }

}
</script>
<style lang="sass" scoped>
@import '../../assets/sass/podcasts'
.projsearch
  position: relative
  input
    padding: 5px 10px
    width: 100%
    height: 35px
    font-family: Vision
    font-size: 16px
    color: #A2A2A6
    border: solid 1px #9B9B9B
    background: transparent
    &::placeholder
      color: #A2A2A6
  &:after
    content: ''
    position: absolute
    top: 4px
    right: 5px
    width: 25px
    height: 25px
    //background: center no-repeat url("../../assets/images/icon_search.png")
    background-size: contain

</style>
