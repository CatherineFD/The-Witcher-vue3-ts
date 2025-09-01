<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  title: string,
  isRedBackground?: boolean,
  path?: string
}>(), {isRedBackground: true, path: ''});

const buttonClassBackground = computed(() => [
  props.isRedBackground ? 'custom-button_red-background' : 'custom-button_translucent-background',
]);

</script>

<template>
  <router-link
    class="custom-button"
    :class="buttonClassBackground"
    :to="{path: `/${path}`}"
  >
    {{ title }}
  </router-link>
</template>

<style scoped lang="scss">
.custom-button {
  display: inline-block;
  font-size: rem(16px);
  line-height: rem(20px);
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease;

  @include mobile {
    padding: rem(12px) rem(33px);
  }

  &_red-background {
    background-color: #EC3F3F;
    padding: rem(16px) rem(42px);
    letter-spacing: 0.5px;

    @include tablet {
      padding-right: rem(40px);
      padding-left: rem(40px);
    }
  }

  &_translucent-background {
    background-color: #EC3F3F26;
    border: 1px solid #EC3F3FCC;
    padding: rem(12px) rem(32px);
    letter-spacing: 0.6px;

    @include mobile {
      padding-left: rem(25px);
      padding-right: rem(25px);
    }
  }

  &:hover {
    background-color: #FF1E1E;
    box-shadow: 0 2px 24px 0 #FF1E1E80;
  }
}
</style>