import { reactive } from "vue";

const toasts = reactive([]);

export function useToast() {
  function showToast(message, type, duration = 4000) {
    const id = Date.now();
    toasts.push({ id, message, type, duration });

    setTimeout(() => {
      removeToastById(id);
    }, duration);
  }

  function removeToastById(id) {
    const index = toasts.findIndex(t => t.id === id);
    if (index !== -1) toasts.splice(index, 1);
  }

  return { toasts, showToast, removeToastById };
}
