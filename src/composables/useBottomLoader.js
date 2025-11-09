import { ref } from "vue";

const loading = ref(false);

export function useBottomLoader() {
  function showBottomLoading() {
    loading.value = true;
  }

  function hideBottomLoading(delay = 300) {
    setTimeout(() => {
      loading.value = false;
    }, delay);
  }

  return {
    loading,
    showBottomLoading,
    hideBottomLoading,
  };
}
