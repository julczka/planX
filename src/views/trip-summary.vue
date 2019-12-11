<template>
  <div class="planet_page">


    <div class="first_section">
        <img class="heroimg" src="../assets/heroimg/yourtrip_hero.svg" alt=""/>
        <h1>Your trip to {{ selectedPlanet }} starts right now!</h1> 
    </div>


    <section class="second_section">
        <img class="heroimg" src="../assets/heroimg/getready_hero.svg" alt="">
        <h1>Prepare yourself!</h1>
        <div class="second_section_text">
            <p>
            {{selectedShip}} is ready to launch. We have prepared the space suits for you to use at the launch and landing parts only. Otherwise, the space suits shall be stored in our changing rooms. Food and accommodation will be assured by the PlaneX staff. 
            </p>
        </div>
    </section>

    

    <section class="third_section">
      <div class="content_container">
         <div class="graphic_banner">
          <img class="photo" src="../assets/photos/rocketlaunch.jpg" alt="" />
        </div>
        <div class="text_banner">
          <div class="text_control">
            <h1>Launch from earth</h1>
            <p>
              The launch of {{ selectedShip }} will occur every month from Earth. It is then when you should always have the space suit equipped. 
            </p>
          </div>
        </div>
      </div>
      <div class="content_container">
        <div class="graphic_banner">
          <img class="photo" src="../assets/photos/orbitrip.jpg" alt="" />
        </div>
        <div class="text_banner">
          <div class="text_control">
            <h1>Trip to the orbit</h1>
            <p>
              The hardest part of the trip is the flight to Earth's orbit. This is because of the high G-forces. Getting to Earth's orbit will most probably knock you out for a couple of minutes but once the {{selectedShip}} reaches escape velocity from the planet, it’ll all come back to normal and you can resume the normal activity in space.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="fourth_section">
      <img class="heroimg" src="../assets/heroimg/dinner_hero.svg" alt="">
      <h1>Dinner at the orbit</h1>
      <div class="second_section_text">
      <p>
        Dinner will be served at the canteen, restaurants or the quick snack vending machines, located throughout the {{selectedShip}} center area.
      </p>
      </div>
    </div>

<section class="second_section">
        <img class="heroimg" src="../assets/heroimg/hibernation_hero.svg" alt="">
        <h1>Hibernation</h1>
        <div class="second_section_text">
            <p>
           You will go into a very deep sleep in the middle of your trip, but you will have a virtual reality dream and you can still work on your stuff while asleep because your brain will still be active as long as you’re in the hibernation chamber.
            </p>
        </div>
    </section>





    <section class="third_section">
      <div class="content_container">
        <div class="graphic_banner">
          <img class="photo" src="../assets/photos/hibernation.png" alt="" />
        </div>
        <div class="text_banner">
          <div class="text_control">
            <h1>How it works</h1>
            <p>
             Once you have arrived at the hibernation chamber, all you can do is sit tight, relax and get a real good night’s sleep. The only difference being it’ll be a very, very long sleep. To wake up for some real-life matter, you can tell your brain to do that while asleep.
            </p>
          </div>
        </div>
      </div>
      <div class="content_container">
        <div class="graphic_banner">
          <img class="photo" src="../assets/photos/hibernation2.jpg" alt="" />
        </div>
        <div class="text_banner">
          <div class="text_control">
            <h1>Is it safe?</h1>
            <p>
             While in the hibernation chamber you will be safe from all events as the ship will be managed in turns by all the staff in the very ship.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="landing_section">
        <img class="heroimg" src="../assets/heroimg/landing_hero.svg" alt="">
        <h1>Landing</h1>
        <div class="second_section_text">
            <p>
            Once the ship has landed on {{selectedPlanet}}, all hibernation chambers will stop working and open its doors with a message from the ship saying: You have arrived at your destination.
            </p>
        </div>
    </section>

     <div class="fifth_section">
      <img class="heroimg" src="../assets/heroimg/dinner_hero.svg" alt="">
      <h1>Will there be life on {{selectedPlanet}}?</h1>
      <div class="fifth_section_text">
      <p>
        {{selectedPlanet}} is an unexplored destination. It is most likely capable of sustaining life, but will it be anything like we know from Earth? Will there be lush forests filled with multiple species of animals or a primordial ocean that will reveal its living nature only under the microscope? This question for now remains unanswered. Click below to learn more about how scientists look for life on planets lightyears away from us. 
      </p>

      <router-link :to="'/life'">
              <b-button class="purple_hover"
                >Life on other planets</b-button
              ></router-link
            >
    
      </div>
    </div>

    
   
  </div>
</template>


<script>
import blinkingButton from "@/components/blinkingButton.vue";

export default {

  components: { 
    "b-button": blinkingButton,
 },

  data () { 
     return {
    selectedShip: '',
    selectedPlanet: '',
    }
  },
  mounted() {
    if (localStorage.selectedShip) {
      this.selectedShip = localStorage.selectedShip;
    }
     if (localStorage.selectedPlanet) {
      this.selectedPlanet = localStorage.selectedPlanet;
    }
  },
  watch: {
    selectedShip(newselectedShip) {
      localStorage.selectedShip = newselectedShip;
    },
    selectedPlanet(newselectedPlanet) {
      localStorage.selectedPlanet = newselectedPlanet;
    }
  },
}
</script>


<style lang="scss">

a {
  text-decoration: none;
}

.container {
  position: relative;
  height: 600px;
  width: 600px;
  z-index: 1;
}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heroimg {
    width: 130px;
    height: 130px;
    margin:20px;
  }



.first_section,.fourth_section {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.first_section {
  background-image: url("../assets/parallax/launch_parallax.jpg");
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.second_section {
  width: 100%;
  height:80vh;
  flex-direction:column;
  display: flex;
  justify-content:flex-start;
  align-items:center;
  box-sizing: border-box;
  padding: 0 1em;
  background: rgb(45,34,115);
background: linear-gradient(0deg, rgba(45,34,115,1) 15%, rgba(2,2,57,1) 99%);
  .heroimg1{
  width:150px;
  height:150px;
}

}

.second_section_text{
      width:50%;
      height:30%;
  }

  .heroimg {
      width: 100px;
      height: 100px;
    }


.third_section {
  width: 100%;
  height: 150vh;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  flex-direction:column;
  background-color:#2d2273;
  .hero_image {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: center;
    h1 {
      
      color: white;
      font-size: 3rem;
      margin: .3em;
    }
  }
  .content_container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    background-color:#2D2273;
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
    .graphic_banner {
      width: 50%;
      height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#2D2273;
      
      .photo {
        width: 90%;
        height:80%;
        
      }

      img {
          object-fit: cover;    
          object-position: 50% 50%;
      }
    }
    .text_banner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      height: 100%;
   
    background: #2D2273;
.text_control {
        width: 50%;
        height: 30%;
      }
      h1 {
        
        font-size: 40px;
      }
      p {
        
        font-size: 16px;
        margin: 20px;
      }
    }
  }
}

.fourth_section {
  background-image: url("../assets/parallax/dinnerok-parallax.jpg");
  min-height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}

.fifth_section {
  background-image: url("../assets/parallax/trip-final-parallax.jpg");
  min-height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}

.landing_section{
   width: 100%;
   height:100vh;
  flex-direction:column;
  display: flex;
  justify-content:flex-end;
  align-items:center;
  box-sizing: border-box;
  padding: 0 1em;
background: rgb(4,3,59);
background: linear-gradient(0deg, rgba(4,3,59,1) 47%, rgba(45,34,115,1) 92%);
}

.fifth_section_text {
  width: 40%;
  flex-direction:column;
  display: flex;
  justify-content:center;
  align-items:center;
}


@media only screen and (max-width: 736px) {
  .basic_info_section {
    display: flex;
    flex-direction: column;
    .planet_container {
      width: 100%;
    }
    .info_container {
      width: 100%;
    }
  }
  .third_section {
    height:300vh;
    .content_container {
      flex-direction: column;
      display: flex;
    width: 100%;
    height: 90%;
    justify-content:flex-start;
    align-items: center;
      .graphic_banner{
          .photo {
        width: 93.5vh;
        height:85vh;
      }
      
      }
      &:nth-child(2) {
        flex-direction: column;
      }
    
  

   .text_banner {
      display: flex;
      justify-content:flex-start;
      align-items:center;
      flex-direction:column;
      width: 100%;
      height:40%;
    background: #2D2273;
    .text_control{
      width:90%;
      h1 {
        
        font-size: 40px;
      }
      p {
        font-size:18px;
        margin: 8px;
      }
    }
    }
     }
}


.landing_section{
  font-size:18px;
  width:100%;
  display:flex;
  justify-content:center;
  height:120vh;
}

.second_section_text{
  font-size:18px;
  width:90%;
}

.fifth_section_text {
  width: 90%;
  
}

}
  


</style>
