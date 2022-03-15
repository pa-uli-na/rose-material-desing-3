<script lang="ts" setup>
import { defineComponent } from "vue";
import "@material/mwc-button";

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
  <mwc-button :label="label" :outlined="outlined" :raised="raised">
  </mwc-button>
</template>

<script lang="ts">
export default defineComponent({
  name: "RButton",
});
</script>
