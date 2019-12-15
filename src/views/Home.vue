<template>
  <div class="home">
    <div class="row">
      <div class="container-illu">
        <parallax-container
          class="container"
          style="-webkit-transform-style: preserve-3d;"
        >
          <parallax-element
            :parallaxStrength="5"
            type="translation"
            tag="img"
            class="absolute"
            :src="img1"
            style="z-index: 2;"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="20"
            type="rotation"
            tag="img"
            class="absolute"
            :src="img2"
            style="z-index: 3;"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="-10"
            type="translation"
            tag="img"
            class="absolute"
            :src="img3"
            id="I want to sleep...."
            style="z-index: 4;"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="15"
            type="translation"
            tag="img"
            class="absolute"
            :src="img4"
            style="z-index: 5;"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="35"
            type="translation"
            tag="img"
            class="absolute"
            :src="img5"
            style="z-index: 6;"
          >
          </parallax-element>
        </parallax-container>
      </div>
      <div class="container-text text-left">
        <div class="text-controls">
          <h1>Begin your interstellar journey</h1>
          <p>
            Do you dream about going to space? Now you can. Choose from three
            exciting exoplanet destinations. Each of these worlds hide
            incredible secrets.
          </p>
        </div>
        <div class="btn_container">
          <router-link :to="'/choose-planet'">
            <b-button class="purple_hover" @click.native="persist"
              >Choose the planet</b-button
            ></router-link
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container-illu">
        <parallax-container class="container">
          <parallax-element
            :parallaxStrength="5"
            type="translation"
            tag="img"
            class="absolute"
            :src="ship1"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="-25"
            type="rotation"
            tag="img"
            class="absolute"
            :src="ship2"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="10"
            type="translation"
            tag="img"
            class="absolute"
            :src="ship4"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="-20"
            type="translation"
            tag="img"
            class="absolute"
            :src="ship5"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="30"
            type="translation"
            tag="img"
            class="absolute"
            :src="ship6"
          >
          </parallax-element>
        </parallax-container>
      </div>
      <div class="container-text text-right">
        <div class="text-controls">
          <h1>Spaceships</h1>
          <p>
            Our company offers both luxurious and fast means of interstellar
            transportation. Have a look at our space ships. Go for the ship that
            suits your needs.
          </p>
        </div>
        <div class="btn_container_2n">
          <router-link :to="'/choose-ship'">
            <b-button class="purple_hover" @click.native="persist"
              >Choose the spaceship</b-button
            ></router-link
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container-illu">
        <parallax-container class="container">
          <parallax-element
            :parallaxStrength="-10"
            type="translation"
            tag="img"
            class="absolute"
            :src="life1"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="30"
            type="rotation"
            tag="img"
            class="absolute"
            :src="life2"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="-10"
            type="translation"
            tag="img"
            class="absolute"
            :src="life3"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="-50"
            type="translation"
            tag="img"
            class="absolute"
            :src="life4"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="30"
            type="translation"
            tag="img"
            class="absolute"
            :src="life5"
          >
          </parallax-element>
        </parallax-container>
      </div>
      <div class="container-text text-left">
        <div class="text-controls">
          <h1>Life on other planets</h1>
          <p>
            Read more about the life outside our solar-system and see what you
            can expect on other planets. But do not worry. These aliens most
            likely will not abduct you.
          </p>
        </div>
        <div class="btn_container">
          <router-link :to="'/life'">
            <b-button class="purple_hover" @click.native="persist"
              >Learn more</b-button
            ></router-link
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container-illu">
        <parallax-container class="container">
          <parallax-element
            :parallaxStrength="-30"
            type="translation"
            tag="img"
            class="absolute"
            :src="trip1"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="20"
            type="translation"
            tag="img"
            class="absolute"
            :src="trip2"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="20"
            type="translation"
            tag="img"
            class="absolute"
            :src="trip3"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="10"
            type="translation"
            tag="img"
            class="absolute"
            :src="trip4"
          >
          </parallax-element>
        </parallax-container>
      </div>
      <div class="container-text text-right">
        <div class="text-controls">
          <h1>Your trip</h1>
          <p>
            How is the journey going to feel like? What will it be like after
            you leave Earth? Read the detailed description of your trip to outer
            space.
          </p>
        </div>
        <div class="btn_container_2n">
          <router-link :to="'/trip-summary'">
            <b-button class="purple_hover">Trip summary</b-button></router-link
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container-illu">
        <parallax-container class="container">
          <parallax-element
            :parallaxStrength="10"
            type="translation"
            tag="img"
            class="absolute"
            :src="about1"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="30"
            type="rotation"
            tag="img"
            class="absolute"
            :src="about2"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="20"
            type="translation"
            tag="img"
            class="absolute"
            :src="about3"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="20"
            type="translation"
            tag="img"
            class="absolute"
            :src="about4"
          >
          </parallax-element>

          <parallax-element
            :parallaxStrength="35"
            type="translation"
            tag="img"
            class="absolute"
            :src="about5"
          >
          </parallax-element>
        </parallax-container>
      </div>
      <div class="container-text text-left">
        <div class="text-controls">
          <h1>About us</h1>
          <p>
            Are you curious who is responsible for this amazing corner of the
            web? Check out the developers and read what the site is about.
          </p>
        </div>
        <div class="btn_container">
          <router-link :to="'/about'">
            <b-button class="purple_hover" @click.native="persist"
              >Meet the makers</b-button
            ></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";
import blinkingButton from "@/components/blinkingButton.vue";

export default {
  components: {
    ParallaxContainer,
    ParallaxElement,
    "b-button": blinkingButton
  },

  name: "home",
  data() {
    return {
      img1: require("@/assets/mouseparallax/planets/06_background.png"),
      img2: require("@/assets/mouseparallax/planets/05_stars.png"),
      img3: require("@/assets/mouseparallax/planets/04_keppler.png"),
      img4: require("@/assets/mouseparallax/planets/03_gliese.png"),
      img5: require("@/assets/mouseparallax/planets/02_proxima.png"),
      img6: require("@/assets/mouseparallax/planets/01_comet.png"),

      ship1: require("@/assets/mouseparallax/ships/06_background.png"),
      ship2: require("@/assets/mouseparallax/ships/05_asteroids.png"),
      ship3: require("@/assets/mouseparallax/ships/04_light.png"),
      ship4: require("@/assets/mouseparallax/ships/03_star.png"),
      ship5: require("@/assets/mouseparallax/ships/02_spacejet.png"),
      ship6: require("@/assets/mouseparallax/ships/01_mothership.png"),

      life1: require("@/assets/mouseparallax/life/05_bg.png"),
      life2: require("@/assets/mouseparallax/life/04_croc.png"),
      life3: require("@/assets/mouseparallax/life/03_plants.png"),
      life4: require("@/assets/mouseparallax/life/02_trilobite.png"),
      life5: require("@/assets/mouseparallax/life/01_fish.png"),

      trip1: require("@/assets/mouseparallax/yourtrip/04_bg.png"),
      trip2: require("@/assets/mouseparallax/yourtrip/03_fire.png"),
      trip3: require("@/assets/mouseparallax/yourtrip/02_rocket.png"),
      trip4: require("@/assets/mouseparallax/yourtrip/01_debris.png"),

      about1: require("@/assets/mouseparallax/about/05_bg.png"),
      about2: require("@/assets/mouseparallax/about/04_logo.png"),
      about3: require("@/assets/mouseparallax/about/03_coffe.png"),
      about4: require("@/assets/mouseparallax/about/02_creep.png"),
      about5: require("@/assets/mouseparallax/about/01_baller.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 1em;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
}

.container-illu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
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

.container-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  a {
    text-decoration: none;
  }
  .btn_container {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-end;
  }

  p {
    text-justify: inter-character;
  }
}
.btn_container_2n {
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
}

.text-left {
  justify-content: flex-start;
  text-align: left;
}

.text-right {
  justify-content: flex-end;
  text-align: right;
}

.text-controls {
  width: 50%;
}

@media screen and (max-width: 1200px) {
  .container {
    height: 400px;
    width: 400px;
  }
}

@media screen and (max-width: 759px) {
  .row {
    display: flex;
    flex-direction: column;

    &:nth-child(2n) {
      flex-direction: column;
    }
  }

  .container {
    height: 350px;
    width: 350px;
  }

  .container-illu {
    width: 100%;
  }
  .container-text {
    width: 100%;
    justify-content: center;
    text-align: center;

    .btn_container {
      justify-content: center;
    }

    .text-controls {
      width: 70%;
    }
  }
  .text-left .text-right p h1 {
    //justify-content: center;
    text-align: center;
  }

  .btn_container_2n {
    justify-content: center;
  }
}

@media screen and (max-width: 350px) {
  .container {
    height: 200px;
    width: 200px;
  }

  .container-text {
    .text-controls {
      width: 65%;
    }
  }

  p {
    font-size: 0.7rem;
  }
}
</style>
