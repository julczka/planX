<template>
  <div class="planet_page">
    <section class="basic_info_section">
      <div class="planet_container">
        <model-gltf
          src="/models/gliese/scene.gltf"
          :backgroundAlpha="bgAlpha"
          :backgroundColor="bgColor"
          :rotation="rotation"
          @on-load="onLoad"
        ></model-gltf>
      </div>
      <div class="info_container">
        <div class="info-text">
          <h1>Gliese 667Cc</h1>
          <h2>Basic info:</h2>

          <ul>
            <li>24 light years away</li>
            <li>Orbiting a red dwarf, a triple star system, taking 28 days to orbit around. </li>
            <li>3,7x gravity of Earth</li>
            <li>54% bigger radius than of the Earth, a Super-Earth</li>
            <li>In the constellation of Scorpius</li>
          </ul>
        </div>
        <div class="stats_container">
          <div class="stars">
            <h2>Air quality</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>

          <div class="stars">
            <h2>Gravity</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-half"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>

          <div class="stars">
            <h2>Life potential</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="environment_section">
      <img class="heroimg" src="../assets/heroimg/environment_hero.svg" alt="" />
      <h1>Environment</h1>
      <div class="environment_info">
        <p>
          Gliese 667Cc is named the fourth most Earth-like planet. But it is tidally locked with its host star.  it has one side permanently facing the sun, the other shrouded in eternal darkness. 
In between the eternal sunshine and permanent night, there is grey zone called terminator line. On the sliver of line, you will have never-ending sunrise, and the cold of night on your back. Here on that ring of equilibrium, you may meet alien life. 
The gravity on this planet is punishing. You will carry almost four people at your own weight. You will feel a lot heavier. If you’re planning to go to Gliese 667Cc, you will need to do some serious exercise before you get here. But you will have few years where you get to train at the ship before and after your hibernation during the trip. 
On you ship you will have all the equipment you will need to maintain and/or build your physique, in order to handle the immense gravity that is on this planet. 
For this journey we will work up to the same g’s as Gliese 667Cc, so that you will adapt to the gravity of this world. When you inevitably arrive at the Earth-cousin, you won’t feel as much difference as you would without the training. 

        </p>
      </div>
    </div>

    <section class="attractions_section">
      <div class="hero_image">
        <img class="heroimg" src="../assets/heroimg/attractions_hero.svg" alt="" />
        <h1>Attractions</h1>
      </div>

      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>Gym world</h1>
            <p>
             This is the perfect planet for your exercise needs. As the gravity of the planet is around 4 times higher than Earth, every push-up here, you would have made 4 push-up back on Earth. 
That being said, you will need a serious gradual training to sustain high-g environment. If you’re up to the challenge. 

            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/photos/gliese1.png" alt="" />
        </div>
      </div>
      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>Three suns</h1>
            <p>
             Gliese 667Cc is orbiting a star, and that star is orbiting a pair of stars. Because of the planet is tidally locked, like our moon back on Earth, it has a side that is permanently facing one side towards the sun. Meaning, it is always sunrise or sunset depending on the way you’re looking at it. 
Either way, the view will be out of this world.

            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/photos/gliese2.jpg" alt="" />
        </div>
      </div>
    </section>

    <div class="aliens_section">
      <div class="aliens_section_text">
        <h2>Expecting aliens?</h2>
        <h3>They may look different then you imagined</h3>
        <p>
          When we think about extraterrestial life, we usally picture it as
          little, green men in a flying saucer. Scientist look for life on
          planets other then earth, but they don't search for aliens as we
          picture them. They mostly search for creatures impossible to see with
          a naked eye.
        </p>

        <h3>Want to know more?</h3>

         <router-link :to="'/life'">
        <b-button class="purple_hover">Click here</b-button>
        </router-link>
      </div>

      
    </div>

    <section class="section section-dark">

      <div class="container-link">

        <h2>Fancy different planet?</h2>
       <router-link :to="'/choose-planet'"> <b-button class="purple animation">Go back</b-button> </router-link>

      </div>

      <div class="container-link">
        <h2>or...</h2>
      </div>

      <div class="container-link">

        <h2>Choose your ship</h2>
        <router-link :to="'/choose-ship'"> <b-button class="purple animation"> Click here</b-button> </router-link>


      </div>

    </section>
  </div>
</template>

<script>
import { ModelGltf } from "vue-3d-model";
import blinkingButton from "@/components/blinkingButton.vue";

export default {
  name: "page",
  components: {
    ModelGltf,
    "b-button": blinkingButton
  },
  data() {
    return {
      img1: require("@/assets/mouseparallax/1.png"),
      img2: require("@/assets/mouseparallax/2.png"),
      img3: require("@/assets/mouseparallax/3.png"),
      img4: require("@/assets/mouseparallax/4.png"),
      img5: require("@/assets/mouseparallax/5.png"),

      bgColor: "#ff0",
      bgAlpha: 0,

      rotation: {
        x: 0,
        y: -Math.PI / 2,
        z: 0
      }
    };
  },

  methods: {
    onLoad() {
      this.rotate();
    },
    rotate() {
      this.rotation.y += 0.005;
      requestAnimationFrame(this.rotate);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_planets.scss";
.environment_section {
  background-image: url("../assets/parallax/gliese_parallax.jpg");
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
