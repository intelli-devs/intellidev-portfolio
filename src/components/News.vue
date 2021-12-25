<template>
    <div id="news" class="container">
        <h1>Subscibe</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ducimus veritatis, esse ipsa facilis pariatur.</p>
    <p class="input">
            <input type="text" placeholder="Enter email..."  name="Email">
            <label for="Email"></label>
            <Button> <router-link :to="{name:'Services'}"> Services </router-link></Button>

    </p>
    </div>
</template>
<script>
export default {
    props: ['title']
    ,
    setup() {
        
    },
}
</script>

<style scoped>
#news{
    margin-top: 2em;
    padding: 1em 5em;
}
</style>