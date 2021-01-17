<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">v-model &amp; computed setters</router-link> |
      <router-link to="/events-example"
        >input event &amp; value binding</router-link
      >
    </div>
    <router-view />

    <t-card>
      <a
        target="_blank"
        href="https://woetflow.com/posts/using-v-model-to-bind-user-input-to-state-in-the-vuex-store"
        >Demo from Woet Flow blog</a
      >
    </t-card>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f6f7f8;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &:hover {
    text-decoration: underline;
  }

  &.router-link-exact-active {
    color: #42b983;
    font-style: italic;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
