<template>
  <div id="news" class="container">
    <div class="text">
      <h1>Subscribe</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
        ducimus veritatis, esse ipsa facilis pariatur.
      </p>
      <p class="input">
        <input type="text" placeholder="Enter email..." name="Email" />
        <label for="Email"></label>
        <Button>
          <router-link :to="{ name: 'Services' }">
            Services
          </router-link></Button
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  setup() {},
};
</script>

<style >
#news input{
    opacity: 0.3;
}
#news {
  width: 100vw;
  margin:2em 0;
  padding: 1em 5em;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../assets/img/news02.jpg);
  background-size: cover;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-position:center; 
 
}
#news .text{
     color: rgb(207, 206, 206);
}
a {
  color: #09d198;
}
#news .input{
    margin-top: 1em;
}

</style>