<script setup lang="ts">
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
  YandexMapDefaultFeaturesLayer
} from "vue-yandex-maps";
import customisationJson from "/public/static/style-map/customization.json";
import { ref, computed } from 'vue';
import {MapType} from "@/types/MapType.js";

defineOptions({
  name: "StoreMap",
});

const mapSettings = ref({
  location: {
    center: [37.617644, 55.755819],
    zoom: 11,
  },
});

const markers: MapType[] = [
  {id: 1, coordinates: [37.617644, 55.755819]},
  {id: 2, coordinates: [37.528208, 55.782294]},
  {id: 3, coordinates: [37.542824, 55.749451]}
];

const mapHeight = computed(() => {
  return window.matchMedia('(max-width: 768px)').matches ? '400px' : '540px';
});

</script>

<template>
  <div class="container-map">
    <yandex-map
      :settings="mapSettings"
      :height="mapHeight"
    >
      <yandex-map-default-scheme-layer :settings="{ customization: customisationJson}" />
      <yandex-map-default-features-layer />

      <yandex-map-marker
        v-for="(marker) in markers"
        :key="marker.id"
        position="top-center left-center"
        :settings="{ coordinates: marker.coordinates }"
      >
        <img
          alt=""
          class="pin"
          src="/static/img/icon-map-label.svg"
        >
      </yandex-map-marker>
    </yandex-map>
  </div>
</template>

<style scoped lang="scss">
.container-map {
  max-height: rem(540px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @include tablet {
    max-height: rem(400px);
  }
}
</style>