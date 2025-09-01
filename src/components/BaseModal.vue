<script setup lang="ts">
import { useHead } from '@vueuse/head';
const props = defineProps<{
  title?: string;
}>();

const model = defineModel({ type: Boolean, default: false });

useHead(() => ({
  bodyAttrs: {
    style: model.value ? 'overflow: hidden;' : ''
  }
}));

const closeModal = (): void => {
  model.value = false;
};
</script>

<template>
  <Transition name="fade">
    <div
      v-show="model"
      class="modal-container"
      @click="closeModal"
    >
      <div
        class="modal"
        @click.stop
      >
        <div
          class="modal__close"
          @click="closeModal"
        >
          <img
            class="u-img"
            src="/static/img/icon-close.svg"
            alt="close"
          >
        </div>

        <h2 class="modal__title">
          {{ props.title }}
        </h2>

        <slot />
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-container {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #00000066;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  z-index: 9999;

  @include tablet {
    align-items: flex-start;
    padding-top: rem(79px);
  }

  @include mobile {
    padding-top: 0;
    justify-content: flex-start;
  }
}

.modal {
  position: relative;
  background-color: #ffffff;
  width: rem(1080px);
  padding: rem(56px) rem(80px);

  @include tablet {
    padding: rem(48px) rem(40px);
    width: rem(720px);
  }

  @include mobile {
    padding: rem(24px) rem(16px);
  }

  &__close {
    position: absolute;
    top: rem(32px);
    right: rem(32px);
    display: flex;
    cursor: pointer;

    @include mobile {
      top: rem(24px);
      right: rem(16px);
    }
  }

  &__title {
    font-size: rem(40px);
    line-height: rem(48px);
    font-weight: 600;
    color: #000000;
    margin-bottom: rem(32px);
    letter-spacing: -1.5px;

    @include tablet {
      font-size: rem(32px);
      line-height: rem(40px);
    }

    @include mobile {
      font-size: rem(24px);
      line-height: rem(32px);
      margin-bottom: rem(24px);
    }
  }
}
</style>