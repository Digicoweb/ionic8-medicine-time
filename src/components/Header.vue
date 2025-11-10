<template>
  <div class="header-area">
    <div class="banner-top"></div>

    <header class="header-1">
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
    </header>

    <!-- Banner -->
    <header class="header-2" v-if="false">
      <div class="right">
        <!-- Menu Icon  -->
        <div class="menu-icon" @click="openMenuArea()" v-wave>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 12H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 17H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
        <p></p>
      </div>
    </header>
  </div>

  <!-- Menu Area -->
  <div class="menu-area animate__animated animate__faster animate__fadeInRight" style="animation-duration: 0.2s" v-if="visible_menu_area">
    <!-- Head -->
    <div class="menu-area-head container">
      <!-- Right -->
      <div class="right">
        <div class="title">دسترسی به ...</div>
      </div>
      <!-- Left -->
      <div class="left">
        <button class="close-btn" @click="router.go(-1)">
          <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.16998 6.83004L6.82998 1.17004" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.82998 6.83004L1.16998 1.17004" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Body -->
    <div class="menu-area-body container">
      <!-- Links -->
      <div class="_links">
        <!-- Divider -->
        <div class="divider"></div>
        <!-- Link ( Home ) -->
        <a to="/" class="_link">
          <!-- Right -->
          <div class="right">
            <!-- Icon -->
            <span class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18V15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.07 2.82009L3.14002 8.37009C2.36002 8.99009 1.86002 10.3001 2.03002 11.2801L3.36002 19.2401C3.60002 20.6601 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <p>Home</p>
          </div>
          <!-- Left -->
          <div class="left">
            <!-- Icon -->
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </a>
        <!-- Link  -->
        <router-link to="/haptic" class="_link">
          <!-- Right -->
          <div class="right">
            <!-- Icon -->
            <span class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18V15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.07 2.82009L3.14002 8.37009C2.36002 8.99009 1.86002 10.3001 2.03002 11.2801L3.36002 19.2401C3.60002 20.6601 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <p>Haptic Test</p>
          </div>
          <!-- Left -->
          <div class="left">
            <!-- Icon -->
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </router-link>
        <!-- Link  -->
        <router-link to="/local-notif" class="_link">
          <!-- Right -->
          <div class="right">
            <!-- Icon -->
            <span class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18V15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.07 2.82009L3.14002 8.37009C2.36002 8.99009 1.86002 10.3001 2.03002 11.2801L3.36002 19.2401C3.60002 20.6601 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <p>Local Notif</p>
          </div>
          <!-- Left -->
          <div class="left">
            <!-- Icon -->
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </router-link>
        <!-- Link  -->
        <router-link to="/preferences" class="_link">
          <!-- Right -->
          <div class="right">
            <!-- Icon -->
            <span class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18V15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.07 2.82009L3.14002 8.37009C2.36002 8.99009 1.86002 10.3001 2.03002 11.2801L3.36002 19.2401C3.60002 20.6601 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <p>Preferences</p>
          </div>
          <!-- Left -->
          <div class="left">
            <!-- Icon -->
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { on } from "@/services/eventBus";
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const fullName = ref(null);

const visible_menu_area = ref(false);
function openMenuArea() {
  visible_menu_area.value = true;
  window.location.hash = "menu";
}
function closeMenuArea() {
  document.querySelector(".menu-area")?.classList.remove("animate__fadeInRight");
  document.querySelector(".menu-area")?.classList.add("animate__fadeOutRight");
  setTimeout(() => {
    visible_menu_area.value = false;
  }, 500);
  setTimeout(() => {
    document.querySelector(".menu-area")?.classList.add("animate__fadeInRight");
  }, 500);
}
onMounted(async () => {
  on("fullNameChanged", (name) => {
    fullName.value = name;
  });

  if (route.hash === "#menu") {
    openMenuArea();
  }
});
watch(
  () => route.hash,
  (newHash) => {
    if (newHash !== "#menu") {
      closeMenuArea();
    }
  }
);
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables";
@use "@/assets/styles/mixins";
.header-area {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  .banner-top {
    height: 4vh;
    background: variables.$primary-color;
    @include mixins.fbx-ai-center-jc-center;
    p {
      font-size: 0.6rem;
      letter-spacing: 2px;
      color: variables.$light-color;
      opacity: 0.8;
      font-family: "roboto" !important;
    }
  }
  header.header-1 {
    padding-right: 5vw;
    padding-left: 5vw;
    width: calc(100% - 10vw);
    height: 8vh;
    margin-bottom: 1.5rem;
    background: variables.$light-color;
    box-shadow: 0 10px 30px rgba(#000, 0.07);
    position: relative;
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
          margin-bottom: -0.2rem;
        }
        p {
          font-size: 0.93rem;
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
    header.header-2 {
      height: 7vh;
      width: 100%;
      background: variables.$light-color;
      box-shadow: 0 10px 30px rgba(#000, 0.07);
      position: relative;
      @include mixins.fbx-ai-center-jc-between;
      .right {
        height: 100%;
        @include mixins.fbx-ai-center-jc-start;
        .menu-icon {
          height: 150%;
          width: 3rem;
          @include mixins.fbx-ai-center-jc-center;
          path {
            stroke: variables.$dark-color;
          }
        }
      }
      .logo {
        height: 2rem;
        @include mixins.xy-center;
      }
    }
  }
}
.menu-area {
  background: variables.$light-color;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 10000000000;
  position: fixed;
  &-head {
    height: 7vh;
    background: variables.$light-color;
    @include mixins.fbx-ai-center-jc-between;
    .right {
      width: 100%;
      height: 100%;
      @include mixins.fbx-ai-center-jc-start;
      .title {
        font-size: 0.86rem;
        font-weight: 700;
      }
    }
    .left {
      @include mixins.fbx-ai-center-jc-end;
      button.close-btn {
        height: 2rem;
        width: 2rem;
        background: none;
        outline: none;
        border: none;
        @include mixins.fbx-ai-center-jc-center;
        svg {
          width: 5rem;
        }
      }
    }
  }
  &-body {
    height: 80%;
    margin-top: 1rem;
    overflow: scroll;
    .user-info {
      margin-bottom: 2rem;
      @include mixins.fbx-ai-center-jc-start;
      img.avatar {
        height: 4rem;
        width: 4rem;
        border-radius: 1.5rem;
      }
      span.avatar {
        height: 4rem;
        width: 4rem;
        border-radius: 1.5rem;
        border: 1px solid rgba(#000, 0.4);
        @include mixins.fbx-ai-center-jc-center;
        svg {
          width: 2rem;
        }
      }
      .__info {
        width: 100%;
        margin-right: 0.5rem;
        @include mixins.fbx-column-ai-start-jc-start;
        .full-name {
          font-size: 0.75rem;
          font-weight: 700;
        }
        .mobile {
          font-size: 0.85rem;
          margin-top: 0.5rem;
          letter-spacing: 1px;
        }
        .row {
          width: 100%;
          margin-top: 0.5rem;
          @include mixins.fbx-ai-center-jc-between;
          .right {
            @include mixins.fbx-ai-center-jc-start;
            span {
              font-size: 0.75rem;
              opacity: 0.7;
            }
          }
          .left {
            @include mixins.fbx-ai-center-jc-end;
            p {
              font-size: 0.85rem;
              font-weight: 700;
            }
            svg {
              width: 1rem;
              margin-right: 0.4rem;
            }
          }
        }
      }
    }
    ._links {
      width: 100%;
      @include mixins.fbx-column-ai-start-jc-start;
      ._link {
        width: 100%;
        margin-bottom: 0.9rem;
        @include mixins.fbx-ai-center-jc-between;
        .right {
          @include mixins.fbx-ai-center-jc-start;
          .icon {
            height: 1.9rem;
            width: 1.9rem;
            border-radius: 0.4rem;
            background: rgba(#000, 0.05);
            margin-left: 0.4rem;
            @include mixins.fbx-ai-center-jc-center;
            svg {
              width: 1.2rem;
            }
          }
          p {
            font-size: 0.75rem;
            font-weight: 700;
            color: variables.$dark-color;
          }
        }
        .left {
          @include mixins.fbx-ai-center-jc-end;
          .badge {
            height: 1.3rem;
            width: 1.3rem;
            background: variables.$primary-color;
            color: variables.$light-color;
            font-size: 0.7rem;
            border-radius: 0.5rem;
            margin-left: 0.5rem;
            @include mixins.fbx-ai-center-jc-center;
          }
          .icon {
            @include mixins.fbx-ai-center-jc-center;
            svg {
              width: 0.95rem;
              opacity: 0.75;
            }
          }
        }
        &.logout {
          .right {
            .icon {
              background: none;
              svg {
                width: 1.2rem;
                path {
                  stroke: variables.$error-color;
                }
              }
            }
            p {
              color: variables.$error-color;
            }
          }
        }
      }
      .divider {
        width: 100%;
        height: 1px;
        background: rgba(#000, 0.2);
        margin-bottom: 1rem;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
