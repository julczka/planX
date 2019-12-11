<template>
  <div class="planet_page">
    <section class="basic_info_section">
      <div class="planet_container">
        <model-gltf
          src="/models/kepler_22_b/scene.gltf"
          :backgroundAlpha="bgAlpha"
          :backgroundColor="bgColor"
          :rotation="rotation"
          @on-load="onLoad"
        ></model-gltf>
      </div>
      <div class="info_container">
        <div class="info-text">
          <h1>Kepler-22b</h1>
          <h2>Basic info:</h2>

          <ul>
            <li>587.1 light years</li>
            <li>290 days to orbit its host star</li>
            <li>2,4x times gravity of Earth</li>
            <li>22 degree Celsius equilibrium</li>
            <li>Cygnus constellation</li>
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
              <i class="icon ion-ios-star"></i>
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
              <i class="icon ion-ios-star-outline"></i>
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
        It is going to be very humid and wet. Keppler 22b is likely to be nearly identical to Earth, if Earth didn’t have continents. Being around 22 degrees Celsius, it is likely to have lukewarm oceans. 
If it lacks atmosphere like Earth, it will feel like winter near Northpole.
If it has atmosphere like ours, it will be warm. It will feel like being in a room temperature, but pretty warm for a planet like Earth. 
But if it has greenhouse effect like Venus, the place will be around 400 degree Celsius. 
Some even named this planet “Namek” from the anime-series, Dragonball Z. Mainly because of the greenish tint to the planet, that strangely resembles this very planet. 

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
            <h1>Perfect for fishing trip</h1>
            <p>
              Keppler 22b is a water world. This will make the perfect trip. In a world of water, you may have a vast ocean to fish from. 
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/photos/kepler-fishing.jpg" alt="" />
        </div>
      </div>
      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>Scuba dive</h1>
            <p>
              You want a clean ocean and rich, warm waters. This is why Keppler 22b is a perfect world for you to do scuba diving. We will have enough equipment for you in the ship. 
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/photos/kepler-diving.jpg" alt="" />
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
  background-image: url("../assets/parallax/keppler_parallax.png");
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
