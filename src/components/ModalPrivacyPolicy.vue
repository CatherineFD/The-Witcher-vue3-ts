<script setup lang="ts">
import BaseModal from "@/components/BaseModal.vue";

const modal = defineModel({type: Boolean, default: false});

</script>

<template>
  <BaseModal
    v-model="modal"
    :title="'Обработка данных'"
  >
    <section
      id="modal-body"
      class="modal-body"
    >
      <h3 class="modal-body__text-title">
        1. Что регулирует настоящая политика конфиденциальности
      </h3>
      <p class="modal-body__text-subtitle_between">
        Настоящая политика конфиденциальности (далее&nbsp;&mdash; Политика)
        действует в&nbsp;отношении всей информации, включая персональные
        данные в&nbsp;понимании применимого законодательства
        (далее&nbsp;&mdash; &laquo;Персональная информация&raquo;), которую
        ООО &laquo;Гросс маркет&raquo; и/или его аффилированные лица,
        в&nbsp;том числе входящие в&nbsp;одну группу с&nbsp;ООО &laquo;Гросс
        маркет&raquo; (далее&nbsp;&mdash; &laquo;Гросс маркет&raquo;), могут
        получить&nbsp;о&nbsp;Вас в&nbsp;процессе использования Вами любых сайтов,
        программ, продуктов и/или сервисов Гросс маркет (далее вместе
        &laquo;Сервисы&raquo;), информацию о&nbsp;которых Гросс маркет может
        также получать Персональную информацию от&nbsp;своих партнеров
        (далее&nbsp;&mdash; &laquo;Партнеры&raquo;), сайты, программы,
        продукты или сервисы которых&nbsp;Вы используете (например,
        от&nbsp;рекламодателей Гросс маркет или службами такси). В&nbsp;таких
        случаях передача Персональной информации возможна только
        в&nbsp;случаях, установленных применимым законодательством,
        и&nbsp;осуществляется на&nbsp;основании специальных договоров между
        Гросс маркет и&nbsp;каждым из&nbsp;Партнеров.
      </p>
      <p class="modal-body__text-subtitle modal-body__text-subtitle_second">
        Пожалуйста, обратите внимание, что использование любого из&nbsp;Сайтов
        и/или Сервисов может регулироваться дополнительными условиями, которые
        могут вносить в&nbsp;настоящую Политику изменения и/или дополнения,
        и/или иметь специальные условия в&nbsp;отношении персональной
        информации, размещенные в&nbsp;соответствующих разделах документов для
        таких Сайтов /или Сервисов.
      </p>

      <h3 class="modal-body__text-title">
        2. Кто обрабатывает информацию
      </h3>
      <p class="modal-body__text-subtitle modal-body__text-subtitle_third">
        Для обеспечения использования Вами Сайтов и&nbsp;Сервисов Ваша
        Персональная информация собирается и&nbsp;используется Яндексом,
        в&nbsp;том числе включая общество с&nbsp;ограниченной ответственностью
        &laquo;Гросс маркет&raquo;, юридическое лицо, созданное
        по&nbsp;законодательству Российской Федерации
        и&nbsp;зарегистрированное по&nbsp;адресу: 123351, Россия, Москва, ул.
        Гроссова, д.&nbsp;12&nbsp;(ООО &laquo;Гросс маркет&raquo;), или его
        аффилированным лицом, предоставляющим соответствующий Сервис
        в&nbsp;иных юрисдикциях. С&nbsp;информацией о&nbsp;том, какое лицо
        предоставляет тот или иной Сервис, Вы&nbsp;можете ознакомиться
        в&nbsp;условиях использования соответствующего Сервиса.
      </p>

      <h3 class="modal-body__text-title">
        3. Какова цель данной Политики
      </h3>
      <p class="modal-body__text-subtitle">
        Защита Вашей Персональной информации и&nbsp;Вашей конфиденциальности
        чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами
        Сайтов и&nbsp;Сервисов Гросс маркет защищает и&nbsp;обрабатывает Вашу
        Персональную информацию в&nbsp;строгом соответствии с&nbsp;применимым
        законодательством.
      </p>
    </section>
  </BaseModal>
</template>

<style scoped lang="scss">

.modal-body{
  font-size: rem(16px);
  line-height: rem(20px);
  color: #000000;
  font-weight: 300;

  &__text-title {
    font-weight: 500;
    line-height: rem(24px);
    margin-bottom: rem(20px);
  }

  &__text-subtitle {
    @include mobile {
      font-size: rem(14px);
      margin-bottom: rem(24px);
    }

    &_between {
      margin-bottom: rem(20px);
    }

    &_second {
      margin-bottom: rem(64px);

      @include tablet {
        margin-bottom: rem(32px);
      }
    }

    &_third {
      margin-bottom: rem(52px);

      @include tablet {
        margin-bottom: rem(32px);
      }
    }
  }
}


</style>