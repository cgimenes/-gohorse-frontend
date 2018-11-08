<template >
    <b class="list_letter" :style="{ 'background': avatarColor } ">{{ letter }}</b>
</template>

<script>
import randomColor from 'randomcolor'

export default {
  props: {
    color: {
      type: String,
      default () {
        return null
      }
    },
    word: {
      type: String,
      required: true
    },
    letters: {
      type: Number,
      required: false,
      default () {
        return 1
      }
    }
  },
  computed: {
    letter () {
      return this.word.substr(0, this.letters)
    },
    avatarColor () {
      if (this.color) {
        return this.color
      }
      return randomColor({
        luminosity: 'dark'
      })
    }
  }
}
</script>

<style>
  b.list_letter {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    text-transform: uppercase;
    color: #fff;
  }
</style>
