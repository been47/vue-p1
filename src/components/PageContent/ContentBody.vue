<template>
  <div class="content__body__wrapper">
    <p>Content</p>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import Contents from '../../views/Contents'
export default {
  name: 'ContentBody',
  props: ['main'],
  data () {
    return {
      currentView: ''
    }
  },
  components: {
    Contents
  },
  methods: {
    getComponent () {
      const returnValue = this.$router.currentRoute.path.split('/')[1]
      return returnValue
    }
  },
  created () {
    this.currentView = this.getComponent()
    console.log(this.currentView)
  }
}
</script>
