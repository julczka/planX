<template>
  <div class="about">
    <!-- <h1>I'm flying with:</h1>
    <select v-model="shipName">
    <option disabled value="">Please select one</option>
    <option>Luxury Cruiser</option>
    <option>Speedy Gonzales</option>
    
  </select>

   -->
    <p>
      <router-link :to="selectedShip">
        <button @click="persist">Save</button>
      </router-link>
    </p>

    <span> Selected {{ selectedShip }}</span>
    <!-- <span> Selected {{ localStrorage.planetName }}</span> -->

    <multiselect
      v-model="selectedShip"
      :options="ships"
      placeholder="Choose ship"
      :allow-empty="false"
      :showLabels="false"
      :preselectFirst="true"
      
    >
    </multiselect>

    <img :src="shipImage" class="imagesize" />
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      selectedShip: "",
      //value: null,
      // imgSource:'',
      //img: require(ships.img),
      ships: ["Space Cruiser", "Space Jet"]
    };
  },

  computed: {
    shipImage() {
      // Return nothing for the default empty string
      if (!this.selectedShip) {
        return;
      }

      const fileName = this.selectedShip.toLowerCase();

      // Request the image as a webpack module by using `require`
      return require(`@/assets/spaceships/${fileName}.jpg`);
    }
  },

  mounted() {
    if (localStorage.selectedShip) {
      this.selectedShip = localStorage.selectedShip;
    }
  },
  watch: {
    selectedShip(newselectedShip) {
      localStorage.selectedShip = newselectedShip;
    }
  },

  methods: {
    persist() {
      localStorage.selectedShip = this.selectedShip;
      console.log(localStorage.planetName + " localstorage Planet");
      console.log(localStorage.selectedShip + " localStorage Ship");
      console.log(this.selectedShip + " this Ship");
    }

    //     updateShip() {
    // this.imgSource = this.ship.img
    //     }
    // <style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>
  }
};
</script>

<style lang="scss">
@import "@/styles/_multiselect.scss";

.imagesize {
  height: 300px;
  width: 300px;
}
</style>
