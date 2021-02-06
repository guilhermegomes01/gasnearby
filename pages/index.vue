<template>
  <Auth :type="'signIn'" />
</template>
<script>
  export default {
    components: {
      Auth: () => import ("@/components/Auth.vue")
    }
  }
</script>
