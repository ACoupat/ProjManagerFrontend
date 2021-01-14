<template>
  <div id="app">
    <b-button class="sidebar-button" v-b-toggle.sidebar-1>
      <font-awesome-icon :icon="menuIcon"/>
    </b-button>
    <b-sidebar id="sidebar-1" title="" shadow no-slide backdrop no-header-close>
      <div class="px-3 py-2 sidebar-content">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </div>
    </b-sidebar>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:whitesmoke;
  width:100%;
  height:100%;
}
  .sidebar-button {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 1100;
    background-color: whitesmoke;
    border: none;
    color : black;
    box-shadow:none;
  }

  .sidebar-button:focus {
    @extend .sidebar-button;
  }

  .sidebar-content{
    margin-top:1.5rem;
  }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
