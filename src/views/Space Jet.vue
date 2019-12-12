<template>
  <div class="ship_page">
    <section class="basic_info_section">
      <div class="ship_container">
        <model-gltf
          src="/models/space-jet/scene.gltf"
          :backgroundAlpha="bgAlpha"
          :backgroundColor="bgColor"
          :rotation="rotation"
          @on-load="onLoad"
        ></model-gltf>
      </div>
      <div class="info_container">
        <div class="info-text">
          <h1>SpaceJet</h1>
          <h2>Basic info:</h2>
          <ul>
            <li>Cryogenic hibernation with Interactive Dreaming</li>
            <li>SpaceJet suits for outer-space maintenance</li>
            <li>Great acceleration of 0 to 99% of c (Speed of Light) in 1h</li>
          </ul>
        </div>
        <div class="stats_container">
          <div class="stars">
            <h2>Speed</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>

          <div class="stars">
            <h2>Comfort</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-half"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>

          <div class="stars">
            <h2>Price</h2>
            <div class="rating">
              <i class="icon ion-ios-star"></i>
              <i class="icon ion-ios-star-half"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
              <i class="icon ion-ios-star-outline"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="environment_section">
      <img class="heroimg" src="../assets/heroimg/rocket_hero.svg" alt="" />
      <h1>History</h1>
      <div class="environment_info">
        <p>
          The SpaceJet’s designing process began in 2029, 
          and with a lot of iterations and propositions, feedback and such, 
          the final design was approved and came to reality in 2037, 
          just 8 short years from start to finish. The ship was built in 2042, 
          after all materials have arrived and were ready to be put together. 
          The jet was finished in the year 2047, 5 years from 0 to ship. 
          The price for this aerodynamic greatness is around the $3.2 Billion ($3.200.000.000).
        </p>
      </div>
    </div>

    <section class="attractions_section">
      <div class="hero_image">
        <img class="heroimg" src="../assets/heroimg/services_hero.svg" alt="" />
        <h1>Services</h1>
      </div>

      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>G-Gym</h1>
            <p>
              The Gravity Gym, or as we call it, The G-Gym, is a gravity gym made for you
              to train in Earth Gravity, while outside of space. 
              This place will prevent muscle mass loss and
              keep you in shape at all times.
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/photos/kepler1.jpg" alt="" />
        </div>
      </div>
      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>Acceleration</h1>
            <p>
              This is the fastest accelerating jet made on our planet Earth.
              Its acceleration is at a mind-boggling 0 to 99% of the Speed of Light
              in just 1 hour. This means the acceleration is so strong, you might pass out
              in the middle of acceleration from the planet to the orbit.
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="planet" src="../assets/photos/warpspeed.jpg" alt="" />
        </div>
      </div>
    </section>

    <div class="technology_section">
      <div class="technology_section_text">
        <h2>Space travelling technology</h2>
        <h3>Why is it so difficult?</h3>
        <p>
          When we think about interplanetary travelling in general, it seems to be
          almost unreachable for human mankind. However scientists from around the
          globe are constantly working on solutions for such a obstacles as 
          Proper Propulsion, The Ability to Hold Off the Heat or Radiation Protection.
          The National Aeronautics and Space Administration is still working on some
          kind of space GPS which is undoubtedly one of the priorities in the field of
          space exploration. Nevertheless human mankind continually need some time and 
          resources to wade through this extremely hard infliction.
        </p>

        <h3>Want to know more?</h3>

       <a href="https://www.space.com/is-interstellar-travel-possible.html" target="_blank">
       <b-button class="purple_hover">Click here</b-button>
       </a>
      </div>

      
    </div>

    <section class="section section-dark">

       <div class="container-link">

        <h2>Fancy different ship?</h2>
       <router-link :to="'/choose-ship'"> <b-button class="purple animation">Go back</b-button> </router-link>

      </div>

      <div class="container-link">
        <h2>or...</h2>
      </div>

      <div class="container-link">

        <h2>See your trip summary</h2>
        <router-link :to="'/trip-summary'"> <b-button class="purple animation"> Click here</b-button> </router-link>


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

<style lang="scss" scoped>





a{
  text-decoration:none;
}

.environment_section {
  background-image: url("../assets/parallax/dinner_parallax.jpg");
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.basic_info_section {
  width: 100%;
  height: 95vh;
  background-color:$bgcolor;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(0, 0, 21, 1) 0%, #2d2273 100%);
}

.ship_container {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}



.info_container {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding-left: 4em;
  box-sizing: border-box;
  .info-text {
    text-align: left;

    h1 {
      font-size: 3em;
      margin-top: 0;
    }

    ul {
      list-style-image: require("../assets/icons/bullet.svg");
      font-family: 'Montserrat Alternates', sans-serif;
    }

    li {
      font-size: 1.2em;
      padding: 0.3em 0;
    }
  }
}
.stats_container {
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

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
    color: #a093f4;
  }
}

.environment_section,
.technology_section {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}



  .heroimg {
    width: 100px;
    height: 100px;
  }
  h1 {
    text-shadow: 0 0 30px $bgcolor;
    font-size: 3em;
  }
  .environment_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 40%;

    p {
      margin: 0.5em;
      text-shadow: 0 0 4px black;
      line-height: 1.6;
      font-size: 1.1em;
    }
  }


.attractions_section {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  .hero_image {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 54);
    background: linear-gradient(180deg, rgba(0, 0, 54, 1) 0%, #2d2273 100%);
    padding: 2em 0;

    .heroimg {
      width: 100px;
      height: 100px;
      
    }
    h1 {
      color: white;
      font-size: 3rem;
      margin: 0.3em;
    }
  }
  .content_container {
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    background-color:#2D2273;
    //padding: 2em 0;


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

      .planet {
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
      height: auto;
      padding: 2em 0em;

      background: #2d2273;
      .text_control {
        width: 70%;
        height: auto;
      }
      h1 {
        font-size: 3rem;
      }
      
      p
      {margin:0}
    }
  }
}

.technology_section {
  background-image: url("../assets/parallax/ship_parallax.jpg");
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &_text {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-shadow: 0 0 10px $bgcolor;
    padding: 2em;
    position: relative;
    right: 23%;

    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      width: 80%;
      text-shadow: 0 0 5px $bgcolor;
    }
  }
}

.section-dark {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
  padding: 1em 0;
}

.container-link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height:100%;

  h2 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 1200px) {
  .basic_info_section {
    display: flex;
    flex-direction: column;


    .info_container {
      width: 90%;
      height: 40%;
      padding-left: 0;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;

      .stats_container {
        width: 60%;
      }

    }

    .ship_container {
      width: 100%;
      height: 60%;

      
    }
}}

@media only screen and (max-width: 770px) {
  .basic_info_section {
    display: flex;
    flex-direction: column;
    height: auto;

    .ship_container {
      height: 50%;
      width: 100%;
    }
    .info_container {
      height: 50%;
      width: 100%;
      align-items: center;
      padding-bottom: 4em;
      padding-left: 0;
      flex-direction: column;

      .info-text {
        width: 75%;
        margin-left: 1em;
      }

      h1 {
        text-align: center;
      }

      ul {
        padding-inline-start: 20px;
      }

      .stats_container {
        flex-direction: column;
        flex-wrap: nowrap;
      }
    }
  }

  .environment_section {
    padding-top: 3em;
    width: 100%;

    .environment_info {
      width: 80%;
    }
  }

  .stats_container {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .attractions_section {
    height: auto;
    .content_container {
      flex-direction: column;
      display: flex;
      &:nth-child(2) {
        flex-direction: column;
      }

      .text_banner {
        width: 100%;
        height: 50%;

        .text_control {
          width: 80%;
        }

        
      }

      .graphic_banner {
        width: 100%;
        height: 50%;
        .planet{
          width:100%;
          height:90%;
        }
      }
    }
  }

  .attractions_section .hero_image h1 {
    font-size: 2rem;
  }

  .attractions_section .content_container .text_banner h1 {
    font-size: 2rem;
  }

  .technology_section {
    background-image: url("../assets/parallax/ship_parallax.jpg");
    min-height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3em;

    &_text {
      width: 80%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-shadow: 0 0 10px $bgcolor;
      padding: .7em;
      position: relative;
      right: 0%;
      box-sizing: border-box;

      h2 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1rem;
      }

      p {
        width: 90%;
        font-size: .7rem;
        text-shadow: 0 0 5px $bgcolor;
        text-align: left;
      }
    }
  }

  .section-dark {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
  }
  
  .container-link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
   height: 20%;
  
    h2 {
      font-size: 1rem;
      padding-right: 1em;
      margin: .2em;
    }

    h3 {
      margin: .1em;
    }
  }
}
</style>
