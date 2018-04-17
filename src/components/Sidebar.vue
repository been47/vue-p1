<template>
  <div class="sidebar__wrapper">
    <div class="sidebar__list">
      <ul>
        <li v-for="item in MAIN_MENU" :key="item.id">{{ item.name }}
          <ul>
            <li class="submenu" v-for="(sec, index) in SECOND_MENU[item.component.toUpperCase()]" :key="index">{{sec.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {MAIN_MENU, SECOND_MENU} from '../constants/constant'

export default {
  name: 'Sidebar',
  data () {
    return {
      MAIN_MENU,
      SECOND_MENU,
      passData: null
    }
  },
  methods: {
    selectMenu (data) {
      console.log(this.passData)
      const menu = '/contents/quill'
      console.log(menu)
      this.$root.$emit('mainMenu', menu)
    }
  }
}
</script>
