<script setup lang="ts">
import {RouterView} from "vue-router";
import BaseHeader from "./components/TheHeader.vue";
import BaseFooter from "@/components/TheFooter.vue";
</script>

<template>
  <BaseHeader />

  <RouterView />

  <BaseFooter />
</template>

<style scoped>

</style>
