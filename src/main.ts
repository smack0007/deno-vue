import { Vue } from "./deps.ts";

console.info("Starting...");

const App = {
  template: `
      <div>
       <h1>Hello Vue3</h1>
       <p>{{ message }}</p>
      </div>
    `,
  data() {
    return {
      message: "Oh hi from the component",
    };
  },
};

Vue.createApp(App).mount("#app");
