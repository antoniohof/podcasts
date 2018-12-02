<template>
  <div class="drop-wrapper">
    <form class="dropzone">
      <!-- Not displayed, just for Dropzone's `dictDefaultMessage` option -->
      <div id="dropzone-message" style="display: none">
        <span class="dropzone-title">{{text}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import Dropzone from 'dropzone'
import '@/assets/css/dropzone/dropzone.css'
import uploadAPI from '@/api/upload'

Dropzone.autoDiscover = false

export default {
  props: {
    assetDestination: {
      type: String
    },
    assetType: {
      type: String
    },
    text: {
      type: String
    },
    maxFiles: {
      type: Number,
      default: 100
    },
    acceptedFiles: {
      type: String
    }
  },
  name: 'dropzone',
  data () {
    return {
      dropzone: null,
      numFiles: 0
    }
  },
  mounted () {
    const upload = this.upload

    let options = {
      // The URL will be changed for each new file being processing
      url: '/',
      // Since we're going to do a `PUT` upload to S3 directly
      method: 'put',
      // Hijack the xhr.send since Dropzone always upload file by using formData
      // ref: https://github.com/danialfarid/ng-file-upload/issues/743
      sending (file, xhr) {
        let _send = xhr.send
        xhr.send = () => {
          _send.call(xhr, file)
        }
      },
      // Upload one file at a time since we're using the S3 pre-signed URL scenario
      parallelUploads: 1,
      maxFiles: this.maxFiles,
      maxFilesize: 1000,
      uploadMultiple: true,
      acceptedFiles: this.acceptedFiles,
      // Content-Type should be included, otherwise you'll get a signature
      // mismatch error from S3. We're going to update this for each file.
      header: '',
      createImageThumbnails: true,
      thumbnailWidth: 100,
      thumbnailHeight: 100,
      // Customize the wording
      dictDefaultMessage: document.querySelector('#dropzone-message').innerHTML,
      // We're going to process each file manually (see `accept` below)
      autoProcessQueue: false,
      // Here we request a signed upload URL when a file being accepted
      accept (file, done) {
        upload(file, done)
      }
    }

    let el = document.getElementsByClassName('dropzone')[0]
    // Instantiate Dropzone
    this.dropzone = new Dropzone(el, options)

    // Limit drop to one file when maxFiles === 1
    this.dropzone.on('addedfile', (file) => {
      this.numFiles++
      if (this.numFiles > 1 && this.maxFiles === 1) {
        this.dropzone.removeFile(file)
      }
    })

    // Set signed upload URL for each file
    this.dropzone.on('processing', (file) => {
      this.dropzone.options.url = file.uploadURL
    })

    this.dropzone.on('totaluploadprogress', (progress) => {
      this.onProgress(progress)
    })

    this.dropzone.on('sending', (file, xhr, formData) => {
      xhr.timeout = 99999999
    })
  },
  methods: {
    upload (file, done) {
      uploadAPI.getSignedURLForDropZone(file, this.assetType, this.assetDestination)
        .then(response => {
          file.uploadURL = response.body.url
          done()
          // Manually process each file
          setTimeout(() => this.dropzone.processFile(file))
          this.$emit('interface', file)
        })
        .catch(response => done('Failed to upload', response))
    },
    onProgress (progress) {
      this.$emit('progress', progress)
    }
  }
}
</script>

<style lang="sass">

.drop-wrapper
  transition: all 0.2s linear
  border: 2px dashed #ccc
  background-color: transparent
  min-height: 150px
  height: 50vh !important
  width: 80vw !important
  margin: 60px 20px 20px 0px
  overflow: hidden
  position: fixed

  .dropzone
    transition: all 0.2s linear
    background-color: transparent
    height: 50vh
    overflow: auto
    border-color: #fcdf36 !important

    &::-webkit-scrollbar
      display: none

    &:hover
      border-color: #3498db
      background-color: transparent
      .dz-message
        .dropzone-title
          color: #3498db
    .dz-message
      color: #666

    .dz-image
      display: hidden
      border-radius: 50% !important
      width: 60px !important
      height: 60px !important

    .dz-progress
      margin-top: 20px !important

    .dz-details
      margin-top: 50px
      text-align: center !important
      width: 150px
      margin-left: -35px

      .dz-size
        width: 100px !important
        margin-top: 15px
      .dz-filename
        margin-top: -15px
        width: 100px !important

    .dz-default
      span
        .dropzone-title
          color: #bbb !important
    .dz-image-preview
      background: transparent !important

      span
        line-height: 1.8
        font-size: 13px
        letter-spacing: 0.4px

        .dropzone-title
          display: block
          color: #888
          font-size: 1.25em
</style>
