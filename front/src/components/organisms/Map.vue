<template>
  <GmapMap
      ref="mapRef"
      :center="center"
      :zoom="zoom"
      class='gmap'
      gesturehandling='greedy'
      @center_changed='onCenterChanged'
      @zoom_changed='onZoomChanged'
  >
  </GmapMap>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import {
} from '@/components/atoms'

export default {
  mounted () {
    this.center = {
      lat: this.getLastLocation.lat,
      lng: this.getLastLocation.lng
    }
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.setZoom(this.getLastLocation.zoom)
    })
  },
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      zoom: 7,
      markers: []
    }
  },
  components: {
  },
  computed: {
    ...mapGetters('map', [
      'getLastLocation'
    ])
  },
  updated () {
    console.log('updated')
    if (this.center.lng === 0 && this.getLastLocation.lng !== 0) {
      this.center = {
        lat: this.getLastLocation.lat,
        lng: this.getLastLocation.lng
      }
    }
  },
  methods: {
    onZoomChanged (newZoom) {
      console.log('zoom changed')
      // save zoom inside store
      this.zoom = newZoom
      this.setLastLocation({ lat: this.center.lat, lng: this.center.lng, zoom: this.zoom })
    },
    onCenterChanged (newCenter) {
      console.log('center changed')
      // save location inside store
      this.setLastLocation({ lat: newCenter.lat(), lng: newCenter.lng(), zoom: this.zoom })
    },
    ...mapActions('map', [
      'setLastLocation'
    ])
  },
  watch: {
    getLastLocation: function (lastLocation) {
      if (this.center.lat !== 0 || this.center.lng !== 0) return
      this.center = {
        lat: this.getLastLocation.lat,
        lng: this.getLastLocation.lng
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.gmap
  position: relative
  width: 100%
  height: 80%
</style>
