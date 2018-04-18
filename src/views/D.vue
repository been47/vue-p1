<template>
  <div class="content__body">
    <div class="container">
      <p>페이지 D</p>
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import Da from '../components/D/Da'
export default {
  name: 'D',
  components: {
    Da
  },
  data () {
    return {
      currentView: Da
    }
  },
  created () {
    this.$root.$on('selectMenu', value => {
      this.currentView = Da
    })
  }
}
</script>
