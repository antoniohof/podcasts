<template>
  <section class="story">
    <header class="story_header">
      <h1 class="title">STORY!!!! {{this.story.title}}</h1>
    </header>
    <section class="story_content">
      <GmapMap
          ref='mapRef'
          :center='center'
          :zoom='zoom'
          class='gmap'
      >
      </GmapMap>
    </section>
    <Player
      :tracks="this.story.tracks"
      :currentTrack="currentTrack"
      :setCurrentTrack="handleSetCurrentTrack"
      >
    </Player>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import mapStyle from '@/utils/mapStyle'
import {
  Player
} from '@/components/atoms'

export default {
  data () {
    return {
      map: null,
      story: {},
      currentTrack: null,
      center: {
        lat: 43.0,
        lng: -34.0
      },
      zoom: 14
    }
  },
  created () {
    this.fetchStories().then(() => {
      this.fetchStoryTracks(parseInt(this.$route.params.id)).then(() => {
        this.story = this.getStories.find((story) => story.id === parseInt(this.$route.params.id))
        console.warn('this !!', this.story)
        this.currentTrack = this.story.tracks[0]
        this.$refs.mapRef.$mapPromise.then((map) => {
          this.initMap(map)
        })
      })
    })
  },
  mounted () {
  },
  components: {
    Player
  },
  computed: {
    ...mapGetters('story',
      [
        'getStories'
      ]
    )
  },
  methods: {
    initMap (map) {
      map.setZoom(this.zoom)
      map.setOptions({
        gestureHandling: 'greedy',
        styles: mapStyle(),
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
      })
      this.map = map

      var overlay
      USGSOverlay.prototype = new window.google.maps.OverlayView()

      /** @constructor */
      function USGSOverlay (bounds, image, map) {
        console.warn('build overlay')
        // Initialize all properties.
        this.bounds_ = bounds
        this.image_ = image
        this.map_ = map

        // Define a property to hold the image's div. We'll
        // actually create this div upon receipt of the onAdd()
        // method so we'll leave it null for now.
        this.div_ = null

        // Explicitly call setMap on this overlay.
        this.setMap(map)
      }

      /**
       * onAdd is called when the map's panes are ready and the overlay has been
       * added to the map.
       */
      USGSOverlay.prototype.onAdd = function () {
        console.warn('on add overlay')

        var div = document.createElement('div')
        div.style.borderStyle = 'none'
        div.style.borderWidth = '0px'
        div.style.position = 'absolute'

        // Create the img element and attach it to the div.
        var img = document.createElement('img')
        img.src = this.image_
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.position = 'absolute'
        div.appendChild(img)

        this.div_ = div

        // Add the element to the "overlayLayer" pane.
        var panes = this.getPanes()
        panes.overlayLayer.appendChild(div)
      }

      USGSOverlay.prototype.draw = function () {
        // We use the south-west and north-east
        // coordinates of the overlay to peg it to the correct position and size.
        // To do this, we need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection()

        // Retrieve the south-west and north-east coordinates of this overlay
        // in LatLngs and convert them to pixel coordinates.
        // We'll use these coordinates to resize the div.
        var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest())
        var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast())

        // Resize the image's div to fit the indicated dimensions.
        var div = this.div_
        div.style.left = sw.x + 'px'
        div.style.top = ne.y + 'px'
        div.style.width = (ne.x - sw.x) + 'px'
        div.style.height = (sw.y - ne.y) + 'px'
      }

      // The onRemove() method will be called automatically from the API if
      // we ever set the overlay's map property to 'null'.
      USGSOverlay.prototype.onRemove = function () {
        this.div_.parentNode.removeChild(this.div_)
        this.div_ = null
      }

      this.center = {
        lat: this.story.lat,
        lng: this.story.lng
      }

      var b = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(this.story.lat - 0.02, this.story.lng - 0.02),
        new window.google.maps.LatLng(this.story.lat + 0.02, this.story.lng + 0.02)
      )

      // The photograph is courtesy of the U.S. Geological Survey.
      var srcImage = 'static/images/square.png'

      // The custom USGSOverlay object contains the USGS image,
      // the bounds of the image, and a reference to the map.
      overlay = new USGSOverlay(b, srcImage, this.map)
    },
    ...mapActions('story',
      [
        'fetchStories',
        'fetchStoryTracks'
      ]
    ),
    handleSetCurrentTrack (currentTrack) {
      this.currentTrack = currentTrack
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../../assets/sass/podcasts

.story
  position: relative
  z-index: 0
  @media (min-width: 992px)
    overflow-y: hidden
  &_header
    position: relative
    padding-top: 0px
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
    height: 80%
    display: flex
    .gmap
      position: relative
      width: 100%
      opacity: 0.5
      filter: grayscale(1)
      bottom: 0
      height: 50%
      margin: 0 auto

    @media (min-width: 992px)
      display: flex
      padding: 0px 20px 0
      margin-right: 0
      margin-left: 0
      max-width: none
      height: 80%

</style>
