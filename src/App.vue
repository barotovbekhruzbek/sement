<template>
<div>
  
    <Navbar />
    <navbar-bottom/>
  <router-view />
</div>
</template>

<script>
import NavbarBottom from './components/Navbar-bottom.vue';
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
    NavbarBottom
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>