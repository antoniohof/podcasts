<template>
  <div class="dropdown_spv">
    <p></p>
    <ul>
      <li v-for="(item, index) in dropItems" :key="index">
        <span @click="item.action()" >{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data () {
    return {
      placeholderText: this.placeholder
    }
  },
  props: {
    dropItems: {
      type: [Array]
    }
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
@import ../../assets/sass/podcasts
.dropdown_spv

</style>
