<template>
  <div class="content__box">
    <p>ㅁㅁㅁ</p>
    <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
  </div>
</template>

<script>
// require styles
import {VueEditor} from 'vue2-quill-editor'

export default {
  name: 'Quill',
  data () {
    return {
      content: '',
      customToolbar: [
        ['bold', 'italic', 'underline', 'strike', {'list': 'ordered'}, {'list': 'bullet'}, 'image', 'code-block',
          'video', 'background', 'bold', 'font', 'code', 'link', 'align', 'formula']
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
  computed: {},
  created () {
    this.setMainMenu()
  }
}
</script>
