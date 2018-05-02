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
import Navigator from '../components/Content/Navigator.vue'
import Vuetable from '../components/Content/Vuetable'
import Chart from '../components/Content/Chart'
export default {
  name: 'Content',
  components: {
    Quill,
    Mdata,
    Navigator,
    Vuetable,
    Chart
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
