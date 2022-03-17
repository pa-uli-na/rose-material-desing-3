import "@material/mwc-textfield";
import "@material/mwc-button";
import "@material/mwc-icon";
import "@material/mwc-icon-button";
import "@material/mwc-top-app-bar-fixed";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    layout: "fullscreen",
  },
};
