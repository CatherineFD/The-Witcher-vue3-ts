<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    errors: string;
  }>(),
  { title: "", errors: '' },
);

const model = defineModel({type: Boolean, required: true});

</script>

<template>
  <div class="checkbox">
    <label class="checkbox__label">

      <input
        v-model="model"
        class="checkbox__input form-registration__input-checkbox"
        :class="{ checkbox__input_error: props.errors.length > 0 }"
        name="consent-data-processing"
        type="checkbox"
      >
      {{ title }}
    </label>

    <div v-if="props.errors.length > 0 && !props.modelValue">
      <p class="checkbox__error-message">
        {{ errors }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  margin-bottom: rem(40px);

  &__label {
    display: flex;
    align-items: center;
    font-size: rem(16px);
    line-height: rem(20px);
    font-weight: 300;
  }

  &__input {
    width: rem(32px);
    height: rem(32px);
    opacity: 1;
    border: 1px solid #ffffff4d;
    cursor: pointer;
    margin-right: rem(20px);
    flex-shrink: 0;

    &:checked {
      background-color: #ffffff26;
      background-image: url("/static/img/icon-checkbox.svg");
      background-size: rem(20px) rem(20px);
      background-repeat: no-repeat;
      background-position: center;
    }

    &_error {
      background-color: #ec3f3f33;
    }
  }

  &__error-message {
    font-size: rem(12px);
    line-height: rem(16px);
    font-weight: 300;
    color: #ff5858;
    margin-top: rem(4px);
  }
}
</style>