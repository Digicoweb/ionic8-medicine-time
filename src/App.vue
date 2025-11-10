<template>
  <MainLayout>
    <ion-app>
      <keep-alive>
        <router-view />
      </keep-alive>
    </ion-app>
  </MainLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { IonApp } from "@ionic/vue";
import MainLayout from "@/layouts/MainLayout.vue";

onMounted(async () => {});
</script>

<style></style>
