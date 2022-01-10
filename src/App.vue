<template>
  <div id="nav">
    <div id="head">
      <div id="logo">
      <img  src="./assets/img/logo.jpg" alt="logo" />
    </div>
    <h3 @click="toggleMenu()" v-show="sc" class="menu-btn btn" >Menu <img v-show="!showMenu" src="./assets/svg/menu-mobile.svg" alt="menu-btn"> <img v-show="showMenu" src="./assets/svg/menu-close.svg" alt=""></h3> 
    </div> 
   <span class="menu-span"> <div v-show="showMenu"  :class="['menu']" class="nav-links menu-span">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About-us</router-link>
      <router-link :to="{ name: 'Services' }">Services</router-link>
      <router-link :to="{ name: 'Members' }">Members</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div></span>
  </div>

  <router-view />
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
  padding: 0.3em 0;
  justify-content: space-around;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 1em;
}
.nav-links {
  padding: 0 0em;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#logo img {
  width: 10vw;
  border-radius: 100vw 100vw;
  height: 5em;
  align-items: center;
}
@media screen and (max-width: 640px) {
  .menu-btn{
    cursor: pointer;
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    gap: 0.5em;
  }
  #nav {
    display: inline-block;
  }
  #head{
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  gap: 10em;
}
.menu-span{
  transition: 10s ;
}

  #nav #logo img {
    /* float: left;
    transform: translate(-150px,0px); */
    width: 10vw;
    border-radius: 100vw 100vw;
    height: 2em;
    align-items: center;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
  }
  #nav a {
    padding: 1em;
    font-size: 1.1rem;
  }
}
</style>
<script>
import { computed, ref } from "@vue/reactivity";
import "./assets/main.css";
import { watchEffect, watch } from "@vue/runtime-core";
export default {
  setup() {
    const sc = ref(true);
    const showMenu = ref(false);

    //function to toggle the Menu
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    }

    const scSize = ref(window.innerWidth);
    watchEffect(() => {
      console.log("Watcheffect ran", scSize.value);
    })

    const isMobile = computed(() => {
      if (scSize.value < 641) {
        sc.value = true
      }
      else if(scSize.value > 640){
        sc.value = false
      }
      return sc.value;
    })

    return { isMobile, sc, scSize, toggleMenu, showMenu };
  },
};
</script>
