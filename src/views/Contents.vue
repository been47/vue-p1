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
import Mdata from '../components/Content/Mdata'
export default {
  name: 'Content',
  components: {
    Quill,
    Mdata
  },
  data () {
    return {
      currentView: ''
    }
  },
  created () {
    this.$root.$on('selectMenu', value => {
      this.currentView = value.component
    })
  }
}
</script>
