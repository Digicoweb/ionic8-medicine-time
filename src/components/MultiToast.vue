<template>
  <div class="toast-container">
    <!-- Area -->
    <div v-for="(toast, index) in toasts" :key="toast.id" :class="{ area: true, success: toast.type == 'success', info: toast.type == 'info', warning: toast.type == 'warning', error: toast.type == 'error' }" @click="removeToast(index)" @vue:mounted="handleToastMounted(toast.duration, toast.id)">
      <!-- Success Icon -->
      <svg v-if="toast.type == 'success'" class="success" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- Info Icon -->
      <svg v-if="toast.type == 'info'" class="info" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 16L12 11" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.0055 8L11.9965 8" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- Warning Icon -->
      <svg v-if="toast.type == 'warning'" class="warning" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 8V13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.9945 16H12.0035" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- error Icon -->
      <svg v-if="toast.type == 'error'" class="error" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.16998 14.83L14.83 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.83 14.83L9.16998 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <p class="description">{{ toast.message }}</p>
      <div class="progress-bar">
        <div :class="`inner inner-${toast.id} ${toast.type}`"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "@/composables/useToast";
const { toasts } = useToast();

function removeToast(index) {
  toasts.splice(index, 1);
}

function handleToastMounted(duration, id) {
  const start = Date.now();

  let intv = setInterval(() => {
    const elapsed = Date.now() - start;
    const percent = (elapsed / duration) * 100;
    document.querySelector(`.inner-${id}`).style.width = percent + "%";
    if (elapsed >= duration) {
      clearInterval(intv);
    }
  }, 10);
}
</script>

<style scoped lang="scss">
$light-color: #fbfbfb;
$bg-color: #f4f4f4;
$error-color: #f0134d;
$success-color: #03a6a1;
$info-color: #2878f0;
$warning-color: #ec8305;

.toast-container {
  position: fixed;
  bottom: 20px;
  @media (max-width: 767.98px) {
    bottom: 2rem;
  }
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 100000000000;
  .area {
    padding: 0 0.7rem;
    height: 2.2rem;
    border-radius: 2rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    cursor: pointer;
    svg {
      width: 1.05rem;
      @media (max-width: 767.98px) {
        width: 1.2rem;
      }
      min-width: 1.05rem;
      margin-left: 0.4rem;
      &.success {
        path {
          stroke: $success-color;
        }
      }
      &.info {
        path {
          stroke: $info-color;
        }
      }
      &.warning {
        path {
          stroke: $warning-color;
        }
      }
      &.error {
        path {
          stroke: $error-color;
        }
      }
    }
    .description {
      font-size: 0.67rem;
      font-weight: 600;
      white-space: nowrap;
      @media (max-width: 767.98px) {
        font-size: 0.75rem;
      }
    }
    &.success {
      background: #e3f5ec;
      border: 1px solid rgba($success-color, 0.7);
      box-shadow: 0 10px 30px rgba($success-color, 0.55);
      .description {
        color: $success-color;
      }
    }
    &.info {
      background: #e8edf3;
      border: 1px solid rgba($info-color, 0.7);
      box-shadow: 0 10px 30px rgba($info-color, 0.55);
      .description {
        color: $info-color;
      }
    }
    &.warning {
      background: #f4f5e3;
      border: 1px solid rgba($warning-color, 0.7);
      box-shadow: 0 10px 30px rgba($warning-color, 0.55);
      .description {
        color: $warning-color;
      }
    }
    &.error {
      background: #f5e5e3;
      border: 1px solid rgba($error-color, 0.7);
      box-shadow: 0 5px 50px rgba($error-color, 0.55);
      .description {
        color: $error-color;
      }
    }
    .progress-bar {
      position: absolute;
      bottom: -0.05rem;
      left: 50%;
      transform: translateX(-50%);
      width: 75%;
      border-radius: 1rem;
      height: 2px;
      direction: rtl;
      .inner {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        &.success {
          background: $success-color;
        }
        &.warning {
          background: $warning-color;
        }
        &.info {
          background: $info-color;
        }
        &.error {
          background: $error-color;
        }
      }
    }
  }
}
</style>
