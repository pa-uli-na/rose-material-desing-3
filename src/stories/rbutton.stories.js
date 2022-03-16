import RButton from "../components/RButton/RButton.vue";

export default {
  title: "RButton",
  component: RButton,
  decorators: [
    () => ({ template: '<div style="margin: 1em;"><story/></div>' }),
  ],
};

const Template = (args) => ({
  components: { RButton },
  setup() {
    return { args };
  },
  template: '<r-button v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  disabled: false,
  raised: false,
  outlined: false,
  unelevated: false,
};
