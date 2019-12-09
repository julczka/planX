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
            <h2>Life potntial</h2>
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
      <img class="heroimg" src="../assets/shit/Tree.svg" alt="" />
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
        <img class="heroimg" src="../assets/shit/hero.svg" alt="" />
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
          <img class="planet" src="../assets/planets/kepler-22b.png" alt="" />
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

    <div class="aliens_section"></div>

    <section class="section section-dark"></section>
  </div>
</template>

<script>
//import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";
import { ModelGltf } from "vue-3d-model";

// Vue.component("parallax-container", ParallaxContainer);
// Vue.component("parallax-element", ParallaxElement);

export default {
  name: "page",
  components: {
    // ParallaxContainer,
    // ParallaxElement,
    ModelGltf
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
.basic_info_section {
  width: 100%;
  height: 95vh;
  background-color: $bgcolor;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
}

.planet_container {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

.info_container {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  .info-text {
    text-align: left;
  }
}
.stats_container {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;

  .stars {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      margin: 0;
      padding: 0.5em 0;
    }
  }
}

.rating {
  font-size: 1.5rem;

  i {
    padding: 0.2em;
  }
}

.environment_section,
.aliens_section {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.environment_section {
  background-image: url("../assets/parallax/bg1.jpg");
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  .heroimg {
    width: 100px;
    height: 100px;
  }
  h1 {
    font-family: "Montserrat Alternates", sans-serif;
    font-family: "Tomorrow", sans-serif;
    font-size: 40px;
  }
  .environment_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 40%;
    p {
      margin: 5px;
      font-family: "Montserrat Alternates", sans-serif;
      font-size: 16px;
    }
  }
}

.attractions_section {
  width: 100%;
  height: 250vh;
  background-color: $bgcolor;
  .hero_image {
    width: 100%;
    height: 11%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .heroimg {
      width: 100px;
      height: 100px;
    }
    h1 {
      font-family: "Montserrat Alternates", sans-serif;
      font-family: "Tomorrow", sans-serif;
      color: white;
      font-size: 40px;
      margin: 20px;
    }
  }
  .content_container {
    display: flex;
    width: 100%;
    height: 40%;
    align-items: center;
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
    .graphic_banner {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .planet {
        width: 700px;
        height: 600px;
        margin-right: 100px;
      }
    }
    .text_banner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 30%;
      .text_control {
        width: 50%;
        height: 50%;
      }
      h1 {
        font-family: "Montserrat Alternates", sans-serif;
        font-family: "Tomorrow", sans-serif;
        font-size: 40px;
      }
      p {
        font-family: "Montserrat Alternates", sans-serif;
        font-size: 16px;
        margin: 20px;
      }
    }
  }
}

.aliens_section {
  background-image: url("../assets/parallax/bg2.jpg");
  min-height: 100vh;
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
  .attractions_section {
    height: 300vh;
    .content_container {
      flex-direction: column;
      display: flex;
      &:nth-child(2) {
        flex-direction: column;
      }
    }
  }
}
</style>
