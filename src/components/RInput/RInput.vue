<script lang="ts" setup>
import { defineComponent } from "vue";

const props = defineProps({
  charCounter: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  helper: { type: String },
  helperPersistent: { type: Boolean },
  icon: { type: String },
  iconTrailing: { type: String },
  label: { type: String },
  maxLength: { type: [Number, String] },
  max: { type: [Number, String] },
  min: { type: [Number, String] },
  outlined: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  placeholder: { type: String },
  prefix: { type: String },
  sufix: { type: String },
  type: { type: String },
});
</script>

<template>
  <mwc-textfield
    :charCounter="charCounter"
    :disabled="props.disabled"
    :helper="props.helper"
    :helperPersistent="props.helperPersistent"
    :icon="props.icon"
    :iconTrailing="props.iconTrailing"
    :label="props.label"
    :max="props.max"
    :maxLength="props.maxLength"
    :min="props.min"
    :outlined="props.outlined"
    :placeholder="props.placeholder"
    :prefix="props.prefix"
    :required="props.required"
    :sufix="props.sufix"
    :type="type"
  ></mwc-textfield>
</template>

<script lang="ts">
export default defineComponent({
  name: "RInput",
});
</script>
