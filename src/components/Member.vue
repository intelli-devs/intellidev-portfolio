<template>
  <div class="member"></div>
  {{m.name}} <p> {{m.function}}</p>
</template>

<script>
export default {
  props: {
    m: {
      default: null,
      type: Object,
    },
  },
};
</script>

<style>
</style>