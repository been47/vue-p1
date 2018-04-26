<template>
  <div class="content__box">
    <div id="main">
      <nav :class="active" @click.prevent>
        <a href="#" class="home" @click="makeActive('home')">Home</a>
        <a href="#" class="projects" @click="makeActive('projects')">Projects</a>
        <a href="#" class="services" @click="makeActive('services')">Services</a>
        <a href="#" class="contact" @click="makeActive('contact')">Contact</a>
      </nav>
      <p>You chose <b>{{ active }}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  data () {
    return {
      active: 'home'
    }
  },
  methods: {
    makeActive (item) {
      this.active = item
    }
  }
}
</script>
