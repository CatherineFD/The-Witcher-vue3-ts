<script setup lang="ts">
const props = withDefaults( defineProps<{
  errors: string,
}>(), {errors: ''});

const model = defineModel({type: Array<File>});


const changeFile = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    model.value.push(target.files[0]);
  }
};

</script>

<template>
  <div class="file-input">
    <label
      class="file-input__label"
      :class="{'file-input__label_error': props.errors.length>0}"
    >
      <span>Прикрепите файл</span>
      <img
        class="file-input__img"
        src="/static/img/download.svg"
        alt="download Icon"
      >
      <input
        type="file"
        class="file-input__value"
        @change="changeFile"
      >
    </label>
    <p class="file-input__error">
      {{ errors }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.file-input {
  margin-bottom: rem(32px);

  &__label {
    background: #FFFFFF1A;
    color: #ffffff;
    font-size: rem(16px);
    line-height: rem(20px);
    font-weight: 300;
    padding: rem(18px) rem(24px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_error {
      background-color: #EC3F3F33;
    }
  }

  &__img {
    width: rem(24px);
    height: rem(24px);
  }

  &__value {
    display: none;
  }

  &__error {
    font-size: rem(12px);
    line-height: rem(16px);
    font-weight: 300;
    color: #FF5858;
    margin-top: rem(4px);
  }
}
</style>