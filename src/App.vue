<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <nav>
    <router-link :to="{ name: 'Home'}" >Home</router-link> |
    <router-link to="/about">About</router-link>

    <div class="nav_user">
      {{ user.username }}
    </div>
  </nav>
  <router-view />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup(){
    // const state = reactive({
    //   user: {
    //     username: 'Userhere'
    //   }
    // })

  const store = useStore();
  const user = computed(() => store.state.User.user);

    return {
      //state,
      user
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
