<template>
  <div id="nav">
    <div id="logo">
      <img src="./assets/img/logo.jpg" alt="logo">
    </div>
    <div class="nav-links">
 <router-link :to="{name:'Home'}">Home</router-link>
    <router-link :to="{name:'About'}">About-us</router-link> 
    <router-link :to="{name:'Services'}">Services</router-link> 
    <router-link :to="{name:'Members'}">Members</router-link> 
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
  padding: .3em 0;
  border:2px solid black;
  justify-content:space-around;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 1em;
}
.nav-links{
 padding: 0 0em;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#logo img{
  width: 10vw;
  border-radius:100vw 100vw;
  height: 5em;
  align-items: center;
}
@media screen and (max-width: 640px){
  #nav{
    display: inline-block;
    
   
  }
  .nav-links{
    display: flex;
    flex-direction: column;
    
  }
  #nav a{
    padding: 1em;
    font-size:1.3rem;
  }
}
</style>
