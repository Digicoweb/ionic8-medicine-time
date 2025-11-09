<template>
  <div v-if="loading" class="bottom-bar-loading">
    <div class="progress"></div>
  </div>
</template>

<script setup>
import { useBottomLoader } from "@/composables/useBottomLoader";
const { loading } = useBottomLoader();
</script>

<style scoped>
.bottom-bar-loading {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #f3f3f3;
  z-index: 9999;
}

.progress {
  width: 100%;
  height: 100%;
  background: #df172f;
  animation: loading 0.5s infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
