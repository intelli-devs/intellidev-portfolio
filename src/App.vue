<template>
  <div id="nav">
    <div id="head">
      <div id="logo">
      <img  src="./assets/img/logo.jpg" alt="logo" />
    </div>
    <h3 @click="toggleMenu()" v-show="isMobile" class="menu-btn btn" >Menu <img v-show="!showMenu" src="./assets/svg/menu-mobile.svg" alt="menu-btn"> <img v-show="showMenu" src="./assets/svg/menu-close.svg" alt=""></h3> 
    </div> 
   <span class="menu-span"> <div v-show="showMenu || scSize>640"  :class="['menu']" class="nav-links menu-span">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About-us</router-link>
      <router-link :to="{ name: 'Services' }">Services</router-link>
      <router-link :to="{ name: 'Members' }">Members</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div></span>
  </div> 

  <div class="router-view"><router-view /></div>
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
  z-index: 100;
  display: flex;
  padding: 0.3em 0;
  justify-content: space-around;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: rgb(17, 14, 14);
  padding: 0 1em;
}
.nav-links {
  padding: 0 0em;
}
#nav a.router-link-exact-active {
  color: #12e9ac;
  /* background: rgba(13, 13, 14, 0.1); */
  transition: ease-in-out .3s;
 /* transform: scale(5, 8); */
}
#logo img {
  width: 10vw;
  border-radius: 100vw 100vw;
  height: 5em;
  align-items: center;
}
@media screen and (max-width: 640px) {
 
  .menu-btn img{
size: 4em;
color: white;
width: 6vw;

  }
  #head{
    padding: 0.4em 2em;
  }
  .menu-btn{
    cursor: pointer;
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    gap: 0.5em;
  }
  #nav {
    left: 0;
    right: 0;
    display: inline-block;
    scroll-behavior: smooth;
    position: fixed;
    /* transform: translate(-150px); */
    background: rgb(107, 105, 104);
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
    transform: translate(-150px,0px);  */
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
