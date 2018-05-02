<script>
import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['chartData', 'options', 'stack'],
  mounted() {
    if (this.stack) {
      this.options.scales = {xAxes: [{stacked: true}], yAxes: [{stacked: true}]}
    }
    this.renderChart(this.chartData, this.options)
  }
}
</script>
