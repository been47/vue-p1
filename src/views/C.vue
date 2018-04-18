<template>
  <div class="content__body">
    <div class="container">
      <p>페이지 C</p>
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import Ca from '../components/C/Ca'
export default {
  name: 'C',
  components: {
    Ca
  },
  data () {
    return {
      currentView: ''
    }
  },
  created () {
    this.$root.$on('selectMenu', value => {
      console.log(value)
      this.currentView = value.component
    })
  }
}
</script>
