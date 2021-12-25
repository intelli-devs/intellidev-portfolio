<template>
  <Header title="Welcome" class="head">
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
    <Button> <router-link :to="{name:'Contact'}">Contact</router-link> </Button>
  </Header>
  <div class="body">
    <div class="about">
      <router-link :to="{ name: 'About' }"><h3>About-us</h3></router-link>
      <div class="row">
        <div class="col-1">
          <!-- <img src="" alt="About-us Image" /> -->
        </div>
        <div class="col-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          iusto velit, aut laboriosam officia veritatis? Est fugit sint aliquid
          facilis praesentium neque? Quos illo eligendi magni, accusamus ad
          asperiores a.
          <br> <router-link :to="{name:'About'}">Read More</router-link>
        </div>
      </div>
    </div>
    <hr>
   <Quotes>
     <template v-slot:title class="title">
       <h2>Today's Quote</h2>
     </template>
     <template v-slot:details>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, cupiditate.
     </template>
   </Quotes>


    
    <div class="services container">
        <router-link :to="{ name: 'Services' }"><h3>Services</h3></router-link>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          iusto velit, aut laboriosam officia veritatis? Est fugit sint aliquid
          facilis praesentium neque? Quos illo eligendi magni, accusamus ad
          asperiores a.
          </div>

      </div>
      <div class="row-2">
        <div class="col-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          iusto velit, aut laboriosam officia veritatis? Est fugit sint aliquid
          facilis praesentium neque? Quos illo eligendi magni, accusamus ad
          asperiores a.
           </div>
           <div class="col-1"></div>
      </div>
      <Button>
        <router-link :to="{name:'Services'}">Read More</router-link>
      </Button>
    </div>
    <News>

    </News>
  </div>
</template>

<script>
import News from "../components/News.vue"
import Quotes from "../components/Quotes.vue";
import Header from "../components/Header.vue";
export default {
  components: { Quotes, Header, News },
  setup() {},
};
</script>

<style>


</style>