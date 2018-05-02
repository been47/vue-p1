<template>
  <div class="content__box">
    <p>chart</p>
    <div class="chart__wrapper">
      <div class="chart__wrapper__header">
        <p>title</p>
        <div class="chart__btn__wrapper">
        </div>
      </div>
      <div class="chart__wrapper__body">
        <line-chart :chart-data="weightChart2" :options="chartOption2" :height="318"></line-chart>
      </div>
      <div class="chart__wrapper__footer">
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '../VueChart/LineChart'
export default {
  name: 'Chart',
  data () {
    return {
      weightChart2: {
        labels: ['1주', '2주', '3주', '4주', '5주'],
        datasets: [
          {
            label: '공복측정',
            borderColor: '#099481',
            pointBackgroundColor: '#00bfa5',
            backgroundColor: 'rgba(0, 191, 165, 0.16)',
            data: [74.8, 71.5, 70, 77.4, 74.6]
          }, {
            label: '식후측정',
            borderColor: '#084086',
            pointBackgroundColor: '#48b0f7',
            backgroundColor: 'rgba(72, 176, 247, 0.16)',
            data: [125.1, 123.2, 128.1, 128.1, 125.1]
          }
        ]
      }
    }
  },
  methods: {},
  computed: {},
  components: {LineChart},
  created () {
  }
}
</script>
