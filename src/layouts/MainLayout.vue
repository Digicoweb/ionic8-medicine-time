<template>
  <IonPage>
    <MultiToast />
    <BottomLoading />

    <Header />
    <div class="layout-content">
      <slot />
    </div>
    <BottomNavBar />

    <!-- Set Name Area -->
    <div class="set-name-area" v-if="!fullName">
      <h3>نام شما</h3>
      <p class="txt">برای ادامه فقط کافیه اطلاعات زیر رو وارد کنی ✨</p>
      <!-- FullName -->
      <div class="form-group">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 9.99999C12.3012 9.99999 14.1667 8.13451 14.1667 5.83332C14.1667 3.53214 12.3012 1.66666 10 1.66666C7.69882 1.66666 5.83334 3.53214 5.83334 5.83332C5.83334 8.13451 7.69882 9.99999 10 9.99999Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <input placeholder="نام کامل خود را وارد نمایید" v-model="form.data.fullName" />
      </div>
      <!-- Submit Button -->
      <div class="main-btn" @click="setName()" v-wave>
        <p>ثبت</p>
      </div>
    </div>
  </IonPage>
</template>

<script setup>
import { App } from "@capacitor/app";
import { emit } from "@/services/eventBus";
import { StatusBar, Style } from "@capacitor/status-bar";
import { IonPage } from "@ionic/vue";
import { setPreference, getPreference } from "@/services/preferences";
import { onMounted, reactive, ref } from "vue";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useBottomLoader } from "@/composables/useBottomLoader";
const { showBottomLoading, hideBottomLoading } = useBottomLoader();
import MultiToast from "@/components/MultiToast.vue";
import BottomLoading from "@/components/BottomLoading.vue";
import Header from "@/components/Header.vue";
import { Capacitor } from "@capacitor/core";
import { useToast } from "@/composables/useToast";
let { showToast } = useToast();
let hasOpened = false;
let fullName = ref(null);
let form = reactive({
  data: {
    fullName: null,
  },
});

onMounted(async () => {
  if (Capacitor.getPlatform() === "ios" || Capacitor.getPlatform() === "android") {
    await StatusBar.setStyle({ style: Style.Dark });
  }

  const stored = await getPreference("fullName");
  if (stored !== null) {
    fullName.value = stored;
    emit("fullNameChanged", fullName.value);
  }
});

async function setName() {
  if (form.data.fullName != null && form.data.fullName != "") {
    try {
      await setPreference("fullName", form.data.fullName);

      showToast("نام شما با موفقیت ثبت شد", "success", 3000);
      showBottomLoading();

      if (Capacitor.getPlatform() === "ios" || Capacitor.getPlatform() === "android") {
      Haptics.impact({ style: ImpactStyle.Medium });
      }

      emit("fullNameChanged", form.data.fullName);

      setTimeout(() => {
        hideBottomLoading();
        fullName.value = form.data.fullName;
      }, 1000);
    } catch (error) {}
  } else {
    if (Capacitor.getPlatform() === "ios" || Capacitor.getPlatform() === "android") {
    Haptics.impact({ style: ImpactStyle.Medium });
    }
    showToast("نام خود را وارد نمایید", "error");
  }
}

App.addListener("appStateChange", ({ isActive }) => {
  if (isActive) {
    if (!hasOpened) {
      hasOpened = true;
      showToast("خوش آمدید", "success");
    }
  }
});
</script>

<style lang="scss">
@use "@/assets/styles/variables";
@use "@/assets/styles/mixins";
.layout-content {
  padding-top: 12vh;
  height: calc(100vh - 10vh);
  overflow-y: auto;
}
.set-name-area {
  height: 100vh;
  width: calc(100vw - 2rem);
  padding: 0 1rem;
  background-color: variables.$light-color;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100000;
  @include mixins.fbx-column-ai-center-jc-center;
  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  p.txt {
    font-size: 0.85rem;
    margin-bottom: 2rem;
  }
  .form-group {
    height: 3rem;
    width: calc(100% - 2rem);
    padding: 0 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(#000, 0.4);
    @include mixins.fbx-ai-center-jc-start;
    svg {
      width: 1.1rem;
      min-width: 1.1rem;
      margin-left: 0.5rem;
    }
    input {
      border: none;
      outline: none;
      width: 100%;
      font-size: 0.85rem;
    }
  }
}

.main-btn {
  height: 3rem;
  width: calc(100%);
  border-radius: 1rem;
  background: variables.$primary-color;
  border: none;
  outline: none;
  @include mixins.fbx-ai-center-jc-center;
  svg {
    width: 1.2rem;
    margin-left: 0.4rem;
    path {
      stroke: variables.$light-color;
    }
  }
  p {
    color: variables.$light-color;
    font-size: 0.75rem;
  }
}
</style>
