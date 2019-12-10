<template>
  <div class="planet_page">


    <div class="first_section">
        <img class="heroimg" src="../assets/heroimg/yourtrip_hero.svg" alt=""/>
        <h1>Your space trip starts right now!</h1> 
    </div>


    <section class="second_section">
        <img class="heroimg1" src="../assets/heroimg/getready_hero.svg" alt="">
        <h1>Prepare yourself!</h1>
        <div class="second_section_text">
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, odit nemo. Voluptatem placeat doloribus minima assumenda 
            laborum praesentium incidunt ipsum itaque quis, explicabo, illo
            repellat, consequatur veritatis soluta excepturi. Quod.
            </p>
        </div>
    </section>

    

    <section class="third_section">
      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>Launch from earth</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              natus. Ratione ipsam sunt, molestiae sit ex suscipit officiis
              assumenda culpa corporis excepturi provident, quis quos debitis
              nobis vero cumque quam?
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="photo" src="../assets/photos/rocketlaunch.jpg" alt="" />
        </div>
      </div>
      <div class="content_container">
        <div class="text_banner">
          <div class="text_control">
            <h1>Trip to the orbit</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              natus. Ratione ipsam sunt, molestiae sit ex suscipit officiis
              assumenda culpa corporis excepturi provident, quis quos debitis
              nobis vero cumque quam?
            </p>
          </div>
        </div>

        <div class="graphic_banner">
          <img class="photo" src="../assets/photos/orbitrip.jpg" alt="" />
        </div>
      </div>
    </section>

    <div class="fourth_section"></div>

   
  </div>
</template>


<script>
export default {
  data () { 
     return {
    selectedShip: '',
    planetName: '',
    }
  },
  mounted() {
    if (localStorage.selectedShip) {
      this.selectedShip = localStorage.selectedShip;
    }
     if (localStorage.planetName) {
      this.planetName = localStorage.planetName;
    }
  },
  watch: {
    selectedShip(newselectedShip) {
      localStorage.selectedShip = newselectedShip;
    },
    planetName(newPlanetName) {
      localStorage.planetName = newPlanetName;
    }
  },
}
</script>


<style lang="scss">

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



.first_section,.fourth_section {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.first_section {
  background-image: url("../assets/parallax/launch_parallax.jpg");
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  .heroimg {
    width: 130px;
    height: 130px;
  }
  
}

.second_section {
  width: 100%;
  height: 70vh;
  flex-direction:column;
  display: flex;
  justify-content: center;
  align-items:center;
  box-sizing: border-box;
  padding: 0 1em;
  background: rgb(45,34,115);
background: linear-gradient(0deg, rgba(45,34,115,1) 15%, rgba(2,2,57,1) 99%);
  .heroimg1{
  width:150px;
  height:150px;
}
  .second_section_text{
      width:30%;
      height:50%
  }

}


.third_section {
  width: 100%;
  height: 170vh;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  flex-direction:column;
  background-color:#2d2273;
  .hero_image {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: center;
    .heroimg {
      width: 200px;
      height: 200px;
    }
    h1 {
      
      color: white;
      font-size: 3rem;
      margin: .3em;
    }
  }
  .content_container {
    display: flex;
    width: 100%;
    height: 48%;
    align-items: center;
    background-color:#2D2273;
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
      
      .photo {
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
      height: 100%;
   
    background: #2D2273;
.text_control {
        width: 50%;
        height: 50%;
      }
      h1 {
        
        font-size: 40px;
      }
      p {
        
        font-size: 16px;
        margin: 20px;
      }
    }
  }
}

.fourth_section {
  background-image: url("../assets/parallax/dinner_parallax.jpg");
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
