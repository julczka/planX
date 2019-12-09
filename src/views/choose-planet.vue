<template>
  <div class="about">

    <h1>I'm going to:</h1>
    <select v-model="selectedPlanet">
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