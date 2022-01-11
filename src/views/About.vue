<template>
  <div class="about m-52">
    <Header title="About" />
  </div>
  <div class="about about">
    <router-link :to="{ name: 'About' }"><h1>About-us</h1></router-link>
    <div class="row">
      <div class="col-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi,
        quasi sequi illum nemo repudiandae corrupti porro deserunt recusandae
        mollitia vitae rem modi libero ab suscipit nobis laborum ipsa dolorum
        harum saepe molestiae cumque placeat a. Asperiores inventore velit culpa
        voluptatem fuga repellat temporibus facere placeat veniam animi
        blanditiis expedita veritatis accusantium ad quod sit explicabo
        laboriosam natus, quisquam soluta ut corrupti. Non, maiores dolorum ea
        reprehenderit in vel? Dicta odit, inventore amet fuga aliquam
        perspiciatis aspernatur libero, laudantium dignissimos ab eos expedita
        eveniet nulla doloribus error dolorum ducimus beatae veniam
        exercitationem! Iure sunt, quis facere perspiciatis autem modi dolore!
        <div class="col-1">
          <!-- <img src="" alt="About-us Image" /> -->
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi,
        quasi sequi illum nemo repudiandae corrupti porro deserunt recusandae
        mollitia vitae rem modi libero ab suscipit nobis laborum ipsa dolorum
        harum saepe molestiae cumque placeat a. Asperiores inventore velit culpa
        voluptatem fuga repellat temporibus facere placeat veniam animi
        blanditiis expedita veritatis accusantium ad quod sit explicabo
        laboriosam natus, quisquam soluta ut corrupti. Non, maiores dolorum ea
        reprehenderit in vel? Dicta odit, inventore amet fuga aliquam
        perspiciatis aspernatur libero, laudantium dignissimos ab eos expedita
        eveniet nulla doloribus error dolorum ducimus beatae veniam
        exercitationem! Iure sunt, quis facere perspiciatis autem modi dolore!
        <br />
      </div>
    </div>
  </div>
  <News></News>
  <Footer></Footer>
</template>
<script>
import Header from "../components/Header.vue";
import Quotes from "../components/Quotes.vue";
import Footer from "../components/Footer.vue";
import News from "../components/News.vue";
export default {
  components: { Header, Quotes, Footer, News },
  setup() {},
};
</script>
<style>
.about.about {
  /* display: flex; */
  /* padding: 2em 0;  */
  padding: em;
}

.about.about .row {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2em 2em;
  gap: 20em;
}

.about.about .row .col-2 {
  padding: 2em;
  box-shadow: 0 0 20px #ccc;
  width: 100vw;
  height: fit-content;
  padding: 2em;
  word-wrap: break-word;
  word-break: break-all;
}
.about.about .row .col-1 {
  margin: 2em 0;
  padding: 2em;
  width: 97vw;
  height: 40vh;
  background: url(../assets/svg/about.svg) center no-repeat;
  background-size: contain;

  box-shadow: 0 0 20px #ccc;
  box-sizing: border-box;
}
</style>