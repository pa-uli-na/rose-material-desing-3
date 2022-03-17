import RTopBarFixed from "../components/RTopBarFixed/RTopBarFixed.vue";

export default {
  title: "RTopBarFixed",
  component: RTopBarFixed,
};

const Template = (args) => ({
  components: { RTopBarFixed },
  setup() {
    return { args };
  },
  template: '<r-top-bar-fixed v-bind="args"/>',
});

export const Standard = Template.bind({});
Standard.args = {};
