<template>
  <MainLayout>
    <div class="content">
      <!-- Main Top -->
      <div class="container">
        <div class="main-top">
          <!-- Right -->
          <div class="right">
            <div class="avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="info">
              <span>خوش‌آمدید</span>
              <p>{{ fullName }}</p>
            </div>
          </div>
          <!-- Left -->
          <div class="left">
            <p>وقت‌دارو</p>
            <img src="/src/assets/images/logo.png" alt="" />
          </div>
        </div>
      </div>

      <!-- Img Area -->
      <div class="img-area">
        <img src="/src/assets/images/dr1.png" alt="" />
        <div class="shadow"></div>
      </div>

      <!-- Mini Chart -->
      <div class="container">
        <div class="mini-chart grid">
          <div class="w-1-3">
            <div class="item">
              <span>0</span>
              <p>داروهای شما</p>
            </div>
          </div>
          <div class="w-1-3">
            <div class="item item-2">
              <span>0</span>
              <p>مورد امروز</p>
            </div>
          </div>
          <div class="w-1-3">
            <div class="item item-3">
              <span>0</span>
              <p>باقی‌مانده امروز</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Area -->
      <div class="container">
        <div class="empty-area">
          <!-- Info -->
          <div class="info">
            <div class="row">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 8V13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.9945 16H12.0035" stroke="#292D32" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>هنوز هیچ دارویی اضافه نکرده‌اید</p>
            </div>
            <span>داروهای خود را ثبت کنید تا مصرف آن‌ها را فراموش نکنید. اپ به شما یادآوری می‌کند و مدیریت داروها را آسان می‌سازد.</span>
          </div>
          <!-- Main Btn -->
          <button class="main-btn" @click="goToPage('/add-medicine')" v-wave>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 12H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 16V8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>افزودن دارو</p>
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { App as CapacitorApp } from "@capacitor/app";
import { useToast } from "@/composables/useToast";
import { Capacitor } from "@capacitor/core";
import { on } from "@/services/eventBus";
import { ref, onMounted, onUnmounted } from "vue";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useIonRouter } from "@ionic/vue";
import MainLayout from "@/layouts/MainLayout.vue";
let { showToast } = useToast();
const router = useIonRouter();
const fullName = ref(null);
let lastBackPress = 0;
let backHandler = null;

onMounted(async () => {
  on("fullNameChanged", (name) => {
    fullName.value = name;
  });
  if (Capacitor.getPlatform() === "ios" || Capacitor.getPlatform() === "android") {
    backHandler = await CapacitorApp.addListener("backButton", () => {
      const now = Date.now();
      if (now - lastBackPress < 2000) {
        navigator["app"].exitApp();
      } else {
        lastBackPress = now;
        showToast("برای خروج دوباره Back بزنید", "warning");
      }
    });
  }
});

onUnmounted(async () => {
  await backHandler.remove();
});

async function goToPage(path) {
  if (Capacitor.getPlatform() === "ios" || Capacitor.getPlatform() === "android") {
    Haptics.impact({ style: ImpactStyle.Medium });
  }
  setTimeout(() => {
    try {
      router.push(path);
    } catch (error) {
      console.log("HOME FILE (Line 132) ------------> ", error);
    }
  }, 200);
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables";
@use "@/assets/styles/mixins";
.content {
  height: calc(100vh);
  width: 100vw;
  overflow-y: auto;
  @include mixins.fbx-column-ai-center-jc-start;
  .main-top {
    width: 100%;
    margin-bottom: 1.5rem;
    @include mixins.fbx-ai-center-jc-between;
    .right {
      @include mixins.fbx-ai-center-jc-start;
      .avatar {
        height: 2.2rem;
        width: 2.2rem;
        border: 1px solid rgba(#000, 0.3);
        border-radius: 10rem;
        margin-left: 0.5rem;
        @include mixins.fbx-ai-center-jc-center;
        svg {
          width: 1.2rem;
        }
      }
      .info {
        @include mixins.fbx-column-ai-start-jc-start;
        span {
          font-size: 0.85rem;
          margin-bottom: 0.05rem;
        }
        p {
          font-size: 0.96rem;
          font-weight: 600;
        }
      }
    }
    .left {
      @include mixins.fbx-ai-center-jc-end;
      p {
        font-size: 1.4rem;
        font-weight: 600;
        font-family: "morabba" !important;
        margin-left: 0.5rem;
      }
      img {
        height: 3.5rem;
      }
    }
  }
  .img-area {
    width: 100%;
    height: 13rem;
    position: relative;
    @include mixins.fbx-column-ai-center-jc-center;
    img {
      height: 100%;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }
    .shadow {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 5rem;
      z-index: 2;
      background: linear-gradient(0deg, variables.$light-color 0%, transparent 90%);
    }
  }
  .mini-chart {
    width: calc(100%);
    @include mixins.fbx-ai-center-jc-center;
    .item {
      padding: 1rem;
      width: calc(100% - 2rem);
      border-radius: 1rem;
      @include mixins.fbx-column-ai-center-jc-center;
      span {
        font-size: 2rem;
        height: 3rem;
      }
      p {
        font-size: 0.8rem;
        white-space: nowrap;
      }
      &.item-2 {
        background: linear-gradient(0deg, rgba(variables.$success-color, 0.3) -20%, transparent 90%);
      }
      &.item-3 {
        background: linear-gradient(0deg, rgba(variables.$primary-color, 0.3) -20%, transparent 90%);
      }
    }
  }
  .empty-area {
    margin-top: 2rem;
    border: 1px dashed rgba(variables.$primary-color, 0.6);
    padding: 2rem;
    border-radius: 1rem;
    .info {
      @include mixins.fbx-column-ai-start-jc-start;
    }
    .row {
      @include mixins.fbx-ai-center-jc-start;
      svg {
        width: 1.2rem;
        margin-left: 0.4rem;
        path {
          stroke: variables.$primary-color;
        }
      }
      p {
        font-weight: 600;
        font-size: 0.95rem;
        margin-bottom: 0.4rem;
      }
    }
    span {
      font-size: 0.85rem;
      opacity: 0.7;
      text-align: justify;
    }
    .main-btn {
      width: 30vw;
      margin: 1.5rem auto 0 auto;
    }
  }
}
</style>
