<template>
  <div class="sidebar__content__menu">
    <ul>
      <li v-for="(item, index) in menu"
          :key="index" :class="{'selected': item === selected}" @click="setSelectMenu(item)">
        <a class="submenu">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: ['menu'],
  data () {
    return {
      selected: null
    }
  },
  methods: {
    setSelectMenu (target) {
      this.selected = target
      this.$root.$emit('openSidebar', false)
      this.$root.$emit('selectMenu', target)
      location.href = `${location.protocol}//${location.host}${target.url}`
    },
    setSelected () {
      const url = this.$router.currentRoute.path
      if (this.menu) {
        const findItem = this.menu.find(data => {
          return url.indexOf(data.url) > -1
        })
        this.selected = findItem
      }
    }
  },
  created () {
    this.setSelected()
  },
  mounted () {
    this.$root.$emit('selectMenu', this.selected)
  }
}
</script>
