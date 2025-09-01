<script setup lang="ts">
const props = withDefaults( defineProps<{
  modelValue: string,
  errors: string,
}>(), {errors: ''});

const model = defineModel({type: String, required: true});
</script>

<template>
  <div class="textarea">
    <textarea
      v-model="model"
      :class="{'textarea__value_error': props.errors.length>0}"
      class="textarea__value form-registration__input-textarea"
      placeholder="Оставьте пометку к заказу"
    />
    <p class="textarea__message-error">
      {{ errors }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.textarea {
  margin-bottom: rem(32px);

  &__value {
    font-family: 'Futura PT', sans-serif;
    background: #FFFFFF1A;
    color: #ffffff;
    font-size: rem(16px);
    line-height: rem(20px);
    font-weight: 300;
    padding: rem(18px) rem(24px);
    width: 100%;
    height: rem(156px);

    &_error {
      background-color: #EC3F3F33;
    }
  }

  &__message-error {
    font-size: rem(12px);
    line-height: rem(16px);
    font-weight: 300;
    color: #FF5858;
    margin-top: rem(4px);
  }
}

</style>