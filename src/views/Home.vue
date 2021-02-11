<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome!"/> -->
    <!-- <user-profile /> -->
    <h1>Home</h1>
    <router-link class="user-list"  v-for="user in users" :key="user.id" :to="{ name: 'UserProfile', params: {userId: user.id} }">
      {{ user.username }}  | 
    </router-link> 
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {  users } from '@/assets/users.js'
// import UserProfile from '@/views/UserProfile'

export default {
  name: 'Home',
  // components: { UserProfile },
  setup(){
    return {
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  padding: 50px 5%;
}

.user-list{
  display: flex;
  flex-direction: column;
}
</style>
