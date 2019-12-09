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
          <h1>Kepler-22b</h1>
          <h2>Basic info:</h2>

          <ul>
            <li>587.1 light years</li>
            <li>290 days to orbit its host star</li>
            <li>2,4x times gravity of Earth</li>
          </ul>
        </div>
        <div class="stats_container">
          <div class="stars">
            <h2>Air quality</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-half"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>

          <div class="stars">
            <h2>Gravity</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-half"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>

          <div class="stars">
            <h2>Life potential</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-half"></i>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          corporis similique, animi ut numquam odit quidem deleniti atque autem,
          repellendus eius incidunt voluptas quod rat nulla esse! Dolor, fuga
          corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores corporis similique, animi ut numquam odit quidem deleniti
          atque autem, repellendus eius incidunt voluptas quod rat nulla esse!
          Dolor, fuga corrupti!
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
            <h1>Ice waterfalls</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              natus. Ratione ipsam sunt, molestiae sit ex suscipit officiis
              assumenda culpa corporis excepturi provident, quis quos debitis
              nobis vero cumque quam?
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/parallax/eso1333a.jpg" alt="" />
        </div>
      </div>
      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>Thrombocyte</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              natus. Ratione ipsam sunt, molestiae sit ex suscipit officiis
              assumenda culpa corporis excepturi provident, quis quos debitis
              nobis vero cumque quam?
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/planets/kepler-22b.png" alt="" />
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

        <b-button class="purple_hover">Click here</b-button>
      </div>

      
    </div>

    <section class="section section-dark"></section>
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
      img1: require("@/assets/paralax/1.png"),
      img2: require("@/assets/paralax/2.png"),
      img3: require("@/assets/paralax/3.png"),
      img4: require("@/assets/paralax/4.png"),
      img5: require("@/assets/paralax/5.png"),

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
</style>
