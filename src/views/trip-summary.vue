<template>
  <div class="about">
    <h1>I'm going to planet {{ planetName }}</h1>
    <h1>with the ship called {{ selectedShip }}</h1>
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

   