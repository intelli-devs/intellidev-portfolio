<template >

  <div class="header">
    <h1>{{title}}</h1>
       <slot></slot>
  </div>
 

</template>

<script>
export default {
    name: "Header",
    props: ['title']
   
}
</script>
<style scoped>
.header{
    border: 1px solid black;
    padding: 4.5rem 1rem;
    line-height: 3em;
    
}
</style>
