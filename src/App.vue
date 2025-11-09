<template>
  <ion-app>
    <keep-alive>
      <router-view />
    </keep-alive>
  </ion-app>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, onUnmounted } from "vue";
import { IonApp } from "@ionic/vue";

onMounted(async () => {
});
</script>

<style></style>
