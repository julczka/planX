<template>
  <div class="about">

<div class="choice-row">
  <div class="choice-container">

    <div class="choice-container-text">
      <h1>Choose your destination</h1>
    </div>

    <div class="selector-container">
       <multiselect
      v-model="selectedPlanet"
      :options="planets"
      placeholder="Choose your destination"
      :allow-empty="false"
      :showLabels="false"
      :preselectFirst="true"
      class="selector"
      
    >
    </multiselect>

      <router-link :to="selectedPlanet"
>
     <b-button
       class="purple_hover"
       @click.native="persist"
       >Go to planet</b-button></router-link>


    </div>


  </div>

    <div class="img-container">


                  <parallax-container class="container">
            <parallax-element
           
              :parallaxStrength="-5"
              type="rotation"
              tag="img"
              class="absolute"
              :src="img1"
            >
            </parallax-element>

            <parallax-element
              :parallaxStrength="5"
              type="rotation"
              tag="img"
              class="absolute"
              :src="img2"
            >
            </parallax-element>
                  <transition name="fade">

                        <parallax-element
                         v-if="show"
                          :parallaxStrength="10"
                          type="depth"
                          tag="img"
                          class="absolute"
                          :src="planetImage"
                          id="kurwa"
                        >
                        </parallax-element>
                  </transition>
            <!-- <parallax-element
              :parallaxStrength="-10"
              type="depth"
              tag="img"
              class="absolute"
              :src="img4"
              id="kurwa"
            >
            </parallax-element> -->

            

            <parallax-element
              :parallaxStrength="20"
              type="rotation"
              tag="img"
              class="absolute"
              :src="img5"
              id="kurwa"
            >
            </parallax-element>
          </parallax-container>





  </div>
  


  </div>
<span> Selected {{ selectedPlanet }} </span>
</div>


    <!-- <h1>I'm going to:</h1>
    <select v-model="selectedPlanet">
    <option disabled value="">Please select one</option>
    <option>Proxima Centauri B</option>
    <option>Keppler-22b</option>
    <option>Gliese 667CC</option>
  </select>

   <router-link :to="selectedPlanet">
    <button @click="persist">Save</button>
   </router-link>
 



   -->


 




</template>

<script>
import Multiselect from "vue-multiselect";
import blinkingButton from '@/components/blinkingButton.vue'
import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";


export default {

components: {
    Multiselect,
    'b-button':blinkingButton,
     ParallaxContainer,
    ParallaxElement,
  },

  

   data () { 
     return {
    show: true,
    selectedPlanet: '',
    planets: ["Gliese 667Cc", "Kepler-22b", "Proxima Centauri B"],
    img: require('@/assets/planets/Earth.jpg'),

    img1: require("@/assets/planet_choice/1.png"),
      img2: require("@/assets/planet_choice/2.png"),
      //img3: require("@/assets/planet_choice/3.png"),
      img4: require("@/assets/planet_choice/4.png"),
      img5: require("@/assets/planet_choice/5.png")

    }
  },

  computed: {
    planetImage() {
      // Return nothing for the default empty string
      if (!this.selectedPlanet) {
        return;
      }

      const fileName = this.selectedPlanet.toLowerCase();

      // Request the image as a webpack module by using `require`
      return require(`@/assets/planet_choice/${fileName}.png`);
    }
  },


  mounted() {
    if (localStorage.selectedPlanet) {
      this.selectedPlanet = localStorage.selectedPlanet;
    }

    
  },
  watch: {
    selectedPlanet(newselectedPlanet) {
      localStorage.selectedPlanet = newselectedPlanet;
    }
  },

  methods: {
    persist() {
      localStorage.selectedPlanet = this.selectedPlanet;
      console.log(localStorage.selectedPlanet + ' localstorage Planet');
      console.log(this.selectedPlanet + ' this planet');
      console.log(name);
    },

    
  }
}
</script>

<style lang="scss">

@import "@/styles/_multiselect.scss";

.choice-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
}

.choice-container {
  
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  .selector-container {
    width: 50%;
    display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

    .selector {
      margin: 1em;
    }

  }

  &-text {

    width: 90%;

  }
}

.img-container {
  
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.container {
  position: relative;
  height: 800px;
  width: 800px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>