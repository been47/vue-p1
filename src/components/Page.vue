<template>
  <div class="body__wrapper">
    <header-template></header-template>
    <div class="main">
      <sidebar></sidebar>
      <content-body :main="main"></content-body>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import HeaderTemplate from './Header'
import ContentBody from './PageContent/ContentBody'

export default {
  name: 'Page',
  data () {
    return {
      main: {}
    }
  },
  components: {
    Sidebar,
    HeaderTemplate,
    ContentBody
  },
  created () {
    this.$root.$on('mainMenu', value => { this.main = value })
  }
}
</script>
