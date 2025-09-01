<script setup lang="ts">
import IconInst from "@/components/SVG/IconInst.vue";
import IconFaceBook from "@/components/SVG/IconFaceBook.vue";
import IconVk from "@/components/SVG/IconVk.vue";

</script>

<template>
  <div class="social-networks">
    <a
      href="#"
      class="social-networks__container"
    >
      <IconInst class="social-networks__icon" />
    </a>
    <a
      href="#"
      class="social-networks__container"
    >
      <IconFaceBook class="social-networks__icon" />
    </a>

    <a
      href="#"
      class="social-networks__container"
    >
      <IconVk class="social-networks__icon u-no-margin" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.social-networks {
  display: flex;
  align-items: center;

  @include mobile {
    align-items: flex-start;
    padding-top: rem(6px);
  }

  &__container {
    display: flex;
  }

  &__icon {
    border-radius: 50%;
    transition: all 0.3s ease;
    margin-right: rem(20px);
    width: rem(32px);
    height: rem(32px);

    @include tablet {
      margin-right: rem(16px);
    }

    @include mobile {
      margin-right: rem(12px);
    }
  }
}
</style>