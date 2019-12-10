<template>
  <div class="about">
    <div class="choice-row">
      <div class="choice-container">
        <div class="choice-container-color">
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

            <router-link :to="selectedPlanet">
              <b-button class="purple_hover" @click.native="persist"
                >Go to planet</b-button
              ></router-link
            >
          </div>
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
            :parallaxStrength="15"
            type="translation"
            tag="img"
            class="absolute"
            :src="img2"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="-40"
            type="translation"
            tag="img"
            class="absolute"
            :src="img3"
            id="kurwa"
          >
          </parallax-element>

          <transition name="puff">
            <parallax-element
              v-if="show"
              :parallaxStrength="15"
              type="depth"
              tag="img"
              class="absolute"
              :src="planetImage"
              :key="planetImage"
              id="kurwa"
            >
            </parallax-element>
          </transition>

          <parallax-element
            :parallaxStrength="60"
            type="rotation"
            tag="img"
            class="absolute"
            :src="img5"
            id="kurwa"
          >
          </parallax-element>
         <!-- <transition name="puff">
          <parallax-element
            :parallaxStrength="30"
            type="translation"
            tag="h1"
            class="absolute"
            :key="selectedPlanet"
             v-if="show"
            
          > {{selectedPlanet}}
          </parallax-element>
           </transition> -->

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
import blinkingButton from "@/components/blinkingButton.vue";
import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";

export default {
  components: {
    Multiselect,
    "b-button": blinkingButton,
    ParallaxContainer,
    ParallaxElement
  },

  data() {
    return {
      show: true,
      selectedPlanet: "",
      planets: ["Gliese 667Cc", "Kepler-22b", "Proxima Centauri B"],
      img: require("@/assets/planets/Earth.jpg"),

      img1: require("@/assets/planet_choice/1.png"),
      img2: require("@/assets/planet_choice/2.png"),
      img3: require("@/assets/planet_choice/3.png"),
      //img4: require("@/assets/planet_choice/4.png"),
      img5: require("@/assets/planet_choice/5.png")
    };
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
      console.log(localStorage.selectedPlanet + " localstorage Planet");
      console.log(this.selectedPlanet + " this planet");
      console.log(name);
    }
  }
};
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

  &-color {
    display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 70%;
  width: 80%;
  
  }

  .selector-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    .selector {
      margin: 2em;
    }
  }

  &-text {
    width: 90%;

    h1 {
      font-size: 3rem;
    }
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

.puff-enter-active {
  animation: puff-in-center 0.6s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

.puff-leave-active {
  animation: puff-out-center 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) both;
}

@keyframes puff-in-center {
  0% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes puff-out-center {
  0% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
}
</style>
