<template>
  <div class="content__box">
    <p>ㅁㅁㅁ</p>
    <div id="app">
      <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
    </div>
  </div>
</template>

<script>
// require styles
import {VueEditor} from 'vue2-quill-editor'

export default {
  name: 'Quill',
  data () {
    return {
      content: '<h1>Html For Editor</h1>',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['image', 'code-block']
      ]
    }
  },
  components: {
    VueEditor
  },
  methods: {
    setMainMenu () {
      const routeName = this.$router.currentRoute.path.split('/')[1]
      this.$root.$emit('mainMenu', routeName)
    }
  },
  computed: {
  },
  created () {
    this.setMainMenu()
  }
}
</script>
