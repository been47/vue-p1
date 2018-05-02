<script>
import {Line, Bar} from 'vue-chartjs'

export default {
  mixins: [Line, Bar],
  props: ['chartData', 'options'],
  mounted() {
    this.options.scales = {xAxes: [{stacked: true}], yAxes: [{stacked: true}]}
    this.renderChart(this.chartData, this.options)
  }
}
</script>
