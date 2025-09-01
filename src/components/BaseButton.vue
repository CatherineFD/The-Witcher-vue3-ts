<script setup lang="ts">
const props = defineProps<{
  title?: string
}>();
</script>

<template>
  <button class="button-red">
    <slot>
      <span v-html="props.title" />
    </slot>
  </button>
</template>

<style scoped lang="scss">
.button-red {
  font-size: rem(16px);
  line-height: rem(24px);
  text-align: center;
  cursor: pointer;
  transition: all .2s ease;
  background-color: #EC3F3F;
  padding: rem(16px) rem(42px);
  letter-spacing: 0.5px;

  &:hover {
    background-color: #FF1E1E;
    box-shadow: 0 2px 24px 0 #FF1E1E80;
  }
}
</style>