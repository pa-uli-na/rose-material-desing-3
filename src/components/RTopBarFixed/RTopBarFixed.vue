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
  <mwc-top-app-bar-fixed>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">Title</div>
    <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
  </mwc-top-app-bar-fixed>
</template>

<script lang="ts">
export default defineComponent({
  name: "RTopBarFixed",
});
</script>
