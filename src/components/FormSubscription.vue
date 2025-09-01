<script setup lang="ts">
import InputSelect from "@/components/Input/InputSelect.vue";
import InputText from "@/components/Input/InputText.vue";
import InputFile from "@/components/Input/InputFile.vue";
import InputTextArea from "@/components/Input/InputTextArea.vue";
import InputCheckBox from "@/components/Input/InputCheckBox.vue";
import BaseButton from "@/components/BaseButton.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import {computed, reactive, unref} from "vue";
import { FormData, SelectData } from "@/types/BaseFormType.ts";

const emit = defineEmits<{ sendForm: [state: FormData] }>();

const options: SelectData[] = [
  { id: 1, value: "Москва" },
  { id: 2, value: "Санкт-Петербург" },
  { id: 3, value: "Казань" },
  { id: 4, value: "Краснодар" },
  { id: 5, value: "Ростов на дону" },
];

const state: FormData = reactive({
  email: "",
  name: "",
  city: null,
  message: "",
  isAgree: false,
  phone: "",
  file: [],
});

const isTrue = (value: boolean): boolean => {
  return value;
};

const isCityValid = (value: { id: number; value: string }): boolean => {
  return !(value.id === 0 && value.value === "");
};

const rules = computed(() => ({
  city: {
    required: helpers.withMessage("Поле не заполнено", isCityValid),
  },
  email: {
    required: helpers.withMessage("Поле не заполнено", required),
    email: helpers.withMessage("Некорректный email", email),
  },
  name: {
    required: helpers.withMessage("Поле не заполнено", required),
  },
  phone: {
    required: helpers.withMessage("Поле не заполнено", required),
  },
  message: {
    required: helpers.withMessage("Поле не заполнено", required),
  },
  file: {
    required: helpers.withMessage("Поле не заполнено", required),
  },
  isAgree: {
    required: helpers.withMessage("Поле не заполнено", isTrue),
  },
}));

const v$ = useVuelidate(rules, state);

const onSubmit = (): void => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    emit("sendForm", state);
  } else {
    console.log("ошибка");
  }
};

</script>

<template>
  <form
    class="form-registration"
    @submit.prevent="onSubmit"
  >
    <InputSelect
      v-model="state.city"
      :options="options"
      :errors="unref(v$.city.$errors[0]?.$message)"
      :placeholder-value="'Выберите город'"
    />

    <InputText
      v-model="state.name"
      :errors="unref(v$.name?.$errors[0]?.$message)"
      :placeholder-value="'Имя'"
      :type-value="'text'"
    />

    <div class="form-registration__container-email-phone">
      <InputText
        v-model="state.email"
        :errors="unref(v$.email?.$errors[0]?.$message)"
        :placeholder-value="'Email'"
        :type-value="'email'"
      />

      <InputText
        v-model="state.phone"
        :errors="unref(v$.phone?.$errors[0]?.$message)"
        :placeholder-value="'+7 (___) __-__-___'"
        :type-value="'phone'"
      />
    </div>

    <InputTextArea
      v-model="state.message"
      :errors="unref(v$.message?.$errors[0]?.$message)"
    />

    <InputFile
      v-model="state.file"
      :errors="unref(v$.file?.$errors[0]?.$message)"
    />

    <InputCheckBox
      v-model="state.isAgree"
      :title="'Даю согласие на обработку своих персональных данных'"
      :errors="unref(v$.isAgree?.$errors[0]?.$message)"
    />

    <BaseButton type="submit">
      Оставить заявку
    </BaseButton>
  </form>
</template>

<style scoped lang="scss">
.form-registration {
  width: rem(486px);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  @include tablet {
    width: rem(320px);
  }

  &__input {
    @include tablet {
      padding: rem(18px) rem(24px);
      margin-bottom: rem(24px);
    }
  }

  &__container-input {
    margin-bottom: rem(32px);

    @include tablet {
      margin-bottom: rem(24px);
    }
  }

  &__error {
    font-size: rem(12px);
    line-height: rem(16px);
    font-weight: 300;
    color: #ff5858;
    margin-top: rem(4px);
  }

  &__container-email-phone {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(24px);

    @include tablet {
      display: block;
    }
  }
}

.error-input {
  background-color: #ec3f3f33;
}
</style>
