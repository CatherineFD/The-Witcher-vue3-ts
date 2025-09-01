<script setup lang="ts">
import { AnswerType } from "@/types/AnswerType.ts";
import BaseAccordion from "@/components/BaseAccordion.vue";

const contentAnswers: AnswerType[] = [
  {
    id: 1,
    question: "Могу ли я попасть на Curiosity, не имея опыта работы?",
    answer:
      "Для участия в лидерской программе не требуется наличие профессионального опыта.",
    answerListTitle: "Обязательными условиями участия являются:",
    answerList: [
      "статус выпускника 2020-2024 года обучения (бакалавриат, магистратура, аспирантура) или статус студента 2025-2026 года выпуска (магистратура и аспирантура)",
      "владение английским на уровне Intermediate и выше",
      "готовность к переезду по России при поддержке компании",
    ],
  },
  {
    id: 2,
    question: "Поддержит ли компания мой переезд в город прохождения программы?",
    answer:
      "Безусловно! Мы поддерживаем процесс релокации участников в город прохождения программы",
  },
  {
    id: 3,
    question: "Как понять, какой у меня уровень английского?",
    answer: "Тест поможет определить твой уровень владения английским языком.",
  },
  {
    id: 4,
    question: "Предусмотрен ли отбор для участников из других регионов?",
    answer: "Сейчас весь процесс отбора проводится в онлайн-формате. Финальные этапы отбора проходят на платформе Microsoft Teams.",
  },
  {
    id: 5,
    question: "Как проходит финальный этап отбора — ассессмент-центр?",
    answer: "Прохождение ассессмент-центра занимает один день. Отбор проводится на платформе Microsoft Teams.",
    answerListTitle: "Ассессмент состоит из нескольких частей:",
    answerList: [
      "Презентация (подготовленная вами заранее в рамках предыдущего этапа);",
      "Решение группового кейса;",
      "Интервью с ассессорами."
    ],
  },
  {
    id: 6,
    question: "Если я не прошел отбор, когда смогу участвовать вновь?",
    answer: "Вновь попробовать себя в отборе можно будет в следующем году",
  },
];

</script>

<template>
  <section
    id="answers"
    class="accordion-answers"
  >
    <h1 class="accordion-answers__title">
      Ответы на часто задаваемые вопросы
    </h1>

    <div class="container-answer">
      <div
        v-for="item in contentAnswers"
        :key="item.id"
      >
        <BaseAccordion :content-answer="item" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

.accordion-answers {
  background-color: #00006f;
  min-height: 90vh;
  padding: rem(80px) rem(140px) rem(50px);
  border-radius: rem(60px);

  @include tablet {
    padding: rem(45px) rem(75px) rem(26px);
    border-radius: rem(40px);
  }

  @include mobile {
    padding: rem(40px) rem(16px) rem(20px);
    border-radius: rem(20px);
  }

  &__title {
    font-size: rem(54px);
    margin-bottom: rem(48px);
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1;
    text-align: center;

    @include tablet {
      font-size: rem(30px);
      margin-bottom: rem(25px);
    }

    @include mobile {
      font-size: rem(32px);
      margin-bottom: rem(24px);
      text-align: left;
    }
  }
}

.container-answer {
  display: flex;
  flex-direction: column;
  cursor: default;
}
</style>
