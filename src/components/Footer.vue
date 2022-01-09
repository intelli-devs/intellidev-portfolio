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
    
      <p><a href="http://info@intellidev.com">info@intellidev.com</a></p> <p>+237 679797979</p> <p><a href="http://id-portfolio001.herokuapp.com">id-portfolio001.herokuapp.com</a></p>
    </div>
  </div>
  <h4 id="copyright">All rights Reserved <strong>@intellidev 2022</strong></h4>
  <div></div>
</template>
<style >
.footer {
  display: flex;
  align-items:stretch;
  justify-content: space-evenly;
}
.footer .service{
  word-wrap: break-word;
}
.footer .quick-links{
    display: flex;
    flex-direction: column;
}
.footer .box{
    width: calc(100vw/3);
    padding:.5em 2em 0 2em;
    word-wrap: break-word;
    line-height: 1.5em;
}
.footer a{
    text-decoration: none;
    color: #808f8b;;
    cursor:pointer ;
}
h3{
    color:#33EFBB;
}
#copyright{
    color: white;
    left: 0;
    right: 0;
    background: rgb(80, 77, 71);
    font-weight: 300;
  
}
strong{
    color:#33EFBB;
}
@media screen and (max-width: 640px){
    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        /* max-height: 40px; */
        
    }
    .footer .box{
    width: calc(100vw/3);
    padding:.5em 2em 0 2em;
    word-wrap: break-word;
    line-height: 1.5em;
    padding: 0;
    text-align: justify center;
    max-height: 40vh;
    }
}
    @media screen and (min-width: 768px){
    .footer .service .box{
    height: 20px; 
    overflow: scroll;
    }
    }

.footer .box{
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    max-height: 25vh;
    overflow: auto;
}

</style>