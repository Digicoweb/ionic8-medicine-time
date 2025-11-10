<template>
  <div class="add-medicine-page animate__animated animate__faster animate__fadeInRight" style="animation-duration: 0.2s">
    <!-- Header -->
    <header>
      <div class="right">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.99 8.95996H7.01001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 7.28003V8.96002" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.5 8.93994C14.5 13.2399 11.14 16.7199 7 16.7199" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16.9999 16.72C15.1999 16.72 13.6 15.76 12.45 14.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h1>افزودن دارو</h1>
      </div>
      <div class="left">
        <button class="return-btn" @click="returnPage()">
          <span>بازگشت</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Inner Content -->
    <div class="inner-content">
      <!-- Medicine Name -->
      <div class="form-group">
        <span>نام دارو</span>
        <div class="line"></div>
        <input placeholder="نام دارو را وارد نمایید" v-model="form.medicineName" />
      </div>
      <!-- Dosage -->
      <div class="form-group">
        <span>میزان مصرف (حداکثر ۲ رقم)</span>
        <NumberStepper v-model="form.dosage" :min="0" :max="99" :step="0.5" :decimals="1" />
      </div>
      <!-- Period Days -->
      <div class="form-group">
        <span>دوره مصرف (به روز، حداکثر ۳رفم)</span>
        <NumberStepper v-model="form.periodDays" :min="0" :max="999" :step="1" :decimals="1" />
      </div>
      <!-- Start Date -->
      <div class="form-group">
        <span>ساعت شروع</span>
        <p>۱۴۰۴/۱۰/۱۰</p>
      </div>
      <!-- Time -->
      <div class="form-group">
        <span>ساعت مصرف</span>
        <input placeholder="xx:xx" v-model="form.time" />
      </div>
      <!-- Description -->
      <div class="form-group description">
        <span>توضیحات</span>
        <textarea v-model="form.description" placeholder="توضیحات خود را در مورد مصرف این دارو، در صورت نیاز وارد نمایید"></textarea>
      </div>

      <button @click="open()">OPEN</button>

      <vue-bottom-sheet ref="myBottomSheet" :transition-duration="0.2">
        <div class="bottom-sheet-content">
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
          <p><strong>Lorem Ipsum</strong> is simply dummy text</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut voluptate eos esse, explicabo doloremque, qui eius repellendus voluptatibus totam at? Culpa mollitia quo quisquam? Facilis soluta mollitia repudiandae eligendi.</p>
        </div>
      </vue-bottom-sheet>
    </div>
  </div>
</template>

<script setup>
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";
import { useToast } from "@/composables/useToast";
import { useIonRouter } from "@ionic/vue";
import { reactive, ref, onMounted } from "vue";
import { Capacitor } from "@capacitor/core";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import NumberStepper from "@/components/NumberStepper.vue";
const router = useIonRouter();
let { showToast } = useToast();
const myBottomSheet = ref(null);
const form = reactive({
  medicineName: "",
  dosage: 1,
  unitId: null,
  intervalId: null,
  periodDays: 1,
  startDate: "",
  time: "",
  description: "",
});

onMounted(async () => {});

async function returnPage() {
  if (Capacitor.getPlatform() === "ios" || Capacitor.getPlatform() === "android") {
    Haptics.impact({ style: ImpactStyle.Medium });
  }
  router.back();
}

const open = () => {
  showToast("نام خود را وارد نمایید", "error");
  myBottomSheet.value.open();
};

const close = () => {
  myBottomSheet.value.close();
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables";
@use "@/assets/styles/mixins";
.add-medicine-page {
  width: calc(100vw - 10vw);
  height: calc(100vh - 4rem);
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem 5vw;
  gap: 0.5rem;
  z-index: 1000000;
  background-color: variables.$light-color;
  @include mixins.fbx-column-ai-center-jc-start;
  header {
    position: fixed;
    padding: 0 5vw;
    height: 15vh;
    width: calc(100vw - 10vw);
    background-color: variables.$light-color;
    left: 0;
    top: 0;
    @include mixins.fbx-ai-center-jc-between;
    .right {
      @include mixins.fbx-ai-center-jc-start;
      svg {
        width: 1.4rem;
      }
      h1 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-right: 0.4rem;
      }
    }
    .left {
      @include mixins.fbx-ai-center-jc-end;
      .return-btn {
        border: none;
        outline: none;
        background: none;
        @include mixins.fbx-ai-center-jc-end;
        span {
          font-size: 0.8rem;
          font-weight: 500;
          margin-left: 0.4rem;
        }
        svg {
          width: 1.4rem;
        }
      }
    }
  }
  .inner-content {
    padding-top: 15vh;
    width: 100%;
  }
  .form-group {
    width: calc(100% - 2rem);
    white-space: nowrap;
    background-color: rgba(#000, 0.04);
    height: 2.5rem;
    border-radius: 0.7rem;
    margin-bottom: 0.6rem;
    padding: 0 1rem;
    @include mixins.fbx-ai-center-jc-between;
    span {
      font-size: 0.8rem;
    }
    .line {
      margin: 0 0.5rem;
      height: 1px;
      border-top: 1px dashed rgba(#000, 0.7);
    }
    p,
    input {
      border: none;
      outline: none;
      width: 100%;
      font-size: 0.9rem;
      font-weight: 600;
      text-align: left;
      background: none;
    }
    input::placeholder {
      font-weight: 400;
    }
    &.description {
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      background: none;
      padding: 0;
      textarea {
        border: 1px solid rgba(#000, 0.2);
        border-radius: 0.8rem;
        outline: none;
        padding: 1rem 1rem 5rem 1rem;
        scrollbar-width: none;
        width: calc(100%);
        font-size: 0.9rem;
        font-weight: 600;
        margin-top: 0.4rem;
      }
      textarea::placeholder {
        font-weight: 400;
      }
      textarea:focus {
        border: 1px solid rgba(#000, 0.6);
      }
    }
  }
}
</style>
