<script setup lang="ts">
import {ref} from "vue";
import {AnswerType} from "@/types/AnswerType.ts";

const props = defineProps<{
  contentAnswer: AnswerType
}>();
const isShowAnswer = ref<boolean>(false);

const showElement = (): void => {
  isShowAnswer.value = !isShowAnswer.value;
};

const onBeforeEnter = (el: HTMLElement): void => {
  el.style.height = "0";
  el.style.opacity = "0";
};

const onEnter = (el: HTMLElement, done: () => void): void => {
  el.style.transition = "height 0.2s ease, opacity 0.2s ease";
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";

  el.addEventListener(
      "transitionend",
      () => {
        el.style.height = "";
        done();
      },
      { once: true },
  );
};

const onLeave = (el: HTMLElement, done: () => void): void => {
  el.style.transition = "height 0.2s ease, opacity 0.2s ease";
  el.style.height = el.scrollHeight + "px";
  el.style.height = el.offsetHeight;

  el.style.height = "0";
  el.style.opacity = "0";

  el.addEventListener(
      "transitionend",
      () => {
        done();
      },
      { once: true },
  );
};
</script>

<template>
  <div
    class="block-answer"
    @click="showElement()"
  >
    <div class="block-answer__question">
      <span>{{ contentAnswer.question }}</span>

      <span
        class="block-answer__plus"
        :class="{'expanded': isShowAnswer}"
      />
    </div>

    <Transition
      name="expand"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div
        v-if="isShowAnswer"
        class="block-answer__info"
      >
        <span class="block-answer__answer">{{ contentAnswer.answer }}</span>

        <span
          v-if="contentAnswer?.answerListTitle"
          class="block-answer__list-title"
        >
          {{ contentAnswer?.answerListTitle }}
        </span>

        <ul class="block-answer__list">
          <li
            v-for="elem in contentAnswer?.answerList"
            :key="elem"
          >
            {{ elem }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.block-answer {
  background-color: #fff;
  color: #0000a0;
  margin-bottom: rem(12px);
  font-size: rem(18px);
  padding: rem(32px);
  border-radius: rem(25px);

  @include tablet {
    padding: rem(17px);
    border-radius: rem(20px);
    font-size: rem(10px);
  }

  @include mobile {
    padding: rem(15px);
    border-radius: rem(15px);
  }

  &__question {
    font-size: rem(24px);
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    @include tablet {
      font-size: rem(16px);
    }

    @include mobile {
      font-size: rem(18px);
      font-weight: 600;
    }
  }

  &__info {
    color: #000;
    font-weight: 300;
    display: flex;
    flex-direction: column;

    @include mobile {
      font-size: rem(16px);
      font-weight: 400;
    }
  }

  &__answer {
    margin-top: rem(8px);

    @include tablet {
      margin-top: rem(5px);
    }

    @include mobile {
      margin-top: rem(12px);
    }
  }

  &__plus {
    position: relative;
    width: rem(30px);
    height: rem(30px);

    @include tablet {
      width: rem(16px);
      height: rem(16px);
    }

    &::before,
    &::after {
      content: "";
      display: inline-block;
      width: rem(30px);
      height: rem(2px);
      border: rem(2px) solid #0000a0;
      border-radius: rem(10px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.1s ease;

      @include tablet {
        width: rem(16px);
        height: rem(2px);
        border: 1.5px solid #0000a0;
      }

      @include mobile {
        width: rem(20px);
      }
    }

    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    &.expanded::after {
      transform: translate(-50%, -50%) rotate(0deg);
      opacity: 0;
    }
  }

  &__list {
    position: relative;

    li {
      padding-left: rem(30px);
      position: relative;

      @include tablet {
        padding-left: rem(15px);
      }

      @include mobile {
        padding-left: rem(25px);
      }

      &::before {
        content: "•";
        display: inline-block;
        position: absolute;
        top: rem(7px);
        left: rem(10px);
        font-size: rem(10px);

        @include tablet {
          top: rem(1px);
          left: 0;
        }

        @include mobile {
          top: rem(5px);
        }
      }
    }
  }

  &__list-title {
    margin-top: rem(9px);
    margin-bottom: rem(9px);

    @include mobile {
      margin-top: rem(12px);
      margin-bottom: rem(12px);
    }
  }
}
</style>