<template>
    <div class="planet_page">

        <section class="basic_info_section">
            <div class="planet_container">
               <div id="container1">
                    <!-- <div id="container"> -->
                    <parallax-container class="container">

                    <parallax-element :parallaxStrength="30" type="depth" tag="img" class="absolute" :src="img1">
                            
                        </parallax-element>

                        <parallax-element :parallaxStrength="30" type="depth" tag="img" class="absolute" :src="img2">
                            
                        </parallax-element>
                        
                    <parallax-element :parallaxStrength="40" type="depth" tag="img" class="absolute" :src="img3" id="kurwa">
                        
                        </parallax-element>

                        <parallax-element :parallaxStrength="-10" type="depth" tag="img" class="absolute" :src="img4" id="kurwa">
                        
                        </parallax-element>

                        <parallax-element :parallaxStrength="60" type="depth" tag="p" class="absolute">
                        
                        </parallax-element>

                        <parallax-element :parallaxStrength="20" type="depth" tag="img" class="absolute" :src="img5" id="kurwa">
                        
                        </parallax-element>

                    </parallax-container>
                    </div>
            </div>
            <div class="info_container">
                <div class="info">
                    <h1>Kepler-22b</h1>
                    <h2>Basic info:</h2>
                    <p>-587.1 light years</p>
                    <p>-290 days to orbit its host star</p>
                    <p>-2,4x times gravity of Earth</p>
                </div>
                <div class="stats_container">
                    <div class="stars">
                        <h3>Air quality</h3>
                        <img src="../assets/shit/stars.png" alt="" width="200" height="100">
                    </div>
                    <div class="stars">
                        <h3>Gravity</h3>
                        <img src="../assets/shit/stars.png" alt="" width="200" height="100">
                    </div>
                    <div class="stars">
                        <h3>Life potential</h3>
                        <img src="../assets/shit/stars.png" alt="" width="200" height="100">
                    </div>
                </div>
                
            </div>
        </section>

        <div class="environment_section">
             <img class="heroimg" src="../assets/shit/Tree.svg" alt="">
            <h1>Environment</h1>
            <div class="environment_info">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Asperiores corporis similique, animi ut numquam odit quidem 
                 deleniti atque autem, repellendus eius incidunt voluptas quod
                 rat nulla esse! Dolor, fuga corrupti!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Asperiores corporis similique, animi ut numquam odit quidem 
                 deleniti atque autem, repellendus eius incidunt voluptas quod
                 rat nulla esse! Dolor, fuga corrupti!
                </p>
            </div>
        </div>

        <section class="attractions_section">
            <div class="hero_image">
                <img class="heroimg" src="../assets/shit/hero.svg" alt="" >
                <h1>Attractions</h1>
            </div>

            <div class="content_container">
                <div class="text_banner">
                    <div class="text_control">
                    <h1>Ice waterfalls</h1>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sit, natus. Ratione ipsam sunt, molestiae sit ex suscipit
                    officiis assumenda culpa corporis excepturi provident, quis
                    quos debitis nobis vero cumque quam?
                    </p>
                    </div>
                </div>

                <div class="graphic_banner">
                    <img class="planet" src="../assets/planets/kepler-22b.png" alt="">
                </div>
            </div>
            <div class="content_container">

                <div class="text_banner">
                    <div class="text_control">
                    <h1>Thrombocyte</h1>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sit, natus. Ratione ipsam sunt, molestiae sit ex suscipit
                    officiis assumenda culpa corporis excepturi provident, quis
                    quos debitis nobis vero cumque quam?
                    </p>
                    </div>
                </div>

                <div class="graphic_banner">
                    <img class="planet" src="../assets/planets/kepler-22b.png" alt="">
                </div>
            </div>

        </section>

        <div class="aliens_section">
            
            
        </div>

        <section class="section section-dark">
        
        </section>

  
    </div>
</template>





<script>
import Vue from 'vue'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'

Vue.component('parallax-container', ParallaxContainer)
Vue.component('parallax-element', ParallaxElement)



export default {
  name: 'page',
  components: {
    ParallaxContainer, ParallaxElement
  },
  data () {

    return {
        img1: require("@/assets/paralax/1.png"),
      img2: require("@/assets/paralax/2.png"),
      img3: require("@/assets/paralax/3.png"),
      img4: require("@/assets/paralax/4.png"),
      img5: require("@/assets/paralax/5.png")
    }
    
  }
  
}

</script>








<style lang="scss" >

body{
    margin:0;
    padding:0;
}
*{
    color:white;
}

.basic_info_section{
    width:100%;
    height:100vh;
    background-color:$bgcolor;
    display:flex;
    justify-content:center;
    align-items:center;
.planet_container{
    width:50%;
    height:70vh;
    display:flex;
    justify-content:center;
    align-items:center;
    #container1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
  height:600px;
  width: 600px;
  z-index: 1;
}

.absolute {
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
}
.info_container{
     width:50%;
    height:70vh;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column;
    .info{
    
    h1{
    font-family: 'Montserrat Alternates', sans-serif;
    font-family: 'Tomorrow', sans-serif;
    font-size:45px;
    }
    h2{
    font-family: 'Montserrat Alternates', sans-serif;
    font-family: 'Tomorrow', sans-serif; 
    margin-top:100px;  
    }
    p{
     font-family: 'Montserrat Alternates', sans-serif;
    }
    }
}
.stats_container{
    margin-top:50px;
    display:flex;
    .stars{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h3{
        font-family: 'Montserrat Alternates', sans-serif;
        font-family: 'Tomorrow', sans-serif; 
        margin:0;
        padding:0;
    }
    }
}
}

.environment_section, .aliens_section{
  position:relative;
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  background-attachment:fixed;
}


.environment_section{
  background-image:url('../assets/parallax/bg1.jpg');
  min-height:90vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:white;
  .heroimg{
      width:100px;
      height:100px;
  }
  h1{
        font-family: 'Montserrat Alternates', sans-serif;
        font-family: 'Tomorrow', sans-serif;
        font-size:40px;
      }
  .environment_info{ 
      display:flex;
    flex-direction:column;
    align-items:center;
      width:30%;
      height:40%;
      p{
          margin:5px;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size:16px;
      }
  }
}

.attractions_section{
width:100%;
height:250vh;
background-color:$bgcolor;
.hero_image{
width:100%;
height:11%;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
.heroimg{
    width:100px;
    height:100px;
}
h1{
font-family: 'Montserrat Alternates', sans-serif;
font-family: 'Tomorrow', sans-serif; 
color:white;
font-size:40px;
margin:20px;
}
}
.content_container{
display:flex;
width:100%;
height:40%;
align-items:center;
&:nth-child(2) {
    flex-direction: row-reverse;
  }
.graphic_banner{
width:50%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
.planet{
    width:700px;
    height:600px;
    margin-right:100px;
}
}
.text_banner{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    height:30%;
    .text_control{
        width:50%;
        height:50%;
    }
    h1{
    font-family: 'Montserrat Alternates', sans-serif;
    font-family: 'Tomorrow', sans-serif; 
    font-size:40px;
    }
    p{
    font-family: 'Montserrat Alternates', sans-serif;
    font-size:16px;
    margin:20px;
    }
}
}

}




.aliens_section{
  background-image:url('../assets/parallax/bg2.jpg');
  min-height:100vh;
}

@media only screen and (max-width: 736px) {
  .basic_info_section{
      display:flex;
      flex-direction:column;
      .planet_container{
          width:100%;
      }
      .info_container{
          width:100%;
      }
  }
.attractions_section{
height:300vh;
  .content_container{
      flex-direction:column;
      display:flex;
      &:nth-child(2) {
    flex-direction:column;
  }
  }
  }
}


</style>