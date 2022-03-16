<script lang="ts" setup>
import { defineComponent } from "vue";

defineProps({
  label: { type: String },
  icon: { type: String },
  dense: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  raised: { type: Boolean, default: false },
  outlined: { type: Boolean, default: false },
  unelevated: { type: Boolean, default: false },
  trailingIcon: { type: Boolean, default: false },
});
</script>

<template>
  <mwc-button
    :icon="icon"
    :label="label"
    :disabled="disabled"
    :outlined="outlined"
    :raised="raised"
    :trailingIcon="trailingIcon"
  >
  </mwc-button>
</template>

<script lang="ts">
export default defineComponent({
  name: "RButton",
});
</script>
