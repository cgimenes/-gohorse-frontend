<script>
  import { Pie } from 'vue-chartjs'
  // import the component - chart you need

  export default {
    extends: Pie,
    mounted () {
      this.renderChart({
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [{
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 80, 10]
        }]
      }, {
        responsive: true,
        maintainAspectRatio: false
      })
    }
  }
</script>
