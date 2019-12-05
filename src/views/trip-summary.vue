<template>
  <div class="about">
    <h1>I'm going to planet {{ planetName }}</h1>
    <h1>with the ship called {{ shipName }}</h1>
  </div>
</template>

<script>
export default {
  data () { 
     return {
    shipName: '',
    planetName: '',
    }
  },
  mounted() {
    if (localStorage.shipName) {
      this.shipName = localStorage.shipName;
    }
     if (localStorage.planetName) {
      this.planetName = localStorage.planetName;
    }
  },
  watch: {
    shipName(newShipName) {
      localStorage.shipName = newShipName;
    },
    planetName(newPlanetName) {
      localStorage.planetName = newPlanetName;
    }
  },
}
</script>

   