import RInput from "../components/RInput/RInput.vue";

export default {
  title: "RInput",
  component: RInput,
  decorators: [
    () => ({ template: '<div style="margin: 1em;"><story/></div>' }),
  ],
};

const Template = (args) => ({
  components: { RInput },
  setup() {
    return { args };
  },
  template: '<r-input v-bind="args"/>',
});

export const Text = Template.bind({});
Text.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "Wprowadź swoje imię i nazwisko",
  helperPersistent: "",
  label: "Imię Nazwisko",
  maxLength: 50,
  outlined: false,
  placeholder: "Jan Kowalski",
  prefix: "",
  required: false,
  sufix: "",
  type: "text",
};

export const Number = Template.bind({});
Number.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Wiek",
  maxLength: 50,
  max: 99,
  min: 0,
  outlined: false,
  placeholder: "Jan Kowalski",
  prefix: "",
  required: false,
  sufix: "",
  type: "number",
};

export const Password = Template.bind({});
Password.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Hasło",
  maxLength: 50,
  max: 99,
  min: 0,
  outlined: false,
  prefix: "",
  required: false,
  sufix: "",
  type: "password",
};

export const Email = Template.bind({});
Email.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Adres email",
  maxLength: 50,
  outlined: false,
  placeholder: "mail@mail.com",
  prefix: "",
  required: false,
  sufix: "",
  type: "email",
};

export const Tel = Template.bind({});
Tel.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Telefon",
  maxLength: 50,
  outlined: false,
  placeholder: "+48000000000",
  prefix: "",
  required: false,
  sufix: "",
  type: "email",
};

export const Date = Template.bind({});
Date.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Data rozpoczęcia",
  outlined: false,
  prefix: "",
  required: false,
  sufix: "",
  type: "date",
};

export const Datetime = Template.bind({});
Datetime.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Data i godzina rozpoczęcia",
  maxLength: 50,
  outlined: false,
  placeholder: "Jan Kowalski",
  prefix: "",
  required: false,
  sufix: "",
  type: "datetime-local",
};

export const Time = Template.bind({});
Time.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Imię Nazwisko",
  maxLength: 50,
  max: 99,
  min: 0,
  outlined: false,
  placeholder: "Jan Kowalski",
  prefix: "",
  required: false,
  sufix: "",
  type: "time",
};

export const Week = Template.bind({});
Week.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Imię Nazwisko",
  maxLength: 50,
  max: 99,
  min: 0,
  outlined: false,
  placeholder: "Jan Kowalski",
  prefix: "",
  required: false,
  sufix: "",
  type: "week",
};

export const Month = Template.bind({});
Month.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Imię Nazwisko",
  maxLength: 50,
  max: 99,
  min: 0,
  outlined: false,
  placeholder: "Jan Kowalski",
  prefix: "",
  required: false,
  sufix: "",
  type: "month",
};

export const Color = Template.bind({});
Color.args = {
  charCounter: false,
  disabled: false,
  icon: "",
  iconTrailing: "",
  helper: "",
  helperPersistent: "",
  label: "Imię Nazwisko",
  maxLength: 50,
  max: 99,
  min: 0,
  outlined: false,
  placeholder: "Jan Kowalski",
  prefix: "",
  required: false,
  sufix: "",
  type: "color",
};
