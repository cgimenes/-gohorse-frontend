<template lang="pug">
  v-container(grid-list-lg fluid)
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-btn(absolute dark fab top right small color='red')
            v-icon add
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          v-list(two-line)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
            v-list-tile(avatar @click="")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title Teste
                v-list-tile-sub-title Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
      v-flex.text-xs-center(xs12)
          v-pagination(:length='5' v-model='page')
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Modular Vue.js App'
    }
  }
}
</script>
