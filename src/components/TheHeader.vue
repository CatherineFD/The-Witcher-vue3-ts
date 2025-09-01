<script setup lang="ts">
import BaseButtonLink from "@/components/BaseButtonLink.vue";
import BaseLogo from "@/components/BaseLogo.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isForm = computed(() => {
  return route.name === "PageRegistration";
});
</script>

<template>
  <header 
    class="header"
    :class="{ 'form-background': isForm }"
  >
    <div class="header__container u-block-container">
      <BaseLogo />

      <BaseButtonLink
        v-if="!isForm"
        :title="'Подключить подписку'"
        :is-red-background="false"
        :path="'registration'"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: #000000;
  padding-top: rem(18px);
  padding-bottom: rem(18px);
  display: flex;

  @include tablet {
    padding-top: rem(13px);
    padding-bottom: rem(15px);
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  &__btn-subscription {
    font-family: "Futura PT", sans-serif;
    border: 1px solid #ec3f3fcc;
    background-color: #ec3f3f26;
    font-size: rem(16px);
    line-height: rem(24px);
    padding: rem(12px) rem(32px);

    @include mobile {
      padding-left: rem(25px);
      padding-right: rem(25px);
    }
  }
}

.form-background {
  background-color: #181818;
}
</style>