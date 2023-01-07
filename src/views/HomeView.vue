<template>
  <div class="home">
    <TestimonialCompo></TestimonialCompo>
    <ContactmeCompo></ContactmeCompo>
    <FooterCompo></FooterCompo>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterCompo from '@/components/FooterCompo.vue'
import ContactmeCompo from '@/components/ContactmeCompo.vue'
import TestimonialCompo from '@/components/TestimonialCompo.vue'
export default {
  name: 'HomeView',
  components: {
    FooterCompo,
    ContactmeCompo,
    TestimonialCompo
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #000;
}
</style>