<script setup lang="ts">
import FormSubscription from "@/components/FormSubscription.vue";
import BaseButtonLink from "@/components/BaseButtonLink.vue";
import {ref} from 'vue';
import {FormData} from "@/types/BaseFormType.js";

const isSendForm = ref<boolean>(false);

const sendForm = (data: FormData): void => {
  console.log(data);
  isSendForm.value = true;
};
</script>

<template>
  <section
    id="leave-request"
    class="leave-request u-block-container"
  >
    <h1
      v-if="!isSendForm"
      class="leave-request__title"
    >
      Оставьте заявку
    </h1>
    <div class="leave-request__container">
      <FormSubscription
        v-if="!isSendForm"
        class="leave-request__form"
        @send-form="sendForm"
      />
      <div
        v-else
        class="leave-request__text-form-send"
      >
        <h1 class="leave-request__title">
          Заявка отправлена!
        </h1>
        <p class="leave-request__text">
          Мы&nbsp;получили вашу заявку. Наши специалисты свяжутся с&nbsp;вами в&nbsp;ближайшее время, чтобы уточнить все детали заказа.
        </p>
        <BaseButtonLink
          :title="'Вернуться на главную'"
        />
      </div>

      <div class="organizational-info">
        <div class="organizational-info__container">
          <p class="organizational-info__title">
            Наша горячая линия
          </p>
          <p class="organizational-info__text">
            8 800 38 23 112
          </p>
        </div>

        <div class="organizational-info__container">
          <p class="organizational-info__title">
            Главный офис
          </p>
          <p class="organizational-info__text">
            г. Москва, Садовническая ул., 80
          </p>
        </div>

        <div class="organizational-info__container">
          <p class="organizational-info__title">
            Часы работы
          </p>
          <p class="organizational-info__text">
            Пн-Пт с&nbsp;10:00 до&nbsp;22:00
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.leave-request {
  padding-top: rem(44px);
  padding-bottom: rem(88px);
  background-color: #181818;
  height: 100%;
  min-height: 83vh;

  @include mobile {
    padding-bottom: 0;
  }

  &__container {
    display: flex;
    justify-content: space-between;

    @include mobile {
      flex-direction: column;
    }
  }

  &__title {
    margin-bottom: rem(48px);
    font-size: rem(56px);
    line-height: rem(56px);
    font-weight: 600;
    max-width: rem(450px);

    @include tablet {
      margin-bottom: rem(36px);
      font-size: rem(40px);
      line-height: rem(40px);
      max-width: rem(360px);
    }

    @include mobile {
      margin-bottom: rem(24px);
      font-size: rem(32px);
      line-height: rem(38px);
    }
  }

  &__form {
    margin-right: rem(126px);

    @include tablet {
      margin-right: rem(53px);
    }

    @include mobile {
      width: 100%;
      margin-bottom: rem(40px);
    }
  }

  &__text {
    margin-bottom: rem(40px);

    @include mobile {
      width: 100%;
      margin-bottom: rem(40px);
    }
  }

  &__text-form-send {
    font-size: rem(24px);
    line-height: rem(32px);
    font-weight: 300;
    max-width: rem(486px);

    @include tablet {
      font-size: rem(16px);
      line-height: rem(20px);
      max-width: rem(320px);
    }

    @include mobile {
      margin-bottom: rem(52px);
    }
  }
}

.organizational-info {
  &__container {
    margin-bottom: rem(32px);
  }

  &__title {
    font-size: rem(16px);
    line-height: rem(20px);
    font-weight: 300;
  }

  &__text {
    font-size: rem(40px);
    line-height: rem(48px);
    font-weight: 500;

    @include tablet {
      font-size: rem(32px);
      line-height: rem(40px);
    }

    @include mobile {
      font-size: rem(28px);
      line-height: rem(36px);
    }
  }
}
</style>