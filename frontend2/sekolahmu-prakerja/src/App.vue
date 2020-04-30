<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Footer
  }
}
</script>

<style>
#app {
  background-color: rgb(233, 233, 233);
}
</style>
