<template>
  <div id="nav">
    <div id="logo">
      Logo
    </div>
    <div class="nav-links">
 <router-link :to="{name:'Home'}">Home</router-link> |
    <router-link :to="{name:'About'}">About-us</router-link> |
    <router-link :to="{name:'Services'}">Services</router-link> |
    <router-link :to="{name:'Members'}">Members</router-link> |
    <router-link :to="{name:'Contact'}">Contact</router-link>
    </div>
   
  </div>
  
  <router-view/>
</template>

<style scr="./assets/tailwind.css">
#app {
  font-family: Monserat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  padding: 30px;
  border:2px solid black;
  justify-content:space-between;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav-links{
 
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
