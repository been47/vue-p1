<template>
  <div class="sidebar__wrapper">
    <div class="sidebar__list">
      <ul>
        <li v-for="item in MAIN_MENU" :key="item.id"
            :class="[{'selected': selected === item.id - 1}, `menu__${item.component}`]">
          <a class="mainmenu"
             @click.prevent="selectMenu(item.id - 1, SECOND_MENU[item.component.toUpperCase()])">{{ item.name }}</a>
          <sidebar-menu :menu="passData" v-if="selected === item.id - 1"></sidebar-menu>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {MAIN_MENU, SECOND_MENU} from '../../constants/constant'
import SidebarMenu from './SidebarMenu'

export default {
  name: 'Sidebar',
  data () {
    return {
      MAIN_MENU,
      SECOND_MENU,
      ab: null,
      passData: null,
      selected: null
    }
  },
  components: {
    SidebarMenu
  },
  methods: {
    selectMenu (target, data) {
      this.passData = data
      this.selected = target
      const menu = MAIN_MENU[target]
      this.$router.push({path: menu.url})
      this.$root.$emit('mainMenu', menu)
      location.reload(true)
    },
    setMainMenu () {
      const routeName = this.$router.currentRoute.path.split('/')[1]
      const findItem = MAIN_MENU.find(data => {
        return data.component === routeName
      })
      const menuName = findItem.component.toUpperCase()
      this.selected = findItem.id - 1
      this.passData = SECOND_MENU[menuName]
      this.$root.$emit('mainMenu', findItem)
    }
  },
  created () {
    this.setMainMenu()
  }
}
</script>
