<script setup lang="ts">
import BaseSwiper from "@/components/BaseSwiper.vue";
import BaseButtonLink from "@/components/BaseButtonLink.vue";
import FootageFilmingImages from "@/components/FootageFilmingImages.vue";
import StoreMap from "@/components/StoreMap.vue";
import {SliderInfoType} from "@/types/SliderInfoType.ts";
import {reactive} from "vue";

const slidersInfo: SliderInfoType[] = reactive([
  {
    img: '/slide-card-img.png',
    nameActor: 'Генри Кавилл',
    nameCharacter: 'Геральт',
    description: 'Один из&nbsp;центральных персонажей сериала, лучший друг и&nbsp;неизменный спутник Геральта, трубадур и&nbsp;бабник'
  },
  {
    img: '/slide-card-lutik.png',
    nameActor: 'Джои Бэти',
    nameCharacter: 'Лютик',
    description: 'Один из&nbsp;центральных персонажей сериала, лучший друг и&nbsp;неизменный спутник Геральта, трубадур и&nbsp;бабник'
  },
  {
    img: '/slide-card-yennefer.png',
    nameActor: 'Аня Чалотра',
    nameCharacter: 'Йеннифэр',
    description: 'Один из&nbsp;центральных персонажей сериала, лучший друг и&nbsp;неизменный спутник Геральта, трубадур и&nbsp;бабник'
  },
  {
    img: '/slide-card-сiri.png',
    nameActor: 'Фрейя Аллан',
    nameCharacter: 'Цири',
    description: 'Один из&nbsp;центральных персонажей сериала, лучший друг и&nbsp;неизменный спутник Геральта, трубадур и&nbsp;бабник'
  },
  {
    img: '/slide-card-img.png',
    nameActor: 'Генри Кавилл',
    nameCharacter: 'Геральт',
    description: 'Один из&nbsp;центральных персонажей сериала, лучший друг и&nbsp;неизменный спутник Геральта, трубадур и&nbsp;бабник'
  },
  {
    img: '/slide-card-lutik.png',
    nameActor: 'Джои Бэти',
    nameCharacter: 'Лютик',
    description: 'Один из&nbsp;центральных персонажей сериала, лучший друг и&nbsp;неизменный спутник Геральта, трубадур и&nbsp;бабник'
  },
  {
    img: '/slide-card-yennefer.png',
    nameActor: 'Аня Чалотра',
    nameCharacter: 'Йеннифэр',
    description: 'Один из&nbsp;центральных персонажей сериала, лучший друг и&nbsp;неизменный спутник Геральта, трубадур и&nbsp;бабник'
  },
  {
    img: '/slide-card-сiri.png',
    nameActor: 'Фрейя Аллан',
    nameCharacter: 'Цири',
    description: 'Один из&nbsp;центральных персонажей сериала, лучший друг и&nbsp;неизменный спутник Геральта, трубадур и&nbsp;бабник'
  },
]);

const footageFilmingImages: string[] = reactive([
  'footage-filming-img-1.png',
  'footage-filming-img-2.png',
  'footage-filming-img-3.png',
  'footage-filming-img-4.png',
  'footage-filming-img-5.png',
  'footage-filming-img-1.png',
  'footage-filming-img-2.png',
  'footage-filming-img-3.png',
  'footage-filming-img-4.png',
  'footage-filming-img-5.png',
  'footage-filming-img-3.png',
  'footage-filming-img-4.png',
  'footage-filming-img-5.png',
]);
</script>

<template>
  <main class="main-page">

    <section
      id="title-block"
      class="title-block "
    >
      <div class="title-block__img" />
      <div class="title-block__container">
        <div class="title-block__text">
          <h1 class="title-block__title">
            Сериал Ведьмак
          </h1>

          <p class="title-block__subtitle">
            Геральт из&nbsp;Ривии, наемный охотник за&nbsp;чудовищами, перенесший
            мутации, идет навстречу своей судьбе в&nbsp;неспокойном мире, где люди часто оказываются куда коварнее
            чудовищ.
          </p>

          <div class="title-block__btn-container">
            <BaseButtonLink
              :title="'Ответы на вопросы'"
              :path="'answers'"
            />
          </div>
        </div>
      </div>
    </section>

    <BaseSwiper :slides-info="slidersInfo" />

    <section
      id="footage-filming"
      class="footage-filming u-block-container"
    >
      <h2 class="footage-filming__title u-title">
        Кадры со съемок
      </h2>

      <FootageFilmingImages :images-path="footageFilmingImages" />
    </section>

    <section
      id="store-map"
      class="store-map"
    >
      <h2 class="u-title store-map__title u-block-container">
        Магазины мерча ведьмака
      </h2>

      <StoreMap />
    </section>
  </main>
</template>

<style scoped lang="scss">
.main-page {
  overflow: hidden;
}

.title-block {
  position: relative;
  background: linear-gradient(270deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 51.53%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: rem(440px);
  max-width: rem(1440px);
  margin-left: auto;
  margin-right: auto;
  padding-left: rem(120px);
  padding-right: rem(120px);

  z-index: 2;

  @include tablet {
    min-height: rem(360px);
  }

  @include mobile {
    min-height: rem(353px);
  }

  &__img {
    position: absolute;
    top: -47%;
    left: 47%;
    width: 110%;
    height: 150%;
    background-image: url('/static/img/title-block-img.png');
    background-repeat: no-repeat;
    background-size: 150%;
    z-index: 1;
    transform: translateX(-50%) scaleX(-1);
    opacity: 80%;
    background-position-x: left;

    @include tablet {
      top: -25%;
      left: 54%;
    }

    @include mobile {
      top: -28%;
      left: 70%;
      width: 170%;
      background-size: 200%;
    }
  }

  &__container {
    max-width: rem(1200px);
    width: 100%;
    margin: rem(104px) auto rem(100px);

    @include tablet {
      max-width: none;
      margin-top: rem(64px);
      margin-bottom: rem(76px);
      padding-right: rem(67px);
      padding-left: rem(67px);
    }

    @include mobile {
      padding-right: rem(16px);
      padding-left: rem(16px);
    }
  }


  &__text {
    position: relative;
    max-width: rem(450px);
    display: flex;
    flex-direction: column;
    text-align: left;
    z-index: 3;

    @include tablet {
      max-width: rem(330px);
    }

    @include mobile {
      max-width: rem(250px);
    }
  }

  &__title {
    font-size: rem(56px);
    line-height: rem(56px);
    font-weight: 500;
    margin-bottom: rem(24px);
    letter-spacing: 1.9px;

    @include tablet {
      font-size: rem(40px);
      line-height: rem(30px);
      margin-bottom: rem(18px);
    }

    @include mobile {
      font-size: rem(32px);
      line-height: rem(38px);
      margin-bottom: rem(6px);
    }
  }

  &__subtitle {
    font-size: rem(16px);
    font-weight: 200;
    line-height: rem(20px);
    margin-bottom: rem(40px);
    letter-spacing: 0.25px;

    @include tablet {
      margin-bottom: rem(32px);
    }
  }

  &__btn-container {
    display: flex;
  }
}


.footage-filming {
  padding-top: rem(72px);

  @include tablet {
    padding-top: rem(64px);
  }

  &__title {
    margin-bottom: rem(40px);

    @include tablet {
      font-size: rem(32px);
      line-height: rem(40px);
      margin-bottom: rem(24px);
    }

    @include mobile {
      font-size: rem(28px);
      line-height: rem(36px);
    }
  }
}

.store-map {
  padding-top: rem(72px);
  padding-bottom: rem(96px);
  max-width: rem(1200px);
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @include tablet {
    padding-top: rem(64px);
    max-width: rem(770px);
    padding-bottom: 0;
  }

  @include mobile {
    max-width: rem(360px);
    padding-bottom: 0;
    padding-top: rem(48px);
  }

  &__title {
    margin-bottom: rem(40px);
    letter-spacing: -1.5px;

    @include tablet {
      margin-bottom: rem(27px);
      line-height: 0.32rem;
    }
  }
}
</style>