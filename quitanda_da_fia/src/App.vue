<template>
  <div>
    <Header/>
    <Banner/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';

export default {
  name: "App",
  data() {
    return {

    }
  },
  components: {
    Header,
    Footer,
    Banner,
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
