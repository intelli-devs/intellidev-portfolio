<template>
  <div class="about m-52">
    <Header title="Services"/>
  </div>
    <div class="services container">
        <router-link :to="{ name: 'Services' }"><h1>Services</h1></router-link>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-2"> <h2>Web Design/Development</h2><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          iusto velit, aut laboriosam officia veritatis? Est fugit sint aliquid
          facilis praesentium neque? Quos illo eligendi magni, accusamus ad
          asperiores a.
          </div>

      </div>
      <div class="row-2">
        <div class="col-2"><h2>App Development</h2> <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          iusto velit, aut laboriosam officia veritatis? Est fugit sint aliquid
          facilis praesentium neque? Quos illo eligendi magni, accusamus ad
          asperiores a.
           </div>
           <div class="col-1"></div>
      </div>
       <div class="row row-3">
        <div class="col-1"></div>
        <div class="col-2"> <h2>UI/UX Design</h2><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          iusto velit, aut laboriosam officia veritatis? Est fugit sint aliquid
          facilis praesentium neque? Quos illo eligendi magni, accusamus ad
          asperiores a.
          </div>

      </div>
      <div class="row-2 row-4">
        <div class="col-2"><h2>Search Enginee Optimization</h2> <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          iusto velit, aut laboriosam officia veritatis? Est fugit sint aliquid
          facilis praesentium neque? Quos illo eligendi magni, accusamus ad
          asperiores a.
           </div>
           <div class="col-1"></div>
      </div>
       <Quotes>
     <template v-slot:title class="title">
       <h2>Today's Quote</h2>
     </template>
     <template v-slot:details>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cupiditate quod tempore numquam amet suscipit, cumque doloribus dolorem quia laborum enim delectus sit voluptas fugiat dolore sequi debitis mollitia illum.
     </template>
   </Quotes>
   <News title="Suscriber"></News>
    </div>
    <Footer></Footer>
</template>
<style scoped>
.services{
  overflow: hidden;
}
</style>
<script>
import Header from "../components/Header.vue";
import Quotes from '../components/Quotes.vue';
import News from '../components/News.vue';
import Footer from '../components/Footer.vue';
export default {
  components: { Header, Quotes, News, Footer },
  setup() {
    
  },
}
</script>