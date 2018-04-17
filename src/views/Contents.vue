<template>
  <div class="content__body">
    <div class="container">
      <p>컨텐츠페이지</p>
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import Quill from '../components/Content/Quill'
export default {
  name: 'Content',
  components: {
    Quill
  },
  data () {
    return {
      currentView: Quill
    }
  },
  created () {
    console.log(Quill)
    this.$root.$on('selectMenu', value => {
      this.currentView = Quill
    })
  }
}
</script>
