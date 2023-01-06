<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ContactmeCompo></ContactmeCompo>
    <FooterCompo></FooterCompo>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterCompo from '@/components/FooterCompo.vue'
import ContactmeCompo from '@/components/ContactmeCompo.vue'
export default {
  name: 'HomeView',
  components: {
    FooterCompo,
    ContactmeCompo
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #000;
}
</style>