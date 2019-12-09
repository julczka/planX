<template>
  <div class="about">

    <h1>I'm going to:</h1>
    <select v-model="planetName">
    <option disabled value="">Please select one</option>
    <option>Kepler</option>
    <option>Planet_X</option>
    <option>Earth</option>
  </select>

   <p>
    <button @click="persist">Save</button>
  </p>



  <span> Selected  {{ planetName }} {{ selectedPlanet }} </span>



  <!-- <v-select 
    v-model="user.name" 
    as="name::id" 
    :from="users"
    :tagging="tagging"
    :filter="filter"
    query="choose the planet  "
    
     /> -->

  <!-- <span> Selected {{ localStrorage.planetName }}</span> -->
  </div>



</template>

<script>


export default {

components: {
    
  },

   data () { 
     return {
    planetName: '',
    selectedPlanet: '',

  

    
   

    img: require('@/assets/planets/Earth.jpg'),

    }
  },
  mounted() {
    if (localStorage.planetName) {
      this.planetName = localStorage.planetName;
    }

    
  },
  watch: {
    planetName(newPlanetName) {
      localStorage.planetName = newPlanetName;
    }
  },

  methods: {
    persist() {
      localStorage.planetName = this.planetName;
      console.log(localStorage.planetName + ' localstorage Planet');
      console.log(this.planetName + ' this planet');
      console.log(name);
    },

    log (){
      console.log(name);
    },

    choosePlanet (value) {
      this.selectedPlanet = value
    }
  }
}
</script>

<style lang="scss" scoped>

.v-select {
    --c-base: rgba(0,0,0,0); /* background */
    --c-theme: pink; /* tags background; options hover */
    --c-border: red; /* border color of root element and tags */
    --radius: 0.2em; /* border radius of root element and tags */
    --padd: 3px; /* tags spacing */
    --height: 6em; /* minimum height; can grow larger when `:multiple=true` */
    font-size: inherit;
    
}

.image-container {
  background-color: aquamarine;
  height: 50%;
  width: 50%;
}
</style>