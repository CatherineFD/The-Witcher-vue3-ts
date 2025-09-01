<script setup lang="ts">
import BaseLogo from "@/components/BaseLogo.vue";
import TheFooterIcons from "@/components/TheFooterIcons.vue";
import ModalPrivacyPolicy from "@/components/ModalPrivacyPolicy.vue";
import {ref} from "vue";

const isShowModal = ref<boolean>(false);

const changeShowModal = (): void => {
  isShowModal.value = !isShowModal.value;
};

</script>

<template>
  <footer class="footer">
    <div class="footer__container u-block-container">
      <BaseLogo class="footer__logo" />

      <div class="footer__data-processing-policy">
        <a
          @click="changeShowModal"
        >
          Политика обработки персональных данных
        </a>
      </div>

      <TheFooterIcons class="footer__icons" />
    </div>
  </footer>


  <ModalPrivacyPolicy v-model="isShowModal" />
</template>

<style scoped lang="scss">

.footer {
  background-color: #343338;
  padding-top: rem(42px);
  padding-bottom: rem(42px);

  @include mobile {
    padding-top: rem(28px);
    padding-bottom: rem(24px);
  }

  &__logo {
    @include mobile {
      order: 1;
      margin-bottom: rem(26px);
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
  }

  &__data-processing-policy {
    font-size: rem(14px);
    line-height: rem(20px);
    font-weight: 200;
    max-width: rem(180px);
    text-align: center;
    width: 100%;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include mobile {
      position: relative;
      transform:none;
      top: auto;
      left: auto;
      order:3;
      max-width: none;
      text-align: left;
    }
  }

  &__icons {

    @include mobile {
      order: 2;
    }
  }
}
</style>