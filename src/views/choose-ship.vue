<template>
   <div class="about">

    <h1>I'm flying with:</h1>
    <select v-model="shipName">
    <option disabled value="">Please select one</option>
    <option>Luxury Cruiser</option>
    <option>Speedy Gonzales</option>
    
  </select>

   <p>
    <button @click="persist">Save</button>
  </p>

  <span> Selected  {{ shipName }}</span>
  <!-- <span> Selected {{ localStrorage.planetName }}</span> -->

<multiselect v-model="value" :options="options"></multiselect>

  </div>






</template>

<script>
import Multiselect from 'vue-multiselect'



export default {

  components: { Multiselect },
   data () { 
     return {
    shipName: '',
    value: null,
        options: ['list', 'of', 'options']
    }
  },
  mounted() {
    if (localStorage.shipName) {
      this.shipName = localStorage.shipName;
    }
  },
  watch: {
    shipName(newShipName) {
      localStorage.shipName = newShipName;
    }
  },

  methods: {
    persist() {
      localStorage.shipName = this.shipName;
      console.log(localStorage.planetName + ' localstorage Planet');
      console.log(localStorage.shipName + ' localStorage Ship');
      console.log(this.shipName + 'this Ship');
    }
  }
}
</script> 


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>