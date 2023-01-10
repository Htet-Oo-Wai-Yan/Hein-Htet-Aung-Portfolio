<template>
  <div class="home">
    <ServiceCompo></ServiceCompo>
    <PartnerCompo></PartnerCompo>
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
import PartnerCompo from '@/components/PartnerCompo.vue'
import ServiceCompo from '@/components/ServiceCompo.vue'

export default {
  name: 'HomeView',
  components: {
    FooterCompo,
    ContactmeCompo,
    TestimonialCompo,
    PartnerCompo,
    ServiceCompo
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #000;
}
</style>