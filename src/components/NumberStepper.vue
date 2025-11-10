<template>
  <div class="stepper-wrapper">
    <button :disabled="max != null && internalValue >= max" @pointerdown="handlePointerDown($event, step)" v-wave>
      <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 4.75H8.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.75 8.75V0.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <div class="input-area">
      <NumberFlow :value="internalValue" locales="en-US" :format="{ useGrouping: false }" aria-hidden="true" :animated="animated" @animationsstart="showCaret = false" @animationsfinish="showCaret = true" class="numberflow-anim" willChange />
    </div>

    <button :disabled="min != null && internalValue <= min" @pointerdown="handlePointerDown($event, -step)" v-wave>
      <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 0.75H8.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import NumberFlow from "@number-flow/vue";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Capacitor } from "@capacitor/core";

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 99 },
  modelValue: { type: Number, default: 0 },
  step: { type: Number, default: 1 }, // ✅ مقدار افزایش/کاهش
  decimals: { type: Number, default: 0 }, // ✅ تعداد رقم اعشار
});

const emit = defineEmits(["update:modelValue"]);

const internalValue = ref(props.modelValue);
const defaultValue = props.modelValue;

const inputRef = ref(null);
const animated = ref(true);
const showCaret = ref(true);

watch(
  () => props.modelValue,
  (val) => {
    internalValue.value = val;
  }
);

function normalize(value) {
  return parseFloat(Number(value).toFixed(props.decimals));
}

function handlePointerDown(event, diff) {
  if (Capacitor.getPlatform() === "ios" || Capacitor.getPlatform() === "android") {
    Haptics.impact({ style: ImpactStyle.Medium });
  }

  animated.value = true;

  if (event.pointerType === "mouse") {
    event.preventDefault();
    inputRef.value?.focus();
  }

  let newVal = internalValue.value + diff;

  newVal = Math.min(Math.max(newVal, props.min), props.max);
  newVal = normalize(newVal);

  internalValue.value = newVal;
  emit("update:modelValue", newVal);
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables";
@use "@/assets/styles/mixins";

.stepper-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}

button {
  width: 1.8rem;
  height: 1.8rem;
  border: none;
  outline: none;
  background: rgba(#000, 0.08);
  border-radius: 0.7rem;
  @include mixins.fbx-ai-center-jc-center;
  svg {
    width: 0.8rem;
  }
}

.input-area {
  position: relative;
  width: 3rem;
  display: grid;
  place-items: center;
}

.numberflow-anim {
  pointer-events: none;
  position: absolute;
  font-size: 1rem;
  font-weight: 500;
}
</style>
