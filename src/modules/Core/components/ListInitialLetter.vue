<template lang="pug">
    <b class="list_letter" :style="{ 'background': color } ">{{ letter }}</b>
</template>

<script>
import randomColor from 'randomcolor'

export default {
  props: {
    word: {
      type: String,
      required: true
    },
    lengh: {
      type: Number,
      required: false,
      default () {
        return 1
      }
    }
  },
  computed: {
    letter () {
     return this.word.substr(0, this.lengh);
    },
    color () {
      return randomColor({
        luminosity: 'dark',
      })
    }
  }
}
</script>

<style lang="stylus">

  b.list_letter
    width 40px
    height 40px
    border-radius 50%
    line-height 40px
    text-transform uppercase
    color #FFF

</style>
