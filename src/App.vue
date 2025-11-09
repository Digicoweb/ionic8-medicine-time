<template>
  <ion-app>
    <keep-alive>
      <router-view />
    </keep-alive>
  </ion-app>
</template>

<script setup>
import { onMounted } from "vue";
import { IonApp } from "@ionic/vue";

onMounted(async () => {});
</script>

<style></style>
