<template>
  <div class="choose-ship">
    <div class="choice-row">
      <div class="choice-container">
        <div class="choice-container-color">
          <div class="choice-container-text">
            <h1>Choose your spaceship</h1>
          </div>

          <div class="selector-container">
            <multiselect
              v-model="selectedShip"
              :options="ships"
              placeholder="Choose your spaceship"
              :allow-empty="false"
              :showLabels="false"
              :preselectFirst="true"
              :searchable="false"
              class="selector"
            >
            </multiselect>

            <router-link :to="selectedShip">
              <b-button class="purple animation" @click.native="persist"
                >Go to ship</b-button
              ></router-link
            >
          </div>
        </div>
      </div>

      <div class="img-container">
        <parallax-container class="ship-paralax-container">
          <parallax-element
            :parallaxStrength="-3"
            type="rotation"
            tag="img"
            class="absolute"
            :src="img1"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="7"
            type="translation"
            tag="img"
            class="absolute"
            :src="img2"
          >
          </parallax-element>

          <transition name="puff">
            <parallax-element
              v-if="show"
              :parallaxStrength="20"
              type="translation"
              tag="img"
              class="absolute"
              :src="shipImage"
              :key="shipImage"
            >
            </parallax-element>
          </transition>

          <parallax-element
            :parallaxStrength="-15"
            type="translation"
            tag="img"
            class="absolute"
            :src="img4"
          >
          </parallax-element>
        </parallax-container>
      </div>
    </div>
  </div>
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
      selectedShip: "",
      show: true,
      ships: ["Space Cruiser", "Space Jet"],
      img1: require("@/assets/ship-choice/1.png"),
      img2: require("@/assets/ship-choice/2.png"),
      img4: require("@/assets/ship-choice/4.png")
    };
  },

  computed: {
    shipImage() {
      // Return nothing for the default empty string
      if (!this.selectedShip) {
        return;
      }

      const fileName = this.selectedShip.toLowerCase();

      // Request the image as a webpack module by using `require`
      return require(`@/assets/ship-choice/${fileName}.png`);
    }
  },

  mounted() {
    if (localStorage.selectedShip) {
      this.selectedShip = localStorage.selectedShip;
    }
  },
  watch: {
    selectedShip(newselectedShip) {
      localStorage.selectedShip = newselectedShip;
    }
  },

  methods: {
    persist() {
      localStorage.selectedShip = this.selectedShip;
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
  background: rgb(0, 0, 21);
  background: linear-gradient(
    270deg,
    rgba(0, 0, 21, 1) 64%,
    rgba(45, 34, 115, 1) 90%
  );
}

a {
  text-decoration: none;
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

  &-text {
    width: 90%;

    h1 {
      font-size: 3rem;
    }
  }
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

.img-container {
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.ship-paralax-container {
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

@media only screen and (max-width: 1340px) {
  .ship-paralax-container {
    height: 600px;
    width: 600px;
  }

  .img-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1050px) {
  .choice-row {
    flex-direction: column;
    height: auto;
    background: rgb(0, 0, 21);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 21, 1) 64%,
      rgba(45, 34, 115, 1) 90%
    );
  }

  .choice-container {
    width: 90%;
  }

  .choice-container-color {
    width: 100%;
  }

  .selector-container {
    flex-direction: column;

    .selector {
      margin: 1em;
    }
  }
}

@media screen and (max-width: 759px) {
  .choice-container {
    height: 100%;
    width: 90%;
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

    &-text {
      width: 90%;

      h1 {
        font-size: 1.2rem;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .ship-paralax-container {
    height: 300px;
    width: 300px;
  }
}
</style>
