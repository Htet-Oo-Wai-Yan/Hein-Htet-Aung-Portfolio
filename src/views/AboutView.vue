<template>
  <div class="about">
    <ContactEmailCompo></ContactEmailCompo>
  </div>
</template>


<script>
// @ is an alias to /src
import ContactEmailCompo from '@/components/ContactEmailCompo.vue'

export default {
  components: {
    ContactEmailCompo
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #000;
}
</style>
