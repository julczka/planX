<template>
  <div class="life">


    <div class="first_section">
        <img class="heroimg" src="../assets/heroimg/paw_hero.svg" alt=""/>
        <h1>Extraterrestrial life</h1> 
    </div>


    <section class="second_section">
        <img class="heroimg" src="../assets/heroimg/origin_hero.svg" alt="">
        <h1>Our origin</h1>
        <div class="second_section_text">
            <p>
            Our life on Earth started about 4 billion years ago. The start of life has been slow, and through
            accidents and evolution, Earth has mutated lifeform into beings that eventually conquered space.
            </p>
        </div>
    </section>

    

    <section class="third_section">
      <div class="content_container">
         <div class="graphic_banner">
          <img class="photo" src="../assets/photos/water-life.jpg" alt="" />
        </div>
        <div class="text_banner">
          <div class="text_control">
            <h1>Our possibilities</h1>
            <p>
              Our galaxy is a medium sized one. It has about 200 billion stars and most of them has planets. Some
of them even are in the Goldilocks zone, where liquid water might exist. It is what we consider the
main ingredient of life.
            </p>
          </div>
        </div>
      </div>
      <div class="content_container">
        <div class="graphic_banner">
          <img class="photo" src="../assets/photos/planets-life.jpg" alt="" />
        </div>
        <div class="text_banner">
          <div class="text_control">
            <h1>First steps</h1>
            <p>
             We have been discovering more and more exoplanets since the launch of Keppler Space Telescope.
In fact, the telescope has been discovering exoplanets than the scientists can handle. As we found
out, there are plethora of other possible worlds where we may one day live.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <div class="fourth_section">
      <img class="heroimg" src="../assets/heroimg/bacteria_hero.svg" alt="">
      <h1>What can we expect?</h1>
      <div class="second_section_text">
      <p>
        There is difference between extraterrestrial intelligence and extra-terrestrial life. The extra-
        terrestrial intelligence is essentially a civilisation that can receive and transmit radio signals.
        The probability of a civilisation can even be calculated.
        
        Extra-terrestrial life is much simpler. We are looking at similar to early plant and ocean life back on
        Earth. Either single-cellular or simple multi-cellular life-forms.
      </p>
      </div>
    </div>

    <section class="second_section">
        <img class="heroimg" src="../assets/heroimg/possibilities_hero.svg" alt="">
        <h1>Is it possible?</h1>
        <div class="second_section_text">
            <p>
              The Universe is rich in ingredients that makes life possible. Hydrogen, Carbon, and Oxygen is
              plenty out there. Surely there must be a life out there, not like us nor humanoid in nature, but life.
              That is why we handpicked the planets. We as PlanX think these will give you a much deserved
              experience.
            </p>
        </div>
    </section>
    </div>
</template>




<style lang="scss" scoped>

a {
  text-decoration: none;
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

.heroimg {
    width: 130px;
    height: 130px;
    margin:20px;
  }



.first_section,.fourth_section {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.first_section {
  background-image: url("../assets/parallax/life-parallax.jpg");
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.second_section {
  width: 100%;
  height:80vh;
  flex-direction:column;
  display: flex;
  justify-content:flex-start;
  align-items:center;
  box-sizing: border-box;
  padding: 0 1em;
  background: rgb(45,34,115);
background: linear-gradient(0deg, rgba(45,34,115,1) 15%, rgba(2,2,57,1) 99%);
  .heroimg1{
  width:150px;
  height:150px;
}

}

.second_section_text{
      width:50%;
      height:30%;
  }

  .heroimg {
      width: 100px;
      height: 100px;
    }


.third_section {
  width: 100%;
  height: 150vh;
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
    h1 {
      
      color: white;
      font-size: 3rem;
      margin: .3em;
    }
  }
  .content_container {
    display: flex;
    width: 100%;
    height: 100%;
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
        height: 30%;
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
  background-image: url("../assets/parallax/drake-parallax.jpg");
  min-height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}

.fifth_section {
  background-image: url("../assets/parallax/trip-final-parallax.jpg");
  min-height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}

.landing_section{
   width: 100%;
   height:100vh;
  flex-direction:column;
  display: flex;
  justify-content:flex-end;
  align-items:center;
  box-sizing: border-box;
  padding: 0 1em;
background: rgb(4,3,59);
background: linear-gradient(0deg, rgba(4,3,59,1) 47%, rgba(45,34,115,1) 92%);
}

.fifth_section_text {
  width: 40%;
  flex-direction:column;
  display: flex;
  justify-content:center;
  align-items:center;
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
  .third_section {
    height:300vh;
    .content_container {
      flex-direction: column;
      display: flex;
    width: 100%;
    height: 90%;
    justify-content:flex-start;
    align-items: center;
      .graphic_banner{
        height:70%;
        width:100%;
          .photo {
        width:100%;
        height:90%;
      }
      
      }
      &:nth-child(2) {
        flex-direction: column;
      }
    
  

   .text_banner {
      display: flex;
      justify-content:flex-start;
      align-items:center;
      flex-direction:column;
      width: 100%;
      height:40%;
    background: #2D2273;
    .text_control{
      width:90%;
      h1 {
        
        font-size: 40px;
      }
      p {
        font-size:18px;
        margin: 8px;
      }
    }
    }
     }
}


.landing_section{
  font-size:18px;
  width:100%;
  display:flex;
  justify-content:center;
  height:120vh;
}

.second_section_text{
  font-size:18px;
  width:90%;
}

.fifth_section_text {
  width: 90%;
  
}

}
  


</style>
