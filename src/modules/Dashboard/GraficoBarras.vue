<script>
  import { Bar } from 'vue-chartjs'
  // import the component - chart you need

  export default {
    extends: Bar,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart(
        {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [
            {
              label: 'Consultas',
              backgroundColor: '#F44336',
              data: [7, 12, 2, 4, 2, 3, 4, 5, 1, 0, 7, 1]
            },
            {
              label: 'Internamentos',
              backgroundColor: '#2196F3',
              data: [1, 1, 2, 0, 0, 4, 4, 2, 1, 2, 2, 3]
            }/*,
            {
              label: 'Cirurgias',
              backgroundColor: '#4CAF50',
              data: [4, 2, 3, 5, 2, 0, 2, 2, 3, 1, 2, 2]
            }*/
          ]
        },
        {
          maintainAspectRatio: false
        }
      )
    }
  }
</script>
