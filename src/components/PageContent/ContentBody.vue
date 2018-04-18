<template>
  <div class="content__body__wrapper">
    <p>Content</p>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import Contents from '../../views/Contents'
import C from '../../views/C'
import D from '../../views/D'
import E from '../../views/E'
export default {
  name: 'ContentBody',
  props: ['main'],
  data () {
    return {
      currentView: ''
    }
  },
  components: {
    Contents,
    C,
    D,
    E
  },
  methods: {
    getComponent () {
      const returnValue = this.$router.currentRoute.path.split('/')[1]
      console.log(returnValue)
      return returnValue
    }
  },
  created () {
    this.currentView = this.getComponent()
    console.log(this.currentView)
  }
}
</script>
