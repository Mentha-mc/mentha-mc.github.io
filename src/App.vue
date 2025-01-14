<script setup lang="ts">
import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="container">
    <div class="content-wrapper glass">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
}

.content-wrapper {
  padding: 2rem;
  margin-top: 2rem;
}
</style>