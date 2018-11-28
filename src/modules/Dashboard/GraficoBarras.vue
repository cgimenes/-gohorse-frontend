itemsDefault<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    data () {
      return {
        namesDefault: [],
        itemsDefault: []
      }
    },
    props: [ 'items', 'names' ],
    watch: {
      items: {
        handler: function (val) {
          this.itemsDefault = val
          this._data._chart.update()
          this.renderChart(
            {
              labels: this.namesA,
              datasets: this.itemsDefault
            },
            {
              maintainAspectRatio: false
            }
          )
        }
      },
      names: {
        handler: function (val) {
          this.namesA = val
          this._data._chart.update()
          this.renderChart(
            {
              labels: this.namesDefault,
              datasets: this.itemsDefault
            },
            {
              maintainAspectRatio: false
            }
          )
        }
      }
    },
    mounted () {
      this.namesDefault = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      this.itemsDefault = [
        {
          label: 'Consultas',
          backgroundColor: '#F44336',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          label: 'Internamentos',
          backgroundColor: '#2196F3',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        } /*,
        {
          label: 'Cirurgias',
          backgroundColor: '#4CAF50',
          data: [4, 2, 3, 5, 2, 0, 2, 2, 3, 1, 2, 2]
        } */
      ]
      this.renderChart(
        {
          labels: this.namesDefault,
          datasets: this.itemsDefault
        },
        {
          maintainAspectRatio: false
        }
      )
    }
  }
</script>
