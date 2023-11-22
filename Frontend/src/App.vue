<script setup lang="ts">
import { ref } from "vue";
import ARView from "./views/ARView.vue";
import ButtonComp from "./components/ButtonComp.vue";

const label = ref('Hello From Parent')
</script >
<template>
  <ARView />
  <ButtonComp :label="label" />
</template >
