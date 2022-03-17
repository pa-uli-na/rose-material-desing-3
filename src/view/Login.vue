<template>
  <div class="flex flex-col align-center pt-10">
    <label class="heading1">Logowanie</label>
    <mwc-textfield class="p-4" type="text" label="Login" outlined>
    </mwc-textfield>

    <mwc-textfield class="p-4" type="password" label="Hasło" outlined>
    </mwc-textfield>

    <mwc-button class="p-4" raised label="Zaloguj"> </mwc-button>

    <mwc-formfield class="p-4" label="Logowanie domenowe">
      <mwc-switch v-on:change="changeLoginType"></mwc-switch>
    </mwc-formfield>

    <template v-for="role in roles" :key="role">
      <mwc-formfield :label="role.label">
        <mwc-radio
          name="role"
          :value="role.value"
          v-on:change="changeRole"
        ></mwc-radio>
      </mwc-formfield>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const log = (arg: unknown) => console.log(arg);
const domainLoginType = ref(false);
const selectedRole = ref("");

/** Switch - nie ma jeszcze dodanych eventów ! */
function changeLoginType(event: Event) {
  const radioEl = event.target as HTMLInputElement;
  domainLoginType.value = radioEl.value === "checked";
  log(domainLoginType.value);
}

const roles = [
  { label: "Pracownik sklepu", value: "store_employee" },
  { label: "Pracownik ochrony", value: "security_employee" },
  { label: "Pracownik uczący się", value: "newbee_employee" },
  { label: "Pracownik centrala", value: "central_employee" },
  { label: "Pracownik zewnętrzny", value: "external_employee" },
];

/** Radio */
function changeRole(event: Event) {
  const radioEl = event.target as HTMLInputElement;
  selectedRole.value = radioEl.value;
  log(selectedRole.value);
}
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
});
</script>
