<template>
  <div class="content__box">
    <p>VueTable 폐기</p>
    <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable)

export default {
  name: 'Vuetable',
  data () {
    return {
      columns: ['id', 'name', 'age'],
      tableData: [
        { id: 1, name: 'John', age: '20' },
        { id: 2, name: 'Jane', age: '24' },
        { id: 3, name: 'Susan', age: '16' },
        { id: 4, name: 'Chris', age: '55' },
        { id: 5, name: 'Dan', age: '40' }
      ],
      options: {
      }
    }
  },
  methods: {
  },
  components: {
    Event
  }
}
</script>
