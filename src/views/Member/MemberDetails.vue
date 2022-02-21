<template>
  <div class="member">
    <div v-if="error">{{ error }}</div>
    <div v-if="m">
      <div class="about">{{ m.name }}</div>
      {{ m.into }}
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import getSingleMember from "../../composable/getSingleMember";
export default {
  props: { id: Number },
  data() {
    return {};
  },
  setup(props) {
    const { m, error, load } = getSingleMember(props.id)
    load()
    return { m, error }
  },
};
</script>

<style>
</style>