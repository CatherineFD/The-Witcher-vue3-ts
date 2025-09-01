<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Scrollbar } from 'swiper/modules';
import type { SwiperModule } from 'swiper/types';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import BaseSwiperCard from "@/components/BaseSwiperCard.vue";
import {SliderInfoType} from "@/types/SliderInfoType.ts";

const props = withDefaults(
    defineProps<{
      slidesInfo: SliderInfoType[];
    }>(),
    {
      slidesInfo: () => [] as SliderInfoType[],
    }
);

const modules: SwiperModule[] = [Navigation,  Scrollbar];
</script>

<template>
  <section
    id="cast-slider"
    class="u-block-container cast-slider "
  >
    <h2 class="cast-slider__title u-title">
      Актерский состав
    </h2>


    <swiper
      :modules="modules"
      :slides-per-view="4"
      :space-between="10"
      navigation
      :scrollbar="{ draggable: true }"
      :breakpoints="{
        0: {slidesPerView: 1.4, spaceBetween: 5 },
        361: { slidesPerView: 2.3, spaceBetween: 10},
        769: { slidesPerView: 4, spaceBetween: 15 },
      }"
    >
      <swiper-slide
        v-for="slide in props.slidesInfo"
        :key="slide['nameActor']"
      >
        <BaseSwiperCard
          :slide="slide"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped lang="scss">

.swiper {
  overflow: visible;
}

.cast-slider {
  --swiper-navigation-color: #EC3F3F;
  --swiper-navigation-size: 32px !important;
  --swiper-scrollbar-drag-bg-color: #EC3F3F;
  --swiper-scrollbar-bg-color: #FFFFFF4D;
  --swiper-scrollbar-top: -8%;
  --swiper-scrollbar-sides-offset: 0%;
  --swiper-navigation-sides-offset: 0;

  overflow: visible;
  margin-top: rem(72px);
  margin-left: rem(120px);
  position: relative;

  &__title {
    margin-bottom: rem(56px);

    @include tablet {
      margin-bottom: rem(48px);
    }

    @include mobile {
      margin-bottom: rem(40px);
    }
  }

  :deep .swiper-button-next,
  :deep .swiper-button-prev {
    width: rem(32px);
    height: rem(32px);
    top: rem(-78px);



    @include tablet {
      top: rem(-70px);
    }

    @include mobile {
      top: rem(-60px);
    }
  }


  :deep .swiper-button-prev {
    left: 93%;

    @include tablet {
      left: 86%;
    }

    @include mobile {
      left: 80%;
    }
  }

  :deep .swiper-scrollbar-drag{
    cursor: pointer;
  }

  @include tablet {
    --swiper-scrollbar-top: -7%;

    margin-top: rem(64px);
  }

  @include mobile {
    --swiper-scrollbar-top: -10%;
    --swiper-navigation-size: 28px !important;

    margin-top: rem(16px);
  }
}
</style>