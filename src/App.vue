<template>
  <div>
    <Header></Header>
    <router-view/>
   </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: { Header }
}
</script>
<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
}
</style>
