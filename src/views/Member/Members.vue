<template>
  <div class="about m-52">
    <Header title="Members" />
  </div>
  <div class="mem body">
    <div class="head">
      <img src="" alt="plane-logo" srcset="" /> <text>MEET OUR TEAM</text>
      <img src="" alt="team logo" srcset="" />
    </div>
    <!-- All containers for Cards -->
    <section >
      <div v-if="error">{{error}}</div>
      <div class="container" v-if="members.length">
        <div v-for="member in members" :key="member.id">
        <div v-if="member.id < 4" class="row1">
          <div class="card">
            <div class="image"></div>
            <div class="text-field">
              <router-link
                :to="{
                  name: 'MemberDetails',
                  params: { id: member.id, mm: member.about },
                }"
              >
                <Member :m="member"
              /></router-link>
            </div>
          </div>
        </div>
        <div v-else class="row2">
          <div class="card"><Member :m="member" /></div>
        </div>
      </div>
      </div>
      <div v-else>Loading...</div>
    </section>
  </div>
  <Footer></Footer>
</template>
<style scoped>
.card a {
  text-decoration: none;
  color: black;
}
</style>
<script>

import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Member from "../../components/Member.vue";
import getMembers from '../../composable/getMembers.js'
export default {
  components: { Header, Footer, Member },
  data() {
    return {
  
    };
  },
  
  setup() {
    const {members, error, load} = getMembers()

    load()
    return { members, error};
  },
};
</script>