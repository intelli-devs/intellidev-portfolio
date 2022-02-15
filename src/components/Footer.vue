<template>
  <div class="footer container">
    <div class="service container box">
      <h3>Services</h3>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi minus
      vitae a dolore repellendus explicabo quasi quod minima animi!
    </div>
    <div class="quick-links container box">
      <h3>Quick Links</h3>

      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About-us</router-link>
      <router-link :to="{ name: 'Services' }">Services</router-link>
      <router-link :to="{ name: 'Members' }">Members</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>

    <div class="insta container box">
      <h3>Instagram</h3>
    </div>
    <div class="more-info container box">
      <h3>More Info</h3>

      <p><a href="http://info@intellidev.com">info@intellidev.com</a></p>
      <p>+237 679797979</p>
      <p>
        <a href="http://id-portfolio001.herokuapp.com"
          >id-portfolio001.herokuapp.com</a
        >
      </p>
    </div>
  </div>
  <h4 id="copyright">
    <div class="text">
     Copyright &copy; 2022 <strong>Intelli-Dev Team </strong>
      <p>All rights Reserved</p>
    </div>
  </h4>
  <div></div>
</template>
<style >
.footer {
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  padding: 1em;
}
.footer .service {
  word-wrap: break-word;
}
.footer .quick-links {
  display: flex;
  flex-direction: column;
}
.footer .box {
  width: calc(100vw / 3);
  padding: 0.5em 2em 0 2em;
  word-wrap: break-word;
  line-height: 1.5em;
}
.footer a {
  text-decoration: none;
  color: #808f8b;
  cursor: pointer;
}
h3 {
  color: #33efbb;
}
#copyright {
  padding: 2em 0;
  color: rgba(255, 255, 255, 0.466);
  left: 0;
  right: 0;
  background: rgb(5, 5, 5);
  font-weight: 300;
  min-height: 10vh;
  float: center;
}
#copyright .text {
  margin: auto auto;
  width: 80vw;
  /* background: rgb(187, 174, 174); */
}
strong {
  color: #33efbad2;
}
@media screen and (max-width: 640px) {
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-top:em ; */
    /* max-height: 40px; */
    gap: 2em;
  }
  .footer .box {
    width: 80vw;
    padding: 0.5em 2em 22em 2em;
    word-wrap: break-word;
    line-height: 1.5em;
    padding: 0;
    text-align: center;
    /* justify-content: right; */
    max-height: 40vh;
  }
}
@media screen and (min-width: 768px) {
  .footer .service .box {
    height: 20px;
    overflow: scroll;
  }
}

.footer .box {
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  max-height: 25vh;
  overflow: auto;
}
</style>