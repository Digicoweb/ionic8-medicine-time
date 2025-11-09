<template>
  <MainLayout>
    <div class="content">Add Medicine Page</div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt tenetur similique, sit distinctio saepe, dolorum nulla, laborum blanditiis quidem rerum neque culpa voluptatum? Quam velit expedita officia? Voluptates, corrupti!</p>
  </MainLayout>
</template>

<script setup>
import { on } from "@/services/eventBus";
import { useRouter } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import { ref, onMounted } from "vue";
const router = useRouter();
const fullName = ref(null);

onMounted(async () => {
  on("fullNameChanged", (name) => {
    fullName.value = name;
  });
});

async function goToPage(path) {
  if (Capacitor.getPlatform() === "ios" || Capacitor.getPlatform() === "android") Haptics.impact({ style: ImpactStyle.Medium });
  setTimeout(() => {
    router.push(path);
  }, 500);
}
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
  @include mixins.fbx-column-ai-center-jc-start;
}
</style>
