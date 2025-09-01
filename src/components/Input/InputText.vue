<script setup lang="ts">
const props = withDefaults( defineProps<{
  modelValue: string,
  placeholderValue?: string,
  typeValue: string,
  errors: string,
}>(), {placeholderValue: '', errors: ''});


const model = defineModel({type: String, required: true});
</script>

<template>
  <div class="input">
    <input
      v-model="model"
      class="input__value"
      :class="{'input__value_error': props.errors.length>0}"
      :type="props.typeValue"
      :placeholder="props.placeholderValue"
    >

    <p class="input__message-error">
      {{ errors }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.input {
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