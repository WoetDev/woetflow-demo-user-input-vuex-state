import Vue from "vue";
import VueRouter from "vue-router";
import SettersExample from "../components/setters/SettersExample.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SettersExample",
    component: SettersExample
  },
  {
    path: "/events-example",
    name: "EventsExample",
    component: () =>
      import(
        /* webpackChunkName: "eventsexample" */ "../components/events/EventsExample.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
