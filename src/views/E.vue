<template>
  <div class="content__body">
    <div class="container">
      <p>페이지 E</p>
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import Ea from '../components/E/Ea'
export default {
  name: 'E',
  components: {
    Ea
  },
  data () {
    return {
      currentView: Ea
    }
  },
  created () {
    this.$root.$on('selectMenu', value => {
      this.currentView = Ea
    })
  }
}
</script>
