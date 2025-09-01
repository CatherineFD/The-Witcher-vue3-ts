<script setup lang="ts">
import {SliderInfoType} from "@/types/SliderInfoType.js";
import {computed, ref} from "vue";

defineOptions({
  name: "BaseSwiperCard",
});

const props = defineProps<{ slide: SliderInfoType }>();

const isHovered = ref<boolean>(false);
const pathImg = computed(() => {
  return `/static/img/photo-actor/${props.slide.img}`;
});
</script>

<template>
  <div
    class="slide-card"
    :style="{'background-image': `url(${pathImg})`}"
  >
    <div
      class="slide-card__container"
      :class="{'slide-card__container-hovered': isHovered}"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="slide-card__names">
        <p class="slide-card__names-character">
          {{ slide.nameCharacter }}
        </p>
        <p class="slide-card__names-actor">
          {{ slide.nameActor }}
        </p>
      </div>

      <Transition name="slide-fade">
        <div
          v-if="isHovered"
          class="slide-card__description"
          v-html="slide.description"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-card {
  width: rem(282px);
  height: rem(400px);
  background-size: cover;
  background-position: left center;
  margin-right: rem(24px);
  cursor: pointer;

  @include tablet {
    width: rem(256px);
    height: rem(360px);
  }

  @include mobile {
    width: rem(216px);
    height: rem(280px);
  }

  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: rem(24px) rem(34px) rem(32px) rem(24px);
    transition: all 0.3s ease;

    @include tablet {
      padding: rem(16px);
    }
  }

  &__names {
    font-size: rem(24px);
    line-height: rem(32px);
    transform: translateY(rem(280px));
    text-align: left;
    transition: all 0.3s ease;

    @include tablet {
      font-size: rem(20pxpx);
      line-height: rem(28px);
      transform: translateY(rem(260px));
    }

    @include mobile {
      font-size: rem(16px);
      line-height: rem(24px);
      transform: translateY(rem(180px));
    }
  }

  &__names-character {
    font-weight: 500;
    margin-bottom: rem(4px);
  }

  &__names-actor {
    font-weight: 200;
  }

  &__description {
    text-align: left;
    font-size: rem(16px);
    line-height: rem(20px);
    font-weight: 200;
  }
}


.slide-card__container-hovered {
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%);

  .slide-card__names {
    transform: translateY(0);
  }
}
</style>