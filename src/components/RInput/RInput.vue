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
  <mwc-textfield :label="label"></mwc-textfield>
</template>

<script lang="ts">
export default defineComponent({
  name: "RInput",
});
</script>
