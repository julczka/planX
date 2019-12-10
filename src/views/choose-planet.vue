<template>
  <div class="about">

<div class="choice-row">
  <div class="choice-container">

    <div class="selector-container">
       <multiselect
      v-model="selectedPlanet"
      :options="planets"
      placeholder="Choose your destination"
      :allow-empty="false"
      :showLabels="false"
      :preselectFirst="true"
      
    >
    </multiselect>

    </div>

<router-link :to="selectedPlanet"
>
     <b-button
       class="purple_hover"
       @click.native="persist"
       >Go to planet</b-button></router-link>
  </div>

    <div class="img-container">
ABC
  </div>
  


  </div>
<span> Selected {{ selectedPlanet }} </span>
</div>


    <!-- <h1>I'm going to:</h1>
    <select v-model="selectedPlanet">
    <option disabled value="">Please select one</option>
    <option>Proxima Centauri B</option>
    <option>Keppler-22b</option>
    <option>Gliese 667CC</option>
  </select>

   <router-link :to="selectedPlanet">
    <button @click="persist">Save</button>
   </router-link>
 



   -->


 




</template>

<script>
import Multiselect from "vue-multiselect";
import blinkingButton from '@/components/blinkingButton.vue'

export default {

components: {
    Multiselect,
    'b-button':blinkingButton,
  },

  

   data () { 
     return {
    
    selectedPlanet: '',
    planets: ["Gliese 667Cc", "Kepler-22b", "Proxima Centauri B"],
    img: require('@/assets/planets/Earth.jpg'),

    }
  },
  mounted() {
    if (localStorage.selectedPlanet) {
      this.selectedPlanet = localStorage.selectedPlanet;
    }

    
  },
  watch: {
    selectedPlanet(newselectedPlanet) {
      localStorage.selectedPlanet = newselectedPlanet;
    }
  },

  methods: {
    persist() {
      localStorage.selectedPlanet = this.selectedPlanet;
      console.log(localStorage.selectedPlanet + ' localstorage Planet');
      console.log(this.selectedPlanet + ' this planet');
      console.log(name);
    },

    
  }
}
</script>

<style lang="scss">

@import "@/styles/_multiselect.scss";

.choice-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.choice-container {
  background: blue;
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  .selector-container {
    width: 50%;
  }
}

.img-container {
  background: red;
  height: 100%;
  width: 60%;
}


</style>