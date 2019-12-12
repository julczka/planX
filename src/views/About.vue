<template>
  <div class="about">


    
    <div class="about-row">
      <div class="about-text-container">
        <div class="about-text-control">
          <h2>What destinations we are offering?</h2>
          <p>All the destination planets exist in our universe. They were discovered and marked by scientists as planets capable of sustaining life. Everything that you learned about these interstellar bodies are true. Unfortunately, all of them are really far away and it’s unlikely that humans will ever manage to travel to any of them, at least not with current technology. </p>
        </div>
      </div>
       <div class="about-text-container">
        <div class="about-text-control">
          <h2>Our ships</h2>
          <p>The ships you can choose on the page are, unfortunately, fictious. They do not exist now, but that does not mean they will not be built in some distant future. Mankind broke the boundaries lots of times in the past, travelling close to light speed might be the final one to break. That would let us broaden our horizons and travel to far corners of the Universe. </p>
        </div>
      </div>
    </div>
    <div class="about-row">

<div class="about-text-container">
        <div class="about-text-control">
          <h2>Who we are?</h2>
          <p>This app was made by a group of EASV Esbjerg Multimedia Design students as a first semester project. Our names are: Max, Johansinnguaq, Julia and Radek. We hope you like the content and the design of the app and that it inspires your imagination to learn more and explore vastness of the Universe. </p>
        </div>
      </div>

      <div class="about-container-paralax">
        <parallax-container class="container">
            <parallax-element
              :parallaxStrength="-10"
              type="rotation"
              tag="img"
              class="absolute"
              :src="img1"
            >
            </parallax-element>

            <parallax-element
              :parallaxStrength="10"
              type="translation"
              tag="img"
              class="absolute"
              :src="img2"
            >
            </parallax-element>

            <parallax-element
              :parallaxStrength="-10"
              type="translation"
              tag="img"
              class="absolute"
              :src="img3"
              
            >
            </parallax-element>

            <parallax-element
              :parallaxStrength="-10"
              type="translation"
              tag="img"
              class="absolute"
              :src="img4"
              
            >
            </parallax-element>

            <parallax-element
              :parallaxStrength="20"
              type="translation"
              tag="img"
              class="absolute"
              :src="img5"
              
            >
            </parallax-element>
          </parallax-container>
      </div>


    </div>
      


    </div>
  
</template>


<script>

import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";



export default {
  components: { 
    ParallaxContainer,
    ParallaxElement,
     
    },

    data () {
      return {
      img1: require("@/assets/mouseparallax/team/1.png"),
      img2: require("@/assets/mouseparallax/team/2.png"),
      img3: require("@/assets/mouseparallax/team/3.png"),
      img4: require("@/assets/mouseparallax/team/4.png"),
      img5: require("@/assets/mouseparallax/team/5.png"),
      
      }
    }

    
}
</script>



<style lang="scss" scoped>

.about {
  height: 100%;
  background: linear-gradient(310deg, rgba(0,0,21,1) 50%,  rgba(45,34,115, 1) 90%);

}

.about-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  
  padding: 2em;
}

.about-text-container {
  width: 30%;
};




.container {
  position: relative;
  height: 400px;
  width: 400px;
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

@media screen and (max-width: 759px) {
  .about-row {
    flex-direction: column;
  }

  .about-text-container {
  width: 80%;
};
}

</style>
