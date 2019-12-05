<template>
  <div class="about">

    <h1>I'm going to:</h1>
    <select v-model="planetName">
    <option disabled value="">Please select one</option>
    <option>Kepler</option>
    <option>Planet X</option>
    <option>Earth</option>
  </select>

   <p>
    <button @click="persist">Save</button>
  </p>

  <span> Selected  {{ planetName }}</span>
  <!-- <span> Selected {{ localStrorage.planetName }}</span> -->
  </div>
</template>

<script>
export default {
   data () { 
     return {
    planetName: ''
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
    }
  }
}
</script>