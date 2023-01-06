<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FooterCompo></FooterCompo>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterCompo from '@/components/FooterCompo.vue'
export default {
  name: 'HomeView',
  components: {
    FooterCompo
  }
}
</script>

<style lang="scss" scoped>
template{
  background-color: #333;
}
</style>