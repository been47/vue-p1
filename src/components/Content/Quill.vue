<template>
  <div class="content__box">
    <quill-editor ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>
  </div>
</template>

<script>
// require styles
import 'quill/dist/quill.snow.css'

import {quillEditor} from 'vue-quill-editor'

export default {
  name: 'Quill',
  data () {
    return {
      editorOption: {
        // some quill options
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorBlur (quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus (quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady (quill) {
      console.log('editor ready!', quill)
    },
    setMainMenu () {
      const routeName = this.$router.currentRoute.path.split('/')[1]
      this.$root.$emit('mainMenu', routeName)
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  created () {
    this.setMainMenu()
  },
  mounted () {
    console.log('this is current quill instance object', this.editor)
  }
}
</script>
