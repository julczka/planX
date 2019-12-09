<template>
  <div class="about">
    <h1>I'm going to planet {{ selectedPlanet }}</h1>
    <h1>with the ship called {{ selectedShip }}</h1>
  </div>
</template>

<script>
export default {
  data () { 
     return {
    selectedShip: '',
    selectedPlanet: '',
    }
  },
  mounted() {
    if (localStorage.selectedShip) {
      this.selectedShip = localStorage.selectedShip;
    }
      if (localStorage.selectedPlanet) {
      this.selectedPlanet = localStorage.selectedPlanet;
    }
  },
  // watch: {
  //   selectedShip(newselectedShip) {
  //     localStorage.selectedShip = newselectedShip;
  //   },
  //   selectedPlanet(newselectedPlanet) {
  //     localStorage.selectedPlanet = newselectedPlanet;
  //   }
  // },
}
</script>

   