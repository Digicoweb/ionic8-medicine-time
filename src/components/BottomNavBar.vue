<template>
  <div class="bottom-nav-bar">
    <!-- Links -->
    <div class="links">
      <!-- Home -->
      <router-link to="/" class="link home">
        <span class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18V15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.07 2.82009L3.14002 8.37009C2.36002 8.99009 1.86002 10.3001 2.03002 11.2801L3.36002 19.2401C3.60002 20.6601 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <p>خانه</p>
      </router-link>
      <!-- Search -->
      <router-link to="/search" class="link search">
        <span class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11.5C3 16.7467 7.25329 21 12.5 21C17.7467 21 22 16.7467 22 11.5C22 6.25329 17.7467 2 12.5 2C7.25329 2 3 6.25329 3 11.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 23L4 20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <p>جستجو</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables";
@use "@/assets/styles/mixins";
.bottom-nav-bar {
  width: 100vw;
  height: 17vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100000000;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  @include mixins.fbx-ai-center-jc-center;
  .links {
    background: variables.$light-color;
    box-shadow: 0 10px 30px rgba(#000, 0.3);
    padding: 0.8rem 0.4rem 0.5rem 0.4rem;
    border-radius: 1rem;
    @include mixins.fbx-ai-center-jc-center;
    .link {
      position: relative;
      @include mixins.fbx-column-ai-center-jc-center;
      .icon {
        height: 2.6rem;
        width: 2.6rem;
        // margin: 0 0.8rem;
        margin: 0 0.3rem;
        border-radius: 0.7rem;
        @include mixins.fbx-ai-center-jc-center;
        svg {
          width: 1.25rem;
        }
      }
      p {
        margin-top: 0.4rem;
        color: variables.$dark-color;
        font-size: 0.67rem;
      }
      &.home {
        .icon {
          background: linear-gradient(0deg, rgba(#ff416c, 1) 0%, rgba(#ff4b2b, 1) 100%);
          path {
            stroke: variables.$light-color;
          }
        }
      }
      &.search {
        .icon {
          background: linear-gradient(0deg, rgba(#38ef7d, 1) 0%, rgba(#11998e, 1) 100%);
          path {
            stroke: variables.$light-color;
          }
        }
      }
      &.cart {
        .icon {
          background: linear-gradient(0deg, rgba(#f37335, 1) 0%, rgba(#fdc830, 1) 100%);
          path {
            stroke: variables.$light-color;
          }
        }
      }
      &.profile {
        .icon {
          background: linear-gradient(0deg, rgba(#5b86e5, 1) 0%, rgba(#36d1dc, 1) 100%);
          path {
            stroke: variables.$light-color;
          }
        }
      }
      &.tickets {
        .icon {
          background: linear-gradient(0deg, rgba(#deaa79, 1) 0%, rgba(#ffe6a9, 1) 100%);
          path {
            stroke: #54473f;
          }
        }
      }
      .badge {
        position: absolute;
        bottom: -1rem;
        background: variables.$primary-color;
        height: 1rem;
        min-width: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;
        font-size: 0.7rem;
        color: variables.$light-color;
        @include mixins.fbx-ai-center-jc-center;
      }
    }
  }
}
</style>
