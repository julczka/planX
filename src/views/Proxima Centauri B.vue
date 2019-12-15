<template>
  <div class="proxima_planet_page">
    <section class="basic_info_section">
      <div class="planet_container">
        <model-gltf
          src="/models/proxima/scene.gltf"
          :backgroundAlpha="bgAlpha"
          :backgroundColor="bgColor"
          :rotation="rotation"
          @on-load="onLoad"
        ></model-gltf>
      </div>
      <div class="info_container">
        <div class="info-text">
          <h1>Proxima Centauri B</h1>
          <h2>Basic info:</h2>

          <ul>
            <li>4,24 light years away</li>
            <li>Orbiting a triple star system, takes 11 days to complete its orbit</li>
            <li>1.3x gravity of Earth</li>
            <li>-39 Celsius equilibrium </li>
            <li>Approximately 20-30% wider radius of Earth</li>
          </ul>
        </div>
        <div class="stats_container">
          <div class="stars">
            <h2>Air quality</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>

          <div class="stars">
            <h2>Gravity</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>

          <div class="stars">
            <h2>Life potential</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="proxima_environment_section">
      <img class="heroimg" src="../assets/heroimg/environment_hero.svg" alt="" />
      <h1>Environment</h1>
      <div class="environment_info">
        <p>
          With the inclination of about 90 degrees, Proxima Centauri b has a side of planet that is facing its star tidally locked. With one side in scorching hot, and another side freezing cold, on the sliver between these sides, you will experience warm sunlight and a cold breeze on your back. It is called terminator line. If you’re lucky, you may find some lifeform under the surface. And if the planet has a thick atmosphere, the warm air and the cold air from the back of the planet, you will have enough circulation to have temperature equilibrium, meaning that there is a place on this Earth-neighbour, a equator per se, where life may exist. You will need a good suit to roam the surface. 
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
            <h1>Neighbour</h1>
            <p>
              Being the nearest solar system to Earth, this planet is relatively right next-door. If you don’t want to go too far, this planet is perfect for a spacetrip right across the border. 
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/photos/proxima-neighbor.jpg" alt="" />
        </div>
      </div>
      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>Birthday less than every two weeks</h1>
            <p>
             Proxima Centauri b orbits its sun every 11 days. You can look forward to having birthday parties less than fortnight in between. 
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/photos/proxima-sun.jpg" alt="" />
        </div>
      </div>
    </section>

    <div class="aliens_section">
      <div class="aliens_section_text">
        <h2>Expecting aliens?</h2>
        <h3>They may look different then you imagined</h3>
        <p>
          When we think about extraterrestrial life, we usally picture it as
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
.proxima_environment_section {
  background-image: url("../assets/parallax/proxima_parallax.jpg");
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}


</style>
