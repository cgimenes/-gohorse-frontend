<template>
  <section class="timeline">
    <div class="wrapper-timeline" v-if="hasItems">
      <div
        class="wrapper-item"
        v-for="(timelineContent, timelineIndex) in timelineItems"
        :key="timelineIndex">
        <div class="section-year">
          <p class="year">
            {{ timelineContent.year.to }}
          </p>
          <p class="year">
            {{ timelineContent.year.from }}
          </p>
        </div>
        <section class="timeline-items">
          <div
            class="item"
            v-for="(item, index) in timelineContent.items"
            :key="index">
            <span class="dot"></span>
            <h3 v-if="item.first" class="month-item">{{ item.nameMonth }}</h3>
            <h4 class="title-item" v-html="item.title"></h4>
            <p class="description-item" v-html="item.description"></p>
          </div>
        </section>
      </div>
    </div>
    <p v-else>{{ messageWhenNoItems }}</p>
  </section>
</template>

<script>
import '../../../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

export default {
  name: 'Timeline',
  props: {
    timelineItems: {
      type: Array,
      default: () => []
    },
    messageWhenNoItems: {
      type: String
    }
  },
  watch: {
    timelineItems: function (newVal) {
      this.timelineItems = newVal
    }
  },
  computed: {
    hasItems () {
      return !!this.timelineItems.length
    }
  }
}
</script>

<style>
.timeline {
  text-align: left;
  width: 100%;
  max-width: 500px;
}
.timeline .wrapper-timeline {
  position: relative;
}
.timeline .wrapper-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 20px;
}
.timeline .wrapper-item .section-year {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px;
  font-weight: bold;
  font-size: 20px;
}
.timeline .wrapper-item .section-year .year {
  margin: 0;
}
.timeline .wrapper-item .timeline-items .item {
  border-left: 5px solid #ccd5db;
  padding: 20px 0 20px 15px;
  position: relative;
}
.timeline .wrapper-item .timeline-items .month-item {
  margin: 0;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
}
.timeline .wrapper-item .timeline-items .title-item {
  margin: 0;
  padding: 5px 0;
  font-size: 16px;
  font-weight: 500;
}
.timeline .wrapper-item .timeline-items .description-item {
  font-weight: 100;
  margin: 0;
}
.timeline .wrapper-item .timeline-items .dot {
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #2da1bf;
  left: -10px;
  top: 26px;
}

</style>
