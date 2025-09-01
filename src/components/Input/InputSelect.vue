<script setup lang="ts">
import Multiselect from "vue-multiselect";
import { SelectData } from "@/types/BaseFormType.ts";

const props = withDefaults(
  defineProps<{
    options: Array<SelectData>;
    errors: string;
    placeholderValue: string,
  }>(),
  { errors: "", placeholderValue: '' },
);

const model = defineModel<SelectData | null>();

</script>

<template>
  <div class="select form-registration__container-input">
    <multiselect
      v-model="model"
      class="select-city"
      :class="{ 'select-city_error': props.errors.length > 0 }"
      :placeholder="placeholderValue"
      :show-labels="false"
      :options="props.options"
      :internal-search="true"
      track-by="id"
      label="value"
    >
      <template #singleLabel="{ option }">
        <span class="option__desc">
          <span class="option__title">{{
            option ? option.value : placeholderValue
          }}</span>
        </span>
      </template>

      <template #option="props">
        <div class="option__desc">
          <span class="option__title">{{ props.option?.value }}</span>
        </div>
      </template>
    </multiselect>

    <p class="select__error-message">
      {{ errors }}
    </p>
  </div>
</template>

<style scoped lang="scss">
:deep .multiselect {
  min-height: 0;

  .multiselect__tags {
    background-color: transparent;
    color: #ffffff;
    padding: 0;
    border: none;
    min-height: 0 !important;
    font-size: rem(16px);
    font-weight: 300;
  }

  .multiselect__placeholder {
    margin: 0;
    padding: 0;
  }

  .multiselect__single {
    background-color: transparent;
    margin: 0;
    padding: 0;
  }

  .multiselect__content-wrapper {
    border: #ffffff1a 1px solid;
    border-top-color: transparent;
    background-color: #303030;
    left: 0;
    top: rem(50px);
    border-radius: 0;
    max-height: rem(350px) !important;
  }

  .multiselect__option--selected.multiselect__option--highlight {
    background: #2c2c2c;
    color: #ffffff4d;
    font-weight: 300;
  }

  .multiselect__option--highlight {
    background: transparent;
  }

  .multiselect__option--selected {
    background: #2c2c2c;
    color: #ffffff4d;
    font-weight: 300;
    transition: background 0.5s ease;
  }

  .multiselect__option--selected:hover {
    background: rgba(236, 63, 63, 0.1490196078);
  }

  .multiselect__input,
  .multiselect__single {
    background: transparent;
    color: #ffffff;
    font-size: rem(16px);
    font-weight: 300;
    padding: 0;
  }

  .multiselect__select {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: center;
  }

  .multiselect__select::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-color: transparent;
    width: rem(40px);
    height: rem(40px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/public/static/img/icon-select.svg");
    background-repeat: no-repeat;
    background-size: rem(20px) rem(20px);
  }

  .multiselect__input::placeholder {
    color: #ffffff66;
  }

  .multiselect__option {
    padding: rem(18px) rem(24px);
  }
}

:deep .multiselect--active .multiselect__select {
  transform: translateY(-50%) rotateZ(180deg);
}

.select {
  margin-bottom: rem(32px);
  display: flex;
  flex-direction: column;

  &__error-message {
    font-size: rem(12px);
    line-height: rem(16px);
    font-weight: 300;
    color: #ff5858;
    margin-top: rem(4px);
  }
}

.select-city {
  box-sizing: border-box;
  font-size: rem(16px);
  font-weight: 300;
  line-height: rem(24px);
  background-color: #ffffff1a;
  color: #ffffff;
  padding: rem(18px) rem(24px);
  flex-shrink: 1;

  &_error {
    background-color: #ec3f3f33 !important;
  }
}

.error-select {
  background-color: #ec3f3f33;
}
</style>