<script setup lang="ts">

</script>

<template>
  <router-link
    class="custom-logo"
    to="/"
  >
    <img
      class="u-img"
      src="/static/img/logo.png"
      alt="logo"
    >
  </router-link>
</template>

<style scoped lang="scss">
.custom-logo {
  display: flex;
  width: rem(130px);
  height: rem(44px);

  @include mobile {
    width: rem(106px);
    height: rem(36px);
  }
}
</style>