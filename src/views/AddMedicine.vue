<template>
  <MainLayout>
    <div class="content">
      ADD MEDICINE
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import { reactive, ref, onMounted } from "vue";

const form = reactive({
  name: "",
  dosage: 1,
  unit_id: null,
  interval_id: null,
  period_days: 1,
  start_date: "",
  time: "",
  description: "",
});

onMounted(async () => {
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables";
@use "@/assets/styles/mixins";
.content {
  width: 100vw;
  height: calc(100vh);
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  padding: 1rem;
  gap: 0.5rem;
  @include mixins.fbx-column-ai-center-jc-start;
}
</style>
