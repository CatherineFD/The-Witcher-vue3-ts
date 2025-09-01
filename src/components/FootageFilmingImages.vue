<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps<{
  imagesPath: Array<string>
}>();

const isShowAllImages= ref<boolean>(false);
const isLoading = ref<boolean>(false);

const firstFiveImages = computed(() => {
  return isShowAllImages.value ? props.imagesPath: props.imagesPath.slice(0, 5);
});

const showAllImages = (): void => {
  if (isLoading.value) return;
  isLoading.value = true;
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  }).then(() => {
    isShowAllImages.value = !isShowAllImages.value;
    isLoading.value = false;
  });
};

</script>

<template>
  <div class="footage">
    <div class="footage__container">
      <TransitionGroup name="list">
        <div
          v-for="(image, index) in firstFiveImages"
          :key="image"
          class="footage__card"
        >
          <img
            class="u-img"
            :src="`public/static/img/footage-filming/${image}`"
            :alt="`footage${index}`"
          >
        </div>
      </TransitionGroup>
    </div>

    <button
      :disabled="isLoading"
      class="footage__btn"
      @click="showAllImages"
    >
      Показать еще
    </button>
  </div>
</template>

<style scoped lang="scss">

.footage {

  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: rem(24px);

    @include mobile {
      display: flex;
      flex-direction: column;
      gap: rem(16px);
    }
  }

  &__card {
    overflow: hidden;
    grid-column: span 1;
    grid-row: span 1;
    aspect-ratio: 1 / 1;

    img {
      object-fit: cover;
    }

    &:first-child {
      grid-column: span 2;
      grid-row: span 2;

      @include tablet {
        width: rem(312px);
        height: rem(314px);
      }

      @include mobile {
        max-height: rem(212px);
        height: auto;
        width: auto;
      }
    }
  }

  &__btn {
    margin-top: rem(32px);
    padding-top: rem(16px);
    padding-bottom: rem(16px);
    width: 100%;
    background-color: #EC3F3F26;
    border: 1px solid #EC3F3FCC;
    font-size: rem(16px);
    line-height: rem(24px);
    font-weight: 600;
    transition: all .2s ease;

    &:hover {
      background-color: #FF1E1E;
      box-shadow: 0 2px 24px 0 #FF1E1E80;
    }

    &:disabled {
      cursor: default;
    }

    @include tablet {
      margin-top: rem(24px);
    }
  }
}
</style>