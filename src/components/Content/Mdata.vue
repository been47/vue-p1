<template>
  <div class="content__box">
    <button @click.prevent="postGo()">전송</button>
    <p>data</p>
    <input type="text" v-model="data1">
    <input type="text" v-model="data2">
    <input type="text" v-model="data3">
  </div>
</template>

<script>
import { postSample } from '../../api/content.js'

export default {
  name: 'Mdata',
  data () {
    return {
      mov: 'aaa',
      data1: '',
      data2: true,
      data3: 0
    }
  },
  methods: {
    sendInput () {
      console.log(this.mov)
    },
    postGo () {
      const vm = this
      postSample(this.data1, this.data2, this.data3).then(res => {
        console.log(res.data)
        console.log(vm)
      }, err => {
        console.log(err)
      })
    }
  },
  computed: {
  },
  created () {
  }
}
</script>
