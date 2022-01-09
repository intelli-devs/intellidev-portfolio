<template >
  <div class="header">
    <div class="text">
      <h1>{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
};
</script>
<style scoped>
.header {
  border: 1px solid black;
  padding: 4.5rem 1rem;
  line-height: 3em;
  z-index: 1;
  margin: 0;
}

.header .text h1{
  color: #33efbb;
  font-weight: lighter;
}

.header {
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/img/header.jpg);
  background-size: cover;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-position: left;
}
</style>
